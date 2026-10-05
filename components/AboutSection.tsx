"use client";

import { MapPin, Building2 } from "lucide-react";

const principles = [
  {
    num: "01",
    title: "Full-stack engineering with real-world constraints",
    description:
      "I work across the entire stack — designing PostgreSQL schemas, building Express APIs, writing React interfaces, and debugging Shopify storefronts. Pragmatic architecture that ships, not over-engineered abstractions.",
  },
  {
    num: "02",
    title: "Real-time and asynchronous system design",
    description:
      "Experience with Socket.IO event-driven systems, Redis atomic operations, BullMQ background job queues, and designing concurrent vote/order systems without race conditions.",
  },
  {
    num: "03",
    title: "Type safety and maintainable codebases",
    description:
      "TypeScript across the stack, Prisma for type-safe database access, clean REST API contracts. Code that a team can maintain, not just code that works.",
  },
  {
    num: "04",
    title: "Shopify platform development",
    description:
      "Production Shopify app development: Theme App Extensions, Liquid storefront scripting, Storefront and Admin APIs, shoppable video features, and merchant workflow engineering.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 border-b border-[#1c1e24] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#8b7cf8] tracking-widest uppercase">
            01 // About
          </span>
          <div className="h-px flex-grow bg-[#23252B]" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Biography */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] leading-snug">
              Full Stack Developer based in Jaipur.
            </h2>

            <p className="text-sm sm:text-base text-[#8E929E] leading-relaxed">
              I build production web applications across the full stack — REST APIs,
              real-time backends, relational databases, and React frontends. Currently
              working at{" "}
              <span className="text-[#F3F4F6] font-medium">Invictus Alpha</span> on
              Shopify app development for CleverCat.
            </p>

            <p className="text-sm sm:text-base text-[#8E929E] leading-relaxed">
              My background combines backend engineering (Node.js, Express, PostgreSQL,
              Redis) with frontend development (React, Next.js) and Shopify platform
              work — giving me a complete picture of how applications are built and
              deployed.
            </p>

            <div className="pt-4 border-t border-[#23252B] space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#9ca3af]">
                <MapPin className="w-3.5 h-3.5 text-[#5a5f6e]" aria-hidden="true" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Full Stack Developer at Invictus Alpha (CleverCat)</span>
              </div>
              <div className="flex items-center gap-2 text-[#9ca3af]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b7cf8]" aria-hidden="true" />
                <span>its.dharmendra.v@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Engineering principles */}
          <div className="lg:col-span-7">
            <h3 className="text-[11px] font-mono text-[#5a5f6e] uppercase tracking-wider mb-5">
              Engineering Focus
            </h3>

            <div className="divide-y divide-[#1c1e24]">
              {principles.map((item) => (
                <div key={item.num} className="py-5 first:pt-0 last:pb-0 group">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-[#8b7cf8] pt-0.5 shrink-0">
                      {item.num}
                    </span>
                    <div className="space-y-1.5">
                      <h4 className="text-sm font-semibold text-[#F3F4F6] group-hover:text-white transition-colors leading-snug">
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
