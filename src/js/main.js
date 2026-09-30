/**
 * MAIN CLIENT APPLICATION ENTRY POINT
 * Hriday Sharma Portfolio
 */

import { profileConfig } from '../data/config.js';
import { projectsData } from '../data/projects.js';
import { skillsCategories } from '../data/skills.js';
import { educationData, timelineMilestones } from '../data/education.js';

import { initConfigLoader } from './config-loader.js';
import { initParticleCanvas } from './particle-canvas.js';
import { initCustomCursor } from './cursor.js';
import { initTheme } from './theme.js';
import { initTerminal } from './terminal.js';
import { initProjectModal } from './project-modal.js';
import { initContact, showToast } from './contact.js';
import { sound } from './interactive-sound.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize core configuration and hydrate DOM
  initConfigLoader();

  // 2. Initialize interactive canvas & themes
  initParticleCanvas();
  initTheme();
  initCustomCursor();

  // 3. Initialize terminal and contact system
  initTerminal();
  initProjectModal();
  initContact();

  // 4. Render Dynamic Content
  renderHeroTypewriter();
  renderProjects('all');
  renderSkills('languages');
  renderEducation();

  // 5. Setup UI Controls & Listeners
  setupNavigation();
  setupAudioToggle();
  setupScrollProgress();
  setupScrollReveal();
  setupResumeModal();
});

/* ==========================================================================
   Hero Typewriter Effect
   ========================================================================== */
