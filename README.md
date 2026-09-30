# Hriday Sharma — Personal Portfolio Website 🚀

> **High-end, award-winning personal developer portfolio** built for **Hriday Sharma**, 1st Year B.Tech Computer Science & Engineering student at **JECRC University, Jaipur**.

---

## 🌟 Highlights & Key Features

- **Centralized Profile Configuration**: Single source of truth in `src/data/config.js` for updating name, email, socials (GitHub, LinkedIn), bio, and university details without digging through HTML files.
- **Dark Luxury Aesthetic**: Deep obsidian canvas, glowing cyan/purple gradients, glassmorphism (`backdrop-filter: blur(16px)`), and crisp micro-interactions.
- **Interactive Constellation Canvas**: 60 FPS HTML5 Canvas particle network in the hero section with mouse magnetism and smart CPU/battery throttling.
- **Interactive Developer Console / CLI**: A terminal emulator with autocompletion, history navigation (Up/Down arrow keys), and commands like `help`, `skills`, `projects`, `education`, `contact`, `cat hriday.json`, and `sudo hire-hriday`.
- **Procedural Web Audio API Sound Effects**: Zero external sound file downloads. Micro-haptic sounds synthesized natively with a mute/unmute toggle in the navbar.
- **Filterable Featured Projects**: Category filters (Algorithms & DSA, Web Applications, Developer Tools, CS Fundamentals) with interactive "Architecture & Spec" case study modal deep dives.
- **Technical Skills Matrix**: Visual proficiency meters with interactive category tabs.
- **Academic Timeline & JECRC University Showcase**: Detailed display of current coursework (DSA in C++, OOP, Discrete Math, Computer Architecture) and milestones.
- **Jaipur Live Clock (IST UTC+5:30)**: Live real-time clock updating every second reflecting Jaipur local time.
- **Printable Curriculum Vitae (CV) Modal**: In-browser resume viewer with dedicated print styles for "Print to PDF".
- **Zero Build Step / Zero Overhead**: Pure ES Modules. Runs instantly in any modern browser without waiting for `npm install`.

---

## 📁 Directory Structure

```text
Hriday Sharma Portfolio/
├── index.html                  # Accessible, semantic, SEO-optimized HTML5 document
├── package.json                # Project manifest and local server scripts
├── README.md                   # Documentation and deployment guide
├── .gitignore
├── src/
│   ├── data/
│   │   ├── config.js           # ⚡ CENTRAL SOURCE OF TRUTH (Profile, socials, bio)
│   │   ├── projects.js         # Project specifications, metrics, highlights
│   │   ├── skills.js           # Categorized technical competencies
│   │   └── education.js        # JECRC University coursework & timeline
│   ├── css/
│   │   ├── main.css            # Tokens, CSS variables, typography, reset
│   │   ├── components.css      # Floating navbar, cards, modals, resume sheet
│   │   ├── animations.css      # Keyframes, glow, float, scroll-reveal
│   │   └── terminal.css        # Interactive CLI terminal styling
│   └── js/
│       ├── main.js             # App entry, dynamic rendering, event bus
│       ├── config-loader.js    # DOM hydrator & Jaipur live clock
│       ├── particle-canvas.js  # Hero canvas constellation physics
│       ├── interactive-sound.js# Web Audio API procedural synthesis
│       ├── cursor.js           # Magnetic cursor follower
│       ├── theme.js            # Dark/Light theme manager with localStorage
│       ├── terminal.js         # Terminal shell parser & commands
│       ├── project-modal.js    # Project architecture modal
│       └── contact.js          # Contact form & copy-to-clipboard handler
```

---

## ⚙️ Updating Your Social Links & Information

Open `src/data/config.js` and modify your credentials:

```javascript
export const profileConfig = {
  name: "Hriday Sharma",
  email: "hridaysharma3264@gmail.com",
  socials: {
    github: "https://github.com/your-username", // 👈 Replace with your GitHub URL
    linkedin: "https://linkedin.com/in/your-username", // 👈 Replace with your LinkedIn URL
  },
  university: "JECRC University",
  degree: "B.Tech Computer Science & Engineering (1st Year)",
};
```

All links, buttons, footers, headers, and terminal commands update automatically!

---

## 🚀 Running Locally

Because this project is built with modern ES Modules, start any local HTTP server:

### Option 1: Python (Built-in)
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

### Option 2: VS Code Live Server
Right-click `index.html` and select **"Open with Live Server"**.

### Option 3: Node / npx (If Node.js is installed)
```bash
npx serve .
```

---

## 🌐 Deploying to the Web (Free)

### Deploy to GitHub Pages:
1. Create a repository on GitHub (e.g. `hridaysharma-portfolio`).
2. Push this folder to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Hriday Sharma Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/hridaysharma-portfolio.git
   git push -u origin main
   ```
3. In GitHub repo settings, navigate to **Pages** -> **Source: Deploy from branch** -> select `main` -> `/ (root)`.
4. Your site will be live at `https://<your-username>.github.io/hridaysharma-portfolio/`.

### Deploy to Vercel / Netlify:
- Drag and drop this folder directly into the Netlify or Vercel dashboard. Zero build configuration required!

---

## 📄 License
MIT © [Hriday Sharma](mailto:hridaysharma3264@gmail.com)
