/**
 * CONFIG LOADER & DOM HYDRATOR
 * ----------------------------
 * Connects centralized personalInfo from portfolioData.js into all matching DOM elements.
 * Handles interactive tooltips, configurable placeholders, and live telemetry.
 */

import { personalInfo, isPlaceholderUrl } from '../data/portfolioData.js';
import { showToast } from './contact.js';
import { sound } from './interactive-sound.js';

export function initConfigLoader() {
  // Update document title and meta description
  const heroDisplay = personalInfo.heroTitle || personalInfo.heroDisplay || 'HRIDAY';
  const roleTitle = personalInfo.headline || personalInfo.role || 'B.Tech Computer Science & Engineering (1st Year)';
  const instName = personalInfo.institution || personalInfo.university || 'JECRC University, Jaipur, Rajasthan, India';

  document.title = `${personalInfo.name} [Hriday Sharma] // ${roleTitle} @ ${instName}`;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute(
      'content',
      `Personal portfolio of ${personalInfo.name} — ${roleTitle} at ${instName}. Exploring algorithms, scalable software systems, and artificial intelligence.`
    );
  }

  // Populate all text elements by data-profile attribute
  document.querySelectorAll('[data-profile]').forEach(el => {
    const key = el.getAttribute('data-profile');
    if (key === 'name') el.textContent = personalInfo.name;
    if (key === 'hero-title') el.textContent = heroDisplay;
    if (key === 'headline') el.textContent = personalInfo.headline;
    if (key === 'title') el.textContent = personalInfo.title || personalInfo.headline;
    if (key === 'university' || key === 'institution' || key === 'college') el.textContent = instName;
    if (key === 'role') el.textContent = personalInfo.role;
    if (key === 'degree') el.textContent = personalInfo.degree;
    if (key === 'location') el.textContent = personalInfo.location;
    if (key === 'coordinates') el.textContent = personalInfo.coordinates;
    if (key === 'email') el.textContent = personalInfo.email;
    if (key === 'status-text' || key === 'status' || key === 'status-badge') {
      el.textContent = personalInfo.statusBadge || personalInfo.status;
    }
  });

  // Setup Dynamic & Interactive Social Links with Tooltips and Placeholder notices
  setupSocialLinks();

  // Initialize Jaipur Live Clock
  initLiveClock();

  // Setup Global Tooltip Overlay Engine
  initTooltipEngine();
}

/**
 * Configure social links with interactive icons and subtle tooltip notices ("Coming soon" or direct links)
 */
function setupSocialLinks() {
  const socials = personalInfo.socials || {};

  document.querySelectorAll('[data-link]').forEach(el => {
    const linkType = el.getAttribute('data-link');

    if (linkType === 'email') {
      el.setAttribute('href', `mailto:${personalInfo.email}`);
      el.setAttribute('data-tooltip', `Send email to ${personalInfo.email}`);
      return;
    }

    const rawUrl = socials[linkType];
    const isPlaceholder = isPlaceholderUrl(rawUrl);
    const label = linkType.charAt(0).toUpperCase() + linkType.slice(1);

    if (isPlaceholder) {
      el.classList.add('is-placeholder');
      el.setAttribute('data-placeholder', 'true');
      el.setAttribute('data-tooltip', `${label}: Coming soon (Configure handle in portfolioData.js)`);
      el.setAttribute('aria-label', `${label} link coming soon`);

      // If inside a social card, provide visual cues
      const handleEl = el.querySelector('.social-handle');
      if (handleEl) {
        handleEl.textContent = 'Coming soon';
        handleEl.style.color = 'var(--text-muted)';
      }

      // Add or update status pill inside social card
      let badge = el.querySelector('.social-status-pill');
      if (!badge && el.classList.contains('social-card')) {
        badge = document.createElement('span');
        badge.className = 'social-status-pill coming-soon';
        badge.textContent = 'Coming soon';
        el.appendChild(badge);
      }

      // Prevent navigation to invalid [YOUR_USERNAME] placeholder and give instant recruiter feedback
      el.addEventListener('click', (e) => {
        e.preventDefault();
        sound.playClick();
        showToast(`ℹ️ ${label} profile coming soon — configure handle in src/data/portfolioData.js`, 'info');
      });
    } else {
      el.classList.remove('is-placeholder');
      el.removeAttribute('data-placeholder');
      el.setAttribute('href', rawUrl);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
      el.setAttribute('data-tooltip', `Visit Hriday's ${label} profile ↗`);
      el.setAttribute('aria-label', `Visit Hriday's ${label}`);

      const handleEl = el.querySelector('.social-handle');
      if (handleEl) {
        try {
          const urlObj = new URL(rawUrl);
          const parts = urlObj.pathname.split('/').filter(Boolean);
          const handle = parts[parts.length - 1] || label;
          handleEl.textContent = `@${handle}`;
          handleEl.style.color = 'var(--accent-cyan)';
        } catch {
          handleEl.textContent = `View ${label}`;
        }
      }

      let badge = el.querySelector('.social-status-pill');
      if (!badge && el.classList.contains('social-card')) {
        badge = document.createElement('span');
        badge.className = 'social-status-pill active';
        badge.textContent = 'Active Link ↗';
        el.appendChild(badge);
      }
    }
  });
}

