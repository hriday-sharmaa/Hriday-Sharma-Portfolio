/**
 * INTERACTIVE DEVELOPER CONSOLE TERMINAL
 * Inspired by Jishnu Mondal & Elite "Design Flex" Developer Portfolios
 */

import { personalInfo, featuredProjects, isPlaceholderUrl } from '../data/portfolioData.js';
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
  <span class="green">about</span>       - Developer persona & background
  <span class="green">skills</span>      - Technical stack & competencies
  <span class="green">projects</span>    - Browse key engineering systems
  <span class="green">education</span>   - JECRC University curriculum
  <span class="green">hackathons</span>  - Contests & community engagements
  <span class="green">contact</span>     - Reach out via transmission
  <span class="green">socials</span>     - Links to GitHub and LinkedIn
  <span class="green">cat hriday.json</span> - Dump portfolio configuration
  <span class="green">date</span>        - Display Jaipur (IST) local time
  <span class="green">sudo hire-hriday</span> - Unlock hiring protocol
  <span class="green">clear</span>       - Clear the console screen
`,
    about: () => `
<span class="cyan">${personalInfo.name}</span> (${personalInfo.heroTitle})
<span class="purple">${personalInfo.role}</span>
<span class="muted">Institution:</span> ${personalInfo.university}, India
<span class="muted">Status:</span> ${personalInfo.status}

First-year Computer Science & Engineering undergraduate at JECRC University. Focused on Data Structures & Algorithms (C++), modern web engineering, and high-performance interactive interfaces.
`,
    skills: () => {
      let output = '<span class="cyan">Technical Competencies:</span>\n';
      skillsCategories.forEach(cat => {
        output += `\n<span class="purple">[${cat.name}]</span>\n`;
        const items = cat.skills.map(s => `${s.name} (${s.badge})`).join(' • ');
        output += `  ${items}\n`;
      });
      return output;
    },
    projects: () => {
      let output = '<span class="cyan">Featured Systems (Selected Works):</span>\n';
      featuredProjects.forEach(p => {
        output += `\n<span class="green">▶ ${p.num} // ${p.title}</span> <span class="muted">[${p.category}]</span>\n`;
        output += `  ${p.summary}\n`;
        output += `  <span class="cyan">Tech:</span> ${p.tags.join(', ')}\n`;
      });
      return output;
    },
    education: () => `
<span class="cyan">Academics & Campus:</span>
  <span class="green">Degree:</span> ${personalInfo.role}
  <span class="green">Campus:</span> ${personalInfo.university}
  <span class="green">Coordinates:</span> ${personalInfo.coordinates}
  <span class="green">Batch:</span> 2024 - 2030
  <span class="green">Core Studies:</span> DSA (C++), OOP, Discrete Math, Computer Architecture & Web Systems
`,
    hackathons: () => `
<span class="cyan">Hackathons & Engineering Contests:</span>
  • Active participant in university-level algorithmic programming contests
  • Building collaborative prototypes for campus problem statements (CampusPulse)
  • Ready to team up for upcoming 24h & 48h hackathons!
`,
    contact: () => {
      const gh = personalInfo.socials.github;
      const li = personalInfo.socials.linkedin;
      const ghNotice = isPlaceholderUrl(gh) ? ' <span class="amber">[Coming soon]</span>' : '';
      const liNotice = isPlaceholderUrl(li) ? ' <span class="amber">[Coming soon]</span>' : '';
      return `
<span class="cyan">Direct Transmission:</span>
  <span class="green">Email:</span>    <a href="mailto:${personalInfo.email}" class="cyan">${personalInfo.email}</a>
  <span class="green">GitHub:</span>   <a href="${gh}" target="_blank" class="purple">${gh}</a>${ghNotice}
  <span class="green">LinkedIn:</span> <a href="${li}" target="_blank" class="purple">${li}</a>${liNotice}
  <span class="green">Location:</span> ${personalInfo.location}
`;
    },
    socials: () => {
      const gh = personalInfo.socials.github;
      const li = personalInfo.socials.linkedin;
      const ghNotice = isPlaceholderUrl(gh) ? ' <span class="amber">[Coming soon - handle pending]</span>' : ' <span class="green">[Active]</span>';
      const liNotice = isPlaceholderUrl(li) ? ' <span class="amber">[Coming soon - handle pending]</span>' : ' <span class="green">[Active]</span>';
      return `
<span class="cyan">Social Media & Code Repositories:</span>
  • GitHub:   <a href="${gh}" target="_blank" class="cyan">${gh}</a>${ghNotice}
  • LinkedIn: <a href="${li}" target="_blank" class="cyan">${li}</a>${liNotice}
  <span class="muted">Configurable in src/data/portfolioData.js</span>
`;
    },
    date: () => {
      const now = new Date();
      return `<span class="amber">${now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST (Jaipur, India)</span>`;
    },
    'cat hriday.json': () => {
      return `<span class="purple">${JSON.stringify(personalInfo, null, 2)}</span>`;
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
<span class="cyan">Access granted! Hriday is actively seeking software internships, hackathons, and open-source projects.</span>
<span class="amber">Initiating email client to ${personalInfo.email}...</span>
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
          window.location.href = `mailto:${personalInfo.email}?subject=Opportunity%20for%20Hriday%20Sharma`;
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
