"use client";

import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-b border-[#23252B]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#A78BFA] tracking-wider uppercase">02 // EXPERIENCE</span>
          <div className="h-[1px] flex-grow bg-[#23252B]" />
        </div>

        <div className="flex flex-col space-y-2 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6]">
            Work Experience
          </h2>
          <p className="text-sm text-[#8E929E] max-w-xl">
            Hands-on experience building production Shopify app features, storefront integrations, and full-stack web applications.
          </p>
        </div>

        {/* Open Timeline List */}
        <div className="space-y-12">
          
          {/* Role 1: Invictus Alpha */}
          <div className="relative border-l-2 border-[#23252B] hover:border-[#A78BFA] transition-colors pl-6 sm:pl-8 py-1 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#131417] border border-[#23252B] p-1.5 flex items-center justify-center shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/clevercat.webp"
                    alt="CleverCat Logo"
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F3F4F6] flex items-center gap-2">
                    Invictus Alpha
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Current Intern
                    </span>
                  </h3>
                  <p className="text-sm font-semibold text-[#A78BFA]">
                    PERN Stack Developer Intern / Shopify Apps Developer
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-[#8E929E] font-mono space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="text-[11px]">
                  Product: <span className="text-[#F3F4F6] font-semibold">CleverCat</span> (Shopify App)
                </div>
              </div>
            </div>

            <p className="text-sm text-[#8E929E] leading-relaxed max-w-3xl">
              Working as a PERN stack intern on Shopify app development and storefront product features for CleverCat, including video-related functionality, merchant integrations, and backend workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#F3F4F6]/90 pt-1">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                <span>Building high-performance Shopify storefront video carousel & interactive features</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                <span>Developing robust backend API endpoints & PostgreSQL schemas using PERN stack</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                <span>Integrating Shopify Storefront & Admin APIs for merchant configuration workflows</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                <span>Optimizing liquid theme script injections and responsive customer interfaces</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#8E929E]">
              {["PERN Stack", "Shopify App Development", "React", "Node.js", "PostgreSQL", "Express", "Shopify APIs", "Liquid"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded bg-[#131417] border border-[#23252B]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Role 2: GRRAS Solutions */}
          <div className="relative border-l-2 border-[#23252B] hover:border-[#A78BFA] transition-colors pl-6 sm:pl-8 py-1 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 border border-[#23252B] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/grras.jpeg"
                    alt="GRRAS Solutions Logo"
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F3F4F6]">
                    GRRAS Solutions Pvt. Ltd.
                  </h3>
                  <p className="text-sm font-semibold text-[#A78BFA]">
                    MERN Stack Developer Trainee
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#8E929E] font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  August 2025 – February 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Jaipur
                </span>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8E929E]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></span>
                <span>Developed full-stack web applications using MERN stack (MongoDB, Express, React, Node.js)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></span>
                <span>Implemented JWT authentication and role-based authorization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></span>
                <span>Designed database schemas and REST APIs for web platforms</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></span>
                <span>Used Git, GitHub, and Postman during development and testing</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#8E929E]">
              {["MERN Stack", "React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Git"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded bg-[#131417] border border-[#23252B]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
