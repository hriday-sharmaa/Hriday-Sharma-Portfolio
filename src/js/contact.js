/**
 * CONTACT FORM & CLIPBOARD COPY SYSTEM
 * Hriday Sharma Portfolio
 */

import { profileConfig } from '../data/config.js';
import { sound } from './interactive-sound.js';

export function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconSvg = type === 'success' 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

export function initContact() {
  // Copy Email Button
  const copyBtn = document.getElementById('btn-copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      sound.playClick();
      try {
        await navigator.clipboard.writeText(profileConfig.email);
        sound.playChime();
        showToast(`Copied ${profileConfig.email} to clipboard!`, 'success');
      } catch (err) {
        showToast(`Email: ${profileConfig.email}`, 'info');
      }
    });
  }

  // Contact Form Submission Simulation
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      sound.playClick();

      const name = form.querySelector('#contact-name').value.trim();
      const email = form.querySelector('#contact-email').value.trim();
      const subject = form.querySelector('#contact-subject').value.trim();
      const message = form.querySelector('#contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'info');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
        Sending...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        sound.playChime();
        showToast('Thank you! Your message has been sent successfully.', 'success');
      }, 1000);
    });
  }
}
