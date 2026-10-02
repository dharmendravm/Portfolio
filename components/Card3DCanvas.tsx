"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Card3DCanvasProps {
  type: "clevercat" | "pickone" | "tableorbit" | "tech";
  hovered?: boolean;
}

export default function Card3DCanvas({ type, hovered = false }: Card3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

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
    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Color theme definition
    const colorViolet = new THREE.Color(0xa78bfa);
    const colorCyan = new THREE.Color(0x38bdf8);
    const colorEmerald = new THREE.Color(0x34d399);

    let mesh: THREE.Mesh | THREE.Group;

    if (type === "clevercat") {
      // 3D Floating Shopify Reel / Rounded Torus Knot
      const geo = new THREE.TorusKnotGeometry(0.7, 0.22, 64, 16);
      const mat = new THREE.MeshStandardMaterial({
        color: colorViolet,
        wireframe: true,
        metalness: 0.8,
        roughness: 0.2,
      });
      mesh = new THREE.Mesh(geo, mat);
      group.add(mesh);
    } else if (type === "pickone") {
      // Dual Battle Gem Nodes (Option A vs Option B 3D Geometry)
      const dualGroup = new THREE.Group();
      
      const geoA = new THREE.IcosahedronGeometry(0.5, 0);
      const matA = new THREE.MeshPhysicalMaterial({
        color: colorViolet,
        metalness: 0.9,
        roughness: 0.1,
        clearcoat: 1.0,
      });
      const meshA = new THREE.Mesh(geoA, matA);
      meshA.position.x = -0.55;
      dualGroup.add(meshA);

      const geoB = new THREE.OctahedronGeometry(0.5, 0);
      const matB = new THREE.MeshPhysicalMaterial({
        color: colorCyan,
        metalness: 0.9,
        roughness: 0.1,
        clearcoat: 1.0,
      });
      const meshB = new THREE.Mesh(geoB, matB);
      meshB.position.x = 0.55;
      dualGroup.add(meshB);

      mesh = dualGroup;
      group.add(mesh);
    } else if (type === "tableorbit") {
      // QR Orbit Ring Node
      const orbitGroup = new THREE.Group();
      
      const coreGeo = new THREE.DodecahedronGeometry(0.5, 0);
      const coreMat = new THREE.MeshPhysicalMaterial({
        color: colorEmerald,
        metalness: 0.8,
        roughness: 0.2,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      orbitGroup.add(coreMesh);

      const ringGeo = new THREE.TorusGeometry(0.9, 0.02, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: colorEmerald, wireframe: true, transparent: true, opacity: 0.5 });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 3;
      orbitGroup.add(ringMesh);

      mesh = orbitGroup;
      group.add(mesh);
    } else {
      // Tech Node Wireframe Icosahedron
      const geo = new THREE.IcosahedronGeometry(0.75, 1);
      const mat = new THREE.MeshStandardMaterial({
        color: colorViolet,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });
      mesh = new THREE.Mesh(geo, mat);
      group.add(mesh);
    }

    // Micro Star particles inside card scene
    const pCount = 60;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i++) {
      pPos[i] = (Math.random() - 0.5) * 4;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xc4b5fd,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
    });
    const pSystem = new THREE.Points(pGeo, pMat);
    group.add(pSystem);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa78bfa, 3, 10);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop using performance.now()
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = performance.now() * 0.001;
      const speedMultiplier = hovered ? 2.2 : 1.0;

      if (type === "clevercat") {
        mesh.rotation.x = time * 0.5 * speedMultiplier;
        mesh.rotation.y = time * 0.7 * speedMultiplier;
      } else if (type === "pickone") {
        mesh.rotation.y = time * 0.8 * speedMultiplier;
        mesh.rotation.z = Math.sin(time * 1.5) * 0.2;
      } else if (type === "tableorbit") {
        mesh.rotation.x = time * 0.4 * speedMultiplier;
        mesh.rotation.y = time * 0.9 * speedMultiplier;
      } else {
        mesh.rotation.x = time * 0.3 * speedMultiplier;
        mesh.rotation.y = time * 0.4 * speedMultiplier;
      }

      pSystem.rotation.y = time * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [type, hovered]);

  if (!webGLSupported) return null;

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[140px] relative pointer-events-none"
    />
  );
}
