"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioConfig } from "../config/portfolioConfig";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section scroll tracking
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#171717]/85 backdrop-blur-md border-b border-[#F5F3EE]/8 shadow-lg shadow-black/30"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-mono text-sm tracking-wider uppercase text-[#F5F3EE] hover:text-[#C6F36B] transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6F36B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F36B]" />
            </span>
            <span className="font-semibold text-base tracking-widest">
              {portfolioConfig.personal.brandTitle}
            </span>
            <span className="hidden sm:inline text-[10px] font-mono text-[#A5A5A5] pl-2 border-l border-[#F5F3EE]/15">
              CSE // 2026
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-[#171717]/60 border border-[#F5F3EE]/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-[#171717] font-semibold bg-[#C6F36B]"
                      : "text-[#A5A5A5] hover:text-[#F5F3EE]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA / Quick Status */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#F5F3EE] hover:text-[#C6F36B] transition-colors py-2 px-3 border border-[#F5F3EE]/15 hover:border-[#C6F36B]/60"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#F5F3EE] hover:text-[#C6F36B] transition-colors border border-[#F5F3EE]/15 rounded-sm"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#171717] pt-28 pb-10 px-8 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              <div className="text-[11px] font-mono uppercase text-[#A5A5A5] tracking-widest border-b border-[#F5F3EE]/10 pb-2">
                INDEX // NAVIGATION
              </div>
              <ul className="space-y-4">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between text-2xl font-display font-bold uppercase tracking-tight text-[#F5F3EE] hover:text-[#C6F36B] transition-colors py-1"
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-[#A5A5A5] group-hover:text-[#C6F36B]">
                        0{idx + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#F5F3EE]/10">
              <div className="text-[10px] font-mono text-[#A5A5A5] uppercase tracking-wider">
                HRIDAY SHARMA // JECRC UNIVERSITY
              </div>
              <div className="flex gap-4">
                <a
                  href={`mailto:${portfolioConfig.socials.email}`}
                  className="text-xs font-mono text-[#C6F36B] hover:underline"
                >
                  {portfolioConfig.socials.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
