# HRIDAY // Hriday Sharma — High-End Developer Portfolio ⚡

> **Award-winning, futuristic "Design Flex" developer portfolio** inspired by cutting-edge developer sites (like **Jishnu Mondal's portfolio**), built for **Hriday Sharma**, 1st Year B.Tech Computer Science & Engineering student at **JECRC University, Jaipur**.

---

## 🌟 Avant-Garde "Design Flex" Highlights

- **Monumental Typographic Impact**: Ultra-bold `HRIDAY` hero title crafted with `Syne` display font, text-scramble/decipher hover effects, and interactive letter scaling.
- **The Bento Grid Showcase**:
  1. **Core Persona & Philosophy**: "Algorithmic Precision Meets Radical Visual Design".
  2. **JECRC Cyber Student ID Hologram Card**: High-tech badge with 3D tilt, microchip graphics, QR code, and Jaipur telemetry coordinates (`26.9124° N, 75.7873° E`).
  3. **Interactive Algorithm Sandbox**: In-card playable sorting bench with **[Shuffle Array]** and **[Run BubbleSort]** featuring synthesized audio feedback!
  4. **Activity & Commit Heatmap Matrix**: 64-cell GitHub contribution density simulation.
  5. **Jaipur Telemetry & Radar Clock**: Real-time IST (UTC+5:30) clock with live coordinates and weather condition.
  6. **Focus Beat / Ambient Lofi Player Widget**: Audio synthesizer with spinning album vinyl and bouncing EQ visualizer bars.
  7. **Infinite Tech Stack Marquee**: Continuous dual-direction scrolling ticker featuring C++, Python, JavaScript, Algorithms, and modern web tooling.
- **01, 02, 03, 04 Selected Works**:
  - High-impact project showcase cards with 3D perspective tilt on hover, custom SVG vector art, metrics, and architecture spec modal overlays.
- **Interactive Developer Console (CLI)**:
  - Built-in terminal emulator with autocompletion (<kbd>Tab</kbd>), history navigation (<kbd>↑</kbd> / <kbd>↓</kbd>), and commands:
    `help`, `about`, `skills`, `projects`, `education`, `hackathons`, `contact`, `socials`, `cat hriday.json`, `sudo hire-hriday`, and `clear`.
- **Procedural Web Audio API Sound Effects**:
  - Zero external sound files. Synthesized UI micro-haptics for clicks, hovers, terminal keys, and algorithm sorting, with a toggle in the navbar.
- **Centralized Single Configuration Engine**:
  - Managed via [`src/data/portfolioData.js`](file:///c:/Users/fasttrack/OneDrive/Desktop/Hriday%20Sharma%20Portfolio/src/data/portfolioData.js).

---

## ⚙️ Updating Your Social Links & Information

Open [`src/data/portfolioData.js`](file:///c:/Users/fasttrack/OneDrive/Desktop/Hriday%20Sharma%20Portfolio/src/data/portfolioData.js):

```javascript
export const personalInfo = {
  name: "Hriday Sharma",
  heroTitle: "HRIDAY",
  role: "1st Year B.Tech CSE Undergrad",
  university: "JECRC University, Jaipur",
  email: "hridaysharma3264@gmail.com",
  socials: {
    github: "https://github.com/your-username", // 👈 Replace with your GitHub URL
    linkedin: "https://linkedin.com/in/your-username", // 👈 Replace with your LinkedIn URL
  },
  location: "Jaipur, India",
  status: "Available for Hackathons & Projects"
};
```

All links, buttons, headers, footers, cyber ID cards, and terminal commands update automatically across the site!

---

## 📁 Directory Structure

```text
Hriday Sharma Portfolio/
├── index.html                   # Avant-garde, semantic, SEO-optimized HTML5 entry
├── package.json                 # Project manifest & local dev server scripts
├── README.md                    # Documentation and deployment guide
├── .gitignore
├── src/
│   ├── data/
│   │   ├── portfolioData.js     # ⚡ CENTRAL SOURCE OF TRUTH (personalInfo, telemetry, bento)
│   │   ├── config.js            # Backward-compatible config bridge
│   │   ├── projects.js          # Project specifications, metrics, highlights
│   │   ├── skills.js            # Categorized technical competencies
│   │   └── education.js         # JECRC University coursework & timeline
│   ├── css/
│   │   ├── main.css             # Tokens, typography, film grain, cyber grid
│   │   ├── components.css       # Monumental hero, bento cards, cyber ID, modals
│   │   ├── animations.css       # Keyframes, pulse-ring, eq-bounce, marquee-scroll
│   │   └── terminal.css         # Interactive CLI terminal styling
│   └── js/
│       ├── main.js              # Client application entry point & rendering
│       ├── bento-widgets.js     # 3D tilt, algorithm sandbox, activity matrix, telemetry
│       ├── config-loader.js     # DOM hydrator & Jaipur live clock
│       ├── particle-canvas.js   # 60 FPS hero constellation canvas with physics
│       ├── interactive-sound.js # Web Audio API procedural synthesis
│       ├── cursor.js            # Reactive magnetic cursor follower
│       ├── theme.js             # Dark / Light theme manager with persistence
│       ├── terminal.js          # Terminal shell parser & commands
│       ├── project-modal.js     # Project architecture modal
│       └── contact.js           # Contact form & copy-to-clipboard handler
```

---

## 🚀 Running Locally

```bash
# Using Python (Built-in)
python -m http.server 3000

# Or using Node / npx (if installed)
npx serve .
```
Then visit **`http://localhost:3000`** in your browser.

---

## 🌐 Deploying to the Web

### Deploy to GitHub Pages (100% Free):
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/hridaysharma-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. In your repo on GitHub: go to **Settings** → **Pages** → choose `main` branch → `/ (root)` → **Save**.
3. Live instantly at `https://<your-username>.github.io/hridaysharma-portfolio/`.

---

## 📄 License
MIT © [Hriday Sharma](mailto:hridaysharma3264@gmail.com)
