"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobalCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const webGLSupportedRef = useRef(true);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) { webGLSupportedRef.current = false; return; }
    } catch {
      webGLSupportedRef.current = false;
      return;
    }

    const container = containerRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));
    container.appendChild(renderer.domElement);

    // --- Sparse Network Graph ---
    // Node positions representing system components
    const isMobile = width < 768;
    const nodeCount = isMobile ? 18 : 32;

    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodePositions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * (isMobile ? 20 : 30),
          (Math.random() - 0.5) * (isMobile ? 28 : 40),
          (Math.random() - 0.5) * 8
        )
      );
    }

    // Node sizes — a few "primary" nodes, rest "secondary"
    const primaryIndices = new Set<number>();
    const primaryCount = Math.floor(nodeCount * 0.25);
    while (primaryIndices.size < primaryCount) {
      primaryIndices.add(Math.floor(Math.random() * nodeCount));
    }

    // Render nodes as points with varying sizes
    const nodeGeo = new THREE.BufferGeometry();
    const nodePosArray = new Float32Array(nodeCount * 3);
    const nodeSizeArray = new Float32Array(nodeCount);
    const nodeColorArray = new Float32Array(nodeCount * 3);

    const colorPrimary = new THREE.Color(0x8b7cf8); // softer violet
    const colorSecondary = new THREE.Color(0x374151); // dark grey
    const colorTertiary = new THREE.Color(0x4a5568);

    nodePositions.forEach((pos, i) => {
      nodePosArray[i * 3] = pos.x;
      nodePosArray[i * 3 + 1] = pos.y;
      nodePosArray[i * 3 + 2] = pos.z;

      if (primaryIndices.has(i)) {
        nodeSizeArray[i] = 0.06;
        colorPrimary.toArray(nodeColorArray, i * 3);
      } else if (Math.random() > 0.6) {
        nodeSizeArray[i] = 0.035;
        colorTertiary.toArray(nodeColorArray, i * 3);
      } else {
        nodeSizeArray[i] = 0.025;
        colorSecondary.toArray(nodeColorArray, i * 3);
      }
    });

    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePosArray, 3));
    nodeGeo.setAttribute("color", new THREE.BufferAttribute(nodeColorArray, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nodeSystem = new THREE.Points(nodeGeo, nodeMat);
    scene.add(nodeSystem);

    // --- Edges: connect nearby nodes ---
    const edgePositions: number[] = [];
    const connectionThreshold = isMobile ? 8 : 10;
    const maxEdgesPerNode = 3;
    const edgeCounts = new Array(nodeCount).fill(0);

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (edgeCounts[i] >= maxEdgesPerNode || edgeCounts[j] >= maxEdgesPerNode) continue;
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < connectionThreshold) {
          edgePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
          edgeCounts[i]++;
          edgeCounts[j]++;
        }
      }
    }

    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(edgePositions), 3));

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x2d3748,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const edgeSystem = new THREE.LineSegments(edgeGeo, edgeMat);
    scene.add(edgeSystem);

    // --- Interaction ---
    const mouse = new THREE.Vector2(0, 0);
    let scrollY = 0;
    let targetScrollY = 0;
    let mouseLerpX = 0;
    let mouseLerpY = 0;

    const handleScroll = () => { targetScrollY = window.scrollY; };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Throttle to ~30fps for performance
      if (currentTime - lastTime < 33) return;
      lastTime = currentTime;

      const t = currentTime * 0.0003;

      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * 0.04;
      const scrollProgress = scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

      // Smooth mouse lerp
      mouseLerpX += (mouse.x - mouseLerpX) * 0.04;
      mouseLerpY += (mouse.y - mouseLerpY) * 0.04;

      // Very subtle camera drift with mouse parallax
      camera.position.x = mouseLerpX * 0.6;
      camera.position.y = mouseLerpY * 0.4 - scrollProgress * 3;

      // Very slow network drift
      nodeSystem.rotation.y = t * 0.04;
      edgeSystem.rotation.y = t * 0.04;

      // Pulse the primary nodes opacity slightly
      nodeMat.opacity = 0.45 + Math.sin(t * 2.5) * 0.06;

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      nodeGeo.dispose();
      nodeMat.dispose();
      edgeGeo.dispose();
      edgeMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webGLSupportedRef.current) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
}
