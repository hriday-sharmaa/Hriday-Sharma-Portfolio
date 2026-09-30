/**
 * ==============================================================================
 * THE DIGITAL JOURNEY — HRIDAY SHARMA
 * Portfolio Configuration & Profile Data
 * ==============================================================================
 *
 * NOTE FOR HRIDAY:
 * You can easily update your GitHub and LinkedIn profile links in the `socials`
 * section below. Simply replace "https://github.com" and "https://linkedin.com"
 * with your own profile URLs whenever you are ready.
 */

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  status: "Completed" | "In Development" | "Conceptualizing";
  previewType: "portfolio" | "terminal" | "neural";
}

export interface JourneyItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface SkillCard {
  number: string;
  category: string;
  focus: string;
  skills: string[];
  statusTag: string;
}

export const portfolioConfig = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 01. PERSONAL INFORMATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  personal: {
    name: "Hriday Sharma",
    brandTitle: "HRIDAY.SHARMA",
    location: "Jaipur, India",
    topLabel: "COMPUTER SCIENCE STUDENT / JAIPUR, INDIA",
    degree: "B.Tech Computer Science Engineering",
    year: "First Year",
    university: "JECRC University",
    statusBadge: "CURRENTLY LEARNING C",

    // Hero Section Content
    hero: {
      headline: {
        line1: "Curious mind.",
        line2: "Building beyond",
        line3: "the",
        highlight: "ordinary.",
      },
      introduction:
        "Hey, I'm Hriday Sharma — a first-year Computer Science Engineering student at JECRC University, exploring programming, technology, and the art of turning ideas into meaningful digital experiences.",
      ctaPrimary: "EXPLORE MY WORK",
      ctaSecondary: "LET'S CONNECT",
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 02. SOCIAL MEDIA LINKS (EASILY EDITABLE)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  socials: {
    email: "hridaysharma3264@gmail.com",
    github: {
      label: "GitHub",
      url: "https://github.com", // <-- EDIT YOUR GITHUB URL HERE (e.g. "https://github.com/hridaysharma")
      handle: "@hridaysharma",
      isCustom: false,
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://linkedin.com", // <-- EDIT YOUR LINKEDIN URL HERE (e.g. "https://linkedin.com/in/hridaysharma")
      handle: "Hriday Sharma",
      isCustom: false,
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 03. ABOUT ME
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  about: {
    tag: "01 // DISCOVERY",
    heading: "More than a student.",
    quote:
      "I'm Hriday Sharma, currently pursuing B.Tech in Computer Science Engineering at JECRC University. I'm at the beginning of my journey in technology, building my programming foundation and exploring how ideas transform into real-world digital experiences. I believe in learning by building, staying curious, and continuously improving.",
    pillars: [
      {
        num: "01",
        label: "CURIOSITY-FIRST",
        detail: "Driven by foundational principles and understanding how software behaves at its core.",
      },
      {
        num: "02",
        label: "BUILD TO LEARN",
        detail: "Turning conceptual knowledge into functional, well-structured software and experiments.",
      },
      {
        num: "03",
        label: "CONTINUOUS GROWTH",
        detail: "Expanding problem-solving logic and engineering craft every single day.",
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 04. MY JOURNEY (VERTICAL TIMELINE)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  journey: [
    {
      period: "2026 — PRESENT",
      degree: "B.Tech Computer Science Engineering",
      institution: "JECRC University",
      location: "Jaipur, Rajasthan, India",
      description:
        "Currently exploring programming, C language, computer science fundamentals, and problem-solving.",
      highlights: [
        "Core C Programming & Computational Thinking",
        "Algorithmic Logic & Memory Management Basics",
        "Computer Science Foundations & Systems",
      ],
    },
  ] as JourneyItem[],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 05. SKILLS & EXPLORATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  skills: {
    tag: "02 // CAPABILITIES",
    heading: "Learning. Exploring. Growing.",
    subheading:
      "A transparent look into what I am mastering today and the technological domains I am exploring.",
    cards: [
      {
        number: "01",
        category: "PROGRAMMING",
        focus: "Core Language Study",
        skills: ["C Language", "Currently Learning"],
        statusTag: "ACTIVE LEARNING",
      },
      {
        number: "02",
        category: "FOUNDATIONS",
        focus: "Engineering Fundamentals",
        skills: ["Computer Science Fundamentals", "Problem Solving"],
        statusTag: "IN DEPTH",
      },
      {
        number: "03",
        category: "INTERESTS",
        focus: "Future Horizons",
        skills: [
          "Software Development",
          "Web Development",
          "Technology & Innovation",
        ],
        statusTag: "EXPLORING",
      },
    ] as SkillCard[],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 06. PROJECT SHOWCASE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  projects: {
    tag: "03 // EXPERIMENTS",
    heading: "Ideas into experiences.",
    subheading:
      "Original digital creations and upcoming experiments crafted with precision.",
    items: [
      {
        id: "portfolio-website",
        number: "01",
        title: "Personal Portfolio Website",
        tagline: "Aesthetic Editorial Space",
        description:
          "My personal digital space to showcase my journey, learning, and creative work.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com", // Editable
        liveUrl: "#", // Current site
        status: "Completed",
        previewType: "portfolio",
      },
      {
        id: "c-algorithms-hub",
        number: "02",
        title: "Coming Soon",
        tagline: "Algorithmic Logic & Problem Solving",
        description: "A new experiment currently taking shape.",
        tags: ["C Programming", "Algorithms", "Problem Solving", "Logic"],
        githubUrl: "https://github.com", // Editable
        liveUrl: "#",
        status: "In Development",
        previewType: "terminal",
      },
      {
        id: "systems-experiment",
        number: "03",
        title: "Coming Soon",
        tagline: "Interactive Web Systems",
        description:
          "More ideas, experiments, and digital experiences coming soon.",
        tags: ["Software Systems", "Web Architecture", "Exploration"],
        githubUrl: "https://github.com", // Editable
        liveUrl: "#",
        status: "Conceptualizing",
        previewType: "neural",
      },
    ] as ProjectItem[],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 07. CONTACT SECTION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  contact: {
    tag: "04 // INITIATE DIALOGUE",
    headingLine1: "Have an idea?",
    headingLine2: "Let's make it happen.",
    supportingText:
      "I'm always interested in connecting with fellow learners, developers, and people who love exploring technology.",
    email: "hridaysharma3264@gmail.com",
    availabilityNote: "Open to discussions, peer learning, and tech collaborations.",
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 08. FOOTER
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  footer: {
    title: "HRIDAY SHARMA",
    tagline: "Designed with curiosity. Built with passion.",
    copyright: "2026 © ALL RIGHTS RESERVED.",
    locationStamp: "JAIPUR, RAJASTHAN // 26.9124° N, 75.7873° E",
  },
};
