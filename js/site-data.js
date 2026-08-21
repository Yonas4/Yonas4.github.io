/**
 * site-data.js
 * Loads project data written by the Decap CMS dashboard (data/projects/*.md).
 *
 * Everything is fetched SAME-ORIGIN from GitHub Pages. An earlier version read
 * from api.github.com + raw.githubusercontent.com, which meant:
 *   - the unauthenticated API cap of 60 requests/hour, per visitor IP, shared
 *     across everyone behind a corporate NAT;
 *   - 1 API listing + one raw fetch per project (9 requests) before the grid
 *     painted anything, all cross-origin;
 *   - cache:"no-store", so every navigation re-downloaded all of it.
 *
 * Now: the grids read one generated manifest (data/projects/index.json) and a
 * case study reads its own .md. No API, no rate limit, browser-cacheable.
 *
 * NOTE: serving .md raw requires the repo-root .nojekyll file. Without it, Pages
 * runs Jekyll, which swallows any .md that has frontmatter and 404s the raw URL.
 *
 * Depends on js/js-yaml.min.js being loaded BEFORE this script.
 */
(function (window) {
  // Resolve paths from this script's own URL so it works at any page depth
  // (/index.html and /projects/project.html) and under any mount point.
  const SCRIPT_URL = (document.currentScript && document.currentScript.src) || "";
  const SITE_ROOT = SCRIPT_URL ? SCRIPT_URL.replace(/js\/site-data\.js(?:\?.*)?$/, "") : "/";
  const DATA_BASE = SITE_ROOT + "data/projects/";
  const MANIFEST_URL = DATA_BASE + "index.json";

  // Fallback only: used if the manifest is missing (e.g. the generator workflow
  // has not run yet). Costs a rate-limited API call, so it is never the happy path.
  const REPO = "Yonas4/Yonas4.github.io";
  const BRANCH = "main";
  const LIST_URL = `https://api.github.com/repos/${REPO}/contents/data/projects?ref=${BRANCH}`;

  function parseFrontmatter(raw) {
    const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
    if (!match) return { data: {}, body: raw };
    if (!window.jsyaml) {
      throw new Error("js-yaml not loaded — make sure js/js-yaml.min.js is included before site-data.js");
    }
    const data = window.jsyaml.load(match[1]) || {};
    return { data, body: (match[2] || "").trim() };
  }

  /** Full record for one project, straight from its markdown file. */
  async function fetchProject(slug) {
    const res = await fetch(`${DATA_BASE}${encodeURIComponent(slug)}.md`);
    if (!res.ok) throw new Error("Project not found: " + slug + " (HTTP " + res.status + ")");
    const { data, body } = parseFrontmatter(await res.text());
    return { slug, ...data, body };
  }

  /**
   * Card-level records for every project, in display order — ONE request.
   * The manifest carries only the fields the card renderers use; call
   * fetchProject(slug) for the full case study record.
   */
  async function fetchAllProjects() {
    const res = await fetch(MANIFEST_URL);
    if (res.ok) {
      const manifest = await res.json();
      const projects = Array.isArray(manifest) ? manifest : manifest.projects || [];
      if (projects.length) {
        return projects.slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      }
    }
    return fetchAllProjectsViaApi();
  }

  /** Legacy path — only reached when index.json is absent or empty. */
  async function fetchAllProjectsViaApi() {
    const res = await fetch(LIST_URL);
    if (res.status === 404) return [];
    if (!res.ok) throw new Error("Could not list data/projects (HTTP " + res.status + ")");
    const files = (await res.json()).filter((f) => f.name.endsWith(".md"));
    const projects = await Promise.all(
      files.map(async (f) => {
        const slug = f.name.replace(/\.md$/, "");
        return fetchProject(slug);
      })
    );
    return projects.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }

  window.SiteData = { fetchAllProjects, fetchProject };
})(window);
