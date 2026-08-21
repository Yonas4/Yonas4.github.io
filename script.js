// Sticky nav
const nav = document.getElementById('nav');
if(nav) window.addEventListener('scroll', function() {
  nav.classList.toggle('stuck', window.scrollY > 20);
}, {passive: true});

// Active nav tab on scroll (only runs on pages that have these sections)
const sections = ['hero-section','about','skills','experience','projects','certifications','contact'];
const navLinks = document.querySelectorAll('.nav-links a[data-section]');

function setActive(id) {
  navLinks.forEach(function(a) {
    a.classList.toggle('active', a.dataset.section === id);
  });
}

if(document.getElementById('hero-section')){
  window.addEventListener('scroll', function() {
    let current = 'hero-section';
    sections.forEach(function(id) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    setActive(current);
  }, {passive: true});
  setActive('hero-section');
}

// Settings panel (dark mode + accent color) — shared across every page
(function(){
  var fab = document.getElementById('settings-trigger');
  var panel = document.getElementById('settings-panel');
  var darkToggle = document.getElementById('sp-dark-toggle');
  var navToggle = document.getElementById('theme-toggle');

  var COLORS = {
    green:  {main:'#1a6b45', light:'#e8f5ef', mid:'#2d9b67', rgb:'26,107,69'},
    blue:   {main:'#1d4ed8', light:'#eff6ff', mid:'#3b82f6', rgb:'29,78,216'},
    purple: {main:'#7c3aed', light:'#f5f3ff', mid:'#8b5cf6', rgb:'124,58,237'},
    rose:   {main:'#e11d48', light:'#fff1f2', mid:'#f43f5e', rgb:'225,29,72'},
    cyan:   {main:'#0891b2', light:'#ecfeff', mid:'#06b6d4', rgb:'8,145,178'},
    amber:  {main:'#d97706', light:'#fef3c7', mid:'#f59e0b', rgb:'217,119,6'},
  };

  function applyColor(name){
    var c = COLORS[name]; if(!c) return;
    var r = document.documentElement;
    r.style.setProperty('--green', c.main);
    r.style.setProperty('--green-light', c.light);
    r.style.setProperty('--green-mid', c.mid);
    r.style.setProperty('--accent-main', c.main);
    r.style.setProperty('--accent-light', c.light);
    r.style.setProperty('--accent-rgb', c.rgb);
    localStorage.setItem('accent', name);
    document.querySelectorAll('.sp-color').forEach(function(el){
      el.classList.toggle('active', el.dataset.color === name);
    });
  }
  function isDark(){ return document.documentElement.getAttribute('data-theme') === 'dark'; }
  function syncDark(d){ if(darkToggle) darkToggle.classList.toggle('on', d); }

  var savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'dark') document.documentElement.setAttribute('data-theme','dark');
  else document.documentElement.removeAttribute('data-theme');

  syncDark(isDark());
  applyColor(localStorage.getItem('accent') || 'green');

  if(fab && panel){
    fab.addEventListener('click', function(e){ e.stopPropagation(); panel.classList.toggle('open'); });
    document.addEventListener('click', function(e){ if(!panel.contains(e.target) && e.target!==fab) panel.classList.remove('open'); });
  }
  if(darkToggle){
    darkToggle.addEventListener('click', function(){
      var next = !isDark();
      if(next) document.documentElement.setAttribute('data-theme','dark');
      else document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', next?'dark':'light');
      syncDark(next);
    });
  }
  if(navToggle){ navToggle.addEventListener('click', function(){ syncDark(isDark()); }); }
  document.querySelectorAll('.sp-color').forEach(function(el){
    el.addEventListener('click', function(){ applyColor(el.dataset.color); });
  });
})();

// Back to top
(function(){
  var btn = document.getElementById('btt');
  var wa = document.getElementById('wa-fab');
  if(!btn) return;
  window.addEventListener('scroll', function(){
    var show = window.scrollY > 400;
    btn.classList.toggle('show', show);
    if(wa) wa.classList.toggle('show', show);
  }, {passive:true});
  btn.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
})();