function renderHeroTypewriter() {
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  const roles = [
    "1st Year B.Tech CSE Student",
    "Data Structures & C++ Enthusiast",
    "Modern Web & Frontend Builder",
    "Algorithmic Problem Solver",
    "Open-Source Explorer"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      typingEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      delay = 45;
    } else {
      typingEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      delay = 85;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      delay = 1800; // Pause at end of text
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   Project Render & Filtering
   ========================================================================== */
function getProjectMockupSvg(id) {
  if (id === 'algoverse') {
    return `
      <svg class="mockup-art" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="200" rx="12" fill="#0b1120"/>
        <!-- Sorting Bars -->
        <rect x="35" y="110" width="22" height="60" rx="4" fill="#38bdf8" fill-opacity="0.8"/>
        <rect x="65" y="70" width="22" height="100" rx="4" fill="#818cf8" fill-opacity="0.9"/>
        <rect x="95" y="130" width="22" height="40" rx="4" fill="#38bdf8" fill-opacity="0.6"/>
        <rect x="125" y="40" width="22" height="130" rx="4" fill="#a855f7"/>
        <rect x="155" y="90" width="22" height="80" rx="4" fill="#38bdf8" fill-opacity="0.85"/>
        <rect x="185" y="120" width="22" height="50" rx="4" fill="#38bdf8" fill-opacity="0.7"/>
        <rect x="215" y="55" width="22" height="115" rx="4" fill="#c084fc"/>
        <rect x="245" y="80" width="22" height="90" rx="4" fill="#38bdf8" fill-opacity="0.9"/>
        <rect x="275" y="140" width="22" height="30" rx="4" fill="#38bdf8" fill-opacity="0.5"/>
        <rect x="305" y="65" width="22" height="105" rx="4" fill="#818cf8"/>
        <!-- Overlay Graph Line -->
        <path d="M46 110 L76 70 L106 130 L136 40 L166 90 L196 120 L226 55 L256 80 L286 140 L316 65" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4 4"/>
        <circle cx="136" cy="40" r="5" fill="#38bdf8"/>
        <circle cx="226" cy="55" r="5" fill="#a855f7"/>
      </svg>
    `;
  } else if (id === 'campuspulse') {
    return `
      <svg class="mockup-art" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="200" rx="12" fill="#0f172a"/>
        <!-- Attendance Gauge Ring -->
        <circle cx="100" cy="100" r="55" stroke="rgba(255,255,255,0.08)" stroke-width="10"/>
        <circle cx="100" cy="100" r="55" stroke="#a855f7" stroke-width="10" stroke-dasharray="345" stroke-dashoffset="65" stroke-linecap="round"/>
        <text x="100" y="98" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle" font-family="sans-serif">82%</text>
        <text x="100" y="118" fill="#94a3b8" font-size="10" text-anchor="middle" font-family="sans-serif">Attendance</text>
        <!-- Schedule Cards -->
        <rect x="180" y="45" width="145" height="42" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.06)"/>
        <rect x="190" y="55" width="24" height="22" rx="4" fill="#a855f7" fill-opacity="0.3"/>
        <rect x="222" y="58" width="80" height="8" rx="3" fill="#cbd5e1"/>
        <rect x="222" y="70" width="50" height="6" rx="2" fill="#64748b"/>
        
        <rect x="180" y="95" width="145" height="42" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.06)"/>
        <rect x="190" y="105" width="24" height="22" rx="4" fill="#38bdf8" fill-opacity="0.3"/>
        <rect x="222" y="108" width="70" height="8" rx="3" fill="#cbd5e1"/>
        <rect x="222" y="120" width="40" height="6" rx="2" fill="#64748b"/>
      </svg>
    `;
  } else if (id === 'devsync') {
    return `
      <svg class="mockup-art" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="200" rx="12" fill="#090d16"/>
        <!-- Window Bar -->
        <rect x="0" y="0" width="360" height="30" fill="#131b2e"/>
        <circle cx="20" cy="15" r="4" fill="#ef4444"/>
        <circle cx="34" cy="15" r="4" fill="#eab308"/>
        <circle cx="48" cy="15" r="4" fill="#22c55e"/>
        <!-- Code Editor Area -->
        <text x="30" y="65" fill="#38bdf8" font-size="12" font-family="monospace">const <tspan fill="#34d399">editor</tspan> = new SandBox();</text>
        <text x="30" y="90" fill="#a855f7" font-size="12" font-family="monospace">editor.<tspan fill="#f8fafc">render</tspan>({</text>
        <text x="50" y="115" fill="#94a3b8" font-size="12" font-family="monospace">liveSync: <tspan fill="#38bdf8">true</tspan>,</text>
        <text x="50" y="140" fill="#94a3b8" font-size="12" font-family="monospace">speed: <tspan fill="#fbbf24">'60fps'</tspan></text>
        <text x="30" y="165" fill="#a855f7" font-size="12" font-family="monospace">});</text>
        <rect x="180" y="153" width="8" height="15" fill="#38bdf8" opacity="0.8"/>
      </svg>
    `;
  } else {
    return `
      <svg class="mockup-art" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="200" rx="12" fill="#0f172a"/>
        <circle cx="180" cy="100" r="50" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 6"/>
        <rect x="155" y="85" width="50" height="30" rx="6" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="180" cy="78" r="14" stroke="#f59e0b" stroke-width="2"/>
        <text x="180" y="165" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace">SHA-256 / RSA 2048</text>
      </svg>
    `;
  }
}

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  grid.innerHTML = filtered.map(p => `
    <article class="project-card reveal-on-scroll">
      <div class="project-preview">
        ${getProjectMockupSvg(p.id)}
        <span class="project-badge-pill">${p.badge}</span>
      </div>

      <div class="project-body">
        <div class="project-category">${p.category}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>

        <div class="project-metrics-row">
          ${p.metrics.map(m => `
            <div class="metric-item">
              <div class="metric-val">${m.value}</div>
              <div class="metric-lbl">${m.label}</div>
            </div>
          `).join('')}
        </div>

        <div class="project-tags">
          ${p.tags.slice(0, 4).map(t => `<span class="tag-chip">${t}</span>`).join('')}
        </div>

        <div class="project-actions">
          <button class="btn-card-action primary" data-modal-project="${p.id}">
            Architecture & Spec
          </button>
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action" title="View Source">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            Code
          </a>
        </div>
      </div>
    </article>
  `).join('');

  setupScrollReveal();
}

// Project category buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    sound.playClick();
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter') || 'all';
    renderProjects(filter);
  });
});

