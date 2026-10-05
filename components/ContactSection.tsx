"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const EMAIL = "its.dharmendra.v@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-[#1c1e24] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#8b7cf8] tracking-widest uppercase">
            05 // Contact
          </span>
          <div className="h-px flex-grow bg-[#23252B]" aria-hidden="true" />
        </div>

        <div className="max-w-2xl space-y-8">

          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3F4F6] leading-[1.08]">
              Let&apos;s build something together.
            </h2>
            <p className="text-sm sm:text-base text-[#8E929E] leading-relaxed">
              I&apos;m open to full-time roles, freelance projects, and collaborations
              in full-stack development, backend engineering, and Shopify app work.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              id="contact-send-email"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#0D0E10] bg-[#F3F4F6] hover:bg-white px-6 py-3 rounded-lg transition-colors shadow-sm group"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Send Email</span>
              <ArrowUpRight
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
            </a>

            <button
              onClick={handleCopyEmail}
              id="contact-copy-email"
              className="inline-flex items-center justify-center gap-2 text-sm font-mono text-[#F3F4F6] bg-[#131417] hover:bg-[#18191D] border border-[#23252B] hover:border-[#374151] px-5 py-3 rounded-lg transition-colors"
              aria-label={copied ? "Email address copied" : "Copy email address"}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#6b7280]" aria-hidden="true" />
                  <span className="text-[#8E929E]">{EMAIL}</span>
                </>
              )}
            </button>
          </div>

          {/* Social links */}
          <div className="pt-6 border-t border-[#1c1e24] flex flex-wrap items-center gap-6 text-xs font-mono text-[#6b7280]">
            <a
              href="https://github.com/dharmendravm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex items-center gap-2 hover:text-[#F3F4F6] transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#8b7cf8]" />
              <span>github.com/dharmendravm</span>
            </a>

            <a
              href="https://linkedin.com/in/dharmendravm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 hover:text-[#F3F4F6] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-[#8b7cf8]" />
              <span>linkedin.com/in/dharmendravm</span>
            </a>

            <span className="text-[#2d3748]">Jaipur, Rajasthan, India</span>
          </div>

        </div>
      </div>
    </section>
  );
}
