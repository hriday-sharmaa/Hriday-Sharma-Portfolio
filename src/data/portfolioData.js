/**
 * CENTRALIZED PORTFOLIO CONFIGURATION & DATA ENGINE
 * --------------------------------------------------
 * Single source of truth for all personal details, socials, projects,
 * bento widgets, and interactive experiences.
 */

export const personalInfo = {
  name: "Hriday Sharma",
  heroTitle: "HRIDAY",
  role: "1st Year B.Tech CSE Undergrad",
  university: "JECRC University, Jaipur",
  email: "hridaysharma3264@gmail.com",
  socials: {
    github: "https://github.com/your-username", // Easily update later
    linkedin: "https://linkedin.com/in/your-username", // Easily update later
    twitter: "https://twitter.com/your-username",
    leetcode: "https://leetcode.com/your-username"
  },
  location: "Jaipur, India",
  status: "Available for Hackathons & Projects",
  coordinates: "26.9124° N, 75.7873° E",
  timezone: "Asia/Kolkata",
  tagline: "Engineering algorithms & crafting avant-garde digital experiences.",
  stats: {
    year: "1st Year",
    batch: "2024 - 2028",
    cgpaTarget: "9.0+",
    commitsThisYear: "340+"
  }
};

// Backward-compatible alias for existing modules
export const profileConfig = {
  name: personalInfo.name,
  email: personalInfo.email,
  socials: personalInfo.socials,
  university: personalInfo.university,
  degree: personalInfo.role,
  location: personalInfo.location,
  status: { available: true, text: personalInfo.status },
  bio: [
    "First-year Computer Science & Engineering undergraduate at JECRC University, Jaipur.",
    "Obsessed with asymptotic algorithmic efficiency, C++, modern reactive web architectures, and crafting intuitive, award-winning human interfaces.",
    "Active participant in campus hackathons, open-source initiatives, and engineering communities."
  ],
  meta: {
    title: "HRIDAY SHARMA // 1st Year B.Tech CSE @ JECRC University",
    description: "Cutting-edge personal portfolio of Hriday Sharma — 1st Year B.Tech CSE student at JECRC University, Jaipur. Exploring DSA, modern web engineering, and interactive systems.",
    keywords: "Hriday Sharma, JECRC University, Jaipur, B.Tech CSE, Web Developer, Software Engineer, Portfolio"
  }
};

export const bentoTelemetry = {
  location: "Jaipur, Rajasthan, India",
  coordinates: "26.9124° N, 75.7873° E",
  weather: "31°C Clear • Mild Breeze",
  currentTrack: {
    title: "Resonance (Synthwave Chill)",
    artist: "HOME / Lofi Coding Beats",
    albumArt: "assets/images/album-art.svg",
    duration: "3:32"
  },
  nowLearning: [
    "Advanced Graph Algorithms (C++)",
    "WebGL & 3D Shaders",
    "Computer Architecture & Assembly"
  ]
};

