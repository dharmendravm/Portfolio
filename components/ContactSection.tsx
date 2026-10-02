"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "its.dharmendra.v@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#23252B]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#A78BFA] tracking-wider uppercase">05 // CONTACT</span>
          <div className="h-[1px] flex-grow bg-[#23252B]" />
        </div>

        <div className="max-w-3xl space-y-8">
          
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3F4F6] leading-tight">
            Have a project in mind? Let&apos;s build something together.
          </h2>

          <p className="text-base text-[#8E929E] leading-relaxed">
            I&apos;m open to connecting with developers, teams, and people building useful products across PERN stack applications and Shopify app ecosystems.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#0D0E10] bg-[#F3F4F6] hover:bg-white px-6 py-3.5 rounded-xl transition-all shadow-lg group"
            >
              <Mail className="w-4 h-4 text-[#0D0E10]" />
              <span>Send Email Directly</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 text-sm font-mono text-[#F3F4F6] bg-[#131417] hover:bg-[#18191D] border border-[#23252B] hover:border-[#373A44] px-5 py-3.5 rounded-xl transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8E929E]" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Links */}
          <div className="pt-8 border-t border-[#23252B] flex flex-wrap items-center gap-8 text-xs text-[#8E929E] font-mono">
            <a
              href="https://github.com/dharmendravm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#F3F4F6] transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#A78BFA]" />
              <span>github.com/dharmendravm</span>
            </a>

            <a
              href="https://linkedin.com/in/dharmendravm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#F3F4F6] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-[#A78BFA]" />
              <span>linkedin.com/in/dharmendravm</span>
            </a>

            <span className="text-[#8E929E]/60">Jaipur, Rajasthan, India</span>
          </div>

        </div>

      </div>
    </section>
  );
}
