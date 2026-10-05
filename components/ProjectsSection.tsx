"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  accentColor: string;
  accentBg: string;
  description: string;
  challenge: string;
  liveUrl: string | null;
  githubUrl: string | null;
  stack: string[];
  features: { label: string; description: string }[];
  tag: string;
}

const projects: Project[] = [
  {
    id: "pickone",
    title: "PickOne",
    subtitle: "Real-Time Battle Voting Platform",
    accentColor: "#60a5fa",
    accentBg: "rgba(96, 165, 250, 0.06)",
    description:
      "A real-time image-based voting platform where users create two-choice battle duels, vote on options, leave comments, and see live result updates. Built with WebSocket-driven real-time state and background job processing.",
    challenge:
      "Designing real-time vote synchronization at scale: votes from multiple concurrent users needed to be broadcast instantly without stale reads, race conditions, or vote duplication. Used Redis with atomic operations and BullMQ for reliable background processing.",
    liveUrl: "https://pick-one-one.vercel.app/",
    githubUrl: null,
    stack: ["Next.js", "TypeScript", "Express.js", "Socket.IO", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
    features: [
      { label: "Real-time sync", description: "Socket.IO rooms broadcast vote results to all connected clients instantly" },
      { label: "Atomic vote writes", description: "Redis atomic operations prevent race conditions on concurrent votes" },
      { label: "Background jobs", description: "BullMQ + Redis for deferred leaderboard aggregation and notifications" },
      { label: "Data persistence", description: "PostgreSQL + Prisma ORM with type-safe schema and migrations" },
    ],
    tag: "Full Stack",
  },
  {
    id: "tableorbit",
    title: "Restaurant QR Ordering System",
    subtitle: "QR-Based Ordering & Real-Time Tracking",
    accentColor: "#34d399",
    accentBg: "rgba(52, 211, 153, 0.06)",
    description:
      "A QR-based restaurant ordering platform where customers scan a table QR code, browse the live menu, manage a cart, place orders, and track order status in real-time. Includes Razorpay payment integration and Cloudinary image management.",
    challenge:
      "Building a real-time order tracking system where kitchen staff updates and customer-facing order status stay synchronized without polling. Implemented Socket.IO rooms per table for event-driven order state broadcasting.",
    liveUrl: "https://restaurant-app-gold-three.vercel.app/",
    githubUrl: null,
    stack: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO", "Razorpay", "Cloudinary"],
    features: [
      { label: "QR table routing", description: "Each table has a unique QR code routing customers to their session" },
      { label: "Live order status", description: "Socket.IO keeps order status synchronized between kitchen and customer" },
      { label: "Payment integration", description: "Razorpay checkout flow with webhook-confirmed order processing" },
      { label: "Media management", description: "Cloudinary for menu item image uploads, transformations, and CDN delivery" },
    ],
    tag: "Full Stack",
  },
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 border-b border-[#1c1e24] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#8b7cf8] tracking-widest uppercase">
            03 // Projects
          </span>
          <div className="h-px flex-grow bg-[#23252B]" aria-hidden="true" />
        </div>

        <div className="mb-10 space-y-1">
          <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6]">
            Featured Projects
          </h2>
          <p className="text-sm text-[#8E929E] max-w-xl">
            Personal projects built with real production concerns — real-time systems, background job processing, payment integrations, and database design.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="border border-[#23252B] rounded-xl overflow-hidden transition-colors duration-300 hover:border-[#373A44]"
              style={{ background: "#111316" }}
            >
              {/* Project header */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">

                  <div className="space-y-1.5">
                    {/* Tag */}
                    <span
                      className="inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded border tracking-wider uppercase"
                      style={{
                        color: project.accentColor,
                        borderColor: `${project.accentColor}30`,
                        background: project.accentBg,
                      }}
                    >
                      {project.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#F3F4F6] leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: project.accentColor }}>
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — GitHub repository`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8E929E] hover:text-[#F3F4F6] bg-[#131417] hover:bg-[#18191D] border border-[#23252B] hover:border-[#373A44] px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — Live application`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D0E10] bg-[#F3F4F6] hover:bg-white px-3 py-1.5 rounded-lg transition-colors group"
                      >
                        <span>Live App</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#8E929E] leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Technical challenge callout */}
                <div className="mb-6 rounded-lg border border-[#23252B] bg-[#131417] p-4">
                  <p className="text-[11px] font-mono text-[#5a5f6e] uppercase tracking-wider mb-2">
                    Key Engineering Challenge
                  </p>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Feature breakdown */}
                <div
                  className="mb-6 cursor-pointer"
                  onClick={() =>
                    setExpandedProject(
                      expandedProject === project.id ? null : project.id
                    )
                  }
                  role="button"
                  aria-expanded={expandedProject === project.id}
                  aria-controls={`${project.id}-features`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpandedProject(
                        expandedProject === project.id ? null : project.id
                      );
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] font-mono text-[#5a5f6e] uppercase tracking-wider">
                      Technical Features
                    </p>
                    <span className="text-[10px] font-mono text-[#5a5f6e]">
                      {expandedProject === project.id ? "collapse ↑" : "expand ↓"}
                    </span>
                  </div>

                  {expandedProject === project.id && (
                    <div
                      id={`${project.id}-features`}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      {project.features.map((f) => (
                        <div
                          key={f.label}
                          className="border border-[#23252B] rounded-lg p-3 bg-[#0D0E10]"
                        >
                          <p
                            className="text-xs font-semibold mb-1"
                            style={{ color: project.accentColor }}
                          >
                            {f.label}
                          </p>
                          <p className="text-xs text-[#8E929E] leading-relaxed">
                            {f.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-[#0D0E10] border border-[#23252B] text-[11px] font-mono text-[#6b7280]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
