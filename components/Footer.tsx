"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-[#101113] border-t border-[#2A2C30] text-xs text-[#96989F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <div className="w-7 h-7 rounded-md bg-[#1B1C1F] border border-[#2A2C30] flex items-center justify-center font-mono text-xs font-bold text-[#F2F2F0]">
            DV
          </div>
          <div>
            <p className="font-semibold text-[#F2F2F0]">Dharmendra Verma</p>
            <p className="text-[11px] font-mono text-[#96989F]">Full-Stack Developer · Shopify Apps</p>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/dharmendravm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F2F2F0] transition-colors p-1.5 rounded hover:bg-[#1B1C1F]"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/dharmendravm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F2F2F0] transition-colors p-1.5 rounded hover:bg-[#1B1C1F]"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:its.dharmendra.v@gmail.com"
            className="hover:text-[#F2F2F0] transition-colors p-1.5 rounded hover:bg-[#1B1C1F]"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Back-to-Top */}
        <div className="flex items-center gap-4 text-[11px] font-mono">
          <span>© {currentYear} Dharmendra Verma</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-[#F2F2F0] transition-colors px-2 py-1 rounded bg-[#161719] border border-[#2A2C30] hover:border-[#3E4148]"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}

