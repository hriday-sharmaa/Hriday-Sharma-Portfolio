/**
 * CENTRAL SOCIAL & PROFILE CONFIGURATION
 * --------------------------------------
 * Stores all links and profile data. Connects with src/config/profile.js.
 */

import { profile } from './config/profile.js';

export { profile };

export const links = {
  name: profile.name,
  email: profile.email,
  github: profile.socials.github,
  linkedin: profile.socials.linkedin,
  resume: profile.resumeUrl,
};

export const profileDetails = {
  headingDisplay: "HRIDAY",
  role: profile.role,
  college: profile.college,
  location: profile.location || "Jaipur, Rajasthan, India",
  coordinates: profile.coordinates || "26.9124° N, 75.7873° E",
  status: profile.status
};