/* ==========================================================================
   Skills Matrix Render
   ========================================================================== */
function renderSkills(categoryId = 'languages') {
  const container = document.getElementById('skills-content-container');
  if (!container) return;

  const category = skillsCategories.find(c => c.id === categoryId) || skillsCategories[0];

  container.innerHTML = category.skills.map(s => `
    <div class="skill-card reveal-on-scroll">
      <div class="skill-card-top">
        <div class="skill-name-wrap">
          <div class="skill-icon-bubble">⚡</div>
          <span class="skill-title">${s.name}</span>
        </div>
        <span class="skill-badge">${s.badge}</span>
      </div>
      <p class="skill-exp-text">${s.experience}</p>
      <div class="skill-meter-wrap">
        <div class="skill-meter-bar" style="width: ${s.level}%"></div>
      </div>
    </div>
  `).join('');

  setupScrollReveal();
}

// Skill Tab switcher
document.querySelectorAll('.skill-tab-btn').forEach(tab => {
  tab.addEventListener('click', () => {
    sound.playClick();
    document.querySelectorAll('.skill-tab-btn').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const cat = tab.getAttribute('data-skill-category');
    renderSkills(cat);
  });
});

/* ==========================================================================
   Education & Timeline
   ========================================================================== */
function renderEducation() {
  const uniCard = document.getElementById('university-main-card');
  const timelineEl = document.getElementById('timeline-flow');

  if (uniCard) {
    const uni = educationData[0];
    uniCard.innerHTML = `
      <div class="uni-badge-row">
        <span class="uni-current-tag">
          <span class="live-dot"></span>
          ${uni.badge}
        </span>
        <span class="uni-dates">${uni.period}</span>
      </div>

      <h3 class="uni-degree-title">${uni.degree}</h3>
      <div class="uni-institution">${uni.institution}</div>
      <div class="uni-location">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        ${uni.location}
      </div>

      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
        ${uni.description}
      </p>

      <div class="coursework-box">
        <h4 class="coursework-title">Relevant Academic Coursework:</h4>
        <div class="course-chips-wrap">
          ${uni.courses.map(c => `<span class="course-chip">${c}</span>`).join('')}
        </div>
      </div>
    `;
  }

  if (timelineEl) {
    timelineEl.innerHTML = timelineMilestones.map(m => `
      <div class="timeline-item reveal-on-scroll">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <span class="timeline-year-tag">${m.year} • ${m.tag}</span>
          <h4 class="timeline-title">${m.title}</h4>
          <p class="timeline-desc">${m.description}</p>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   Navigation & Scroll Handlers
   ========================================================================== */
function setupNavigation() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Header shadow transition
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Active link highlighting
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      sound.playClick();
    });

    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }
}

function setupAudioToggle() {
  const audioBtn = document.getElementById('audio-toggle-btn');
  const audioIcon = document.getElementById('audio-icon');

  function updateIcon(enabled) {
    if (enabled) {
      audioIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>`;
      audioBtn.setAttribute('title', 'Sound Effects: ON (Click to mute)');
    } else {
      audioIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>`;
      audioBtn.setAttribute('title', 'Sound Effects: MUTED (Click to unmute)');
    }
  }

  updateIcon(sound.enabled);

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      const newState = sound.toggle();
      updateIcon(newState);
      showToast(newState ? 'Interactive Sound FX Enabled' : 'Sound FX Muted', 'info');
    });
  }
}

function setupScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = `${progress}%`;
  });
}

function setupScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   Resume Modal & Viewer
   ========================================================================== */
function setupResumeModal() {
  const modal = document.getElementById('resume-modal');
  const openBtns = document.querySelectorAll('[data-open-resume]');
  const closeBtn = document.getElementById('resume-close-btn');
  const printBtn = document.getElementById('resume-print-btn');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      sound.playClick();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  printBtn?.addEventListener('click', () => {
    window.print();
  });
}
