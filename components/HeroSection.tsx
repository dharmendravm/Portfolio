"use client";

import { ArrowRight, Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import HeroCanvas from "@/components/HeroCanvas";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#1c1e24]"
    >
      {/* Radial gradient ambient light from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(107, 74, 255, 0.06), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* ─── Left: Content ─── */}
          <div className="lg:col-span-6 space-y-7">

            {/* Availability pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#23252B] bg-[#131417] text-xs font-mono text-[#8E929E] tracking-wide">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Stack Developer &nbsp;·&nbsp; Open to opportunities</span>
            </div>

            {/* Name + Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-[#F3F4F6] leading-[1.08]">
                Dharmendra Verma
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#8b7cf8] tracking-tight leading-snug">
                Full Stack Developer
              </p>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base text-[#8E929E] leading-relaxed max-w-lg">
              I build full-stack web applications — from REST APIs and real-time
              backends to responsive frontends and Shopify storefront experiences.
              Currently at{" "}
              <span className="text-[#F3F4F6] font-medium">Invictus Alpha</span>,
              working on Shopify app development for the CleverCat product.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                id="hero-view-projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0E10] bg-[#F3F4F6] hover:bg-white px-5 py-2.5 rounded-lg transition-colors shadow-sm group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                id="hero-get-in-touch"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#F3F4F6] bg-[#18191D] hover:bg-[#1F2026] border border-[#23252B] hover:border-[#373A44] px-5 py-2.5 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8E929E]" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/dharmendravm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub — dharmendravm"
                id="hero-github"
                className="p-2 rounded-lg bg-[#131417] hover:bg-[#18191D] border border-[#23252B] text-[#8E929E] hover:text-[#F3F4F6] hover:border-[#373A44] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/dharmendravm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn — dharmendravm"
                id="hero-linkedin"
                className="p-2 rounded-lg bg-[#131417] hover:bg-[#18191D] border border-[#23252B] text-[#8E929E] hover:text-[#F3F4F6] hover:border-[#373A44] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:its.dharmendra.v@gmail.com"
                aria-label="Email — its.dharmendra.v@gmail.com"
                id="hero-email"
                className="p-2 rounded-lg bg-[#131417] hover:bg-[#18191D] border border-[#23252B] text-[#8E929E] hover:text-[#F3F4F6] hover:border-[#373A44] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <div className="h-5 w-px bg-[#23252B] mx-1 hidden sm:block" aria-hidden="true" />

              {/* Subtle tech tags */}
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#5a5f6e]">
                <span>Node.js</span>
                <span>·</span>
                <span>React</span>
                <span>·</span>
                <span>PostgreSQL</span>
              </div>
            </div>

          </div>

          {/* ─── Right: Three.js Architecture Visualization ─── */}
          <div
            className="lg:col-span-6 flex items-center justify-center relative"
            aria-hidden="true"
          >
            {/* Subtle label overlay — positions the visual as technical, not decorative */}
            <div className="absolute top-4 left-4 z-10 hidden lg:flex flex-col gap-1 pointer-events-none">
              <span className="text-[10px] font-mono text-[#374151] tracking-wider uppercase">
                Service Graph
              </span>
              <span className="text-[9px] font-mono text-[#2d3748]">
                API · Backend · DB · Cache
              </span>
            </div>

            <HeroCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}
