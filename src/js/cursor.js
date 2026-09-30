/**
 * CUSTOM REACTIVE CURSOR
 * Hriday Sharma Portfolio
 */

import { sound } from './interactive-sound.js';

export function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) {
    return; // Touch device, skip custom cursor
  }

  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';

  const cursorOutline = document.createElement('div');
  cursorOutline.className = 'cursor-outline';

  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let outlineX = mouseX;
  let outlineY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  // Smooth lerp for outer cursor ring
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateOutline);
  }
  requestAnimationFrame(animateOutline);

  // Hover states on interactive elements
  const interactiveSelectors = 'a, button, input, textarea, .project-card, .skill-card, .terminal-badge, .filter-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      document.body.classList.add('cursor-hover');
      sound.playHover();
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  document.addEventListener('mousedown', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.8)';
    sound.playClick();
  });

  document.addEventListener('mouseup', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
  });
}
