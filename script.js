// ---------------------------
// Utility Functions
// ---------------------------
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ---------------------------
// Stats: JSON + Render
// ---------------------------
const statsFallback = [
  { key: "publications", value: "50+", label: "Publications", featured: true },
  { key: "citations", value: "1200+", label: "Citations" },
  { key: "years_experience", value: "15+", label: "Years Experience" },
  { key: "grants", value: "8", label: "Research Grants" }
];

function getStatsFromConfig(cfg) {
  const s = cfg?.stats;
  if (!s) return statsFallback;

  return [
    { key: "publications", value: s.publications ?? statsFallback[0].value, label: "Publications", featured: true },
    { key: "citations", value: s.citations ?? statsFallback[1].value, label: "Citations" },
    { key: "years_experience", value: s.years_experience ?? statsFallback[2].value, label: "Years Experience" },
    { key: "grants", value: s.grants ?? statsFallback[3].value, label: "Research Grants" }
  ];
}

function renderStats(statsList) {
  const el = document.getElementById("stats-bar");
  if (!el) return;

  el.innerHTML = (statsList || []).map(s => `
    <div class="glass-card rounded-xl p-6 text-center ${s.featured ? "glow-accent" : ""}">
      <div class="text-3xl font-heading font-bold text-emerald-300">${escapeHtml(s.value)}</div>
      <div class="text-emerald-100/60 text-sm mt-1">${escapeHtml(s.label)}</div>
    </div>
  `).join("");
}


// ---------------------------
// Research Areas: JSON + Render
// ---------------------------
const researchAreasData = [
  {
    title: "Sustainable Synthesis",
    description: "Developing eco-friendly synthetic methodologies that minimize waste, reduce energy consumption, and utilize renewable resources.",
    featured: true,
    icon: `
      <svg class="w-8 h-8 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>`
  },
  {
    title: "Catalysis Innovation",
    description: "Designing novel catalysts from earth-abundant materials to enable efficient, selective, and environmentally benign transformations.",
    icon: `
      <svg class="w-8 h-8 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>`
  },
  {
    title: "Renewable Feedstocks",
    description: "Converting biomass and waste materials into valuable chemicals and fuels through sustainable processing technologies.",
    icon: `
      <svg class="w-8 h-8 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
  },
  {
    title: "Solar Chemistry",
    description: "Harnessing solar energy for photocatalytic reactions and developing sustainable energy conversion systems.",
    icon: `
      <svg class="w-8 h-8 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`
  },
  {
    title: "Nanomaterials",
    description: "Green synthesis of nanoparticles and nanomaterials for applications in catalysis, sensing, and environmental remediation.",
    icon: `
      <svg class="w-8 h-8 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>`
  },
  {
    title: "Circular Chemistry",
    description: "Designing chemical processes for recyclability and developing strategies for waste valorization and resource recovery.",
    icon: `
      <svg class="w-8 h-8 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>`
  }
];

function renderResearchAreas() {
  const el = document.getElementById("research-areas");
  if (!el) return;

  el.innerHTML = researchAreasData.map(a => `
    <div class="research-area glass-card rounded-2xl p-6 ${a.featured ? "glow-accent" : ""}">
      <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 flex items-center justify-center mb-4">
        ${a.icon}
      </div>
      <h3 class="font-heading text-xl font-semibold text-white mb-2">${escapeHtml(a.title)}</h3>
      <p class="text-emerald-100/60 text-sm leading-relaxed">${escapeHtml(a.description)}</p>
    </div>
  `).join("");
}


// ---------------------------
// Academic profiles: Render links from config
// ---------------------------
function sanitizeUrl(url) {
  const u = (url || "").trim();
  if (!u) return "";
  // allow only http(s)
  if (/^https?:\/\//i.test(u)) return u;
  return "";
}

function renderAcademicProfiles(cfg) {
  const el = document.getElementById("academic-profiles");
  if (!el) return;

  const items = [
    { label: "Google Scholar", url: sanitizeUrl(cfg.google_scholar_url) },
    { label: "ResearchGate", url: sanitizeUrl(cfg.researchgate_url) },
    { label: "ORCID", url: sanitizeUrl(cfg.orcid_url) }
  ].filter(x => x.url);

  if (!items.length) {
    el.innerHTML = `<p class="text-emerald-100/60 text-sm">Add your profile links in the configuration.</p>`;
    return;
  }

  el.innerHTML = items.map(x => `
    <a href="${escapeHtml(x.url)}"
       target="_blank"
       rel="noopener noreferrer"
       class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-sm border border-emerald-500/20 hover:bg-white/10 transition-colors">
      ${escapeHtml(x.label)}
    </a>
  `).join("");
}
