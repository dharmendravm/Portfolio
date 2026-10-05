"use client";

const techGroups = [
  {
    label: "Language",
    primary: true,
    items: [
      { name: "JavaScript", level: "core" },
      { name: "TypeScript", level: "core" },
    ],
  },
  {
    label: "Frontend",
    primary: true,
    items: [
      { name: "React.js", level: "core" },
      { name: "Next.js", level: "core" },
      { name: "Redux Toolkit", level: "proficient" },
      { name: "Tailwind CSS", level: "proficient" },
    ],
  },
  {
    label: "Backend",
    primary: true,
    items: [
      { name: "Node.js", level: "core" },
      { name: "Express.js", level: "core" },
      { name: "REST APIs", level: "core" },
      { name: "Socket.IO", level: "proficient" },
    ],
  },
  {
    label: "Database & ORM",
    primary: false,
    items: [
      { name: "PostgreSQL", level: "core" },
      { name: "Prisma", level: "core" },
      { name: "MongoDB", level: "proficient" },
      { name: "Mongoose", level: "proficient" },
    ],
  },
  {
    label: "Infrastructure",
    primary: false,
    items: [
      { name: "Redis", level: "proficient" },
      { name: "BullMQ", level: "proficient" },
      { name: "Docker", level: "familiar" },
      { name: "Git & GitHub", level: "core" },
    ],
  },
  {
    label: "Shopify",
    primary: false,
    items: [
      { name: "Shopify APIs", level: "proficient" },
      { name: "Liquid", level: "proficient" },
      { name: "Theme App Extensions", level: "proficient" },
      { name: "Storefront API", level: "proficient" },
      { name: "Admin API", level: "proficient" },
      { name: "GraphQL", level: "familiar" },
    ],
  },
  {
    label: "Tools",
    primary: false,
    items: [
      { name: "Postman", level: "core" },
      { name: "Cloudinary", level: "proficient" },
      { name: "Razorpay", level: "familiar" },
      { name: "VS Code", level: "core" },
    ],
  },
];

const levelStyle: Record<string, string> = {
  core: "text-[#F3F4F6] border-[#374151] bg-[#131417]",
  proficient: "text-[#9ca3af] border-[#23252B] bg-[#0F1012]",
  familiar: "text-[#6b7280] border-[#1c1e24] bg-[#0D0E10]",
};

export default function TechStackSection() {
  return (
    <section id="tech" className="py-20 border-b border-[#1c1e24] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#8b7cf8] tracking-widest uppercase">
            04 // Stack
          </span>
          <div className="h-px flex-grow bg-[#23252B]" aria-hidden="true" />
        </div>

        <div className="mb-10 space-y-1">
          <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6]">
            Technologies &amp; Tooling
          </h2>
          <p className="text-sm text-[#8E929E] max-w-xl">
            Technologies I use across the full stack — from browser to database to deployment.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 mb-8 text-[11px] font-mono text-[#6b7280]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F3F4F6]" aria-hidden="true" />
            <span>Daily use</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#6b7280]" aria-hidden="true" />
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#374151]" aria-hidden="true" />
            <span>Familiar</span>
          </div>
        </div>

        {/* Tech rows */}
        <div className="border-t border-[#23252B]">
          {techGroups.map((group) => (
            <div
              key={group.label}
              className="border-b border-[#23252B] py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
            >
              <div className="md:col-span-3 flex items-center gap-2">
                {group.primary && (
                  <span
                    className="w-1 h-1 rounded-full bg-[#8b7cf8]"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`font-mono text-[11px] tracking-wider uppercase ${
                    group.primary ? "text-[#F3F4F6] font-semibold" : "text-[#6b7280]"
                  }`}
                >
                  {group.label}
                </span>
              </div>

              <div className="md:col-span-9 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`px-2.5 py-1 rounded border text-[11px] font-mono transition-colors hover:border-[#374151] hover:text-[#F3F4F6] ${levelStyle[item.level]}`}
                  >
                    {item.name}
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