export const featuredProjects = [
  {
    id: "algoverse",
    num: "01",
    title: "Algoverse Engine",
    subtitle: "Real-time Algorithm & Graph Visualizer",
    category: "Algorithms & DSA",
    badge: "Featured / 60 FPS",
    accent: "#00F0FF", // Laser Cyan
    summary: "An interactive HTML5 Canvas visualizer exploring sorting algorithms and graph pathfinding with real-time complexity analysis.",
    fullDescription: "Algoverse bridges theoretical algorithmic complexity with visual intuition. Engineered with an optimized 60 FPS canvas loop, step-by-step state rewind, dynamic graph node obstacle drawing, and synthesized audio frequencies matching array magnitudes.",
    tags: ["C++ / JS", "HTML5 Canvas", "Sorting & Graphs", "Audio Synthesis", "Big-O Analysis"],
    metrics: [
      { label: "Render Rate", val: "60 FPS" },
      { label: "Algorithms", val: "8+ Implemented" },
      { label: "Latency", val: "< 16ms" }
    ],
    github: personalInfo.socials.github,
    demo: personalInfo.socials.github,
    highlights: [
      "Dynamic obstacle drawing with A* Search and Dijkstra's algorithm pathfinding",
      "QuickSort, MergeSort, HeapSort with comparison step counters",
      "Web Audio API procedural sound synthesis for each element swapped",
      "Responsive responsive canvas viewport with high-DPI scaling"
    ]
  },
  {
    id: "campuspulse",
    num: "02",
    title: "CampusPulse Hub",
    subtitle: "JECRC Student Utility & Academic Suite",
    category: "Web Applications",
    badge: "JECRC University Utility",
    accent: "#A855F7", // Electric Violet
    summary: "A tailor-made productivity suite for JECRC engineering peers featuring attendance threshold calculators, SGPA simulators, and syllabus tracking.",
    fullDescription: "Built to solve real campus pain points for 1st-year students: tracking the strict 75% attendance criteria with smart margin simulators ('How many lectures can I afford to skip?'), semester SGPA target curves, and timetable alerts.",
    tags: ["JavaScript", "Tailwind CSS", "LocalStorage", "PWA Architecture", "UI/UX"],
    metrics: [
      { label: "Attendance Criteria", val: "75% Alert" },
      { label: "Offline Mode", val: "100%" },
      { label: "Peer Users", val: "Campus Favorite" }
    ],
    github: personalInfo.socials.github,
    demo: personalInfo.socials.github,
    highlights: [
      "Smart attendance margin simulator ('Bunk vs Attend' safe zone predictor)",
      "Interactive SGPA target curve calculator for mid-terms and end-terms",
      "Offline-first client caching via LocalStorage with zero cloud dependency",
      "Minimalist, distraction-free dark luxury interface"
    ]
  },
  {
    id: "devsync",
    num: "03",
    title: "DevSync Sandbox",
    subtitle: "Sandboxed In-Browser Frontend Playground",
    category: "Developer Tools",
    badge: "Open Source",
    accent: "#10B981", // Emerald Neon
    summary: "A blazing fast, client-side HTML/CSS/JS sandbox with sandboxed iframe execution, in-app terminal console capture, and snippet exporting.",
    fullDescription: "DevSync provides an instant scratchpad for web experiments with zero startup lag. Features sandboxed execution isolation, real-time error interception, customizable split layouts, and instant code bundle export.",
    tags: ["JavaScript (ES6+)", "Iframe Sandboxing", "DevTools", "CSS Flex/Grid", "DOM API"],
    metrics: [
      { label: "Startup Time", val: "0.2s" },
      { label: "Execution", val: "Sandboxed" },
      { label: "Dependencies", val: "Zero" }
    ],
    github: personalInfo.socials.github,
    demo: personalInfo.socials.github,
    highlights: [
      "Sandboxed iframe architecture preventing script leaking or lockups",
      "In-browser terminal capturing log, warn, and syntax error messages",
      "Responsive split-pane workspace with keyboard shortcuts",
      "One-click snippet export to Markdown and JSON"
    ]
  },
  {
    id: "crypta",
    num: "04",
    title: "Crypta Lab",
    subtitle: "Mathematical Cryptography & Hash Explorer",
    category: "CS Fundamentals",
    badge: "Academic",
    accent: "#F59E0B", // Amber Neon
    summary: "An educational visualizer exploring classical ciphers and modern cryptographic mathematics (RSA key generation, SHA-256 avalanche effect).",
    fullDescription: "Created to deepen mathematical intuition for discrete math and computer security. Provides step-by-step modular arithmetic walkthroughs and bitwise hash change graphs.",
    tags: ["Python", "JavaScript", "Discrete Mathematics", "Cryptography", "Security"],
    metrics: [
      { label: "Ciphers", val: "6 Types" },
      { label: "Bit Tracing", val: "Real-time" },
      { label: "RSA Math", val: "Interactive" }
    ],
    github: personalInfo.socials.github,
    demo: personalInfo.socials.github,
    highlights: [
      "Interactive step-by-step RSA public/private key generation walkthrough",
      "SHA-256 bitwise avalanche graph showing micro changes in input",
      "Frequency analysis distribution charts for classical substitution ciphers"
    ]
  }
];

export const marqueeTech = [
  "C++ 20", "Data Structures", "Algorithms", "JavaScript (ES6+)",
  "Python 3", "HTML5 Canvas", "Responsive Design", "Git & GitHub",
  "Linux / Bash", "Tailwind CSS", "REST APIs", "Computer Architecture",
  "Discrete Mathematics", "Object-Oriented Programming"
];

export const hackathonsAndAchievements = [
  {
    title: "Commenced B.Tech CSE @ JECRC University",
    date: "2024 - Present",
    tag: "Academic Journey",
    description: "Immersed in core computer science curriculum: Data Structures in C++, Object-Oriented Design, and Discrete Mathematics in Jaipur, India."
  },
  {
    title: "Campus Hackathons & Coding Contests",
    date: "2024",
    tag: "Competitions",
    description: "Participating in university-level algorithmic contests, 24h hackathons, and collaborating with fellow engineering builders."
  },
  {
    title: "Senior Secondary Graduation (PCM & CS)",
    date: "2024",
    tag: "Foundation",
    description: "Completed higher secondary education with strong analytical foundations in Mathematics, Physics, and foundational Computer Science."
  }
];
