"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolioConfig";
import { Mail, Copy, Check, Github, Linkedin, ArrowUpRight, Send, MessageSquare } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { contact, socials } = portfolioConfig;
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(senderSubject || "Connecting via Portfolio");
    const body = encodeURIComponent(
      `Hi Hriday,\n\n${senderMessage}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-b border-[#F5F3EE]/8 relative bg-[#171717] editorial-grid"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="pb-12 border-b border-[#F5F3EE]/10 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C6F36B]">
            {contact.tag}
          </span>
          <span className="font-mono text-xs text-[#A5A5A5] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6F36B] animate-pulse" />
            <span>INBOX OPEN // JAIPUR, IN</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          {/* Left Column: Heading & 3 Contact Options */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-[#F5F3EE] tracking-tight leading-[1.05]">
                {contact.headingLine1}
                <br />
                <span className="text-[#C6F36B]">{contact.headingLine2}</span>
              </h2>

              <p className="text-base sm:text-lg text-[#F5F3EE]/80 max-w-xl font-light leading-relaxed pt-2">
                {contact.supportingText}
              </p>
            </div>

            {/* Three Dedicated Contact Cards */}
            <div className="space-y-4 pt-4">
              {/* Option 1: EMAIL */}
              <div className="p-6 border border-[#F5F3EE]/15 bg-[#191919] hover:border-[#C6F36B] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#171717] border border-[#F5F3EE]/10 text-[#C6F36B]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#A5A5A5] uppercase tracking-wider">
                        PRIMARY CHANNEL
                      </div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-base sm:text-lg font-mono text-[#F5F3EE] hover:text-[#C6F36B] transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:self-center">
                    <a
                      href={`mailto:${contact.email}`}
                      className="px-4 py-2 bg-[#F5F3EE] text-[#171717] font-mono text-xs uppercase font-semibold hover:bg-[#C6F36B] transition-colors"
                    >
                      Send Mail
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="p-2 bg-[#171717] border border-[#F5F3EE]/15 text-[#A5A5A5] hover:text-[#F5F3EE] hover:border-[#C6F36B] transition-colors"
                      title="Copy email address"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-[#C6F36B]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                {copied && (
                  <div className="mt-3 text-xs font-mono text-[#C6F36B] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Email copied to clipboard!</span>
                  </div>
                )}
              </div>

              {/* Option 2 & 3: Dedicated GITHUB and LINKEDIN Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* GITHUB */}
                <a
                  href={socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 border border-[#F5F3EE]/15 bg-[#191919] hover:border-[#C6F36B] transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#171717] border border-[#F5F3EE]/10 text-[#F5F3EE] group-hover:text-[#C6F36B] transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#A5A5A5] uppercase tracking-wider">
                        CODE REPOSITORIES
                      </div>
                      <div className="text-sm font-display font-bold text-[#F5F3EE] group-hover:text-[#C6F36B] transition-colors">
                        GitHub Profile
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A5A5A5] group-hover:text-[#C6F36B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* LINKEDIN */}
                <a
                  href={socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 border border-[#F5F3EE]/15 bg-[#191919] hover:border-[#C6F36B] transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#171717] border border-[#F5F3EE]/10 text-[#F5F3EE] group-hover:text-[#C6F36B] transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#A5A5A5] uppercase tracking-wider">
                        PROFESSIONAL NETWORK
                      </div>
                      <div className="text-sm font-display font-bold text-[#F5F3EE] group-hover:text-[#C6F36B] transition-colors">
                        LinkedIn Profile
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A5A5A5] group-hover:text-[#C6F36B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-5">
            <div className="p-8 border border-[#F5F3EE]/15 bg-[#191919] relative">
              <div className="flex items-center justify-between border-b border-[#F5F3EE]/10 pb-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F5F3EE]">
                  <MessageSquare className="w-4 h-4 text-[#C6F36B]" />
                  <span>DIRECT DISPATCH</span>
                </div>
                <span className="text-[10px] font-mono text-[#A5A5A5]">
                  CLIENT // MAILTO
                </span>
              </div>

              <form onSubmit={handleQuickMail} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#A5A5A5] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#171717] border border-[#F5F3EE]/15 focus:border-[#C6F36B] text-sm text-[#F5F3EE] px-4 py-2.5 outline-none font-mono placeholder:text-[#A5A5A5]/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#A5A5A5] uppercase tracking-wider mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="e.g. Tech collaboration / Project discussion"
                    className="w-full bg-[#171717] border border-[#F5F3EE]/15 focus:border-[#C6F36B] text-sm text-[#F5F3EE] px-4 py-2.5 outline-none font-mono placeholder:text-[#A5A5A5]/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#A5A5A5] uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Write a message..."
                    className="w-full bg-[#171717] border border-[#F5F3EE]/15 focus:border-[#C6F36B] text-sm text-[#F5F3EE] px-4 py-2.5 outline-none font-sans placeholder:text-[#A5A5A5]/40 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C6F36B] text-[#171717] font-mono text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-[#d4fc7e] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>

                <p className="text-[10px] font-mono text-[#A5A5A5] text-center pt-2">
                  Directly prepares your default mail application to contact {contact.email}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
