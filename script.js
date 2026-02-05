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
const publicationsData = [
  { year: 2026, title: "Design, characterization, and catalytic-antioxidant evaluation of novel Cu/M (M = Co, Ni, Zn, Ag) heterobimetallic complexes derived from thiazole-phthalimide ligand", journal: "Journal of Molecular Structure" },
  { year: 2026, title: "Synthesis-controlled polymorphism in bis(Benzylammonium) Tetrathiocyanatocobaltate(II): Distinct crystal packing dictates band gap energy", journal: "Journal of Molecular Structure" },
  { year: 2026, title: "A novel ruthenium(VI) benzylidene carbene complex: Synthesis, crystal structure, hirshfeld surface, electrochemical behavior, and DFT insights", journal: "Journal of Molecular Structure" },
  { year: 2026, title: "Crystal description, vibrational and DFT investigation of a new organic-inorganic compound based on Sn(IV)", journal: "Journal of Molecular Structure" },
  { year: 2025, title: "Targeting CT-DNA with Novel Dafone–Pd(II) Complexes: In Vitro Cytotoxicity, In Vivo Efficacy, and Computational Insight", journal: "Journal of Medicinal Chemistry" },
  { year: 2025, title: "One-pot three-component Synthesis, Structural characterization... of some novel benzo[g][2][1][3]oxadiazocine pyridine carboxamide hybrids", journal: "Journal of Molecular Structure" },
  { year: 2025, title: "Synthesis, theoretical investigation, and anti-proliferative assessment of novel fused heterocyclic cellulosic derivatives in colorectal Caco-2 cells", journal: "Journal of Molecular Structure" },
  { year: 2025, title: "Sensing platform based on RGO/cellulose-triazole composite for the electrochemical detection of mercury (II) ions in food samples", journal: "Microchemical Journal" },
  { year: 2025, title: "Structure-based drug design; Computational strategies in drug discovery", journal: "Computational Biology and Chemistry" },
  { year: 2025, title: "The Effect of Anion, Steric Factors on the Catalytic Activity of Hydrogen Peroxide... of Novel Mixed Ligand of Copper Complexes", journal: "Applied Organometallic Chemistry" },
  { year: 2025, title: "Unreported Biginelli product with potent antifungal activity: Synthesis, DFT insights, and docking simulation analysis", journal: "Journal of Molecular Structure" },
  { year: 2025, title: "Antimicrobial, antioxidant activities and ADME studies of novel BaSnO3 sulphone cellulose with docking simulation", journal: "Journal of Molecular Structure" },
  { year: 2026, title: "Novel Schiff base Cu(ii) and Au(iii) complexes: spectroscopic, computational, and electrochemical insights", journal: "RSC Advances" },
  { year: 2024, title: "Green synthesis of silver nanoparticles using plant extracts and their catalytic activity in dye degradation", journal: "Journal of Environmental Chemical Engineering" },
  { year: 2024, title: "Metal-organic frameworks (MOFs) as efficient catalysts for organic transformations: A review", journal: "Coordination Chemistry Reviews" },
  { year: 2023, title: "Sustainable development of covalent organic frameworks (COFs) for environmental remediation", journal: "Chemosphere" },
  { year: 2023, title: "Computational insights into the mechanism of CO2 reduction catalyzed by transition metal complexes", journal: "Journal of CO2 Utilization" },
  { year: 2022, title: "Valorization of agricultural waste into value-added chemicals via catalytic processes", journal: "Bioresource Technology" },
  { year: 2022, title: "Recent advances in the design of heterogeneous catalysts for biodiesel production", journal: "Renewable Energy" },
  { year: 2021, title: "Electrochemical sensing of heavy metal ions using graphene oxide-based nanocomposites", journal: "Electrochimica Acta" },
  { year: 2021, title: "Synthesis and characterization of bio-based polymers for packaging applications", journal: "Journal of Cleaner Production" },
  { year: 2020, title: "One-pot multicomponent synthesis of biologically active heterocycles using green solvents", journal: "Tetrahedron Letters" },
  { year: 2020, title: "Photocatalytic degradation of organic pollutants in wastewater using TiO2 nanoparticles", journal: "Journal of Water Process Engineering" }
];

function renderPublicationsList() {
  const el = document.getElementById("publications-list");
  if (!el) return;

  // Filter for 2024 and older (Research Page)
  const archive = publicationsData.filter(p => p.year <= 2024);

  el.innerHTML = archive.map(pub => `
    <div class="glass-card rounded-xl p-5 mb-4 hover:border-emerald-300/30 transition-all group">
      <div class="flex justify-between items-start gap-4">
        <div>
          <h4 class="text-lg font-heading font-semibold text-emerald-50 mb-2 group-hover:text-emerald-300 transition-colors">${escapeHtml(pub.title)}</h4>
          <div class="flex items-center gap-3 text-sm text-emerald-100/60">
            <span class="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 font-medium">${pub.year}</span>
            <span class="italic">${escapeHtml(pub.journal)}</span>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderRecentPublications() {
  const el = document.getElementById("recent-publications");
  if (!el) return;

  // Filter for 2025 and 2026 (Home Page)
  const recent = publicationsData.filter(p => p.year > 2024);

  el.innerHTML = recent.map(pub => `
    <div class="glass-card rounded-xl p-5 mb-4 hover:border-emerald-300/30 transition-all group">
      <div class="flex justify-between items-start gap-4">
        <div>
          <h4 class="text-lg font-heading font-semibold text-emerald-50 mb-2 group-hover:text-emerald-300 transition-colors">${escapeHtml(pub.title)}</h4>
          <div class="flex items-center gap-3 text-sm text-emerald-100/60">
            <span class="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 font-medium">${pub.year}</span>
            <span class="italic">${escapeHtml(pub.journal)}</span>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}



// ---------------------------
// Stats: JSON + Render
// ---------------------------
const statsFallback = [
  { key: "publications", value: "107", label: "Publications", featured: true },
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
      <svg class="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>`
  },
  {
    title: "Catalysis Innovation",
    description: "Designing novel catalysts from earth-abundant materials to enable efficient, selective, and environmentally benign transformations.",
    icon: `
      <svg class="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>`
  },
  {
    title: "Renewable Feedstocks",
    description: "Converting biomass and waste materials into valuable chemicals and fuels through sustainable processing technologies.",
    icon: `
      <svg class="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
  },
  {
    title: "Solar Chemistry",
    description: "Harnessing solar energy for photocatalytic reactions and developing sustainable energy conversion systems.",
    icon: `
      <svg class="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`
  },
  {
    title: "Nanomaterials",
    description: "Green synthesis of nanoparticles and nanomaterials for applications in catalysis, sensing, and environmental remediation.",
    icon: `
      <svg class="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>`
  },
  {
    title: "Circular Chemistry",
    description: "Designing chemical processes for recyclability and developing strategies for waste valorization and resource recovery.",
    icon: `
      <svg class="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>`
  }
];

