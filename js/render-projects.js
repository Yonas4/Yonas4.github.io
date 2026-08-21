(async function () {
  const grid = document.getElementById("proj-grid");
  if (!grid) return;

  const ICON_BASE = grid.dataset.iconBase || "";
  const CASE_BASE = grid.dataset.caseBase !== undefined ? grid.dataset.caseBase : "projects/";

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str).replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
  }

  const badgeIcons = {
    "Featured Project": "⭐",
    "Personal Project": "🎮",
    "Graduation": "🎓",
    "Company Project": "🏢",
  };

  const PALETTE = ["#0EA5E9", "#7C3AED", "#059669", "#DB2777", "#D97706", "#0F766E", "#DC2626", "#4F46E5"];

  if (!document.getElementById("proj-x-styles")) {
    const style = document.createElement("style");
    style.id = "proj-x-styles";
    style.textContent = `
      @keyframes projXIn { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }

      .proj-x-card{
        position:relative;
        display:flex;flex-direction:column;
        border-radius:20px;overflow:hidden;
        background:var(--card-bg,#fff);
        border:1px solid var(--border,rgba(0,0,0,.06));
        box-shadow:0 1px 2px rgba(0,0,0,.04);
        transition:transform .25s ease, box-shadow .25s ease;
        height:100%;
        animation:projXIn .5s ease both;
      }
      .proj-x-card:hover{
        transform:translateY(-6px);
        box-shadow:0 20px 40px -10px rgba(0,0,0,.18);
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
      }
      .proj-x-body{padding:1.3rem 1.4rem 1.5rem;display:flex;flex-direction:column;flex:1;position:relative;min-height:0}
      .proj-x-badge{
        display:flex;align-items:center;gap:.35rem;
        font-family:'Geist Mono',monospace;font-size:.6rem;letter-spacing:.06em;
        text-transform:uppercase;color:var(--muted);margin-bottom:.5rem;
      }
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
      .proj-x-links{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:auto}

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
    const badgeIcon = badgeIcons[badgeLabel] || "📱";
    const isLive = !!(p.links && (p.links.app_store || p.links.google_play));

    const iconBox = p.icon
      ? `<img src="${ICON_BASE}${escapeHtml(p.icon)}" loading="lazy" style="width:100%;height:100%;object-fit:contain;border-radius:12px"/>`
      : `<span style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:700;color:${color}">${escapeHtml((p.name || "?").charAt(0))}</span>`;

    const techTags = (p.tech_tags || []).slice(0, 5).map(t => `<span>${escapeHtml(t.tag || t)}</span>`).join("");

    const links = p.links || {};
    const storeLinks = [
      links.github ? `<a href="${escapeHtml(links.github)}" target="_blank" class="pl pl-store">GitHub ↗</a>` : "",
      links.app_store ? `<a href="${escapeHtml(links.app_store)}" target="_blank" class="pl pl-store">App Store ↗</a>` : "",
      links.google_play ? `<a href="${escapeHtml(links.google_play)}" target="_blank" class="pl pl-store">Google Play ↗</a>` : "",
    ].join("");

    const href = `${CASE_BASE}project.html?slug=${encodeURIComponent(p.slug)}`;

    return `
    <div class="proj-x-card" style="--dot:${color};animation-delay:${i * 0.05}s">
      <div class="proj-x-visual" style="background:${color};background-image:radial-gradient(circle,rgba(255,255,255,.18) 1px,transparent 1px)">
        <span class="proj-x-idx">0${i + 1}</span>
        <div class="proj-x-icon">${iconBox}</div>
        <span class="proj-x-live">${isLive ? "🟢 Live" : "✓ Delivered"}</span>
      </div>
      <div class="proj-x-body">
        <div class="proj-x-badge">${badgeIcon} ${escapeHtml(badgeLabel)}</div>
        <div class="proj-x-nm">${escapeHtml(p.name || "")}</div>
        <div class="proj-x-cat">${escapeHtml(p.category || "")}</div>
        <p class="proj-x-desc">${escapeHtml(p.short_description || "")}</p>
        ${techTags ? `<div class="proj-x-tech">${techTags}</div>` : ""}
        <div class="proj-x-links">
          <a href="${href}" class="pl pl-case">📄 Read Case Study</a>
          ${storeLinks}
        </div>
      </div>
    </div>`;
  }

  function renderHeroCard(p, color) {
    const links = p.links || {};
    const isLive = !!(links.app_store || links.google_play);
    const iconBox = p.icon
      ? `<img src="${ICON_BASE}${escapeHtml(p.icon)}" loading="lazy" style="width:100%;height:100%;object-fit:contain;border-radius:18px"/>`
      : `<span style="font-family:'Fraunces',serif;font-size:1.8rem;font-weight:700;color:${color}">${escapeHtml((p.name || "?").charAt(0))}</span>`;

    const topBadges = (p.tech_tags || []).slice(0, 4).map(t => {
      const tag = t.tag || t;
      return `<span style="background:rgba(255,255,255,.15);color:#fff;font-size:.62rem;font-weight:700;padding:.2rem .6rem;border-radius:100px;border:1px solid rgba(255,255,255,.25)">${escapeHtml(tag)}</span>`;
    }).join("");

    const techTags = (p.tech_tags || []).slice(0, 8).map(t => `<span>${escapeHtml(t.tag || t)}</span>`).join("");

    const storeLinks = [
      links.github ? `<a href="${escapeHtml(links.github)}" target="_blank" class="pl pl-store">GitHub ↗</a>` : "",
      links.app_store ? `<a href="${escapeHtml(links.app_store)}" target="_blank" class="pl pl-store">App Store ↗</a>` : "",
      links.google_play ? `<a href="${escapeHtml(links.google_play)}" target="_blank" class="pl pl-store">Google Play ↗</a>` : "",
    ].join("");

    const href = `${CASE_BASE}project.html?slug=${encodeURIComponent(p.slug)}`;

    return `
    <div class="proj-card proj-feat proj-feat-hero">
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
          <span style="font-family:'Geist Mono',monospace;font-size:.62rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase">Featured Project</span>
          ${isLive ? `<span class="live-pill">Live App</span>` : ""}
        </div>
        <div style="padding:0 1.65rem 1.65rem;flex:1;display:flex;flex-direction:column">
          <div class="proj-nm" style="font-size:1.5rem">${escapeHtml(p.name || "")}</div>
          <div class="proj-cat">${escapeHtml(p.category || "")}</div>
          <p class="proj-desc">${escapeHtml(p.short_description || "")}</p>
          ${techTags ? `<div class="proj-tech">${techTags}</div>` : ""}
          <div class="proj-links">
            <a href="${href}" class="pl pl-case">📄 Read Case Study</a>
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
        <a href="${CASE_BASE}all-projects.html" class="proj-x-card" style="align-items:center;justify-content:center;text-decoration:none;min-height:280px;border:2px dashed var(--border,rgba(0,0,0,.12));background:transparent;box-shadow:none">
          <div style="text-align:center;padding:2rem">
            <div style="font-size:1.9rem;margin-bottom:.6rem">＋${remaining}</div>
            <div style="font-family:'Fraunces',serif;font-size:1.15rem;font-weight:700;color:var(--text,#111);margin-bottom:.3rem">See all projects</div>
            <div style="font-size:.8rem;color:var(--muted)">${allProjects.length} shipped and counting</div>
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
