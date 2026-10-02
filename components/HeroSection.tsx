"use client";

import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import HeroCanvas from "@/components/HeroCanvas";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#23252B]/60">
      {/* Ambient Radial Lighting & Subtle Grid Background */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.08] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Editorial Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131417] border border-[#23252B] text-[#A78BFA] font-mono text-xs font-semibold shadow-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse"></span>
              PERN STACK DEVELOPER INTERN · SHOPIFY APPS
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F3F4F6] leading-[1.1]">
              Building useful products for the web.
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-[#8E929E] leading-relaxed max-w-xl font-normal">
              I&apos;m Dharmendra, a developer working across PERN stack applications and Shopify app development. Currently working on Shopify app development at Invictus Alpha, contributing to the CleverCat product.
            </p>

            {/* CTA Buttons & Social Icons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0E10] bg-[#F3F4F6] hover:bg-white px-5 py-2.5 rounded-lg transition-all shadow-md group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#F3F4F6] bg-[#18191D] hover:bg-[#1F2026] border border-[#23252B] hover:border-[#373A44] px-5 py-2.5 rounded-lg transition-all"
              >
                <span>Get in Touch</span>
              </a>

              <div className="h-6 w-[1px] bg-[#23252B] hidden sm:block mx-1"></div>

              {/* Social Link Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/dharmendravm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-[#131417] hover:bg-[#18191D] border border-[#23252B] text-[#8E929E] hover:text-[#F3F4F6] hover:border-[#373A44] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com/in/dharmendravm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-[#131417] hover:bg-[#18191D] border border-[#23252B] text-[#8E929E] hover:text-[#F3F4F6] hover:border-[#373A44] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:its.dharmendra.v@gmail.com"
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-[#131417] hover:bg-[#18191D] border border-[#23252B] text-[#8E929E] hover:text-[#F3F4F6] hover:border-[#373A44] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Tech Labels */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#8E929E]">
              <span className="px-2.5 py-1 rounded bg-[#131417] border border-[#23252B]">PERN Stack</span>
              <span className="px-2.5 py-1 rounded bg-[#131417] border border-[#23252B]">Shopify APIs & Liquid</span>
              <span className="px-2.5 py-1 rounded bg-[#131417] border border-[#23252B]">TypeScript</span>
            </div>

          </div>

          {/* Right Column: Three.js Interactive 3D Canvas Centerpiece */}
          <div className="lg:col-span-6 w-full flex items-center justify-center relative">
            <HeroCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}
