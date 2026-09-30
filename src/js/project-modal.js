/**
 * PROJECT CASE STUDY & ARCHITECTURE MODAL
 * Hriday Sharma Portfolio
 */

import { projectsData } from '../data/projects.js';
import { sound } from './interactive-sound.js';

export function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay || !modalBody || !closeBtn) return;

  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    sound.playClick();

    modalBody.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <span class="project-badge-pill" style="position: static; display: inline-block; margin-bottom: 0.75rem;">${project.badge || 'Project'}</span>
        <h2 style="font-size: 1.85rem; margin-bottom: 0.35rem; color: var(--text-primary);">${project.title}</h2>
        <p style="color: var(--accent-purple); font-weight: 600; font-size: 0.95rem;">${project.subtitle || project.category}</p>
      </div>

      <div style="margin-bottom: 1.5rem; line-height: 1.7; color: var(--text-secondary);">
        <p style="margin-bottom: 1rem;">${project.longDescription || project.description}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; margin-bottom: 0.75rem; color: var(--text-primary);">Engineering Architecture & Highlights</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem;">
          ${(project.highlights || []).map(h => `
            <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.92rem; color: var(--text-secondary);">
              <span style="color: var(--accent-cyan); font-weight: bold; margin-top: -1px;">✦</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.75rem;">
        <h4 style="font-size: 1rem; margin-bottom: 0.75rem; color: var(--text-primary);">Tech Stack & Libraries</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${project.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action primary" style="padding: 0.75rem 1.4rem; border-radius: var(--radius-full); text-decoration: none;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          View Source Repository
        </a>
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action" style="padding: 0.75rem 1.4rem; border-radius: var(--radius-full); text-decoration: none;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Launch Live App
        </a>
      </div>
    `;

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

  // Attach event delegation for "View Architecture" buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-modal-project]');
    if (btn) {
      const pid = btn.getAttribute('data-modal-project');
      openModal(pid);
    }
  });
}
