/**
 * INTERACTIVE DEVELOPER CONSOLE TERMINAL
 * Hriday Sharma Portfolio
 */

import { profileConfig } from '../data/config.js';
import { projectsData } from '../data/projects.js';
import { skillsCategories } from '../data/skills.js';
import { sound } from './interactive-sound.js';

export function initTerminal() {
  const terminalScreen = document.getElementById('terminal-screen');
  const terminalInput = document.getElementById('terminal-input');
  if (!terminalScreen || !terminalInput) return;

  const commandHistory = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
<span class="cyan">Available Commands:</span>
  <span class="green">about</span>       - Learn more about Hriday and his journey
  <span class="green">skills</span>      - View technical stack & competencies
  <span class="green">projects</span>    - Browse key software engineering projects
  <span class="green">education</span>   - Academic background @ JECRC University
  <span class="green">contact</span>     - Get in touch directly
  <span class="green">socials</span>     - Links to GitHub and LinkedIn
  <span class="green">cat hriday.json</span> - Inspect profile configuration
  <span class="green">date</span>        - Display Jaipur (IST) local time
  <span class="green">sudo hire-hriday</span> - Unlock hiring protocol
  <span class="green">clear</span>       - Clear the console screen
`,
    about: () => `
<span class="cyan">Hriday Sharma</span>
<span class="purple">${profileConfig.role || profileConfig.degree}</span>
<span class="muted">Institution:</span> ${profileConfig.university}, Jaipur, India

${profileConfig.bio.join('\n\n')}
`,
    skills: () => {
      let output = '<span class="cyan">Technical Skills Matrix:</span>\n';
      skillsCategories.forEach(cat => {
        output += `\n<span class="purple">[${cat.name}]</span>\n`;
        const items = cat.skills.map(s => `${s.name} (${s.badge})`).join(' • ');
        output += `  ${items}\n`;
      });
      return output;
    },
    projects: () => {
      let output = '<span class="cyan">Featured Engineering Projects:</span>\n';
      projectsData.forEach(p => {
        output += `\n<span class="green">▶ ${p.title}</span> <span class="muted">[${p.category}]</span>\n`;
        output += `  ${p.description}\n`;
        output += `  <span class="cyan">Tech:</span> ${p.tags.join(', ')}\n`;
      });
      return output;
    },
    education: () => `
<span class="cyan">Academics & University:</span>
  <span class="green">Degree:</span> ${profileConfig.degree}
  <span class="green">Campus:</span> ${profileConfig.university}, Jaipur, Rajasthan, India
  <span class="green">Status:</span> 1st Year (Batch of 2024 - 2028)
  <span class="green">Core Focus:</span> Data Structures, Algorithms, C++, Computer Architecture & Web Systems
`,
    contact: () => `
<span class="cyan">Direct Contact:</span>
  <span class="green">Email:</span> <a href="mailto:${profileConfig.email}" class="cyan">${profileConfig.email}</a>
  <span class="green">GitHub:</span> <a href="${profileConfig.socials.github}" target="_blank" class="purple">${profileConfig.socials.github}</a>
  <span class="green">LinkedIn:</span> <a href="${profileConfig.socials.linkedin}" target="_blank" class="purple">${profileConfig.socials.linkedin}</a>
  <span class="green">Location:</span> ${profileConfig.location}
`,
    socials: () => `
<span class="cyan">Social Media & Code Repositories:</span>
  • GitHub: <a href="${profileConfig.socials.github}" target="_blank" class="cyan">${profileConfig.socials.github}</a>
  • LinkedIn: <a href="${profileConfig.socials.linkedin}" target="_blank" class="cyan">${profileConfig.socials.linkedin}</a>
`,
    date: () => {
      const now = new Date();
      return `<span class="amber">${now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST (Jaipur, India)</span>`;
    },
    'cat hriday.json': () => {
      return `<span class="purple">${JSON.stringify(profileConfig, null, 2)}</span>`;
    },
    'sudo hire-hriday': () => `
<span class="green">
  ███████╗██╗   ██╗ ██████╗ ██████╗███████╗███████╗██╗
  ██╔════╝██║   ██║██╔════╝██╔════╝██╔════╝██╔════╝██║
  ███████╗██║   ██║██║     ██║     █████╗  ███████╗██║
  ╚════██║██║   ██║██║     ██║     ██╔══╝  ╚════██║╚═╝
  ███████║╚██████╔╝╚██████╗╚██████╗███████╗███████║██╗
  ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝╚══════╝╚══════╝╚═╝
</span>
<span class="cyan">Access granted! Hriday is actively seeking software internships and open-source collaborations.</span>
<span class="amber">Initiating email client to ${profileConfig.email}...</span>
`,
    clear: () => {
      terminalScreen.innerHTML = '';
      return null;
    }
  };

  function executeCommand(rawCmd) {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;

    // Create entry row
    const block = document.createElement('div');
    block.className = 'terminal-output-block';

    const cmdLine = document.createElement('div');
    cmdLine.className = 'terminal-command-line';
    cmdLine.innerHTML = `<span class="terminal-prompt-user">visitor@hriday:~$</span> <span class="terminal-command-text">${escapeHtml(trimmed)}</span>`;
    block.appendChild(cmdLine);

    const lowerCmd = trimmed.toLowerCase();
    let result = '';

    if (commands[lowerCmd]) {
      result = commands[lowerCmd]();
      if (lowerCmd === 'sudo hire-hriday') {
        setTimeout(() => {
          window.location.href = `mailto:${profileConfig.email}?subject=Internship%20Opportunity%20for%20Hriday%20Sharma`;
        }, 1200);
      }
    } else {
      result = `<span class="muted">command not found: ${escapeHtml(trimmed)}. Type '<span class="cyan">help</span>' for a list of valid commands.</span>`;
    }

    if (result !== null) {
      const responseEl = document.createElement('div');
      responseEl.className = 'terminal-response';
      responseEl.innerHTML = result;
      block.appendChild(responseEl);
      terminalScreen.appendChild(block);
      terminalScreen.scrollTop = terminalScreen.scrollHeight;
    }
  }

  terminalInput.addEventListener('keydown', (e) => {
    sound.playTerminalKey();

    if (e.key === 'Enter') {
      const cmd = terminalInput.value;
      terminalInput.value = '';
      executeCommand(cmd);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const val = terminalInput.value.toLowerCase().trim();
      const available = Object.keys(commands);
      const match = available.find(c => c.startsWith(val));
      if (match) {
        terminalInput.value = match;
      }
    }
  });

  // Handle clickable preset command badges
  document.querySelectorAll('.terminal-badge').forEach(badge => {
    badge.addEventListener('click', () => {
      const cmd = badge.getAttribute('data-cmd') || badge.textContent.trim();
      terminalInput.value = cmd;
      executeCommand(cmd);
      sound.playClick();
    });
  });

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
