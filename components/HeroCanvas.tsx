"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const webGLSupportedRef = useRef(true);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) { setWebGLSupported(false); return; }
    } catch {
      setWebGLSupported(false);
      return;
    }

    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ===== TECHNICAL ARCHITECTURE VISUALIZATION =====
    // A service-mesh / API layer graph — meaningful 3D engineering metaphor
    //
    // Structure:
    //   - 1 central node (API gateway)
    //   - 6 mid-tier nodes (services: frontend, backend, db, cache, queue, auth)
    //   - Subtle edge connections
    //   - Slowly rotating, breathing

    const group = new THREE.Group();
    scene.add(group);

    const accent = new THREE.Color(0x8b7cf8); // muted violet
    const accentBlue = new THREE.Color(0x60a5fa); // muted blue
    const dimGray = new THREE.Color(0x374151);

    // Helper: create a node sphere
    const createNode = (
      radius: number,
      color: THREE.Color,
      position: THREE.Vector3,
      opacity: number = 1.0,
      wireframe: boolean = false
    ) => {
      const geo = new THREE.SphereGeometry(radius, wireframe ? 8 : 16, wireframe ? 8 : 16);
      const mat = new THREE.MeshStandardMaterial({
        color,
        wireframe,
        transparent: opacity < 1,
        opacity,
        metalness: wireframe ? 0 : 0.4,
        roughness: wireframe ? 1 : 0.5,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(position);
      return { mesh, geo, mat };
    };

    // Helper: create an edge (line between two points)
    const createEdge = (from: THREE.Vector3, to: THREE.Vector3, opacity: number = 0.18) => {
      const points = [from.clone(), to.clone()];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: 0x4a5568,
        transparent: true,
        opacity,
      });
      const line = new THREE.Line(geo, mat);
      return { line, geo, mat };
    };

    // Central "gateway" node
    const center = new THREE.Vector3(0, 0, 0);
    const centralNode = createNode(0.26, accent, center, 1.0, false);
    group.add(centralNode.mesh);

    // Outer ring node positions (6 service nodes)
    const outerRadius = 1.9;
    const serviceNodes: ReturnType<typeof createNode>[] = [];
    const servicePositions: THREE.Vector3[] = [];
    const serviceColors = [accent, accentBlue, accentBlue, accent, dimGray, dimGray];
    const serviceSizes = [0.13, 0.11, 0.13, 0.10, 0.09, 0.11];

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 - Math.PI / 6;
      // Vary the height slightly for 3D depth
      const z = (i % 2 === 0 ? 0.4 : -0.4) + (Math.random() - 0.5) * 0.3;
      const pos = new THREE.Vector3(
        Math.cos(angle) * outerRadius,
        Math.sin(angle) * outerRadius,
        z
      );
      servicePositions.push(pos);
      const node = createNode(serviceSizes[i], serviceColors[i], pos, 0.9, false);
      serviceNodes.push(node);
      group.add(node.mesh);

      // Edge: center → service node
      const edge = createEdge(center, pos, 0.20);
      group.add(edge.line);
    }

    // Additional outer connections (service to service — adjacent)
    for (let i = 0; i < 6; i++) {
      if (i % 2 === 0) {
        const next = (i + 2) % 6;
        const edge = createEdge(servicePositions[i], servicePositions[next], 0.10);
        group.add(edge.line);
      }
    }

    // Tertiary micro-nodes (further out)
    const tertiaryCount = 8;
    const tertiaryNodes: { mesh: THREE.Mesh; geo: THREE.SphereGeometry; mat: THREE.MeshStandardMaterial }[] = [];
    for (let i = 0; i < tertiaryCount; i++) {
      const angle = (i / tertiaryCount) * Math.PI * 2 + 0.3;
      const r = 2.8 + Math.random() * 0.5;
      const pos = new THREE.Vector3(
        Math.cos(angle) * r,
        Math.sin(angle) * r,
        (Math.random() - 0.5) * 1.2
      );
      const node = createNode(0.055, dimGray, pos, 0.6, false);
      tertiaryNodes.push(node);
      group.add(node.mesh);

      // Connect to nearest service node
      let nearest = servicePositions[0];
      let minDist = pos.distanceTo(servicePositions[0]);
      for (const sp of servicePositions) {
        const d = pos.distanceTo(sp);
        if (d < minDist) { minDist = d; nearest = sp; }
      }
      const edge = createEdge(pos, nearest, 0.08);
      group.add(edge.line);
    }

    // Subtle ring around central node
    const ringGeo = new THREE.RingGeometry(0.40, 0.42, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x6d4aff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    group.add(ring);

    // Outer orbit ring
    const outerRingGeo = new THREE.RingGeometry(1.82, 1.85, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x374151,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    group.add(outerRing);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b7cf8, 2.5, 15);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x60a5fa, 1.8, 15);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    // Mouse interaction
    let targetX = 0;
    let targetY = 0;
    let lerpX = 0;
    let lerpY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / width - 0.5) * 1.8;
      targetY = -((event.clientY - rect.top) / height - 0.5) * 1.8;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const rect = container.getBoundingClientRect();
      targetX = ((e.touches[0].clientX - rect.left) / width - 0.5) * 1.2;
      targetY = -((e.touches[0].clientY - rect.top) / height - 0.5) * 1.2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });

    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;

      // Smooth mouse lerp
      lerpX += (targetX - lerpX) * 0.04;
      lerpY += (targetY - lerpY) * 0.04;

      // Very slow base rotation of the entire graph
      group.rotation.y = t * 0.06 + lerpX * 0.3;
      group.rotation.x = lerpY * 0.2 + Math.sin(t * 0.3) * 0.04;

      // Inner ring counter-rotates subtly
      ring.rotation.z = -t * 0.2;
      outerRing.rotation.z = t * 0.08;

      // Central node gentle pulse
      const pulse = 1 + Math.sin(t * 1.8) * 0.04;
      centralNode.mesh.scale.setScalar(pulse);

      // Point light orbit
      pointLight1.position.x = Math.sin(t * 0.4) * 4;
      pointLight1.position.z = Math.cos(t * 0.4) * 4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);

      // Dispose all
      centralNode.geo.dispose(); centralNode.mat.dispose();
      serviceNodes.forEach(n => { n.geo.dispose(); n.mat.dispose(); });
      tertiaryNodes.forEach(n => { n.geo.dispose(); n.mat.dispose(); });
      ringGeo.dispose(); ringMat.dispose();
      outerRingGeo.dispose(); outerRingMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webGLSupportedRef.current) {
    return (
      <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
        <div className="relative w-56 h-56">
          <div className="absolute inset-0 rounded-full border border-[#374151] opacity-30" />
          <div className="absolute inset-6 rounded-full border border-[#4a5568] opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-[#8b7cf8] opacity-60" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[320px] sm:h-[400px] lg:h-[480px] relative"
      aria-label="Interactive architecture visualization"
    />
  );
}
