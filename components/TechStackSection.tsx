"use client";

import { Cpu } from "lucide-react";

const techCategories = [
  {
    category: "Frontend Stack",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    category: "Backend Services",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
  },
  {
    category: "Databases & ORM",
    skills: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose"],
  },
  {
    category: "Shopify Ecosystem",
    skills: ["Shopify App Development", "Shopify APIs", "Shopify Theme Extensions", "Liquid", "Storefront Integrations"],
  },
  {
    category: "Tools & Infrastructure",
    skills: ["Git & GitHub", "Postman", "Redis & BullMQ", "Cloudinary"],
  },
];

export default function TechStackSection() {
  return (
    <section id="tech" className="py-20 border-b border-[#23252B]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#A78BFA] tracking-wider uppercase">04 // ARCHITECTURE & STACK</span>
          <div className="h-[1px] flex-grow bg-[#23252B]" />
        </div>

        <div className="flex flex-col space-y-2 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6]">
            Technologies & Tooling
          </h2>
          <p className="text-sm text-[#8E929E] max-w-xl">
            A comprehensive overview of full-stack web technologies, databases, APIs, and Shopify developer tooling.
          </p>
        </div>

        {/* Open Categorized Rows */}
        <div className="divide-y divide-[#23252B] border-t border-b border-[#23252B]">
          {techCategories.map((group) => (
            <div key={group.category} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-4 font-mono text-xs text-[#F3F4F6] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></span>
                {group.category}
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded bg-[#131417] border border-[#23252B] text-xs font-mono text-[#8E929E] hover:text-[#F3F4F6] hover:border-[#373A44] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
