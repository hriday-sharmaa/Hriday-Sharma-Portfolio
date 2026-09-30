/**
 * PROJECT CASE STUDY & ARCHITECTURE MODAL
 * Inspired by Jishnu Mondal & Elite "Design Flex" Developer Portfolios
 */

import { featuredProjects, isPlaceholderUrl } from '../data/portfolioData.js';
import { sound } from './interactive-sound.js';
import { showToast } from './contact.js';

export function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay || !modalBody || !closeBtn) return;

  function openModal(projectId) {
    const project = featuredProjects.find(p => p.id === projectId);
    if (!project) return;

    sound.playClick();

    const isGhPlaceholder = isPlaceholderUrl(project.github);
    const isDemoPlaceholder = isPlaceholderUrl(project.demo);

    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="project-badge-pill" style="position: static; display: inline-block; margin-bottom: 0.75rem;">${project.badge || 'Featured Work'}</span>
        <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.35rem;">
          <span style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--accent-cyan);">${project.num || '01'}</span>
          <h2 style="font-family: var(--font-tech); font-size: 2rem; color: var(--text-primary); font-weight: 800;">${project.title}</h2>
        </div>
        <p style="color: var(--accent-purple); font-weight: 600; font-size: 1rem; font-family: var(--font-tech);">${project.subtitle || project.category}</p>
      </div>

      <div style="margin-bottom: 1.5rem; line-height: 1.7; color: var(--text-secondary); font-size: 1.02rem;">
        <p style="margin-bottom: 1rem;">${project.fullDescription || project.summary}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-family: var(--font-tech); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.85rem; color: var(--text-primary);">
          // Engineering Architecture & Specs
        </h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.65rem;">
          ${(project.highlights || []).map(h => `
            <li style="display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.95rem; color: var(--text-secondary);">
              <span style="color: var(--accent-cyan); font-weight: bold; margin-top: -1px;">✦</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.75rem;">
        <h4 style="font-family: var(--font-tech); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.85rem; color: var(--text-primary);">
          // Tech Stack & Tooling
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${project.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle);">
        <a href="${project.github}" ${isGhPlaceholder ? 'data-placeholder="true" data-tooltip="Repository coming soon (Configure in portfolioData.js)"' : 'target="_blank" rel="noopener noreferrer" data-tooltip="Open GitHub repository ↗"'} class="btn-card-action primary ${isGhPlaceholder ? 'is-placeholder' : ''}" style="padding: 0.8rem 1.6rem; border-radius: var(--radius-full); text-decoration: none;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          ${isGhPlaceholder ? 'Repository (Coming soon)' : 'Repository'}
        </a>
        <a href="${project.demo}" ${isDemoPlaceholder ? 'data-placeholder="true" data-tooltip="Live demo coming soon"' : 'target="_blank" rel="noopener noreferrer" data-tooltip="Open live sandbox ↗"'} class="btn-card-action ${isDemoPlaceholder ? 'is-placeholder' : ''}" style="padding: 0.8rem 1.6rem; border-radius: var(--radius-full); text-decoration: none;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          ${isDemoPlaceholder ? 'Live Demo (Coming soon)' : 'Live Sandbox'}
        </a>
      </div>
    `;

    // Attach click feedback for placeholder links in modal
    modalBody.querySelectorAll('.is-placeholder').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        sound.playClick();
        showToast('ℹ️ Project repository link coming soon — update your username in portfolioData.js', 'info');
      });
    });

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-modal-project]');
    if (btn) {
      const pid = btn.getAttribute('data-modal-project');
      openModal(pid);
    }
  });
}
