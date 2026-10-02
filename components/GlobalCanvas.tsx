"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function GlobalCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Test WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch (e) {
      setWebGLSupported(false);
      return;
    }

    const container = containerRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 12;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Main 3D Group
    const globalGroup = new THREE.Group();
    scene.add(globalGroup);

    // DENSE MULTI-LAYERED DRIFTING STARFIELD SYSTEM
    const starCount = 950;
    const starsGeo = new THREE.BufferGeometry();
    const originalPositions = new Float32Array(starCount * 3);
    const currentPositions = new Float32Array(starCount * 3);
    const driftVelocities = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorWhite = new THREE.Color(0xffffff);
    const colorMutedViolet = new THREE.Color(0xa78bfa);
    const colorDimBlue = new THREE.Color(0x60a5fa);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 32;
      const y = (Math.random() - 0.5) * 45;
      const z = (Math.random() - 0.5) * 22;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      currentPositions[i3] = x;
      currentPositions[i3 + 1] = y;
      currentPositions[i3 + 2] = z;

      // Unique subtle drift speeds in different directions per particle
      driftVelocities[i3] = (Math.random() - 0.5) * 0.002;
      driftVelocities[i3 + 1] = (Math.random() - 0.5) * 0.002;
      driftVelocities[i3 + 2] = (Math.random() - 0.5) * 0.001;

      // Color distribution: 50% white, 35% muted violet, 15% dim blue
      const rand = Math.random();
      let pickedColor = colorWhite;
      if (rand > 0.65) {
        pickedColor = colorDimBlue;
      } else if (rand > 0.3) {
        pickedColor = colorMutedViolet;
      }

      colors[i3] = pickedColor.r;
      colors[i3 + 1] = pickedColor.g;
      colors[i3 + 2] = pickedColor.b;
    }

    starsGeo.setAttribute("position", new THREE.BufferAttribute(currentPositions, 3));
    starsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starsMat = new THREE.PointsMaterial({
      size: 0.038,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starSystem = new THREE.Points(starsGeo, starsMat);
    globalGroup.add(starSystem);

    // Subtle Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const lightViolet = new THREE.PointLight(0xa78bfa, 1.8, 30);
    lightViolet.position.set(6, 6, 4);
    scene.add(lightViolet);

    const lightBlue = new THREE.PointLight(0x60a5fa, 1.5, 30);
    lightBlue.position.set(-6, -6, 2);
    scene.add(lightBlue);

    // Pointer 3D Interaction Tracking
    const mouseNDC = new THREE.Vector2(-999, -999);
    const mouseWorld = new THREE.Vector3(0, 0, 0);
    let scrollY = 0;
    let targetScrollY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;

      // Project mouse coordinates to 3D world space plane
      mouseWorld.set(mouseNDC.x * 12, mouseNDC.y * 8, 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!containerRef.current) return;
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop with Pointer Displacement & Drifting Starfield
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = performance.now() * 0.0006;

      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * 0.05;
      const scrollProgress = scrollY / (document.documentElement.scrollHeight || 1);

      // Starfield Drift & Magnetic Cursor Reaction
      const posAttr = starsGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      const cursorRadius = 3.2;

      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;

        // Natural continuous organic drift
        originalPositions[i3] += driftVelocities[i3];
        originalPositions[i3 + 1] += driftVelocities[i3 + 1];

        // Wrap around boundary bounds for seamless infinite background particle field
        if (originalPositions[i3] > 16) originalPositions[i3] = -16;
        if (originalPositions[i3] < -16) originalPositions[i3] = 16;
        if (originalPositions[i3 + 1] > 22) originalPositions[i3 + 1] = -22;
        if (originalPositions[i3 + 1] < -22) originalPositions[i3 + 1] = 22;

        const origX = originalPositions[i3];
        const origY = originalPositions[i3 + 1] - scrollProgress * 5;

        // Calculate distance from cursor
        const dx = origX - mouseWorld.x;
        const dy = origY - mouseWorld.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < cursorRadius && dist > 0.01) {
          const force = (1 - dist / cursorRadius) * 0.6;
          // Soft magnetic push away from cursor
          posArray[i3] = THREE.MathUtils.lerp(posArray[i3], origX + (dx / dist) * force * 1.2, 0.08);
          posArray[i3 + 1] = THREE.MathUtils.lerp(posArray[i3 + 1], origY + (dy / dist) * force * 1.2, 0.08);
        } else {
          // Smooth return to drifting baseline with gentle wave offset
          const waveX = Math.sin(time + i * 0.1) * 0.12;
          const waveY = Math.cos(time + i * 0.1) * 0.12;
          posArray[i3] = THREE.MathUtils.lerp(posArray[i3], origX + waveX, 0.04);
          posArray[i3 + 1] = THREE.MathUtils.lerp(posArray[i3 + 1], origY + waveY, 0.04);
        }
      }

      posAttr.needsUpdate = true;

      // Subtle light drift following scroll
      lightViolet.position.y = 6 - scrollProgress * 15;
      lightBlue.position.y = -6 - scrollProgress * 15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      starsGeo.dispose();
      starsMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webGLSupported) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
    />
  );
}

