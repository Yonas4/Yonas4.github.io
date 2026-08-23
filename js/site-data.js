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
  // (/index.html and /projects/project.html, /en/projects/project.html)
  function getSiteRoot() {
    if (typeof document !== "undefined") {
      if (document.currentScript && document.currentScript.src) {
        return document.currentScript.src.replace(/js\/site-data\.js(?:\?.*)?$/, "");
      }
      const scripts = document.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].src || "";
        if (src.includes("js/site-data.js")) {
          return src.replace(/js\/site-data\.js(?:\?.*)?$/, "");
        }
      }
    }
    return "";
  }

  const SITE_ROOT = getSiteRoot();
  const DATA_BASE = SITE_ROOT + "data/projects/";
  const MANIFEST_URL = DATA_BASE + "index.json";

  // Fallback only: used if the manifest is missing
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
  async function fetchProject(slug, customBase) {
    const base = customBase ? (customBase + "data/projects/") : DATA_BASE;
    const res = await fetch(`${base}${encodeURIComponent(slug)}.md`);
    if (!res.ok) throw new Error("Project not found: " + slug + " (HTTP " + res.status + ")");
    const { data, body } = parseFrontmatter(await res.text());
    return { slug, ...data, body };
  }

  /**
   * Card-level records for every project, in display order — ONE request.
   */
  async function fetchAllProjects(customBase) {
    const manifestUrl = customBase ? (customBase + "data/projects/index.json") : MANIFEST_URL;
    const res = await fetch(manifestUrl);
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
