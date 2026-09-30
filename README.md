# THE DIGITAL JOURNEY — HRIDAY SHARMA
### Personal Developer Portfolio & Creative Space

> *"Curious mind. Building beyond the ordinary."*  
> **Hriday Sharma** — First-Year Computer Science Engineering Student @ JECRC University, Jaipur

---

## 🎨 Creative Design Direction

This portfolio embodies **"THE DIGITAL JOURNEY — HRIDAY SHARMA"**, fusing **premium editorial design**, **futuristic digital aesthetics**, and **minimalist creative developer craftsmanship**.

- **Aesthetic Tone:** Sophisticated, Minimal, Creative, Futuristic, Elegant, Clean, Premium, Visually Distinctive
- **Palette Tokens:**
  - **Warm Ivory:** `#F5F3EE` — Contrast typography, crisp editorial rules
  - **Deep Charcoal:** `#171717` — Deep architectural foundation
  - **Electric Lime:** `#C6F36B` — Tactical high-voltage focal points & status indicators
  - **Soft Grey:** `#A5A5A5` — Secondary editorial notes & monospace metadata
- **Typography:** Expressive oversized editorial typography (`Syne`), clean modern sans-serif (`Plus Jakarta Sans`), and precision technical monospace (`JetBrains Mono`).

---

## 🧭 Sections & Architecture

1. **Sticky Navigation Bar:**
   - Left: `HRIDAY.SHARMA` with live pulse dot & year indicator
   - Right: Smooth anchor links (`Home`, `About`, `Journey`, `Skills`, `Projects`, `Contact`)
   - Scroll compression: automatically becomes compact on scroll
   - Mobile: Fullscreen editorial hamburger drawer

2. **Hero Section:**
   - Small top label: `COMPUTER SCIENCE STUDENT / JAIPUR, INDIA`
   - Expressive oversized headline: `"Curious mind. Building beyond the ordinary."` with `ordinary.` highlighted in Electric Lime
   - Authentic personal introduction
   - Two CTA buttons: `[EXPLORE MY WORK]` & `[LET'S CONNECT]`
   - Original pure CSS 3D polyhedral cube sculpture with orbital rings and coordinate telemetry HUD
   - Live animated status badge: `CURRENTLY LEARNING C`
   - Monospace scroll indicator

3. **About Me (`More than a student.`):**
   - Authentic student perspective at JECRC University
   - Three guiding philosophy pillars: `CURIOSITY-FIRST`, `BUILD TO LEARN`, `CONTINUOUS GROWTH`
   - Academic metadata badges

4. **My Journey (Vertical Timeline):**
   - Period: `2026 — PRESENT`
   - Degree: `B.Tech Computer Science Engineering` at `JECRC University`
   - Exploration domains: C Programming, Computational Logic, Memory Basics, Problem Solving
   - Extensible structure for future milestones

5. **Skills & Exploration (`Learning. Exploring. Growing.`):**
   - **Card 01 — Programming:** C Language, Currently Learning with authentic C syntax preview
   - **Card 02 — Foundations:** CS Fundamentals, Problem Solving with memory map architectural preview
   - **Card 03 — Interests:** Software Development, Web Development, Technology & Innovation
   - **Zero fake percentages** or exaggerated claims — honest and authentic

6. **Project Showcase (`Ideas into experiences.`):**
   - Asymmetric cards with bespoke CSS generative previews
   - **Project 01:** *Personal Portfolio Website* (Completed)
   - **Project 02:** *Coming Soon* (In Development — C Programming & Algorithmic Logic Hub)
   - **Project 03:** *Coming Soon* (Conceptualizing — Interactive Web Systems)
   - Dedicated GitHub & Live Preview action links

7. **Contact Section (`Have an idea? Let's make it happen.`):**
   - Working `mailto:hridaysharma3264@gmail.com` link
   - Interactive `Copy Email` button with instant feedback toast
   - Dedicated GitHub & LinkedIn profile buttons
   - Direct Dispatch email composer

8. **Minimalist Editorial Footer:**
   - `HRIDAY SHARMA`
   - `"Designed with curiosity. Built with passion."`
   - `2026 © ALL RIGHTS RESERVED.`
   - Geographic coordinates & Back to Top button

---

## ⚙️ Updating Your Social Links (Quick Guide)

All social URLs and personal data are configured in **one single file**:

👉 `src/config/portfolioConfig.ts`

To update your GitHub or LinkedIn URLs, open `src/config/portfolioConfig.ts` and edit lines 68–80:

```ts
socials: {
  email: "hridaysharma3264@gmail.com",
  github: {
    label: "GitHub",
    url: "https://github.com/your-username", // <-- Replace with your GitHub URL
    handle: "@hridaysharma",
    isCustom: true,
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://linkedin.com/in/your-username", // <-- Replace with your LinkedIn URL
    handle: "Hriday Sharma",
    isCustom: true,
  },
},
```

---

## 🚀 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete The Digital Journey portfolio for Hriday Sharma"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Next.js will be auto-detected. Click **Deploy**.