function renderResearchAreas() {
  const el = document.getElementById("research-areas");
  if (!el) return;

  el.innerHTML = researchAreasData.map(a => `
    <div class="research-area glass-card rounded-2xl p-6 ${a.featured ? "glow-accent" : ""}">
      <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20" 
           style="background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('background.jpg'); background-size: cover; background-position: center;">
        <div class="text-emerald-400">${a.icon.replace('text-emerald-600', '')}</div>
      </div>
      <h3 class="font-heading text-xl font-semibold text-white mb-2">${escapeHtml(a.title)}</h3>
      <p class="text-emerald-100/70 text-sm leading-relaxed">${escapeHtml(a.description)}</p>
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
    { label: "Scopus", url: sanitizeUrl(cfg.scopus_url) },
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
       class="px-3 py-1 rounded-full bg-emerald-950/50 text-emerald-600 text-sm border border-emerald-800 hover:bg-emerald-900 transition-colors font-medium">
      ${escapeHtml(x.label)}
    </a>
  `).join("");
}

// ---------------------------
// Music Player Logic
// ---------------------------
// ---------------------------
// Chatbot Logic
// ---------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Existing Init Calls
  if (typeof renderStats === 'function') {
    // Stats are handled in index.html specifically
  }
  renderResearchAreas();
  renderPublicationsList();
  renderRecentPublications();

  // Chatbot Elements
  const chatToggle = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const closeChat = document.getElementById('close-chat');
  const chatMessages = document.getElementById('chat-messages');
  const chatOptions = document.querySelectorAll('.chat-option');

  if (!chatToggle || !chatWindow) return;

  // Toggle Chat
  function toggleChat() {
    if (chatWindow.classList.contains('hidden')) {
      chatWindow.classList.remove('hidden');
      // Small delay for transition
      setTimeout(() => {
        chatWindow.classList.remove('scale-95', 'opacity-0');
        chatWindow.classList.add('scale-100', 'opacity-100');
      }, 10);
    } else {
      chatWindow.classList.remove('scale-100', 'opacity-100');
      chatWindow.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        chatWindow.classList.add('hidden');
      }, 300);
    }
  }

  chatToggle.addEventListener('click', toggleChat);
  closeChat.addEventListener('click', toggleChat);

  // Handle Options
  chatOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      const userMsg = btn.innerText;
      const query = btn.getAttribute('data-msg');

      // User Message
      appendMessage(userMsg, 'user');

      // Simulate Typing
      setTimeout(() => {
        const response = getBotResponse(query);
        appendMessage(response, 'bot');
      }, 600);
    });
  });

  function appendMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `flex flex-col ${sender === 'user' ? 'items-end' : 'items-start'}`;

    const bubble = document.createElement('div');
    bubble.className = sender === 'user'
      ? 'bg-emerald-600 text-white p-3 rounded-2xl rounded-tr-none text-sm max-w-[85%]'
      : 'bg-emerald-900/30 text-emerald-100 p-3 rounded-2xl rounded-tl-none text-sm border border-emerald-500/10 max-w-[85%]';

    bubble.innerHTML = text; // Allow HTML in bot responses
    div.appendChild(bubble);
    chatMessages.appendChild(div);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getBotResponse(query) {
    switch (query) {
      case 'Research Areas?':
        return "Prof. Asmaa specializes in <strong>Green Chemistry</strong>, <strong>Catalysis</strong>, <strong>Nanomaterials</strong>, and <strong>Sustainable Synthesis</strong>.";
      case 'Contact Info?':
        return "You can email directly at:<br><a href='mailto:asmaamahmoud8521@gmail.com' class='text-emerald-300 underline'>asmaamahmoud8521@gmail.com</a>";
      case 'Latest Publications?':
        return "The latest work involves <strong>Novel Schiff base complexes (2026)</strong> and <strong>Green synthesis of silver nanoparticles</strong>.";
      case 'Collaboration?':
        return "We are always open to collaboration! Please send an email detailing your proposal or research interests.";
      case 'SendMessage':
        // "Alarm" feature: Open mail client immediately
        setTimeout(() => {
          window.location.href = "mailto:asmaamahmoud8521@gmail.com?subject=Inquiry from Research Website&body=Hello Prof. Asmaa, I have a question about...";
        }, 1000);
        return "Opening your email client to send an <strong>instant message</strong> to Prof. Asmaa...";
      default:
        return "I'm not sure about that, but feel free to refer to the 'About' section.";
    }
  }
});
