"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GlobalCanvas from "@/components/GlobalCanvas";
import CustomCursor from "@/components/CustomCursor";
import useScrollReveal from "@/lib/useScrollReveal";

function Portfolio() {
  useScrollReveal();
  return null;
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D0E10] text-[#F3F4F6] relative selection:bg-[#8b7cf8]/20 selection:text-[#8b7cf8]">
      <CustomCursor />
      <GlobalCanvas />
      <Portfolio />
      <Navbar />
      <main className="grow relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
