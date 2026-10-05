"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      className="py-8 bg-[#0D0E10] border-t border-[#1c1e24]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-[#6b7280] font-mono">

        {/* Identity */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-[#131417] border border-[#23252B] flex items-center justify-center text-[10px] font-bold text-[#F3F4F6]">
            DV
          </div>
          <div>
            <p className="text-[#9ca3af] font-semibold text-[11px]">Dharmendra Verma</p>
            <p className="text-[10px] text-[#4a5568]">Full Stack Developer</p>
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/dharmendravm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-1.5 rounded hover:bg-[#131417] hover:text-[#F3F4F6] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com/in/dharmendravm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-1.5 rounded hover:bg-[#131417] hover:text-[#F3F4F6] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href="mailto:its.dharmendra.v@gmail.com"
            aria-label="Send email"
            className="p-1.5 rounded hover:bg-[#131417] hover:text-[#F3F4F6] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Copyright + back to top */}
        <div className="flex items-center gap-4 text-[10px]">
          <span>© {currentYear} Dharmendra Verma</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1 hover:text-[#F3F4F6] transition-colors px-2 py-1 rounded border border-[#23252B] hover:border-[#374151]"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  );
}
