/**
 * PORTFOLIO PROJECTS DATA
 * -----------------------
 * Detailed metadata for featured engineering projects.
 */

export const projectsData = [
  {
    id: "algoverse",
    title: "Algoverse: Interactive DSA Engine",
    subtitle: "Real-time Algorithm & Graph Visualizer",
    category: "Algorithms & DSA",
    badge: "Featured Project",
    period: "2024 - Present",
    description: "An interactive, web-based visualizer for sorting algorithms, graph pathfinding, and tree traversals. Engineered with custom HTML5 Canvas rendering and step-by-step state tracking.",
    longDescription: "Algoverse was built to solve a personal pain point: bridging the gap between theoretical algorithm analysis and visual intuition. It supports sorting algorithms (QuickSort, MergeSort, HeapSort, BubbleSort) and graph pathfinding algorithms (Dijkstra, A* Search, BFS, DFS). Features speed adjustments, custom array generators, obstacle drawing on grid meshes, and real-time step counters.",
    tags: ["JavaScript (ES6+)", "Canvas API", "Algorithms", "DSA", "Data Structures"],
    metrics: [
      { label: "Algorithms", value: "8+" },
      { label: "FPS Render Rate", value: "60 FPS" },
      { label: "Complexity Analysis", value: "Real-time" }
    ],
    demoUrl: "https://github.com/your-username/algoverse",
    githubUrl: "https://github.com/your-username/algoverse",
    featured: true,
    color: "#38bdf8", // Sky blue accent
    highlights: [
      "Smooth 60 FPS HTML5 Canvas animation loop with customizable speed throttle",
      "Graph pathfinding with interactive barrier drawing and weighted node physics",
      "Live theoretical vs. practical time/space complexity comparison HUD",
      "Synthesized harmonic audio feedback matching data frequencies"
    ]
  },
  {
    id: "campuspulse",
    title: "CampusPulse: Academic & Utility Hub",
    subtitle: "Student Productivity & Resource Portal",
    category: "Web Applications",
    badge: "Campus Favorite",
    period: "2024",
    description: "A productivity dashboard tailored for JECRC University students, featuring attendance margin calculators, notes repository, SGPA simulators, and college event trackers.",
    longDescription: "Designed to help engineering students keep track of stringent 75% attendance criteria, academic timetables, and resource sharing. Includes an offline-first architecture with localStorage caching, responsive mobile-first UI, and an intuitive semester GPA calculator.",
    tags: ["JavaScript", "Modern CSS", "LocalStorage", "Responsive UI", "Productivity"],
    metrics: [
      { label: "Target Audience", value: "JECRC Peers" },
      { label: "Offline First", value: "100%" },
      { label: "Load Time", value: "< 0.6s" }
    ],
    demoUrl: "https://github.com/your-username/campuspulse",
    githubUrl: "https://github.com/your-username/campuspulse",
    featured: true,
    color: "#a855f7", // Purple accent
    highlights: [
      "Smart 75% attendance criteria margin calculator ('Bunk vs Attend' simulator)",
      "Interactive SGPA / CGPA target calculator with grading scale curves",
      "Clean dark/light theme designed for late-night college study sessions",
      "Zero external runtime dependencies for instant load times"
    ]
  },
  {
    id: "devsync",
    title: "DevSync: Browser Code Playground",
    subtitle: "Live Client-Side Frontend Editor",
    category: "Developer Tools",
    badge: "Open Source",
    period: "2024",
    description: "A lightweight, in-browser sandbox for testing HTML, CSS, and modern JavaScript with instant live rendering, sandboxed iframe isolation, and console logging.",
    longDescription: "DevSync provides an instant scratchpad for web developers and students. It captures console output directly inside a customized panel, prevents infinite loops via worker heartbeats, and offers instant snippet export to JSON and Markdown.",
    tags: ["JavaScript", "HTML5", "CSS3", "Iframe Sandboxing", "DevTools"],
    metrics: [
      { label: "Bundle Size", value: "Zero deps" },
      { label: "Execution Latency", value: "Instant" },
      { label: "Preview", value: "Sandboxed" }
    ],
    demoUrl: "https://github.com/your-username/devsync",
    githubUrl: "https://github.com/your-username/devsync",
    featured: true,
    color: "#34d399", // Emerald accent
    highlights: [
      "Real-time DOM rendering in an isolated, secure iframe container",
      "Custom in-app terminal console capturing log, warn, error and info outputs",
      "Resizable multi-column split panes with keyboard shortcuts",
      "Export and import code packages with zero backend required"
    ]
  },
  {
    id: "crypta",
    title: "Crypta: Cipher & Hash Playground",
    subtitle: "CS Security & Cryptography Visualizer",
    category: "CS Fundamentals",
    badge: "Academic",
    period: "2024",
    description: "An educational visualizer exploring classical ciphers (Caesar, Vigenère) and modern cryptographic principles (RSA key generation math, SHA-256 bitwise avalanche).",
    longDescription: "Created to deepen understanding of discrete mathematics and computer security. Users can trace how text undergoes substitution, permutation, modular exponentiation, and bitwise XOR operations.",
    tags: ["Python", "JavaScript", "Discrete Math", "Cryptography", "Security"],
    metrics: [
      { label: "Ciphers", value: "6 Supported" },
      { label: "Math", value: "Discrete Log" },
      { label: "Mode", value: "Step-by-Step" }
    ],
    demoUrl: "https://github.com/your-username/crypta",
    githubUrl: "https://github.com/your-username/crypta",
    featured: false,
    color: "#f59e0b", // Amber accent
    highlights: [
      "Interactive step-by-step visualizer for RSA public-private key derivation",
      "Bit-level avalanche effect visualizer for hash functions",
      "Interactive frequency analysis chart for cracking Caesar ciphers"
    ]
  }
];
