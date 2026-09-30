# HRIDAY // Hriday Sharma — Developer Portfolio ⚡

> **Production-ready, highly aesthetic, and distinctive personal portfolio website** designed and engineered for **Hriday Sharma**, 1st Year B.Tech Computer Science & Engineering undergraduate at **JECRC University, Jaipur, Rajasthan, India**.

---

## 🟢 Core Context & Personal Information

- **Full Name:** Hriday Sharma
- **Headline / Title:** B.Tech Computer Science & Engineering (1st Year) | Aspiring Software Engineer & AI Enthusiast
- **Institution:** JECRC University, Jaipur, Rajasthan, India
- **Email:** [hridaysharma3264@gmail.com](mailto:hridaysharma3264@gmail.com)
- **Status Badge:** `🟢 1st-Year CSE @ JECRC | Open to Collaborations & Open Source`
- **Social Links:** Configurable placeholders in centralized configuration with clean interactive icons and subtle tooltip notices ("Coming soon" or direct links when populated):
  - **GitHub:** `https://github.com/[YOUR_USERNAME]`
  - **LinkedIn:** `https://linkedin.com/in/[YOUR_USERNAME]`

---

## 🌟 Architectural & UI/UX Highlights

1. **Subtle Status Badge**: A glowing pill tag in the hero section displaying:
   `🟢 1st-Year CSE @ JECRC | Open to Collaborations & Open Source` with live radar pulse indicator and smooth float micro-animation.
2. **Monumental Typographic Hero**: Ultra-bold `HRIDAY` title with text scramble/decipher on hover, dynamic headline display, and terminal typewriter rotation.
3. **Interactive Social Tooltip System**:
   - Automatically detects placeholder URLs (`[YOUR_USERNAME]`, `your-username`, `#`).
   - Renders subtle frosted-glass floating tooltip notice: `"Coming soon (Handle pending in portfolioData.js)"`.
   - Intercepts clicks on placeholder links to display a clean toast alert instead of a broken 404 page.
   - When configured with real usernames, seamlessly shifts to `"Visit Hriday's GitHub ↗"` and opens direct links.
4. **The Bento Grid Experience**:
   - **Narrative & Journey**: Core philosophy and focus areas.
   - **JECRC Hologram ID Card**: 3D mouse perspective tilt, microchip graphics, and QR matrix.
   - **Interactive Algorithm Sandbox**: Live in-card sorting benchmark with procedural sound feedback.
   - **GitHub Activity Heatmap**: Interactive 64-cell commit cadence visualization.
   - **Jaipur Telemetry & Radar Clock**: Real-time IST (UTC+5:30) clock and coordinates (`26.775352° N, 75.876276° E° N, 75.7873° E`).
   - **Focus Beat Synthesizer**: Ambient audio player with vinyl animation and equalizer bounce.
   - **Infinite Tech Radar Marquee**: Continuous ticker of daily tools and languages.
5. **Interactive Developer Console (CLI)**:
   - Built-in terminal emulator with autocompletion (<kbd>Tab</kbd>), history navigation (<kbd>↑</kbd> / <kbd>↓</kbd>), and commands:
     `help`, `about`, `skills`, `projects`, `education`, `hackathons`, `contact`, `socials`, `cat hriday.json`, `sudo hire-hriday`, and `clear`.
6. **Procedural Web Audio API Sound Effects**:
   - Zero audio assets. Pure synthesized UI micro-haptics for clicks, hovers, terminal keys, and algorithm sorting, with a toggle in the navbar.
7. **Printable Curriculum Vitae Modal**:
   - Clean, standardized resume sheet view with print / save-to-PDF button.

---

## ⚙️ Updating Your Social Links & Profile

You can update your handles and information in either [`src/data/portfolioData.js`](file:///c:/Users/fasttrack/OneDrive/Desktop/Hriday%20Sharma%20Portfolio/src/data/portfolioData.js), [`src/config/site.js`](file:///c:/Users/fasttrack/OneDrive/Desktop/Hriday%20Sharma%20Portfolio/src/config/site.js), or [`data.json`](file:///c:/Users/fasttrack/OneDrive/Desktop/Hriday%20Sharma%20Portfolio/data.json):

```javascript
// In src/config/site.js or src/data/portfolioData.js:
export const siteConfig = {
  name: "Hriday Sharma",
  headline: "B.Tech Computer Science & Engineering (1st Year) | Aspiring Software Engineer & AI Enthusiast",
  institution: "JECRC University, Jaipur, Rajasthan, India",
  email: "hridaysharma3264@gmail.com",
  statusBadge: "🟢 1st-Year CSE @ JECRC | Open to Collaborations & Open Source",
  socials: {
    github: "https://github.com/your-actual-github-username",    // 👈 Replace [YOUR_USERNAME]
    linkedin: "https://linkedin.com/in/your-actual-linkedin-username" // 👈 Replace [YOUR_USERNAME]
  }
};
```

Once updated, the site will automatically remove the "Coming soon" notice and enable direct links with tooltip previews.

---

## 📁 Directory Structure

```text
Hriday Sharma Portfolio/
├── index.html                   # Semantic, SEO-optimized HTML5 entry point
├── package.json                 # Project manifest & local dev server scripts
├── data.json                    # Centralized JSON representation of profile data
├── README.md                    # Project documentation
├── src/
│   ├── config/
│   │   ├── site.js              # ⚡ Central site & personal configuration
│   │   ├── profile.js           # Dedicated profile bridge
│   │   └── siteConfig.js        # Config router
│   ├── data/
│   │   ├── portfolioData.js     # ⚡ Central portfolio data, projects, and helpers
│   │   ├── projects.js          # Extended project specifications
│   │   ├── skills.js            # Categorized skills matrix
│   │   └── education.js         # JECRC University coursework & roadmap
│   ├── css/
│   │   ├── main.css             # Tokens, typography, film grain, cyber grid
│   │   ├── components.css       # Hero, bento grid, tooltips, cards, forms, modals
│   │   ├── animations.css       # Keyframes, pulse-ring, eq-bounce, marquee-scroll
│   │   └── terminal.css         # Interactive CLI terminal styling
│   └── js/
│       ├── main.js              # Client application entry point & rendering
│       ├── config-loader.js     # DOM hydrator, tooltip engine & live Jaipur clock
│       ├── bento-widgets.js     # 3D tilt, algo sandbox, activity matrix, audio player
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
python -m http.server 8000
```
Then visit **`http://localhost:8000`** in your browser.
