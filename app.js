/* ==========================================================================
   PORTFOLIO DATA
   ========================================================================== */

const projects = [
  {
    id: 1,
    title: "Nebula Design System",
    description: "Enterprise-grade design system serving 12+ products across 3 platforms. Built with React, TypeScript, and Figma tokens. Includes 200+ components, dark mode, and comprehensive documentation.",
    category: "design-system",
    tags: ["React", "TypeScript", "Storybook", "Figma", "Design Tokens"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138eddee?w=600&h=375&fit=crop",
    links: { live: "#", code: "#" },
    metrics: { components: 200, products: 12, adoption: "94%" }
  },
  {
    id: 2,
    title: "Astra Analytics Dashboard",
    description: "Real-time analytics platform processing 50M+ events/day. Designed intuitive data visualization for non-technical stakeholders. Reduced query time by 60% through optimized state management.",
    category: "web-app",
    tags: ["Vue 3", "Pinia", "D3.js", "WebSockets", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=375&fit=crop",
    links: { live: "#", code: "#" },
    metrics: { events: "50M+/day", perf: "60% faster", users: "15K+" }
  },
  {
    id: 3,
    title: "Meridian Brand Identity",
    description: "Complete brand overhaul for Series B fintech startup. Created logo system, motion language, marketing website, and brand guidelines. Increased brand recognition by 40% post-launch.",
    category: "brand",
    tags: ["Figma", "After Effects", "Framer", "Next.js", "GSAP"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=375&fit=crop",
    links: { live: "#", code: "#" },
    metrics: { recognition: "+40%", assets: "150+", pages: 25 }
  },
  {
    id: 4,
    title: "Vertex Component Library",
    description: "Open-source React component library with 80+ accessible components. Implements WAI-ARIA patterns, supports theming, and includes comprehensive TypeScript definitions. 12k+ weekly downloads.",
    category: "design-system",
    tags: ["React", "TypeScript", "Radix UI", "Stitches", "Vitest"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=375&fit=crop",
    links: { live: "#", code: "#" },
    metrics: { downloads: "12k/week", components: 85, stars: "2.4k" }
  },
  {
    id: 5,
    title: "Orbit E-Commerce Platform",
    description: "Headless commerce solution with Next.js 14, Shopify Hydrogen, and Sanity CMS. Implemented edge caching, A/B testing framework, and personalized recommendations. 35% conversion lift.",
    category: "web-app",
    tags: ["Next.js 14", "Shopify", "Sanity", "Vercel", "Playwright"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=375&fit=crop",
    links: { live: "#", code: "#" },
    metrics: { conversion: "+35%", aov: "+22%", speed: "98/100" }
  },
  {
    id: 6,
    title: "Pulse Motion Design System",
    description: "Motion-first design system with 200+ animated components. Built custom animation engine using Framer Motion. Exports to Lottie, CSS, and React Native. Featured in Apple Design Awards.",
    category: "design-system",
    tags: ["Framer Motion", "Lottie", "React Native", "TypeScript", "Figma"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=375&fit=crop",
    links: { live: "#", code: "#" },
    metrics: { animations: 200, platforms: 3, awards: 2 }
  }
];

const skills = [
  { name: "Product Design", icon: "design", level: 95, years: "7+", category: "design" },
  { name: "Design Systems", icon: "system", level: 98, years: "5+", category: "design" },
  { name: "Frontend Architecture", icon: "code", level: 92, years: "6+", category: "engineering" },
  { name: "React / Next.js", icon: "react", level: 95, years: "5+", category: "engineering" },
  { name: "TypeScript", icon: "ts", level: 94, years: "5+", category: "engineering" },
  { name: "Vue / Nuxt", icon: "vue", level: 88, years: "4+", category: "engineering" },
  { name: "Figma & Prototyping", icon: "figma", level: 98, years: "7+", category: "design" },
  { name: "Motion Design", icon: "motion", level: 90, years: "4+", category: "design" },
  { name: "Node.js / Backend", icon: "node", level: 82, years: "4+", category: "engineering" },
  { name: "Testing (Vitest/Playwright)", icon: "test", level: 85, years: "3+", category: "engineering" },
  { name: "CI/CD & DevOps", icon: "ci", level: 80, years: "3+", category: "engineering" },
  { name: "Team Leadership", icon: "lead", level: 90, years: "4+", category: "leadership" },
  { name: "Design Ops", icon: "ops", level: 88, years: "3+", category: "leadership" },
  { name: "Accessibility (WCAG)", icon: "a11y", level: 93, years: "4+", category: "design" },
  { name: "Technical Writing", icon: "docs", level: 85, years: "3+", category: "leadership" },
  { name: "Mentoring & Coaching", icon: "mentor", level: 92, years: "4+", category: "leadership" }
];

const timeline = [
  {
    id: 1,
    period: "2022 — Present",
    role: "Senior Product Designer & Frontend Lead",
    company: "Stellar Labs",
    highlights: ["Design System (12 products)", "Team of 8 designers/engineers", "Open-source component library", "Design ops transformation"]
  },
  {
    id: 2,
    period: "2020 — 2022",
    role: "Lead Product Designer",
    company: "Nebula Inc.",
    highlights: ["Brand redesign + website", "Design system from scratch", "Hired & mentored 4 designers", "Series B fundraising support"]
  },
  {
    id: 3,
    period: "2018 — 2020",
    role: "Senior Frontend Engineer",
    company: "Apex Digital",
    highlights: ["React migration (jQuery → React)", "Performance optimization", "Component library author", "Mentored 3 junior devs"]
  },
  {
    id: 4,
    period: "2017 — 2018",
    role: "Product Designer",
    company: "Orbit Studios",
    highlights: ["SaaS dashboard redesign", "User research program", "Design handoff process", "Design system foundations"]
  },
  {
    id: 5,
    period: "2016 — 2017",
    role: "Junior Frontend Developer",
    company: "Cosmos Agency",
    highlights: ["WordPress → React migration", "CSS architecture (BEM/ITCSS)", "Client-facing presentations", "Learned design fundamentals"]
  }
];

/* ==========================================================================
   ICON HELPERS
   ========================================================================== */
const skillIcons = {
  design: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  system: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>`,
  code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  react: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  ts: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 3L2 7v10l4 4h16l4-4V7L18 3H6zm0 2h12l2 2v10l-2 2H6l-2-2V7l2-2zm6 7h-3v3h-2v-3H9V9h3V6h2v3h3v2z"/></svg>`,
  vue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.61 3.626l-1.56 8.961h3.158L21.61 3.626zM9.407 20.374h5.187l1.57-9.021H12.55L9.407 20.374zM2.139 12.593h5.187L5.74 3.572H2.596L2.139 12.593zM19.28 21.604L21.87 11.316h-5.187L14.09 21.604h5.19zm-17.141 0h5.186l-2.586-10.29H2.139L2.139 21.604zm8.633-19.979h2.91L12 7.118 9.77.625h2.91L11.366 5.307l1.594-4.682z"/></svg>`,
  figma: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.414 6.625V17.25a.75.75 0 01-.439.674l-6.373 4.25a.75.75 0 01-.604 0l-6.373-4.25A.75.75 0 013 17.25V6.625a.75.75 0 01.439-.674l6.373-4.25a.75.75 0 01.604 0l6.373 4.25A.75.75 0 0120.414 6.625zM12 4.882l5.628 3.75v8.738l-5.628 3.75-5.628-3.75V8.632L12 4.882z"/></svg>`,
  motion: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="M17 7H7"/><path d="M17 17H7"/></svg>`,
  node: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 19.5H7.5V17h9v2.5zM12 14c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0-4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/></svg>`,
  test: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  ci: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
  lead: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  ops: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  a11y: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
  docs: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  mentor: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
};

const categoryIcons = {
  "design-system": `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>`,
  "web-app": `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
  "brand": `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`
};

/* ==========================================================================
   DOM ELEMENTS
   ========================================================================== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const header = $('#header');
const navToggle = $('#navToggle');
const navLinks = $('#navLinks');
const projectsGrid = $('#projectsGrid');
const skillsGrid = $('#skillsGrid');
const timelineTrack = $('#timelineTrack');
const contactForm = $('#contactForm');
const submitBtn = $('#submitBtn');
const toastContainer = $('#toastContainer');

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderProjects('all');
  renderSkills();
  renderTimeline();
  initScrollReveal();
  initStatCounters();
  initFormValidation();
  initFilterTabs();
});

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
function initNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  $$('.nav-link', navLinks).forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    });
  });

  // Header scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 100) {
      header.style.background = 'rgba(2, 6, 23, 0.95)';
      header.style.borderBottomColor = 'var(--color-border-strong)';
    } else {
      header.style.background = 'rgba(2, 6, 23, 0.8)';
      header.style.borderBottomColor = 'var(--color-border)';
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Smooth scroll for anchor links
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = $(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================================================
   PROJECTS RENDERING & FILTERING
   ========================================================================== */
function renderProjects(filter = 'all') {
  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  projectsGrid.innerHTML = filtered.map((project, index) => `
    <article class="project-card reveal reveal-delay-${(index % 6) + 1}" role="listitem" data-category="${project.category}">
      <div class="project-thumb" style="background-image: url('${project.image}')">
        <div class="project-overlay">
          <div class="project-links">
            <a href="${project.links.live}" class="project-link" aria-label="View live demo" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <a href="${project.links.code}" class="project-link" aria-label="View source code" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="project-content">
        <div class="project-meta">
          <span class="project-tag">${categoryIcons[project.category]} ${formatCategory(project.category)}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  // Re-observe new elements for scroll reveal
  initScrollReveal();
}

function formatCategory(cat) {
  return cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function initFilterTabs() {
  $$('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.filter-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderProjects(tab.dataset.filter);
    });
  });
}

/* ==========================================================================
   SKILLS RENDERING
   ========================================================================== */
function renderSkills() {
  skillsGrid.innerHTML = skills.map((skill, index) => `
    <article class="skill-card reveal reveal-delay-${(index % 6) + 1}" role="listitem">
      <div class="skill-icon">${skillIcons[skill.icon]}</div>
      <h3 class="skill-name">${skill.name}</h3>
      <div class="skill-level">
        <div class="skill-bar" style="--level: ${skill.level}%"></div>
      </div>
      <span class="skill-years">${skill.years} years experience</span>
    </article>
  `).join('');

  // Animate skill bars on scroll
  const skillBars = $$('.skill-bar');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.style.getPropertyValue('--level');
        entry.target.style.width = level;
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => skillObserver.observe(bar));
}

/* ==========================================================================
   TIMELINE RENDERING
   ========================================================================== */
function renderTimeline() {
  timelineTrack.innerHTML = timeline.map((item, index) => `
    <div class="timeline-item reveal reveal-delay-${(index % 6) + 1}" role="listitem">
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-content">
        <div class="timeline-period">${item.period}</div>
        <h3 class="timeline-role">${item.role}</h3>
        <p class="timeline-company">${item.company}</p>
        <div class="timeline-highlights">
          ${item.highlights.map(h => `<span class="timeline-highlight">${h}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  initScrollReveal();
}

/* ==========================================================================
   SCROLL REVEAL (IntersectionObserver)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = $$('.reveal:not(.visible)');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   STAT COUNTERS
   ========================================================================== */
function initStatCounters() {
  const statValues = $$('.stat-value[data-count]');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const count = parseInt(target.dataset.count, 10);
        animateCounter(target, count);
        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statValues.forEach(el => counterObserver.observe(el));
}

function animateCounter(element, target) {
  const duration = 2000;
  const startTime = performance.now();
  const startValue = 0;
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Easing function (ease-out)
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(startValue + (target - startValue) * eased);
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString();
    }
  }
  
  requestAnimationFrame(updateCounter);
}

/* ==========================================================================
   FORM VALIDATION & SUBMISSION
   ========================================================================== */
function initFormValidation() {
  const fields = ['name', 'email', 'project', 'budget', 'message'];
  
  fields.forEach(fieldName => {
    const field = $(`#${fieldName}`);
    if (field) {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => clearError(field));
    }
  });
  
  contactForm.addEventListener('submit', handleSubmit);
}

function validateField(field) {
  const formGroup = field.closest('.form-group');
  const errorEl = formGroup.querySelector('.form-error');
  let isValid = true;
  let message = '';
  
  if (field.hasAttribute('required') && !field.value.trim()) {
    isValid = false;
    message = `${field.name.charAt(0).toUpperCase() + field.name.slice(1)} is required`;
  } else if (field.type === 'email' && field.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value.trim())) {
      isValid = false;
      message = 'Please enter a valid email address';
    }
  }
  
  if (!isValid) {
    formGroup.classList.add('has-error');
    field.setAttribute('aria-invalid', 'true');
    if (errorEl) errorEl.textContent = message;
  } else {
    formGroup.classList.remove('has-error');
    field.setAttribute('aria-invalid', 'false');
    if (errorEl) errorEl.textContent = '';
  }
  
  return isValid;
}

