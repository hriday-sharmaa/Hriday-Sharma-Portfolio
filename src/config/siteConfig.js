/**
 * CENTRALIZED PORTFOLIO CONFIGURATION
 * -----------------------------------
 * Connects with src/config.js (links).
 */

import { links, profileDetails } from '../config.js';

export const siteConfig = {
  name: links.name || "Hriday Sharma",
  displayHeading: profileDetails?.headingDisplay || "HRIDAY",
  monogram: "HS.dev",
  role: profileDetails?.role || "1st Year B.Tech CSE Student",
  degree: "1st Year B.Tech Computer Science & Engineering",
  university: profileDetails?.college || "JECRC University, Jaipur",
  email: links.email || "hridaysharma3264@gmail.com",
  location: profileDetails?.location || "Jaipur, Rajasthan, India",
  coordinates: profileDetails?.coordinates || "26.9124° N, 75.7873° E",
  timezone: "Asia/Kolkata",
  availabilityStatus: profileDetails?.status || "🟢 Available for Internships, Hackathons & Collaborations",
  resumeUrl: links.resume || "#",
  socials: {
    github: links.github || "https://github.com/your-username",
    linkedin: links.linkedin || "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username",
    leetcode: "https://leetcode.com/your-username"
  },
  stats: {
    year: "1st Year",
    batch: "2024 - 2028",
    primaryLanguages: "C/C++, Python, JavaScript",
    learningFocus: "Data Structures, Web Architecture & Generative AI",
    commitsThisYear: "350+"
  },
  meta: {
    title: "Hriday Sharma (HS.dev) // 1st Year B.Tech CSE @ JECRC University",
    description: "Production-ready portfolio of Hriday Sharma, 1st Year B.Tech CSE undergraduate at JECRC University, Jaipur. Exploring algorithms, web architecture, and AI-powered systems.",
    keywords: "Hriday Sharma, HS.dev, JECRC University, Jaipur, B.Tech CSE, Software Engineer, Web Developer, Portfolio, Internships"
  }
};