/**
 * Live IST Clock for Jaipur, Rajasthan
 */
function initLiveClock() {
  const clockEls = document.querySelectorAll('#live-jaipur-clock, .clock-display');
  if (!clockEls.length) return;

  function update() {
    try {
      const now = new Date();
      const options = {
        timeZone: personalInfo.timezone || 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      clockEls.forEach(el => {
        if (el.id === 'live-jaipur-clock') {
          el.textContent = `${timeString} IST • Jaipur, Rajasthan`;
        } else {
          el.textContent = `${timeString} IST`;
        }
      });
    } catch (e) {
      clockEls.forEach(el => {
        el.textContent = 'Jaipur, Rajasthan, India';
      });
    }
  }

  update();
  setInterval(update, 1000);
}

/**
 * Universal Subtle Floating Frosted-Glass Tooltip Engine
 */
function initTooltipEngine() {
  let tooltipBox = document.getElementById('global-tooltip-bubble');
  if (!tooltipBox) {
    tooltipBox = document.createElement('div');
    tooltipBox.id = 'global-tooltip-bubble';
    tooltipBox.className = 'global-tooltip-bubble';
    document.body.appendChild(tooltipBox);
  }

  let activeEl = null;

  function showTooltip(el) {
    const text = el.getAttribute('data-tooltip');
    if (!text) return;

    activeEl = el;
    tooltipBox.textContent = text;
    tooltipBox.classList.add('visible');

    const isComingSoon = el.getAttribute('data-placeholder') === 'true' || text.toLowerCase().includes('coming soon');
    if (isComingSoon) {
      tooltipBox.classList.add('tooltip-coming-soon');
    } else {
      tooltipBox.classList.remove('tooltip-coming-soon');
    }

    positionTooltip(el);
  }

  function hideTooltip() {
    activeEl = null;
    tooltipBox.classList.remove('visible');
  }

  function positionTooltip(el) {
    const rect = el.getBoundingClientRect();
    const tooltipRect = tooltipBox.getBoundingClientRect();

    let top = rect.top - tooltipRect.height - 10;
    let left = rect.left + rect.width / 2 - tooltipRect.width / 2;

    // Flip to bottom if clipping top
    if (top < 12) {
      top = rect.bottom + 10;
    }

    // Keep within horizontal bounds
    const padding = 12;
    if (left < padding) left = padding;
    if (left + tooltipRect.width > window.innerWidth - padding) {
      left = window.innerWidth - tooltipRect.width - padding;
    }

    tooltipBox.style.top = `${top + window.scrollY}px`;
    tooltipBox.style.left = `${left}px`;
  }

  // Attach hover and focus listeners using delegation
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (target) {
      showTooltip(target);
    } else if (activeEl) {
      hideTooltip();
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (target && target === activeEl) {
      hideTooltip();
    }
  });

  document.addEventListener('focusin', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (target) showTooltip(target);
  });

  document.addEventListener('focusout', () => {
    hideTooltip();
  });

  window.addEventListener('scroll', () => {
    if (activeEl) positionTooltip(activeEl);
  }, { passive: true });
}
