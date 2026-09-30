"use client";

import React from "react";
import { portfolioConfig } from "../config/portfolioConfig";
import { Github, Linkedin, ArrowUp, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const { footer, socials } = portfolioConfig;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#141414] border-t border-[#F5F3EE]/10 py-16 text-[#A5A5A5] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Top Tier: Name & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#F5F3EE]/8">
          <div>
            <span className="text-xl sm:text-2xl font-display font-extrabold text-[#F5F3EE] tracking-widest uppercase block">
              {footer.title}
            </span>
            <span className="text-xs text-[#C6F36B] tracking-wider mt-1 block">
              &ldquo;{footer.tagline}&rdquo;
            </span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 px-4 py-2 border border-[#F5F3EE]/15 text-[#F5F3EE] hover:border-[#C6F36B] hover:text-[#C6F36B] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Tier: Copyright, Coordinates & Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36B]" />
            <span>{footer.copyright}</span>
          </div>

          <div className="text-[#A5A5A5]/60 text-center sm:text-left">
            {footer.locationStamp}
          </div>

          {/* Social Icons with Tooltips */}
          <div className="flex items-center gap-4">
            <a
              href={socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 border border-[#F5F3EE]/10 text-[#F5F3EE] hover:text-[#C6F36B] hover:border-[#C6F36B] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 border border-[#F5F3EE]/10 text-[#F5F3EE] hover:text-[#C6F36B] hover:border-[#C6F36B] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${socials.email}`}
              aria-label="Send email"
              className="p-2 border border-[#F5F3EE]/10 text-[#F5F3EE] hover:text-[#C6F36B] hover:border-[#C6F36B] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
