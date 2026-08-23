/**
 * js/render-projects.js
 * Renders the project grid cards dynamically from data/projects/index.json,
 * with complete support for bilingual (English & Arabic) rendering, RTL layout,
 * official store SVGs, and full card click navigation.
 */
(function (window) {
  function escapeHtml(str) {
    return String(str || "").replace(/[&<>"']/g, m => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[m]);
  }

  const SVG_ICONS = {
    star: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    building: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22.01"/><line x1="15" y1="22" x2="15.01" y2="22.01"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15.01" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15.01" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15.01" y2="14.01"/><line x1="9" y1="18" x2="9" y2="18.01"/><line x1="15" y1="18" x2="15.01" y2="18.01"/></svg>`,
    graduation: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    code: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    play: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.41 2.41 0 0 1-.61-.92L3 21.265V2.735l.001-.001c.108-.344.32-.656.608-.92zm11.238 11.24l2.484-2.485-9.87-5.698 7.386 8.183zm0 1.892L7.46 23.13l9.871-5.698-2.484-2.486zm1.334-1.334l3.197-1.846c1.077-.622 1.077-1.632 0-2.254l-3.197-1.846-2.028 2.028a.56.56 0 0 0 0 .79l2.028 2.128z"/></svg>`,
    apple: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.61 1.34-.55.63-1.03 1.65-.9 2.67 1 .08 2.01-.5 2.59-1.16z"/></svg>`,
    github: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    caseStudy: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    external: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`
  };

  const badgeIcons = {
    "Featured Project": SVG_ICONS.star,
    "Personal Project": SVG_ICONS.code,
    "Graduation": SVG_ICONS.graduation,
    "Company Project": SVG_ICONS.building,
  };

  const PALETTE = ["#0EA5E9", "#7C3AED", "#059669", "#DB2777", "#D97706", "#0F766E", "#DC2626", "#4F46E5"];

  if (!document.getElementById("proj-x-styles")) {
    const style = document.createElement("style");
    style.id = "proj-x-styles";
    style.textContent = `
      @keyframes projXIn { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
      @keyframes livePulse {
        0%{box-shadow:0 0 0 0 rgba(34,197,94,.7)}
        70%{box-shadow:0 0 0 6px rgba(34,197,94,0)}
        100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}
      }

      .proj-x-card, .proj-card{
        cursor:pointer;
      }
      .proj-x-card:focus-visible, .proj-card:focus-visible{
        outline:2px solid var(--green,#1a6b45);
        outline-offset:3px;
      }

      .proj-x-card{
        position:relative;
        display:flex;flex-direction:column;
        border-radius:20px;overflow:hidden;
        background:var(--card-bg,#fff);
        border:1px solid var(--border,rgba(0,0,0,.06));
        box-shadow:0 1px 2px rgba(0,0,0,.04);
        transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        height:100%;
        animation:projXIn .5s ease both;
      }
      .proj-x-card:hover{
        transform:translateY(-6px);
        box-shadow:0 20px 40px -10px rgba(0,0,0,.18);
        border-color:rgba(var(--accent-rgb, 26,107,69), .3);
      }
      .proj-x-visual{
        position:relative;
        height:118px;
        display:flex;align-items:center;justify-content:space-between;
        padding:1.1rem 1.3rem;
        background-size:16px 16px;
        overflow:hidden;
      }
      .proj-x-visual::after{
        content:"";position:absolute;inset:0;
        background:linear-gradient(135deg,rgba(255,255,255,.22) 0%,transparent 45%);
        pointer-events:none;
      }
      .proj-x-idx{
        position:absolute;bottom:.5rem;right:.7rem;
        font-family:'Geist Mono',monospace;font-size:2.1rem;font-weight:700;
        color:rgba(255,255,255,.16);line-height:1;user-select:none;
      }
      [dir="rtl"] .proj-x-idx{
        right:auto;left:.7rem;
      }
      .proj-x-icon{
        width:52px;height:52px;border-radius:14px;background:#fff;
        display:flex;align-items:center;justify-content:center;
        box-shadow:0 6px 18px rgba(0,0,0,.18);
        position:relative;z-index:2;
        overflow:hidden;
      }
      .proj-x-icon img{width:100%;height:100%;object-fit:contain;border-radius:14px}
      .proj-x-live{
        display:inline-flex;align-items:center;gap:.4rem;
        font-family:'Geist Mono',monospace;font-size:.65rem;font-weight:700;
        color:#fff;background:rgba(0,0,0,.35);backdrop-filter:blur(6px);
        padding:.25rem .65rem;border-radius:100px;
        position:relative;z-index:2;
        border:1px solid rgba(255,255,255,.2);
      }
      .live-dot-pulse{
        width:6px;height:6px;border-radius:50%;
        display:inline-block;
        animation:livePulse 2s infinite;
      }
      .proj-x-body{
        padding:1.25rem 1.4rem 1.4rem;
        display:flex;flex-direction:column;flex:1;
      }
      .proj-x-badge{
        display:inline-flex;align-items:center;gap:.35rem;
        font-family:'Geist Mono',monospace;font-size:.62rem;font-weight:600;
        letter-spacing:.06em;text-transform:uppercase;
        color:var(--muted,#777);margin-bottom:.45rem;
      }
      .proj-x-nm{
        font-family:'Fraunces',serif;font-size:1.25rem;font-weight:700;
        color:var(--text,#111);margin-bottom:.2rem;
        letter-spacing:-.015em;line-height:1.2;
      }
      .proj-x-cat{
        font-size:.76rem;color:var(--muted,#777);margin-bottom:.75rem;font-weight:500;
      }
      .proj-x-desc{
        font-size:.87rem;color:var(--text-secondary,#555);line-height:1.65;
        margin-bottom:1.1rem;flex:1;
      }
      .proj-x-tech{
        display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:1.15rem;
      }
      .proj-x-tech span{
        font-family:'Geist Mono',monospace;font-size:.64rem;
        padding:.2rem .55rem;background:var(--surface,#f5f5f5);
        border:1px solid var(--border,rgba(0,0,0,.08));border-radius:6px;
        color:var(--muted,#666);
      }
      .proj-x-links{
        display:flex;gap:.5rem;flex-wrap:wrap;margin-top:auto;
      }
      .pl{
        display:inline-flex;align-items:center;gap:.35rem;
        font-size:.73rem;font-weight:600;padding:.4rem .85rem;
        border-radius:100px;text-decoration:none;
        transition:background .2s, color .2s, transform .15s;
      }
      .pl:hover{transform:translateY(-1px)}
      .pl-case{background:var(--green,#1a6b45);color:#fff}
      .pl-case:hover{background:var(--green-mid,#2d9b67)}
      .pl-store{background:var(--ink,#0f0e0b);color:var(--cream,#faf8f3)}
      .pl-store:hover{background:var(--ink2,#2a2926)}
      
      .proj-all-cta:hover{
        border-color:var(--green,#1a6b45) !important;
        transform:translateY(-6px);
        box-shadow:0 18px 36px rgba(var(--accent-rgb, 26,107,69),.15);
      }
    `;
    document.head.appendChild(style);
  }

  function getLocalizedProject(p, isAr) {
    if (!isAr || !window.I18n) return p;
    const arData = window.I18n.getProjectArabic(p.slug);
    if (!arData) return p;
    return {
      ...p,
      name: arData.name || p.name,
      category: arData.category || p.category,
      badge: arData.badge || p.badge,
      short_description: arData.short_description || p.short_description
    };
  }

  function getLocalizedBadge(badge, isAr) {
    if (!isAr || !window.I18n) return badge;
    if (badge === "Featured Project") return window.I18n.t("proj.badge_featured");
    if (badge === "Company Project") return window.I18n.t("proj.badge_company");
    if (badge === "Freelance Project" || badge === "Freelance") return window.I18n.t("proj.badge_freelance");
    if (badge === "Graduation Project" || badge === "Graduation") return window.I18n.t("proj.badge_grad");
    return badge;
  }

  function renderCompactCard(rawProject, i, color, ICON_BASE, CASE_BASE, isAr) {
    const p = getLocalizedProject(rawProject, isAr);
    const links = p.links || {};
    const isLive = !!(links.app_store || links.google_play);

    const badgeIcon = badgeIcons[rawProject.badge] || SVG_ICONS.code;
    const badgeLabel = getLocalizedBadge(rawProject.badge || "Project", isAr);

    const iconBox = p.icon
      ? `<img src="${ICON_BASE}${escapeHtml(p.icon)}" loading="lazy" alt="${escapeHtml(p.name || '')}"/>`
      : `<span style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:700;color:${color}">${escapeHtml((p.name || "?").charAt(0))}</span>`;

    const techTags = (p.tech_tags || []).slice(0, 5).map(t => {
      const tag = t.tag || t;
      return `<span>${escapeHtml(tag)}</span>`;
    }).join("");

    const storeLinks = [
      links.github ? `<a href="${escapeHtml(links.github)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.github} <span>${window.I18n ? window.I18n.t("proj.store_github") : "GitHub"}</span> ${SVG_ICONS.external}</a>` : "",
      links.app_store ? `<a href="${escapeHtml(links.app_store)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.apple} <span>${window.I18n ? window.I18n.t("proj.store_apple") : "App Store"}</span> ${SVG_ICONS.external}</a>` : "",
      links.google_play ? `<a href="${escapeHtml(links.google_play)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.play} <span>${window.I18n ? window.I18n.t("proj.store_play") : "Google Play"}</span> ${SVG_ICONS.external}</a>` : "",
    ].join("");

    const href = `${CASE_BASE}project.html?slug=${encodeURIComponent(p.slug)}`;
    const liveText = isLive ? (window.I18n ? window.I18n.t("proj.live_stores") : "Live") : (window.I18n ? window.I18n.t("proj.delivered") : "Delivered");
    const caseStudyText = window.I18n ? window.I18n.t("proj.case_study") : "Case Study";

    return `
    <div class="proj-x-card" data-href="${href}" tabindex="0" role="link" aria-label="View ${escapeHtml(p.name || '')} Case Study">
      <div class="proj-x-visual" style="background:${color};background-image:radial-gradient(circle,rgba(255,255,255,.18) 1px,transparent 1px)">
        <span class="proj-x-idx">0${i + 1}</span>
        <div class="proj-x-icon">${iconBox}</div>
        <span class="proj-x-live"><span class="live-dot-pulse" style="background:${isLive ? '#22c55e' : '#38bdf8'}"></span>${liveText}</span>
      </div>
      <div class="proj-x-body">
        <div class="proj-x-badge">${badgeIcon} <span>${escapeHtml(badgeLabel)}</span></div>
        <div class="proj-x-nm">${escapeHtml(p.name || "")}</div>
        <div class="proj-x-cat">${escapeHtml(p.category || "")}</div>
        <p class="proj-x-desc">${escapeHtml(p.short_description || "")}</p>
        ${techTags ? `<div class="proj-x-tech">${techTags}</div>` : ""}
        <div class="proj-x-links">
          <a href="${href}" class="pl pl-case">${SVG_ICONS.caseStudy} <span>${caseStudyText}</span></a>
          ${storeLinks}
        </div>
      </div>
    </div>`;
  }

  function renderHeroCard(rawProject, color, ICON_BASE, CASE_BASE, isAr) {
    const p = getLocalizedProject(rawProject, isAr);
    const links = p.links || {};
    const isLive = !!(links.app_store || links.google_play);
    const iconBox = p.icon
      ? `<img src="${ICON_BASE}${escapeHtml(p.icon)}" loading="lazy" alt="${escapeHtml(p.name || '')}" style="width:100%;height:100%;object-fit:contain;border-radius:18px"/>`
      : `<span style="font-family:'Fraunces',serif;font-size:1.8rem;font-weight:700;color:${color}">${escapeHtml((p.name || "?").charAt(0))}</span>`;

    const topBadges = (p.tech_tags || []).slice(0, 4).map(t => {
      const tag = t.tag || t;
      return `<span style="background:rgba(255,255,255,.15);color:#fff;font-size:.62rem;font-weight:700;padding:.2rem .6rem;border-radius:100px;border:1px solid rgba(255,255,255,.25)">${escapeHtml(tag)}</span>`;
    }).join("");

    const techTags = (p.tech_tags || []).slice(0, 8).map(t => `<span>${escapeHtml(t.tag || t)}</span>`).join("");

    const storeLinks = [
      links.github ? `<a href="${escapeHtml(links.github)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.github} <span>${window.I18n ? window.I18n.t("proj.store_github") : "GitHub"}</span> ${SVG_ICONS.external}</a>` : "",
      links.app_store ? `<a href="${escapeHtml(links.app_store)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.apple} <span>${window.I18n ? window.I18n.t("proj.store_apple") : "App Store"}</span> ${SVG_ICONS.external}</a>` : "",
      links.google_play ? `<a href="${escapeHtml(links.google_play)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.play} <span>${window.I18n ? window.I18n.t("proj.store_play") : "Google Play"}</span> ${SVG_ICONS.external}</a>` : "",
    ].join("");

    const href = `${CASE_BASE}project.html?slug=${encodeURIComponent(p.slug)}`;
    const liveTitle = isLive ? (window.I18n ? window.I18n.t("proj.live_stores") : "Live") : (window.I18n ? window.I18n.t("proj.delivered") : "Delivered");
    const liveSub = isLive ? (window.I18n ? window.I18n.t("proj.on_stores") : "on stores") : (window.I18n ? window.I18n.t("proj.successfully") : "successfully");
    const readCaseText = window.I18n ? window.I18n.t("proj.read_case_study") : "Read Case Study";
    const featuredLabel = window.I18n ? window.I18n.t("proj.badge_featured") : "Featured Project";

    return `
    <div class="proj-card proj-feat proj-feat-hero" data-href="${href}" tabindex="0" role="link" aria-label="View ${escapeHtml(p.name || '')} Case Study">
      <div class="feat-visual" style="background:${color};background-image:radial-gradient(circle,rgba(255,255,255,.15) 1px,transparent 1px);background-size:20px 20px">
        <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;padding:2rem">
          <div style="width:80px;height:80px;background:#ffffff;border-radius:20px;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 32px rgba(0,0,0,.25);overflow:hidden">
            ${iconBox}
          </div>
          ${topBadges ? `<div style="display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center">${topBadges}</div>` : ""}
          <div style="display:flex;gap:1.5rem;margin-top:.5rem">
            <div style="text-align:center">
              <div style="font-family:'Fraunces',serif;font-size:1.5rem;font-weight:700;color:#fff;line-height:1">${liveTitle}</div>
              <div style="font-size:.6rem;color:rgba(255,255,255,.7);margin-top:.15rem">${liveSub}</div>
            </div>
            <div style="width:1px;background:rgba(255,255,255,.25)"></div>
            <div style="text-align:center">
              <div style="font-family:'Fraunces',serif;font-size:1.5rem;font-weight:700;color:#fff;line-height:1">iOS+</div>
              <div style="font-size:.6rem;color:rgba(255,255,255,.7);margin-top:.15rem">Android</div>
            </div>
          </div>
        </div>
      </div>
      <div class="proj-body">
        <div class="proj-header" style="padding:1.65rem 1.65rem 0;display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:.8rem">
          <span style="font-family:'Geist Mono',monospace;font-size:.62rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;display:inline-flex;align-items:center;gap:.35rem">${SVG_ICONS.star} ${escapeHtml(featuredLabel)}</span>
          ${isLive ? `<span class="live-pill"><span class="live-dot-pulse" style="background:#22c55e"></span> ${liveTitle}</span>` : ""}
        </div>
        <div style="padding:0 1.65rem 1.65rem;flex:1;display:flex;flex-direction:column">
          <div class="proj-nm" style="font-size:1.5rem">${escapeHtml(p.name || "")}</div>
          <div class="proj-cat">${escapeHtml(p.category || "")}</div>
          <p class="proj-desc">${escapeHtml(p.short_description || "")}</p>
          ${techTags ? `<div class="proj-tech">${techTags}</div>` : ""}
          <div class="proj-links">
            <a href="${href}" class="pl pl-case">${SVG_ICONS.caseStudy} <span>${readCaseText}</span></a>
            ${storeLinks}
          </div>
        </div>
      </div>
    </div>`;
  }

  async function renderProjects() {
    const grid = document.getElementById("proj-grid");
    if (!grid) return;

    const ICON_BASE = grid.dataset.iconBase || "";
    const CASE_BASE = grid.dataset.caseBase !== undefined ? grid.dataset.caseBase : "projects/";
    const isAr = window.I18n ? window.I18n.getCurrentLang() === "ar" : false;

    try {
      const allProjects = await SiteData.fetchAllProjects();

      if (!allProjects.length) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;font-family:'Geist Mono',monospace;color:var(--muted)">No projects yet</div>`;
        return;
      }

      const limit = parseInt(grid.dataset.limit || "0", 10);
      const showLimited = limit > 0 && allProjects.length > limit;
      const projects = showLimited ? allProjects.slice(0, limit) : allProjects;

      let html = projects.map((p, i) => {
        const color = p.accent_color || PALETTE[i % PALETTE.length];
        if (p.badge === "Featured Project") {
          return renderHeroCard(p, p.accent_color || "#1D5CFF", ICON_BASE, CASE_BASE, isAr);
        }
        return renderCompactCard(p, i, color, ICON_BASE, CASE_BASE, isAr);
      }).join("");

      if (showLimited) {
        const remaining = allProjects.length - limit;
        const ctaTitle = window.I18n ? window.I18n.t("proj.cta_title") : "Explore All Projects";
        const ctaDesc = window.I18n ? window.I18n.t("proj.cta_desc_html") : `Browse the full portfolio archive of <strong>${allProjects.length}+ live apps</strong>`;
        const ctaBtn = window.I18n ? window.I18n.t("proj.cta_btn") : "View Full Archive →";

        html += `
          <a href="${CASE_BASE}all-projects.html" class="proj-x-card proj-all-cta" style="text-decoration:none;min-height:280px;display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,rgba(var(--accent-rgb, 26,107,69),.08) 0%,var(--card-bg) 100%);border:2px dashed rgba(var(--accent-rgb, 26,107,69),.35);box-shadow:none;transition:transform .3s,box-shadow .3s,border-color .3s">
            <div style="text-align:center;padding:2.2rem 1.4rem;display:flex;flex-direction:column;align-items:center;gap:.65rem">
              <div style="width:54px;height:54px;border-radius:16px;background:var(--green-light,#e8f5ef);border:1.5px solid rgba(var(--accent-rgb, 26,107,69),.25);display:flex;align-items:center;justify-content:center;color:var(--green,#1a6b45);font-size:1.35rem;font-weight:800;box-shadow:0 6px 18px rgba(0,0,0,.06)">
                ＋${remaining}
              </div>
              <div style="font-family:'Fraunces',serif;font-size:1.35rem;font-weight:700;color:var(--text,#111)">${ctaTitle}</div>
              <p style="font-size:.85rem;color:var(--muted);max-width:230px;line-height:1.5;margin:0">${ctaDesc}</p>
              <div style="display:inline-flex;align-items:center;gap:.4rem;font-family:'Geist Mono',monospace;font-size:.76rem;font-weight:700;color:var(--green,#1a6b45);background:var(--green-light,#e8f5ef);padding:.4rem .9rem;border-radius:100px;border:1px solid rgba(var(--accent-rgb, 26,107,69),.2);margin-top:.4rem">
                ${ctaBtn}
              </div>
            </div>
          </a>`;
      }

      grid.innerHTML = html;
      if (window.SiteFX) window.SiteFX.applyReveals(grid);
    } catch (e) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;font-family:'Geist Mono',monospace;color:var(--muted)">Couldn't load projects (${escapeHtml(e.message)})</div>`;
    }
  }

  window.renderProjects = renderProjects;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderProjects);
  } else {
    renderProjects();
  }
})(window);
