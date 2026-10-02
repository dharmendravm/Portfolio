"use client";

import { MapPin, Building2, Code2, Database, Layout, Sparkles } from "lucide-react";

export default function AboutSection() {
  const focusAreas = [
    {
      num: "01",
      title: "Building useful software products",
      description: "Focusing on real-world utility, intuitive user workflows, and practical product experiences.",
    },
    {
      num: "02",
      title: "Developing reliable APIs & database workflows",
      description: "Designing structured PostgreSQL & MongoDB schemas, REST APIs, real-time Socket.IO channels, and background queues.",
    },
    {
      num: "03",
      title: "Creating clean, responsive user interfaces",
      description: "Crafting customer storefronts and web interfaces with accessible components and polished interactions.",
    },
    {
      num: "04",
      title: "Practical product engineering & Shopify APIs",
      description: "Shipping storefront video carousel features, Liquid theme extensions, and merchant toolings at Invictus Alpha.",
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-[#23252B]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#A78BFA] tracking-wider uppercase">01 // ABOUT</span>
          <div className="h-[1px] flex-grow bg-[#23252B]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography */}
          <div className="lg:col-span-5 space-y-6 text-[#8E929E] leading-relaxed text-sm sm:text-base">
            <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] leading-tight">
              Full-Stack & Shopify Apps Developer based in Jaipur.
            </h2>
            
            <p>
              I build full-stack web applications and Shopify app experiences, working across frontend interfaces, backend APIs, databases, and third-party integrations. Currently working as a PERN Stack Developer Intern at Invictus Alpha, contributing to the CleverCat product.
            </p>

            <p>
              My engineering approach prioritizes clean architecture, type safety, clear database schemas, and smooth customer storefront experiences.
            </p>

            <div className="pt-4 border-t border-[#23252B] flex flex-col gap-2 text-xs font-mono text-[#F3F4F6]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A78BFA]" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Building2 className="w-4 h-4" />
                <span>PERN Stack Intern at Invictus Alpha (CleverCat)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Open Editorial Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono text-[#8E929E] uppercase tracking-wider mb-4">
              Core Engineering Focus & Principles
            </h3>

            <div className="divide-y divide-[#23252B]">
              {focusAreas.map((item) => (
                <div key={item.num} className="py-4 first:pt-0 last:pb-0 group">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-[#A78BFA] pt-1">{item.num}</span>
                    <div className="space-y-1">
                      <h4 className="text-base font-semibold text-[#F3F4F6] group-hover:text-[#A78BFA] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#8E929E] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
