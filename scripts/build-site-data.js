#!/usr/bin/env node
/**
 * Regenerates the two files that must stay in sync with data/projects/*.md:
 *
 *   data/projects/index.json  — card-level data for every project, so the homepage
 *                               and all-projects grids render from ONE request
 *                               instead of a GitHub API listing + one fetch per file.
 *   sitemap.xml               — homepage, all-projects, and one URL per case study.
 *
 * Decap CMS writes the .md files but knows nothing about these two, so
 * .github/workflows/build-site-data.yml reruns this on every push that touches
 * data/projects/. Run it by hand after editing a .md locally:
 *
 *     node scripts/build-site-data.js
 *
 * Exits non-zero on malformed frontmatter so a bad CMS publish fails loudly in CI
 * rather than silently dropping a project from the grid.
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data", "projects");
const ORIGIN = "https://yonas4.github.io";

const jsyaml = require(path.join(ROOT, "js", "js-yaml.min.js"));

/** Fields the project-card renderers actually read (js/render-projects.js). */
const CARD_FIELDS = [
  "name", "category", "badge", "short_description",
  "icon", "order", "accent_color", "tech_tags", "links",
];

function parseFrontmatter(raw, file) {
  const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!m) throw new Error(`${file}: no YAML frontmatter`);
  const data = jsyaml.load(m[1]);
  if (!data || typeof data !== "object") throw new Error(`${file}: frontmatter is not a mapping`);
  return data;
}

/** Last commit date for a file, for <lastmod>. Falls back to today outside git. */
function lastModified(file) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
      cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (out) return out.slice(0, 10);
  } catch (_) { /* not a git checkout, or file never committed */ }
  return new Date().toISOString().slice(0, 10);
}

const xmlEscape = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
           .replace(/"/g, "&quot;").replace(/'/g, "&apos;");

function main() {
  if (!fs.existsSync(DATA_DIR)) {
    console.error("No data/projects directory — nothing to build.");
    process.exit(1);
  }

  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".md")).sort();
  if (!files.length) {
    console.error("No .md files in data/projects — refusing to write an empty manifest.");
    process.exit(1);
  }

  const projects = [];
  const problems = [];

  for (const file of files) {
    const full = path.join(DATA_DIR, file);
    const slug = file.replace(/\.md$/, "");
    let data;
    try {
      data = parseFrontmatter(fs.readFileSync(full, "utf8"), file);
    } catch (e) {
      problems.push(e.message);
      continue;
    }
    if (!data.name) problems.push(`${file}: missing required field "name"`);

    const card = { slug };
    for (const k of CARD_FIELDS) if (data[k] !== undefined) card[k] = data[k];
    card.lastmod = lastModified(path.join("data", "projects", file));
    projects.push(card);
  }

  if (problems.length) {
    console.error("Refusing to write — fix these first:");
    problems.forEach((p) => console.error("  • " + p));
    process.exit(1);
  }

  projects.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  // ---- data/projects/index.json ----
  const manifest = {
    generated: new Date().toISOString(),
    count: projects.length,
    projects,
  };
  fs.writeFileSync(path.join(DATA_DIR, "index.json"), JSON.stringify(manifest, null, 2) + "\n");

  // ---- sitemap.xml ----
  const newest = projects.map((p) => p.lastmod).sort().pop();
  const urls = [
    { loc: `${ORIGIN}/`, lastmod: newest, changefreq: "monthly", priority: "1.0" },
    { loc: `${ORIGIN}/projects/all-projects.html`, lastmod: newest, changefreq: "monthly", priority: "0.8" },
    ...projects.map((p) => ({
      loc: `${ORIGIN}/projects/project.html?slug=${encodeURIComponent(p.slug)}`,
      lastmod: p.lastmod,
      changefreq: "yearly",
      priority: "0.7",
    })),
  ];

  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) =>
      "  <url>\n" +
      `    <loc>${xmlEscape(u.loc)}</loc>\n` +
      `    <lastmod>${u.lastmod}</lastmod>\n` +
      `    <changefreq>${u.changefreq}</changefreq>\n` +
      `    <priority>${u.priority}</priority>\n` +
      "  </url>\n"
    ).join("") +
    "</urlset>\n";

  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap);

  console.log(`✓ data/projects/index.json  (${projects.length} projects)`);
  console.log(`✓ sitemap.xml               (${urls.length} URLs)`);
  projects.forEach((p) => console.log(`    ${String(p.order ?? 0).padStart(2)}  ${p.slug.padEnd(14)} ${p.lastmod}`));
}

main();
