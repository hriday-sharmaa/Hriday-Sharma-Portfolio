/**
 * BENTO GRID INTERACTIVE WIDGETS & DESIGN FLEX ENGINE
 * Hriday Sharma Portfolio
 */

import { personalInfo, bentoTelemetry } from '../data/portfolioData.js';
import { sound } from './interactive-sound.js';

export function initBentoWidgets() {
  initLiveTelemetry();
  initMiniAlgoSandbox();
  initActivityMatrix();
  init3DTilt();
  initTextScramble();
  initFocusBeatWidget();
}

/* ==========================================================================
   1. Live Telemetry & Jaipur Clock
   ========================================================================== */
function initLiveTelemetry() {
  const clockEls = document.querySelectorAll('.clock-display, #live-jaipur-clock');
  
  function updateClock() {
    try {
      const now = new Date();
      const options = {
        timeZone: personalInfo.timezone || 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
      clockEls.forEach(el => {
        el.textContent = `${timeStr} IST`;
      });
    } catch (e) {
      clockEls.forEach(el => el.textContent = 'Jaipur, India');
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   2. Interactive Mini Algorithm Sandbox (Bento Card)
   ========================================================================== */
function initMiniAlgoSandbox() {
  const canvas = document.getElementById('bento-algo-canvas');
  const btnShuffle = document.getElementById('btn-algo-shuffle');
  const btnSort = document.getElementById('btn-algo-sort');
  if (!canvas || !btnShuffle || !btnSort) return;

  const ctx = canvas.getContext('2d');
  let array = [];
  const BAR_COUNT = 24;
  let isSorting = false;

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight || 120;
    renderBars();
  }

  function resetArray() {
    array = [];
    for (let i = 0; i < BAR_COUNT; i++) {
      array.push(Math.floor(Math.random() * 80) + 15);
    }
    renderBars();
  }

  function renderBars(activeIdx = -1, comparedIdx = -1) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = (canvas.width / BAR_COUNT) - 2;

    for (let i = 0; i < array.length; i++) {
      const barHeight = (array[i] / 100) * (canvas.height - 15);
      const x = i * (barWidth + 2);
      const y = canvas.height - barHeight;

      if (i === activeIdx) {
        ctx.fillStyle = '#00f0ff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00f0ff';
      } else if (i === comparedIdx) {
        ctx.fillStyle = '#a855f7';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#a855f7';
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = 0;
      }

      ctx.fillRect(x, y, barWidth, barHeight);
    }
  }

  async function bubbleSort() {
    if (isSorting) return;
    isSorting = true;
    btnSort.disabled = true;
    btnShuffle.disabled = true;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        renderBars(j, j + 1);
        sound.playTerminalKey();
        await new Promise(r => setTimeout(r, 35));

        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          renderBars(j + 1, j);
        }
      }
    }

    renderBars();
    sound.playChime();
    isSorting = false;
    btnSort.disabled = false;
    btnShuffle.disabled = false;
  }

  btnShuffle.addEventListener('click', () => {
    if (isSorting) return;
    sound.playClick();
    resetArray();
  });

  btnSort.addEventListener('click', () => {
    if (isSorting) return;
    sound.playClick();
    bubbleSort();
  });

  window.addEventListener('resize', resizeCanvas);
  setTimeout(() => {
    resizeCanvas();
    resetArray();
  }, 100);
}

/* ==========================================================================
   3. GitHub Activity Matrix Simulation
   ========================================================================== */
function initActivityMatrix() {
  const container = document.getElementById('bento-activity-matrix');
  if (!container) return;

  const totalCells = 64; // 16 cols x 4 rows
  let html = '';

  for (let i = 0; i < totalCells; i++) {
    const rand = Math.random();
    let lvl = '';
    if (rand > 0.75) lvl = 'lvl-3';
    else if (rand > 0.5) lvl = 'lvl-2';
    else if (rand > 0.25) lvl = 'lvl-1';

    html += `<div class="matrix-cell ${lvl}" title="Consistent Problem Solving & Projects"></div>`;
  }

  container.innerHTML = html;
}

/* ==========================================================================
   4. 3D Perspective Tilt on Bento & Project Cards
   ========================================================================== */
function init3DTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.bento-card, .project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ==========================================================================
   5. Text Decipher / Scramble Effect
   ========================================================================== */
function initTextScramble() {
  const scrambleElements = document.querySelectorAll('[data-scramble]');
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  scrambleElements.forEach(el => {
    const originalText = el.textContent;
    let interval = null;

    el.addEventListener('mouseenter', () => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        el.textContent = originalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, 30);
    });
  });
}

/* ==========================================================================
   6. Focus Beat / Ambient Lofi Sound Widget
   ========================================================================== */
function initFocusBeatWidget() {
  const playBtn = document.getElementById('focus-beat-toggle');
  const eqBars = document.querySelectorAll('.eq-bar');
  const trackTitle = document.getElementById('focus-track-title');
  if (!playBtn) return;

  let isPlaying = false;
  let synthLoop = null;

  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    sound.playClick();

    if (isPlaying) {
      playBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
        <span>Pause Focus Beats</span>
      `;
      eqBars.forEach(b => b.style.animationPlayState = 'running');
      if (trackTitle) trackTitle.style.color = 'var(--accent-cyan)';
      startAmbientSynth();
    } else {
      playBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        <span>Play Ambient Beats</span>
      `;
      eqBars.forEach(b => b.style.animationPlayState = 'paused');
      if (trackTitle) trackTitle.style.color = '';
      stopAmbientSynth();
    }
  });

  function startAmbientSynth() {
    sound.playChime();
    // Repeating soft ambient synth pulse every 3s
    synthLoop = setInterval(() => {
      sound.playHover();
    }, 3000);
  }

  function stopAmbientSynth() {
    if (synthLoop) {
      clearInterval(synthLoop);
      synthLoop = null;
    }
  }
}
