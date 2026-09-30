/**
 * CENTRALIZED PORTFOLIO DATA & FEATURED PROJECTS
 * ----------------------------------------------
 */

import { siteConfig } from '../config/siteConfig.js';

export { siteConfig, siteConfig as personalInfo, siteConfig as profileConfig };

export const bentoTelemetry = {
  city: "Jaipur",
  state: "Rajasthan",
  country: "India",
  coordinates: siteConfig.coordinates || "26.9124° N, 75.7873° E",
  timezone: siteConfig.timezone || "Asia/Kolkata",
  weather: "28°C • Clear Sky",
  systemStatus: "OPTIMAL"
};

export function isPlaceholderUrl(url) {
  if (!url) return true;
  return url.includes('[YOUR_USERNAME]') || 
         url.includes('your-username') || 
         url === '#' || 
         url.trim() === '';
}

export const featuredProjects = [
  {
    id: "algoverse",
    num: "01",
    title: "Algoverse: Interactive DSA Engine",
    subtitle: "Real-time Algorithm & Graph Visualizer",
    category: "Algorithms & Logic",
    badge: "Featured / 60 FPS",
    accent: "#06b6d4", // Frosted Cyan
    summary: "An interactive, web-based visualizer for sorting algorithms (QuickSort, MergeSort, HeapSort) and graph pathfinding (Dijkstra, A*) with step-by-step state playback.",
    fullDescription: "Algoverse was built to bridge the gap between theoretical algorithm analysis and visual intuition. Features dynamic obstacle drawing on a weighted grid mesh, customizable speed throttle, live theoretical vs. practical time/space complexity HUD, and procedural audio pitch feedback.",
    tags: ["C++ / JS", "HTML5 Canvas", "Sorting & Graphs", "Audio Synthesis", "Big-O Analysis"],
    metrics: [
      { label: "Render Rate", val: "60 FPS" },
      { label: "Algorithms", val: "8+ Implemented" },
      { label: "Latency", val: "< 16ms" }
    ],
    github: siteConfig.socials.github,
    demo: siteConfig.socials.github,
    highlights: [
      "Smooth 60 FPS HTML5 Canvas animation loop with zero external charting overhead",
      "Interactive barrier drawing with weighted graph physics (Dijkstra & A* Search)",
      "Real-time Big-O time and space complexity comparison HUD",
      "Synthesized audio frequency feedback matching array element magnitudes"
    ]
  },
  {
    id: "campuspulse",
    num: "02",
    title: "CampusPulse: Student Utility Hub",
    subtitle: "University Productivity & Timetable Suite",
    category: "Web Applications",
    badge: "Campus Favorite",
    accent: "#6366f1", // Electric Indigo
    summary: "A tailor-made productivity suite for JECRC University students featuring an automated 75% attendance margin simulator, SGPA target calculators, and offline notes storage.",
    fullDescription: "Designed to solve daily academic logistics for fellow engineering peers: monitoring stringent 75% attendance criteria with smart margin predictors ('How many classes can I safely miss?'), semester SGPA target curves, and timetable alerts with zero cloud dependency.",
    tags: ["JavaScript", "Tailwind CSS", "LocalStorage", "PWA Architecture", "Responsive UI"],
    metrics: [
      { label: "Attendance Criteria", val: "75% Alert" },
      { label: "Offline First", val: "100%" },
      { label: "Load Speed", val: "< 0.4s" }
    ],
    github: siteConfig.socials.github,
    demo: siteConfig.socials.github,
    highlights: [
      "Smart 75% attendance criteria margin calculator ('Bunk vs Attend' safe zone simulator)",
      "Interactive SGPA target curve calculator for mid-terms and end-term exams",
      "Offline-first client caching via LocalStorage with instant retrieval",
      "Minimalist, distraction-free modern dark interface for late-night study sessions"
    ]
  },
  {
    id: "neurochat",
    num: "03",
    title: "NeuroChat: AI Conversational Studio",
    subtitle: "AI-Powered Web Application & Chatbot",
    category: "Generative AI & Web",
    badge: "AI Application",
    accent: "#10b981", // Emerald Accent
    summary: "A sleek, responsive AI conversational workspace featuring streaming token simulation, custom prompt personas, markdown code syntax rendering, and chat history caching.",
    fullDescription: "Built to experiment with modern AI APIs, prompt engineering, and conversational UI patterns. Includes dynamic system prompts (Code Reviewer, DSA Tutor, Academic Writing Assistant), instant copyable code snippets, and a fluid glassmorphic chat interface.",
    tags: ["React / JS", "Tailwind CSS", "Generative AI", "Markdown Highlight", "Web APIs"],
    metrics: [
      { label: "Prompt Personas", val: "4 Specialized" },
      { label: "UI Response", val: "Instant" },
      { label: "Theme", val: "Glass Dark" }
    ],
    github: siteConfig.socials.github,
    demo: siteConfig.socials.github,
    highlights: [
      "Multi-persona AI studio (DSA Tutor, Code Architect, Academic Assistant)",
      "Fluid streaming response animation with token-by-token rendering",
      "Embedded syntax-highlighted code blocks with one-click clipboard copy",
      "Persistent conversation threads saved locally in browser memory"
    ]
  },
  {
    id: "devsync",
    num: "04",
    title: "DevSync: Sandboxed Code Playground",
    subtitle: "In-Browser Client-Side Frontend Editor",
    category: "Developer Tools",
    badge: "Open Source",
    accent: "#f59e0b", // Amber Accent
    summary: "A blazing fast, client-side HTML, CSS, and JavaScript playground with live isolated iframe sandboxing, an in-app developer console, and JSON export.",
    fullDescription: "DevSync provides an instant scratchpad for web experiments without requiring any backend. Features sandboxed execution isolation, real-time error interception, customizable split layouts, and instant snippet export to Markdown and JSON.",
    tags: ["JavaScript (ES6+)", "Iframe Sandboxing", "DevTools", "CSS Flex/Grid", "DOM API"],
    metrics: [
      { label: "Startup Time", val: "0.2s" },
      { label: "Execution", val: "Sandboxed" },
      { label: "Dependencies", val: "Zero" }
    ],
    github: siteConfig.socials.github,
    demo: siteConfig.socials.github,
    highlights: [
      "Sandboxed iframe architecture preventing script leakage or page lockups",
      "In-browser terminal console capturing log, warn, error and info outputs",
      "Responsive split-pane workspace with keyboard shortcuts",
      "Export and import code packages with zero backend required"
    ]
  }
];

