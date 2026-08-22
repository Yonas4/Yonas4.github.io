(async function () {
  const grid = document.getElementById("proj-grid");
  if (!grid) return;

  const ICON_BASE = grid.dataset.iconBase || "";
  const CASE_BASE = grid.dataset.caseBase !== undefined ? grid.dataset.caseBase : "projects/";

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str).replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
  }

  const SVG_ICONS = {
    star: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    code: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    graduation: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    building: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22.01"/><line x1="15" y1="22" x2="15" y2="22.01"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><line x1="9" y1="18" x2="9" y2="18.01"/><line x1="15" y1="18" x2="15" y2="18.01"/></svg>`,
    mobile: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    play: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-.914c-.2-.53-.3-.984-.3-1.464V4.192c0-.48.1-.934.3-1.464.15-.403.364-.72.61-.914zM15.207 13.414l2.586 2.586-12.75 7.361 10.164-9.947zM18.828 12l-2.207-2.207L15.207 10.586l3.621 1.414zm-3.621-1.414L5.043.639 17.793 8l-2.586 2.586z"/></svg>`,
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
      .proj-x-icon{
        width:52px;height:52px;border-radius:14px;background:#fff;
        display:flex;align-items:center;justify-content:center;
        box-shadow:0 6px 18px rgba(0,0,0,.2);overflow:hidden;flex:0 0 auto;
        position:relative;z-index:1;
      }
      .proj-x-live{
        font-family:'Geist Mono',monospace;font-size:.62rem;font-weight:700;
        color:#fff;background:rgba(255,255,255,.18);
        border:1px solid rgba(255,255,255,.3);
        padding:.25rem .6rem;border-radius:100px;white-space:nowrap;
        position:relative;z-index:1;
        display:inline-flex;align-items:center;gap:.35rem;
      }
      .live-dot-pulse{
        width:6px;height:6px;border-radius:50%;
        background:#22c55e;
        display:inline-block;
        animation:livePulse 2s infinite;
      }
      .proj-x-body{padding:1.3rem 1.4rem 1.5rem;display:flex;flex-direction:column;flex:1;position:relative;min-height:0}
      .proj-x-badge{
        display:inline-flex;align-items:center;gap:.35rem;
        font-family:'Geist Mono',monospace;font-size:.62rem;letter-spacing:.06em;
        text-transform:uppercase;color:var(--muted);margin-bottom:.5rem;
      }
      .proj-x-badge svg{color:var(--accent-main, #1a6b45);flex-shrink:0}
      .proj-x-nm{font-family:'Fraunces',serif;font-size:1.25rem;font-weight:700;line-height:1.15;margin-bottom:.2rem}
      .proj-x-cat{font-size:.78rem;color:var(--muted);margin-bottom:.7rem}
      .proj-x-desc{font-size:.85rem;line-height:1.55;color:var(--text-secondary,#555);margin-bottom:1rem;
        flex:1;min-height:0;max-height:calc(1.55em * 3);
        display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
      .proj-x-tech{display:flex;flex-wrap:wrap;gap:.35rem;margin-bottom:1.1rem}
      .proj-x-tech span{
        font-family:'Geist Mono',monospace;font-size:.65rem;
        border:1px solid var(--border,rgba(0,0,0,.1));
        color:var(--muted);padding:.2rem .55rem;border-radius:100px;
        transition:border-color .2s, color .2s;
      }
      .proj-x-card:hover .proj-x-tech span:nth-child(1){border-color:var(--dot,#1D5CFF);color:var(--dot,#1D5CFF)}
      .proj-x-links{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:auto}

      /* Store Buttons and Case Study Action Buttons */
      .pl{
        display:inline-flex;align-items:center;gap:.35rem;
        font-family:'Geist Mono',monospace;font-size:.7rem;font-weight:600;
        text-decoration:none;padding:.4rem .75rem;border-radius:100px;
        transition:all .2s ease;
      }
      .pl-case{
        background:var(--ink,#111);color:var(--cream,#fff) !important;
      }
      .pl-case:hover{
        background:var(--green,#1a6b45);color:#fff !important;
        transform:translateY(-1px);
      }
      .pl-store{
        background:rgba(0,0,0,.05);color:var(--ink,#111) !important;
        border:1px solid var(--border,rgba(0,0,0,.1));
      }
      [data-theme="dark"] .pl-store{
        background:rgba(255,255,255,.08);color:#fff !important;
        border-color:rgba(255,255,255,.15);
      }
      .pl-store:hover{
        background:var(--green,#1a6b45);color:#fff !important;
        border-color:var(--green,#1a6b45);
        transform:translateY(-1px);
      }

      /* Grid layout: predictable columns so the hero card can share its row */
      #proj-grid{
        display:grid !important;
        grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)) !important;
        gap:1.75rem !important;
        align-items:stretch;
      }
      .proj-feat-hero{
        grid-column:span 2;
      }
      @media (max-width:900px){
        .proj-feat-hero{grid-column:1 / -1}
      }
      @media (max-width:560px){
        #proj-grid{grid-template-columns:1fr !important}
      }
    `;
    document.head.appendChild(style);
  }

  function renderCompactCard(p, i, color) {
    const badgeLabel = p.badge || "Personal Project";
    const badgeIcon = badgeIcons[badgeLabel] || SVG_ICONS.mobile;
    const isLive = !!(p.links && (p.links.app_store || p.links.google_play));

    const iconBox = p.icon
      ? `<img src="${ICON_BASE}${escapeHtml(p.icon)}" loading="lazy" alt="${escapeHtml(p.name || '')}" style="width:100%;height:100%;object-fit:contain;border-radius:12px"/>`
      : `<span style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:700;color:${color}">${escapeHtml((p.name || "?").charAt(0))}</span>`;

    const techTags = (p.tech_tags || []).slice(0, 5).map(t => `<span>${escapeHtml(t.tag || t)}</span>`).join("");

    const links = p.links || {};
    const storeLinks = [
      links.github ? `<a href="${escapeHtml(links.github)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.github} <span>GitHub</span> ${SVG_ICONS.external}</a>` : "",
      links.app_store ? `<a href="${escapeHtml(links.app_store)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.apple} <span>App Store</span> ${SVG_ICONS.external}</a>` : "",
      links.google_play ? `<a href="${escapeHtml(links.google_play)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.play} <span>Google Play</span> ${SVG_ICONS.external}</a>` : "",
    ].join("");

    const href = `${CASE_BASE}project.html?slug=${encodeURIComponent(p.slug)}`;

    return `
    <div class="proj-x-card" data-href="${href}" tabindex="0" role="link" aria-label="View ${escapeHtml(p.name || '')} Case Study" style="--dot:${color};animation-delay:${i * 0.05}s">
      <div class="proj-x-visual" style="background:${color};background-image:radial-gradient(circle,rgba(255,255,255,.18) 1px,transparent 1px)">
        <span class="proj-x-idx">0${i + 1}</span>
        <div class="proj-x-icon">${iconBox}</div>
        <span class="proj-x-live"><span class="live-dot-pulse" style="background:${isLive ? '#22c55e' : '#38bdf8'}"></span>${isLive ? "Live" : "Delivered"}</span>
      </div>
      <div class="proj-x-body">
        <div class="proj-x-badge">${badgeIcon} <span>${escapeHtml(badgeLabel)}</span></div>
        <div class="proj-x-nm">${escapeHtml(p.name || "")}</div>
        <div class="proj-x-cat">${escapeHtml(p.category || "")}</div>
        <p class="proj-x-desc">${escapeHtml(p.short_description || "")}</p>
        ${techTags ? `<div class="proj-x-tech">${techTags}</div>` : ""}
        <div class="proj-x-links">
          <a href="${href}" class="pl pl-case">${SVG_ICONS.caseStudy} <span>Case Study</span></a>
          ${storeLinks}
        </div>
      </div>
    </div>`;
  }

  function renderHeroCard(p, color) {
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
      links.github ? `<a href="${escapeHtml(links.github)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.github} <span>GitHub</span> ${SVG_ICONS.external}</a>` : "",
      links.app_store ? `<a href="${escapeHtml(links.app_store)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.apple} <span>App Store</span> ${SVG_ICONS.external}</a>` : "",
      links.google_play ? `<a href="${escapeHtml(links.google_play)}" target="_blank" rel="noopener" class="pl pl-store" onclick="event.stopPropagation()">${SVG_ICONS.play} <span>Google Play</span> ${SVG_ICONS.external}</a>` : "",
    ].join("");

    const href = `${CASE_BASE}project.html?slug=${encodeURIComponent(p.slug)}`;

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
              <div style="font-family:'Fraunces',serif;font-size:1.5rem;font-weight:700;color:#fff;line-height:1">${isLive ? "Live" : "Delivered"}</div>
              <div style="font-size:.6rem;color:rgba(255,255,255,.7);margin-top:.15rem">${isLive ? "on stores" : "successfully"}</div>
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
          <span style="font-family:'Geist Mono',monospace;font-size:.62rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;display:inline-flex;align-items:center;gap:.35rem">${SVG_ICONS.star} Featured Project</span>
          ${isLive ? `<span class="live-pill"><span class="live-dot-pulse" style="background:#22c55e"></span> Live App</span>` : ""}
        </div>
        <div style="padding:0 1.65rem 1.65rem;flex:1;display:flex;flex-direction:column">
          <div class="proj-nm" style="font-size:1.5rem">${escapeHtml(p.name || "")}</div>
          <div class="proj-cat">${escapeHtml(p.category || "")}</div>
          <p class="proj-desc">${escapeHtml(p.short_description || "")}</p>
          ${techTags ? `<div class="proj-tech">${techTags}</div>` : ""}
          <div class="proj-links">
            <a href="${href}" class="pl pl-case">${SVG_ICONS.caseStudy} <span>Read Case Study</span></a>
            ${storeLinks}
          </div>
        </div>
      </div>
    </div>`;
  }

  try {
    const allProjects = await SiteData.fetchAllProjects();

    if (!allProjects.length) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;font-family:'Geist Mono',monospace;color:var(--muted)">No projects yet — add one from /admin</div>`;
      return;
    }

    const limit = parseInt(grid.dataset.limit || "0", 10);
    const showLimited = limit > 0 && allProjects.length > limit;
    const projects = showLimited ? allProjects.slice(0, limit) : allProjects;

    let html = projects.map((p, i) => {
      const color = p.accent_color || PALETTE[i % PALETTE.length];
      if (p.badge === "Featured Project") {
        return renderHeroCard(p, p.accent_color || "#1D5CFF");
      }
      return renderCompactCard(p, i, color);
    }).join("");

    if (showLimited) {
      const remaining = allProjects.length - limit;
      html += `
        <a href="${CASE_BASE}all-projects.html" class="proj-x-card proj-all-cta" style="text-decoration:none;min-height:280px;display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,rgba(var(--accent-rgb, 26,107,69),.08) 0%,var(--card-bg) 100%);border:2px dashed rgba(var(--accent-rgb, 26,107,69),.35);box-shadow:none;transition:transform .3s,box-shadow .3s,border-color .3s">
          <div style="text-align:center;padding:2.2rem 1.4rem;display:flex;flex-direction:column;align-items:center;gap:.65rem">
            <div style="width:54px;height:54px;border-radius:16px;background:var(--green-light,#e8f5ef);border:1.5px solid rgba(var(--accent-rgb, 26,107,69),.25);display:flex;align-items:center;justify-content:center;color:var(--green,#1a6b45);font-size:1.35rem;font-weight:800;box-shadow:0 6px 18px rgba(0,0,0,.06)">
              ＋${remaining}
            </div>
            <div style="font-family:'Fraunces',serif;font-size:1.35rem;font-weight:700;color:var(--text,#111)">Explore All Projects</div>
            <p style="font-size:.85rem;color:var(--muted);max-width:230px;line-height:1.5;margin:0">Browse the full portfolio archive of <strong>${allProjects.length}+ live apps</strong></p>
            <div style="display:inline-flex;align-items:center;gap:.4rem;font-family:'Geist Mono',monospace;font-size:.76rem;font-weight:700;color:var(--green,#1a6b45);background:var(--green-light,#e8f5ef);padding:.4rem .9rem;border-radius:100px;border:1px solid rgba(var(--accent-rgb, 26,107,69),.2);margin-top:.4rem">
              View Full Archive →
            </div>
          </div>
        </a>`;
    }

    grid.innerHTML = html;
    // Same tick as the insert, so nothing paints before the reveal classes land
    if (window.SiteFX) window.SiteFX.applyReveals(grid);
  } catch (e) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;font-family:'Geist Mono',monospace;color:var(--muted)">Couldn't load projects (${escapeHtml(e.message)})</div>`;
  }
})();
