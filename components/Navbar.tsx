"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Code2, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#101113]/85 backdrop-blur-md border-b border-[#2A2C30]/70 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram & Identity */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/50 rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-[#1B1C1F] border border-[#2A2C30] flex items-center justify-center font-mono text-xs font-bold text-[#F2F2F0] group-hover:border-[#A78BFA]/60 group-hover:text-[#A78BFA] transition-colors shadow-inner">
            DV
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm text-[#F2F2F0] group-hover:text-white transition-colors tracking-tight">
              dharmendra.dev
            </span>
            <span className="text-[10px] text-[#96989F] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Invictus Alpha
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#161719]/80 border border-[#2A2C30]/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-[#96989F] hover:text-[#F2F2F0] hover:bg-[#1B1C1F] px-3 py-1.5 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:its.dharmendra.v@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F2F2F0] bg-[#1B1C1F] hover:bg-[#222429] border border-[#2A2C30] hover:border-[#3E4148] px-3.5 py-1.5 rounded-lg transition-all shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#96989F]" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#1B1C1F] border border-[#2A2C30] text-[#96989F] hover:text-[#F2F2F0] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#2A2C30] bg-[#161719] px-4 py-4 mt-2 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-[#96989F] hover:text-[#F2F2F0] bg-[#1B1C1F] hover:bg-[#222429] border border-[#2A2C30]/50 p-2.5 rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#2A2C30]/60">
            <a
              href="mailto:its.dharmendra.v@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-xs font-medium text-[#F2F2F0] bg-[#1B1C1F] border border-[#2A2C30] p-2.5 rounded-lg text-center"
            >
              <span>its.dharmendra.v@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A78BFA]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
