"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function ArchitecturalHeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch (e) {
      setHasWebGL(false);
      return;
    }

    let animationFrameId: number;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0d0804, 0.045);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 8.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Ambient & Volumetric Lighting
    const ambientLight = new THREE.AmbientLight(0x22160b, 1.5);
    scene.add(ambientLight);

    const amberLight = new THREE.PointLight(0xf5b841, 3.5, 25);
    amberLight.position.set(3, 4, 2);
    scene.add(amberLight);

    const warmFillLight = new THREE.PointLight(0xefe0b9, 1.8, 20);
    warmFillLight.position.set(-4, 2, -1);
    scene.add(warmFillLight);

    // Architectural Pavilion Group
    const pavilionGroup = new THREE.Group();
    scene.add(pavilionGroup);

    // Colonnade Pillars (Representing classical Nigerian/modernist hospitality architecture)
    const pillarGeo = new THREE.CylinderGeometry(0.08, 0.1, 4, 16);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x4a3520,
      roughness: 0.35,
      metalness: 0.65,
    });

    const numPillars = 8;
    const radius = 3.6;
    for (let i = 0; i < numPillars; i++) {
      const angle = (i / numPillars) * Math.PI * 2;
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(Math.cos(angle) * radius, 1.5, Math.sin(angle) * radius);
      pavilionGroup.add(pillar);
    }

    // Floating Arch Rings
    const ringGeo = new THREE.TorusGeometry(3.6, 0.04, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      roughness: 0.2,
      metalness: 0.85,
    });
    const ringTop = new THREE.Mesh(ringGeo, ringMat);
    ringTop.rotation.x = Math.PI / 2;
    ringTop.position.y = 3.5;
    pavilionGroup.add(ringTop);

    const ringMid = new THREE.Mesh(ringGeo, ringMat);
    ringMid.rotation.x = Math.PI / 2;
    ringMid.position.y = 0.05;
    pavilionGroup.add(ringMid);

    // Reflective Water / Polished Marble Floor
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x170f07,
      roughness: 0.1,
      metalness: 0.8,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    scene.add(floor);

    // Central Luminous Monolith / Core of Light
    const coreGeo = new THREE.OctahedronGeometry(0.85, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, 1.8, 0);
    pavilionGroup.add(coreMesh);

    // Floating Golden Dust Motes (Atmospheric ambient lighting particles)
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = Math.random() * 5;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xf5b841,
      size: 0.045,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Window Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow elegant architectural rotation
      pavilionGroup.rotation.y = elapsedTime * 0.045;
      coreMesh.rotation.y = -elapsedTime * 0.12;
      coreMesh.rotation.x = Math.sin(elapsedTime * 0.5) * 0.1;

      // Parallax smooth interpolation
      targetX += (mouseX * 0.5 - targetX) * 0.05;
      targetY += (mouseY * 0.3 - targetY) * 0.05;
      camera.position.x = targetX * 1.5;
      camera.position.y = 1.8 - targetY * 0.8;
      camera.lookAt(0, 1.6, 0);

      // Light breathing pulse
      amberLight.intensity = 3.2 + Math.sin(elapsedTime * 1.5) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pillarGeo.dispose();
      pillarMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      floorGeo.dispose();
      floorMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 bg-radial-gradient from-amber-glow/10 via-shadow-main/80 to-shadow-darkest pointer-events-none" />
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}

