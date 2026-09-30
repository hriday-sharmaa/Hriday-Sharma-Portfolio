/**
 * CONFIG LOADER & DOM HYDRATOR
 * ----------------------------
 * Connects centralized profileConfig into all matching DOM elements.
 */

import { profileConfig } from '../data/config.js';

export function initConfigLoader() {
  // Update document title and meta description
  if (profileConfig.meta) {
    document.title = profileConfig.meta.title || `${profileConfig.name} | Portfolio`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && profileConfig.meta.description) {
      metaDesc.setAttribute('content', profileConfig.meta.description);
    }
  }

  // Populate all text elements by data-profile attribute
  document.querySelectorAll('[data-profile]').forEach(el => {
    const key = el.getAttribute('data-profile');
    if (key === 'name') el.textContent = profileConfig.name;
    if (key === 'university') el.textContent = profileConfig.university;
    if (key === 'degree') el.textContent = profileConfig.degree;
    if (key === 'location') el.textContent = profileConfig.location;
    if (key === 'email') el.textContent = profileConfig.email;
    if (key === 'headline') el.textContent = profileConfig.headline;
    if (key === 'status-text') el.textContent = profileConfig.status?.text || "Available for Opportunities";
  });

  // Update dynamic links (Email, GitHub, LinkedIn)
  document.querySelectorAll('[data-link]').forEach(el => {
    const linkType = el.getAttribute('data-link');
    if (linkType === 'email') {
      el.setAttribute('href', `mailto:${profileConfig.email}`);
    } else if (linkType === 'github') {
      el.setAttribute('href', profileConfig.socials.github);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    } else if (linkType === 'linkedin') {
      el.setAttribute('href', profileConfig.socials.linkedin);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // Initialize Jaipur Live Clock
  initLiveClock();
}

function initLiveClock() {
  const clockEl = document.getElementById('live-jaipur-clock');
  if (!clockEl) return;

  function update() {
    try {
      const now = new Date();
      const options = {
        timeZone: profileConfig.timezone || 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      clockEl.textContent = `${timeString} IST • Jaipur, IN`;
    } catch (e) {
      clockEl.textContent = 'Jaipur, Rajasthan, India';
    }
  }

  update();
  setInterval(update, 1000);
}