function clearError(field) {
  const formGroup = field.closest('.form-group');
  formGroup.classList.remove('has-error');
  field.setAttribute('aria-invalid', 'false');
  const errorEl = formGroup.querySelector('.form-error');
  if (errorEl) errorEl.textContent = '';
}

async function handleSubmit(e) {
  e.preventDefault();
  
  // Validate all fields
  const fields = $$('input, select, textarea', contactForm);
  let allValid = true;
  fields.forEach(field => {
    if (!validateField(field)) allValid = false;
  });
  
  if (!allValid) {
    showToast('Please fix the errors above', 'error');
    return;
  }
  
  // Show loading state
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Reset form
  submitBtn.classList.remove('loading');
  submitBtn.disabled = false;
  contactForm.reset();
  
  showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
}

/* ==========================================================================
   TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      ${type === 'success' ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
      ${type === 'error' ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>' : ''}
      ${type === 'info' ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>' : ''}
    </div>
    <span class="toast-message">${message}</span>
    <button class="toast-close" aria-label="Dismiss">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  `;
  
  toastContainer.appendChild(toast);
  
  // Auto remove after 5 seconds
  setTimeout(() => removeToast(toast), 5000);
  
  // Manual close
  toast.querySelector('.toast-close').addEventListener('click', () => removeToast(toast));
}

function removeToast(toast) {
  toast.classList.add('removing');
  toast.addEventListener('animationend', () => toast.remove());
}

/* ==========================================================================
   PERFORMANCE: Lazy load images
   ========================================================================== */
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });
  
  $$('img[data-src]').forEach(img => imageObserver.observe(img));
}