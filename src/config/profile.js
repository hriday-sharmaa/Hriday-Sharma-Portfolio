/**
 * DEDICATED PROFILE CONFIGURATION BRIDGE
 * Connects with src/config/site.js.
 */

import { siteConfig } from './site.js';

export const profile = {
  name: siteConfig.name,
  heroTitle: siteConfig.heroTitle,
  headline: siteConfig.headline,
  title: siteConfig.title,
  role: siteConfig.role,
  degree: siteConfig.degree,
  institution: siteConfig.institution,
  university: siteConfig.university,
  college: siteConfig.college,
  email: siteConfig.email,
  location: siteConfig.location,
  coordinates: siteConfig.coordinates,
  timezone: siteConfig.timezone,
  socials: siteConfig.socials,
  resumeUrl: siteConfig.resumeUrl,
  status: siteConfig.status,
  statusBadge: siteConfig.statusBadge,
  stats: siteConfig.stats
};