export const achievementsData = [
  {
    category: "Hackathons & Competitions",
    icon: "trophy",
    badge: "Active Participant",
    title: "University Hackathons & Technical Contests",
    subtitle: "JECRC University & Regional Coding Meets",
    description: "Active participant in campus 24h hackathons and algorithmic programming challenges, teaming up with peers to build pragmatic prototypes under tight deadlines.",
    highlights: [
      "Collaborated on CampusPulse prototype during university innovation drives",
      "Regular solver in departmental speed-coding and algorithm contests",
      "Engaged in technical open-source and hackathon communities"
    ]
  },
  {
    category: "Certifications & Coursework",
    icon: "award",
    badge: "Verified Learning",
    title: "Foundational CS & Web Certifications",
    subtitle: "Online Technical Academies",
    description: "Committed to continuous learning through verified courses spanning foundational computer science, object-oriented programming, and modern web development.",
    highlights: [
      "Harvard CS50 / Foundational Computer Science coursework exploration",
      "Algorithmic Problem Solving & Data Structures in C++ (Self-Paced Practice)",
      "Modern Web Development & Responsive Design Standards"
    ]
  },
  {
    category: "Problem Solving & Commits",
    icon: "flame",
    badge: "Consistent Practice",
    title: "Active Coding Profiles & GitHub Cadence",
    subtitle: "LeetCode • HackerRank • GitHub",
    description: "Daily commitment to writing clean code, solving algorithmic problems, and maintaining a disciplined commit streak across repositories.",
    highlights: [
      "350+ code commits across personal and university repositories",
      "Consistent problem solving on LeetCode focusing on arrays, strings, and recursion",
      "Documenting code patterns and data structure implementations in C++"
    ]
  }
];

export const marqueeTech = [
  "C++ 20", "Data Structures", "Algorithms", "Python 3",
  "JavaScript (ES6+)", "Tailwind CSS", "React Concepts", "HTML5 Canvas",
  "Git & GitHub", "Linux / Bash", "Generative AI", "REST APIs",
  "Discrete Mathematics", "Object-Oriented Design"
];
