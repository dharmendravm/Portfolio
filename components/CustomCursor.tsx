"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isVisibleRef = useRef(false);
  const [renderTick, setRenderTick] = useState(0);

  useEffect(() => {
    // Check touch screen / coarse pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    isVisibleRef.current = true;
    setRenderTick((t) => t + 1); // trigger re-render after mount
    document.body.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("group"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => { isVisibleRef.current = false; setRenderTick((t) => t + 1); };
    const handleMouseEnter = () => { isVisibleRef.current = true; setRenderTick((t) => t + 1); };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth lerp loop for trailing outer aura
    let animationFrameId: number;

    const animateTrail = () => {
      animationFrameId = requestAnimationFrame(animateTrail);
      trailX += (mouseX - trailX) * 0.18;
      trailY += (mouseY - trailY) * 0.18;
      setTrailingPos({ x: trailX, y: trailY });
    };

    animateTrail();

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisibleRef.current) return null;

  return (
    <>
      {/* Inner dot cursor */}
      <div
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-transform duration-100 ease-out ${
          isHovered
            ? "w-4 h-4 bg-[#60a5fa] shadow-[0_0_10px_#60a5fa]"
            : "w-2.5 h-2.5 bg-[#8b7cf8] shadow-[0_0_7px_#8b7cf8]"
        } ${isClicked ? "scale-75" : "scale-100"}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Trailing outer ring */}
      <div
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-all duration-300 ease-out ${
          isHovered
            ? "w-10 h-10 border-[#60a5fa]/60 bg-[#60a5fa]/5"
            : "w-8 h-8 border-[#8b7cf8]/40 bg-[#8b7cf8]/3"
        } ${isClicked ? "scale-125 opacity-40" : "opacity-100"}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
