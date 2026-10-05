"use client";

import { MapPin, Building2, CalendarDays } from "lucide-react";

const experiences = [
  {
    id: "invictus-alpha",
    company: "Invictus Alpha",
    product: "CleverCat",
    role: "Full Stack Developer",
    type: "Full-time",
    period: "Feb 2026 – Present",
    location: "Jaipur, Rajasthan, India",
    logo: "/images/clevercat.webp",
    logoAlt: "CleverCat Logo",
    logoBg: "#131417",
    active: true,
    summary:
      "Building production Shopify app features and full-stack backend services for CleverCat — a Shopify app that enables merchants to embed shoppable video carousels directly into their storefronts.",
    highlights: [
      "Built Shopify storefront video carousel with touch/swipe interactions using Liquid and JavaScript",
      "Developed Theme App Extensions for seamless storefront injection without merchant code changes",
      "Implemented product tagging system connecting shoppable videos to Shopify product catalog",
      "Created Shopify Storefront and Admin API integrations for merchant configuration workflows",
      "Debugged and optimized responsive storefront UI across devices using Liquid + vanilla JS",
      "Built backend API endpoints and database schemas (PostgreSQL + Prisma) for merchant data",
    ],
    shopify: {
      show: true,
      capabilities: [
        "Liquid Theme Extensions",
        "Shoppable Video Carousel",
        "Product Tagging",
        "Touch / Swipe Interactions",
        "Storefront API",
        "Admin API",
        "Theme App Extension",
        "Responsive Debugging",
      ],
    },
    stack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Prisma", "Shopify APIs", "Liquid", "JavaScript"],
  },
  {
    id: "grras-solutions",
    company: "GRRAS Solutions Pvt. Ltd.",
    product: null,
    role: "MERN Stack Developer Trainee",
    type: "Trainee",
    period: "Aug 2025 – Feb 2026",
    location: "Jaipur, Rajasthan, India",
    logo: "/images/grras.jpeg",
    logoAlt: "GRRAS Solutions Logo",
    logoBg: "#ffffff",
    active: false,
    summary:
      "Developed full-stack web applications using the MERN stack, focusing on REST API design, authentication flows, and database architecture.",
    highlights: [
      "Developed full-stack MERN applications with React frontend and Express/Node.js backend",
      "Designed and implemented REST APIs with JWT authentication and role-based authorization",
      "Created MongoDB schemas using Mongoose for structured data modeling",
      "Practiced version control with Git and GitHub across feature branches",
      "Tested APIs with Postman and maintained clean documentation",
    ],
    shopify: { show: false, capabilities: [] },
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "REST APIs", "Git"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-b border-[#1c1e24] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#8b7cf8] tracking-widest uppercase">
            02 // Experience
          </span>
          <div className="h-px flex-grow bg-[#23252B]" aria-hidden="true" />
        </div>

        <div className="mb-10 space-y-1">
          <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6]">
            Work Experience
          </h2>
          <p className="text-sm text-[#8E929E] max-w-xl">
            Production engineering experience building Shopify app features, backend services, and full-stack web applications.
          </p>
        </div>

        <div className="space-y-14">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="relative border-l-2 border-[#23252B] hover:border-[#8b7cf8]/50 transition-colors duration-300 pl-6 sm:pl-8 py-1"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[5px] top-2 w-2 h-2 rounded-full"
                style={{
                  backgroundColor: exp.active ? "#34d399" : "#374151",
                  boxShadow: exp.active ? "0 0 0 3px rgba(52,211,153,0.15)" : "none",
                }}
                aria-hidden="true"
              />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div
                    className="w-11 h-11 rounded-xl border border-[#23252B] p-1.5 flex items-center justify-center shrink-0 overflow-hidden"
                    style={{ backgroundColor: exp.logoBg }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={exp.logo}
                      alt={exp.logoAlt}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="text-base font-bold text-[#F3F4F6]">
                        {exp.company}
                      </h3>
                      {exp.active && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                          Current
                        </span>
                      )}
                      {exp.product && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#8E929E] bg-[#131417] border border-[#23252B]">
                          {exp.product}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#8b7cf8]">{exp.role}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#8E929E] shrink-0">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5 text-[#5a5f6e]" aria-hidden="true" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#5a5f6e]" aria-hidden="true" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-[#8E929E] leading-relaxed mb-4 max-w-3xl">
                {exp.summary}
              </p>

              {/* Highlights */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#9ca3af]">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#8b7cf8] shrink-0" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Shopify capabilities callout (Invictus Alpha only) */}
              {exp.shopify.show && (
                <div className="mb-5 border border-[#23252B] rounded-lg p-4 bg-[#131417]">
                  <p className="text-[11px] font-mono text-[#5a5f6e] uppercase tracking-wider mb-3">
                    Shopify Development Capabilities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.shopify.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-2.5 py-1 rounded text-xs font-mono text-[#8E929E] bg-[#18191D] border border-[#2d3748] hover:border-[#374151] hover:text-[#F3F4F6] transition-colors"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-[#131417] border border-[#23252B] text-[11px] font-mono text-[#6b7280]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
