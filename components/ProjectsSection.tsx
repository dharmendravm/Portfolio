"use client";

import { useState } from "react";
import { ExternalLink, Play, Vote, Utensils, Sparkles } from "lucide-react";
import Card3DCanvas from "@/components/Card3DCanvas";

export default function ProjectsSection() {
  // Card hover states for 3D canvas interaction speedups
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // State for PickOne interactive voting battle inside card
  const [pickOneVotes, setPickOneVotes] = useState({ optionA: 142, optionB: 98 });
  const [votedOption, setVotedOption] = useState<"A" | "B" | null>(null);

  const totalVotes = pickOneVotes.optionA + pickOneVotes.optionB;
  const pctA = Math.round((pickOneVotes.optionA / totalVotes) * 100);
  const pctB = 100 - pctA;

  const handleVote = (option: "A" | "B") => {
    if (votedOption === option) return;
    setPickOneVotes((prev) => ({
      optionA: option === "A" ? prev.optionA + 1 : prev.optionA > 142 ? prev.optionA - 1 : prev.optionA,
      optionB: option === "B" ? prev.optionB + 1 : prev.optionB > 98 ? prev.optionB - 1 : prev.optionB,
    }));
    setVotedOption(option);
  };

  // State for TableOrbit order status tracker inside card
  const [orderStep, setOrderStep] = useState<number>(2);

  return (
    <section id="projects" className="py-20 border-b border-[#23252B]/60 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#A78BFA] tracking-wider uppercase">03 // FEATURED WORK</span>
          <div className="h-[1px] flex-grow bg-[#23252B]" />
        </div>

        <div className="flex flex-col space-y-2 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6]">
            Featured Projects
          </h2>
          <p className="text-sm text-[#8E929E] max-w-xl">
            A selection of production Shopify app features and full-stack web platforms built with PERN stack, Next.js, and Shopify APIs.
          </p>
        </div>

        {/* Projects Presentation Grid */}
        <div className="space-y-10">
          
          {/* Project 1: CleverCat Shopify App (Featured Showcase Card) */}
          <div
            onMouseEnter={() => setHoveredCard("clevercat")}
            onMouseLeave={() => setHoveredCard(null)}
            className="rounded-2xl bg-[#18191D]/90 backdrop-blur-md border border-[#23252B] hover:border-[#A78BFA]/50 hover:shadow-[0_20px_50px_rgba(167,139,250,0.15)] transition-all duration-300 overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Info Column */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#131417] border border-[#23252B] p-1.5 shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/clevercat.webp"
                        alt="CleverCat Logo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/20">
                          Invictus Alpha Product
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono text-[#8E929E] bg-[#131417] border border-[#23252B]">
                          Shopify App
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#F3F4F6] group-hover:text-white transition-colors">
                        CleverCat Shopify App
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#8E929E] leading-relaxed">
                    Contributing to Shopify app experiences and storefront features for the CleverCat product, enabling merchants to integrate high-converting shoppable video carousels directly onto their Shopify stores.
                  </p>
                </div>

                {/* Key Capabilities List */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#8E929E] uppercase tracking-wider">Key Capabilities</span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#F3F4F6]">
                    <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" /> Shoppable Video Carousel</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" /> Video Processing Engine</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" /> Storefront Product Overlay</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" /> Liquid Theme Extensions</span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#8E929E]">
                  {["PERN Stack", "Shopify App Development", "Product Integrations", "React", "Shopify APIs"].map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded bg-[#131417] border border-[#23252B]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Shoppable Video Widget Mockup with Integrated 3D Canvas */}
              <div className="lg:col-span-6 bg-[#131417]/80 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-[#23252B] flex flex-col justify-between items-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <Card3DCanvas type="clevercat" hovered={hoveredCard === "clevercat"} />
                </div>

                <div className="w-full max-w-md rounded-xl bg-[#0D0E10]/90 backdrop-blur-md border border-[#23252B] p-4 shadow-xl relative z-10">
                  
                  {/* Widget Preview Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#23252B] text-xs">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/clevercat.webp"
                        alt="CleverCat Logo"
                        className="w-5 h-5 object-contain"
                      />
                      <span className="font-semibold text-[#F3F4F6]">CleverCat Storefront Engine</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Live 3D Engine
                    </span>
                  </div>

                  {/* Shoppable Video Grid Simulation */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    
                    <div className="relative rounded-lg bg-[#18191D] border border-[#23252B] overflow-hidden aspect-[3/4] flex flex-col justify-between p-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      <div className="relative z-10 flex justify-between items-start">
                        <span className="text-[9px] font-mono bg-black/60 text-white px-1.5 py-0.5 rounded flex items-center gap-1">
                          <Play className="w-2.5 h-2.5 fill-white" /> 0:15
                        </span>
                        <span className="text-[9px] font-mono bg-[#A78BFA] text-black font-bold px-1.5 py-0.5 rounded">
                          HOT
                        </span>
                      </div>
                      <div className="relative z-10 bg-[#0D0E10]/90 backdrop-blur-md p-2 rounded border border-[#23252B] flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-medium text-white">Silk Summer Dress</p>
                          <p className="text-[9px] font-mono text-[#A78BFA] font-bold">$79.00</p>
                        </div>
                        <button className="text-[9px] bg-[#A78BFA] text-black font-bold px-2 py-1 rounded">Buy</button>
                      </div>
                    </div>

                    <div className="relative rounded-lg bg-[#18191D] border border-[#23252B] overflow-hidden aspect-[3/4] flex flex-col justify-between p-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      <div className="relative z-10 flex justify-between items-start">
                        <span className="text-[9px] font-mono bg-black/60 text-white px-1.5 py-0.5 rounded flex items-center gap-1">
                          <Play className="w-2.5 h-2.5 fill-white" /> 0:24
                        </span>
                      </div>
                      <div className="relative z-10 bg-[#0D0E10]/90 backdrop-blur-md p-2 rounded border border-[#23252B] flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-medium text-white">Leather Tote Bag</p>
                          <p className="text-[9px] font-mono text-[#A78BFA] font-bold">$129.00</p>
                        </div>
                        <button className="text-[9px] bg-[#A78BFA] text-black font-bold px-2 py-1 rounded">Buy</button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Project 2 & 3: PickOne & TableOrbit Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Project 2: PickOne */}
            <div
              onMouseEnter={() => setHoveredCard("pickone")}
              onMouseLeave={() => setHoveredCard(null)}
              className="rounded-2xl bg-[#18191D]/90 backdrop-blur-md border border-[#23252B] hover:border-[#38BDF8]/50 hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)] transition-all duration-300 p-6 sm:p-8 space-y-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Vote className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-400">Real-Time Voting Platform</span>
                  </div>
                  <a
                    href="https://pick-one-one.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#F3F4F6] hover:text-[#A78BFA] transition-colors"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-[#F3F4F6] group-hover:text-white transition-colors">
                  PickOne
                </h3>

                <p className="text-sm text-[#8E929E] leading-relaxed">
                  A real-time, image-based voting platform featuring two-choice battles, live voting, user comments, and dynamic leaderboard updates.
                </p>
              </div>

              {/* 3D Battle Nodes Visual */}
              <div className="h-28 w-full relative my-2">
                <Card3DCanvas type="pickone" hovered={hoveredCard === "pickone"} />
              </div>

              {/* Interactive Battle Vote Test Widget */}
              <div className="rounded-xl bg-[#131417]/90 backdrop-blur-md border border-[#23252B] p-4 space-y-3 relative z-10">
                <div className="flex items-center justify-between text-[11px] text-[#8E929E] font-mono">
                  <span>Live Duel Preview: Dark vs Charcoal</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Socket.IO Active
                  </span>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => handleVote("A")}
                    className={`w-full p-2.5 rounded border text-left transition-all flex items-center justify-between text-xs ${
                      votedOption === "A"
                        ? "bg-[#A78BFA]/10 border-[#A78BFA] text-[#F3F4F6]"
                        : "bg-[#0D0E10] border-[#23252B] text-[#8E929E]"
                    }`}
                  >
                    <span>A. Dark Violet Theme</span>
                    <span className="font-mono font-bold text-[#A78BFA]">{pctA}%</span>
                  </button>

                  <button
                    onClick={() => handleVote("B")}
                    className={`w-full p-2.5 rounded border text-left transition-all flex items-center justify-between text-xs ${
                      votedOption === "B"
                        ? "bg-[#A78BFA]/10 border-[#A78BFA] text-[#F3F4F6]"
                        : "bg-[#0D0E10] border-[#23252B] text-[#8E929E]"
                    }`}
                  >
                    <span>B. Minimal Charcoal</span>
                    <span className="font-mono font-bold text-[#8E929E]">{pctB}%</span>
                  </button>
                </div>

                <div className="w-full h-1.5 rounded-full bg-[#0D0E10] overflow-hidden flex">
                  <div className="bg-[#A78BFA] transition-all" style={{ width: `${pctA}%` }}></div>
                  <div className="bg-[#373A44] transition-all" style={{ width: `${pctB}%` }}></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#8E929E] relative z-10">
                {["Next.js", "TypeScript", "Express", "Socket.IO", "PostgreSQL", "Prisma", "Redis", "BullMQ"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-[#131417] border border-[#23252B]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3: TableOrbit */}
            <div
              onMouseEnter={() => setHoveredCard("tableorbit")}
              onMouseLeave={() => setHoveredCard(null)}
              className="rounded-2xl bg-[#18191D]/90 backdrop-blur-md border border-[#23252B] hover:border-emerald-500/50 hover:shadow-[0_20px_50px_rgba(52,211,153,0.15)] transition-all duration-300 p-6 sm:p-8 space-y-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono text-emerald-400">QR Ordering & Payments</span>
                  </div>
                  <a
                    href="https://restaurant-app-gold-three.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#F3F4F6] hover:text-[#A78BFA] transition-colors"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-[#F3F4F6] group-hover:text-white transition-colors">
                  TableOrbit
                </h3>

                <p className="text-sm text-[#8E929E] leading-relaxed">
                  A QR-based restaurant ordering platform where customers can browse menus, manage carts, place orders, and track order status live.
                </p>
              </div>

              {/* 3D QR Radar Node Visual */}
              <div className="h-28 w-full relative my-2">
                <Card3DCanvas type="tableorbit" hovered={hoveredCard === "tableorbit"} />
              </div>

              {/* Interactive Live Order Step Simulator Widget */}
              <div className="rounded-xl bg-[#131417]/90 backdrop-blur-md border border-[#23252B] p-4 space-y-3 relative z-10">
                <div className="flex items-center justify-between text-[11px] text-[#8E929E] font-mono">
                  <span>Order #4092 · Table 04</span>
                  <span className="text-emerald-400 font-semibold">Razorpay Verified</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => setOrderStep(1)}
                    className={`p-2 rounded border text-center text-[10px] font-mono font-bold transition-all ${
                      orderStep >= 1 ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400" : "bg-[#0D0E10] border-[#23252B] text-[#8E929E]"
                    }`}
                  >
                    1. Placed
                  </button>
                  <button
                    onClick={() => setOrderStep(2)}
                    className={`p-2 rounded border text-center text-[10px] font-mono font-bold transition-all ${
                      orderStep >= 2 ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400" : "bg-[#0D0E10] border-[#23252B] text-[#8E929E]"
                    }`}
                  >
                    2. Preparing
                  </button>
                  <button
                    onClick={() => setOrderStep(3)}
                    className={`p-2 rounded border text-center text-[10px] font-mono font-bold transition-all ${
                      orderStep >= 3 ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400" : "bg-[#0D0E10] border-[#23252B] text-[#8E929E]"
                    }`}
                  >
                    3. Served
                  </button>
                </div>

                <div className="bg-[#0D0E10] p-2.5 rounded border border-[#23252B] text-xs font-mono text-center text-[#F3F4F6]">
                  {orderStep === 1 && "Order Placed & Sent to Kitchen"}
                  {orderStep === 2 && "Chef Preparing Meal"}
                  {orderStep === 3 && "Served Hot at Table 04"}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#8E929E] relative z-10">
                {["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.IO", "Razorpay", "Cloudinary"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-[#131417] border border-[#23252B]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
