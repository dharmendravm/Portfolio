"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mobileMenuOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0E10]/90 backdrop-blur-md border-b border-[#1c1e24] py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Identity mark */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7cf8]/50"
          aria-label="Dharmendra Verma — home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#131417] border border-[#23252B] flex items-center justify-center font-mono text-xs font-bold text-[#F3F4F6] group-hover:border-[#8b7cf8]/50 group-hover:text-[#8b7cf8] transition-colors">
            DV
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-[#F3F4F6] tracking-tight leading-tight">
              Dharmendra Verma
            </span>
            <span className="text-[10px] text-[#6b7280] font-mono leading-tight">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-0.5 bg-[#111316] border border-[#23252B] rounded-full px-2.5 py-1.5"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-[#8E929E] hover:text-[#F3F4F6] hover:bg-[#18191D] px-3 py-1.5 rounded-full transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:its.dharmendra.v@gmail.com"
            id="nav-get-in-touch"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F3F4F6] bg-[#131417] hover:bg-[#18191D] border border-[#23252B] hover:border-[#374151] px-3.5 py-1.5 rounded-lg transition-colors"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#6b7280]" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#131417] border border-[#23252B] text-[#8E929E] hover:text-[#F3F4F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7cf8]/50"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-[#1c1e24] bg-[#0D0E10]/95 backdrop-blur-md px-4 py-4 space-y-1"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#8E929E] hover:text-[#F3F4F6] hover:bg-[#131417] px-3 py-2.5 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#1c1e24]">
            <a
              href="mailto:its.dharmendra.v@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-medium text-[#F3F4F6] bg-[#131417] border border-[#23252B] py-2.5 rounded-lg text-center"
            >
              <span>its.dharmendra.v@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8b7cf8]" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
