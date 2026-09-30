/**
 * CONFIG LOADER & DOM HYDRATOR
 * ----------------------------
 * Connects centralized personalInfo from portfolioData.js into all matching DOM elements.
 */

import { personalInfo } from '../data/portfolioData.js';

export function initConfigLoader() {
  // Update document title and meta description
  document.title = `${personalInfo.heroTitle} // ${personalInfo.name} — ${personalInfo.role}`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute(
      'content',
      `Personal portfolio of ${personalInfo.name} — ${personalInfo.role} at ${personalInfo.university}. Exploring algorithms, modern web systems, and creative engineering.`
    );
  }

  // Populate all text elements by data-profile attribute
  document.querySelectorAll('[data-profile]').forEach(el => {
    const key = el.getAttribute('data-profile');
    if (key === 'name') el.textContent = personalInfo.name;
    if (key === 'hero-title') el.textContent = personalInfo.heroTitle;
    if (key === 'university') el.textContent = personalInfo.university;
    if (key === 'role' || key === 'degree') el.textContent = personalInfo.role;
    if (key === 'location') el.textContent = personalInfo.location;
    if (key === 'coordinates') el.textContent = personalInfo.coordinates;
    if (key === 'email') el.textContent = personalInfo.email;
    if (key === 'status-text' || key === 'status') el.textContent = personalInfo.status;
  });

  // Update dynamic links (Email, GitHub, LinkedIn, Twitter, LeetCode)
  document.querySelectorAll('[data-link]').forEach(el => {
    const linkType = el.getAttribute('data-link');
    if (linkType === 'email') {
      el.setAttribute('href', `mailto:${personalInfo.email}`);
    } else if (linkType === 'github') {
      el.setAttribute('href', personalInfo.socials.github);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    } else if (linkType === 'linkedin') {
      el.setAttribute('href', personalInfo.socials.linkedin);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    } else if (linkType === 'twitter' && personalInfo.socials.twitter) {
      el.setAttribute('href', personalInfo.socials.twitter);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    } else if (linkType === 'leetcode' && personalInfo.socials.leetcode) {
      el.setAttribute('href', personalInfo.socials.leetcode);
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
        timeZone: personalInfo.timezone || 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      clockEl.textContent = `${timeString} IST • ${personalInfo.location}`;
    } catch (e) {
      clockEl.textContent = 'Jaipur, India';
    }
  }

  update();
  setInterval(update, 1000);
}