// Theme toggle (nav button - syncs with settings panel)
(function(){
  var btn = document.getElementById('theme-toggle');
  if(btn){
    btn.addEventListener('click', function(){
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if(isDark) document.documentElement.removeAttribute('data-theme');
      else document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', !isDark ? 'dark' : 'light');
      var spToggle = document.getElementById('sp-dark-toggle');
      if(spToggle) spToggle.classList.toggle('on', !isDark);
    });
  }
})();

// Smooth cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
if(cursor && ring) {
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx+'px';
    cursor.style.top = my+'px';
  });
  function animRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx+'px';
    ring.style.top = ry+'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  // Delegated so it also covers cards rendered later from data/projects/*.md
  var HOVER_TARGETS = 'a,button,.skill-card,.proj-card,.proj-x-card,.cert-card,.cs-cap';
  function isTarget(node) {
    return !!(node && node.closest && node.closest(HOVER_TARGETS));
  }
  function setExpand(on) {
    cursor.classList.toggle('expand', on);
    ring.classList.toggle('expand', on);
  }
  document.addEventListener('mouseover', function(e) {
    if (isTarget(e.target)) setExpand(true);
  });
  document.addEventListener('mouseout', function(e) {
    if (!isTarget(e.relatedTarget)) setExpand(false);
  });
}

// Scroll animations
// Exposed as SiteFX.applyReveals(root) so dynamically rendered content (project
// cards, case-study sections) can be wired up the moment it lands in the DOM.
(function(){
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  },{threshold:0.12});
  var obsCt = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); obsCt.unobserve(e.target); } });
  },{threshold:0.01});

  // [selector, reveal class, per-item stagger in seconds, extra class]
  var GROUPS = [
    ['.skill-card',                   'reveal',       0.07],
    ['.proj-card',                    'reveal-scale', 0.08],
    ['.cert-card',                    'reveal',       0.07],
    ['.exp-row',                      'reveal',       0.1 ],
    ['.sec-tag,.sec-h',               'reveal',       0   ],
    ['.about-in > div',               'reveal',       0.12],
    ['.ct-h,.ct-sub,.ct-btns,.ct-info','reveal',      0.1 , 'ct-reveal'],
    ['.cs-cap',                       'reveal',       0.06],
    ['.cs-challenge',                 'reveal',       0.08],
  ];

  function applyReveals(root){
    var scope = root || document;
    GROUPS.forEach(function(g){
      var sel = g[0], cls = g[1], stagger = g[2], extra = g[3];
      scope.querySelectorAll(sel).forEach(function(el,i){
        if(el.dataset.fx) return; // already wired up by an earlier pass
        el.dataset.fx = '1';
        el.classList.add(cls);
        if(extra) el.classList.add(extra);
        if(stagger) el.style.transitionDelay = (i*stagger)+'s';
        if(el.classList.contains('ct-reveal')) obsCt.observe(el);
        else obs.observe(el);
      });
    });
  }

  window.SiteFX = { applyReveals: applyReveals };
  applyReveals(document);
})();

// Mobile hamburger
(function(){
  var btn = document.getElementById('nav-hamburger');
  var menu = document.getElementById('mobile-menu');
  if(!btn || !menu) return;
  btn.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      menu.classList.remove('open');
      btn.classList.remove('open');
    });
  });
})();

// Email obfuscation (works on any page containing these ids)
(function(){
  var u='yunes.alkhaledi';
  var d='gmail.com';
  var e=u+'@'+d;
  var m='mailto:'+e;
  function openMail(ev){ ev.preventDefault(); window.location.href=m; }
  var btn=document.getElementById('em-link-btn');
  if(btn){ btn.href=m; btn.addEventListener('click', openMail); }
  var ct=document.getElementById('em-link-ct');
  if(ct){ ct.href=m; ct.addEventListener('click', openMail); }
  var ft=document.getElementById('em-link-footer');
  if(ft){ ft.href=m; ft.addEventListener('click', openMail); }
  var disp=document.getElementById('em-display-ct');
  if(disp){ disp.textContent=e; }
  var yr=document.getElementById('copy-year');
  if(yr){ yr.textContent=new Date().getFullYear(); }
})();
