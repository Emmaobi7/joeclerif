"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Building2, Sparkles, Sun } from "lucide-react";

export type HeroModelType = "pavilion" | "crane";

export function HeroCenterpiece3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [modelType, setModelType] = useState<HeroModelType>("pavilion");

  // Keep ref to toggle model dynamically inside Three.js scene
  const activeModelRef = useRef<HeroModelType>("pavilion");
  const pavilionGroupRef = useRef<THREE.Group | null>(null);
  const craneGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    activeModelRef.current = modelType;
    if (pavilionGroupRef.current && craneGroupRef.current) {
      pavilionGroupRef.current.visible = modelType === "pavilion";
      craneGroupRef.current.visible = modelType === "crane";
    }
  }, [modelType]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let animId: number;
    const width = container.clientWidth || 440;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.9, 6.2);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    container.appendChild(renderer.domElement);

    // =========================================================================
    // 1. LUMINOUS SUNLIGHT LIGHTING SETUP (MATCHING CHARLES LIU SUNBEAM)
    // =========================================================================

    // A. Warm Champagne Ambient Light (prevents dark/muddy shadows)
    const ambientLight = new THREE.AmbientLight(0xefe0b9, 2.6);
    scene.add(ambientLight);

    // B. Hemisphere Light: Warm golden sky from above, rich bronze bounce from below
    const hemiLight = new THREE.HemisphereLight(0xfff5d6, 0x8c5a19, 2.4);
    scene.add(hemiLight);

    // C. Strong Directional Key Light from Top-Right (at ~40° matching the sunbeam)
    const sunLight = new THREE.DirectionalLight(0xfff6dd, 4.6);
    sunLight.position.set(4.5, 5.2, 3.8);
    scene.add(sunLight);

    // D. Point Light at sunbeam entry for golden specular rim
    const amberRimLight = new THREE.PointLight(0xf5b841, 4.2, 16);
    amberRimLight.position.set(3.0, 3.8, 2.6);
    scene.add(amberRimLight);

    // E. Soft Warm Fill Light from Left (keeps shadows warm and golden)
    const fillLight = new THREE.PointLight(0xefe0b9, 2.2, 14);
    fillLight.position.set(-3.2, 1.2, 1.8);
    scene.add(fillLight);

    // =========================================================================
    // 2. SHARED LUXURY GOLD MATERIALS (WARM, RADIANT, NEVER DARK)
    // =========================================================================
    const goldPrimaryMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      roughness: 0.22,
      metalness: 0.82,
      emissive: 0x4a3210, // Warm internal golden glow so shadows remain warm amber
      emissiveIntensity: 0.35,
      flatShading: true,
    });

    const champagneTrimMat = new THREE.MeshStandardMaterial({
      color: 0xfff2cc,
      roughness: 0.18,
      metalness: 0.9,
      emissive: 0x3d2a0c,
      emissiveIntensity: 0.3,
    });

    const bronzeColumnMat = new THREE.MeshStandardMaterial({
      color: 0xa87428,
      roughness: 0.25,
      metalness: 0.85,
      emissive: 0x362108,
      emissiveIntensity: 0.25,
    });

    const glowingCoreMat = new THREE.MeshStandardMaterial({
      color: 0xfff0aa,
      roughness: 0.1,
      metalness: 0.2,
      emissive: 0xf5b841,
      emissiveIntensity: 1.2, // Glowing hotel lantern core
      transparent: true,
      opacity: 0.92,
    });

    const wireMat = new THREE.MeshStandardMaterial({
      color: 0xfff6dd,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      metalness: 0.95,
    });

    // Master Rotation Group
    const masterGroup = new THREE.Group();
    masterGroup.position.set(0, 0.1, 0);
    scene.add(masterGroup);

    // =========================================================================
    // 3. MODEL A: THE GRAND HOTEL LUXURY PAVILION (HOTEL ARCHITECTURE)
    // =========================================================================
    const pavilionGroup = new THREE.Group();
    pavilionGroupRef.current = pavilionGroup;
    masterGroup.add(pavilionGroup);

    // A. Stepped Circular Marble Plinth (Base standing in water)
    const baseGeo1 = new THREE.CylinderGeometry(2.1, 2.25, 0.14, 32);
    const baseMesh1 = new THREE.Mesh(baseGeo1, bronzeColumnMat);
    baseMesh1.position.y = -1.15;
    pavilionGroup.add(baseMesh1);

    const baseGeo2 = new THREE.CylinderGeometry(1.85, 1.95, 0.12, 32);
    const baseMesh2 = new THREE.Mesh(baseGeo2, goldPrimaryMat);
    baseMesh2.position.y = -1.02;
    pavilionGroup.add(baseMesh2);

    // B. Grand Colonnade: 10 Fluted Classical Hotel Columns
    const numColumns = 10;
    const colRadius = 1.55;
    const colGeo = new THREE.CylinderGeometry(0.055, 0.065, 1.45, 16);

    for (let i = 0; i < numColumns; i++) {
      const angle = (i / numColumns) * Math.PI * 2;
      const col = new THREE.Mesh(colGeo, champagneTrimMat);
      col.position.set(Math.cos(angle) * colRadius, -0.25, Math.sin(angle) * colRadius);
      pavilionGroup.add(col);

      // Capital & Base rings for each column
      const capGeo = new THREE.CylinderGeometry(0.09, 0.07, 0.05, 12);
      const cap = new THREE.Mesh(capGeo, goldPrimaryMat);
      cap.position.set(Math.cos(angle) * colRadius, 0.5, Math.sin(angle) * colRadius);
      pavilionGroup.add(cap);
    }

    // C. Central Illuminated Atrium Lantern (Glowing Hotel Heart)
    const atriumGeo = new THREE.CylinderGeometry(0.85, 0.95, 1.4, 16);
    const atriumMesh = new THREE.Mesh(atriumGeo, glowingCoreMat);
    atriumMesh.position.y = -0.25;
    pavilionGroup.add(atriumMesh);

    // Internal Chandelier Core (Faceted Diamond inside Atrium)
    const jewelGeo = new THREE.OctahedronGeometry(0.48, 1);
    const jewelMesh = new THREE.Mesh(jewelGeo, champagneTrimMat);
    jewelMesh.position.y = -0.25;
    pavilionGroup.add(jewelMesh);

    // D. Grand Entablature & Architrave (Cornice Ring)
    const corniceGeo = new THREE.CylinderGeometry(1.75, 1.65, 0.18, 32);
    const corniceMesh = new THREE.Mesh(corniceGeo, goldPrimaryMat);
    corniceMesh.position.y = 0.58;
    pavilionGroup.add(corniceMesh);

    // E. Tiered Vaulted Ribbed Dome (Luxury Hotel Rotunda)
    const domeGeo = new THREE.SphereGeometry(1.35, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const domeMesh = new THREE.Mesh(domeGeo, goldPrimaryMat);
    domeMesh.position.y = 0.67;
    pavilionGroup.add(domeMesh);

    // Outer Wireframe Architectural Cage over Dome
    const domeCageGeo = new THREE.SphereGeometry(1.42, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const domeCage = new THREE.Mesh(domeCageGeo, wireMat);
    domeCage.position.y = 0.67;
    pavilionGroup.add(domeCage);

    // F. Spire & Finial (Crown)
    const spireGeo = new THREE.ConeGeometry(0.12, 0.65, 16);
    const spireMesh = new THREE.Mesh(spireGeo, champagneTrimMat);
    spireMesh.position.y = 2.25;
    pavilionGroup.add(spireMesh);

    const finialOrbGeo = new THREE.SphereGeometry(0.16, 16, 16);
    const finialOrb = new THREE.Mesh(finialOrbGeo, champagneTrimMat);
    finialOrb.position.y = 1.95;
    pavilionGroup.add(finialOrb);

    // G. Orbiting Golden Arcs (Hospitality Flow)
    const ringGeo = new THREE.TorusGeometry(2.35, 0.024, 16, 100);
    const ringMesh1 = new THREE.Mesh(ringGeo, champagneTrimMat);
    ringMesh1.rotation.x = Math.PI / 3.4;
    pavilionGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeo, champagneTrimMat);
    ringMesh2.rotation.x = -Math.PI / 3.8;
    ringMesh2.rotation.y = Math.PI / 3;
    pavilionGroup.add(ringMesh2);

    // =========================================================================
    // 4. MODEL B: THE GOLDEN ORIGAMI CRANE / FALCON (CHARLES LIU EMBLEM)
    // =========================================================================
    const craneGroup = new THREE.Group();
    craneGroupRef.current = craneGroup;
    craneGroup.visible = false;
    masterGroup.add(craneGroup);

    // Procedural Low-Poly Folded Origami Bird Geometry
    // A. Folded Faceted Body (Diamond Origami Core)
    const birdBodyGeo = new THREE.ConeGeometry(0.9, 2.2, 5, 2);
    const birdBody = new THREE.Mesh(birdBodyGeo, goldPrimaryMat);
    birdBody.rotation.z = Math.PI * 0.72;
    birdBody.rotation.y = Math.PI * 0.25;
    birdBody.position.set(0.1, 0.35, 0);
    craneGroup.add(birdBody);

    // B. Left Origami Wing (Swept Geometric Plane)
    const wingGeo = new THREE.ConeGeometry(1.2, 2.6, 3);
    const wingLeft = new THREE.Mesh(wingGeo, goldPrimaryMat);
    wingLeft.position.set(-0.4, 0.5, 0.45);
    wingLeft.rotation.set(0.4, -0.6, -0.9);
    wingLeft.scale.set(0.35, 1, 0.85);
    craneGroup.add(wingLeft);

    // C. Right Origami Wing (Swept Geometric Plane catching sunlight)
    const wingRight = new THREE.Mesh(wingGeo, champagneTrimMat);
    wingRight.position.set(0.35, 0.55, -0.35);
    wingRight.rotation.set(-0.35, 0.5, -0.85);
    wingRight.scale.set(0.35, 1, 0.85);
    craneGroup.add(wingRight);

    // D. Slender Origami Neck & Crested Head
    const neckGeo = new THREE.CylinderGeometry(0.08, 0.18, 1.6, 4);
    const neck = new THREE.Mesh(neckGeo, champagneTrimMat);
    neck.position.set(0.65, 1.45, 0.1);
    neck.rotation.z = -0.35;
    craneGroup.add(neck);

    const headGeo = new THREE.ConeGeometry(0.18, 0.85, 4);
    const head = new THREE.Mesh(headGeo, champagneTrimMat);
    head.position.set(1.05, 2.15, 0.12);
    head.rotation.z = -Math.PI * 0.58;
    craneGroup.add(head);

    // E. Slender Legs Standing in Water
    const legGeo = new THREE.CylinderGeometry(0.035, 0.04, 1.8, 8);
    const leg1 = new THREE.Mesh(legGeo, bronzeColumnMat);
    leg1.position.set(0, -0.9, 0.12);
    craneGroup.add(leg1);

    const leg2 = new THREE.Mesh(legGeo, bronzeColumnMat);
    leg2.position.set(-0.25, -0.9, -0.15);
    leg2.rotation.z = 0.08;
    craneGroup.add(leg2);

    // F. Golden Water Ripple Caustic Ring at feet
    const waterRippleGeo = new THREE.RingGeometry(0.3, 1.4, 32);
    const waterRippleMat = new THREE.MeshBasicMaterial({
      color: 0xf5b841,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });
    const ripple = new THREE.Mesh(waterRippleGeo, waterRippleMat);
    ripple.rotation.x = Math.PI / 2;
    ripple.position.y = -1.78;
    craneGroup.add(ripple);

    // =========================================================================
    // 5. DRIFTING GOLDEN DUST MOTES (SUNLIT VOLUMETRIC PARTICLES)
    // =========================================================================
    const particleCount = 85;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6.5;
      positions[i + 1] = (Math.random() - 0.5) * 5;
      positions[i + 2] = (Math.random() - 0.5) * 5;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xfff6dd,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // =========================================================================
    // 6. MOUSE & TOUCH PARALLAX INTERACTION
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = ((touch.clientX - rect.left) / rect.width - 0.5) * 2;
        mouseY = ((touch.clientY - rect.top) / rect.height - 0.5) * 2;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", onResize);

    // =========================================================================
    // 7. ANIMATION LOOP (LUMINOUS, VIBRANT & SMOOTH)
    // =========================================================================
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Slow elegant rotation
      pavilionGroup.rotation.y = elapsed * 0.16;
      craneGroup.rotation.y = elapsed * 0.12;

      // Subtle orbital ring counter-rotations
      ringMesh1.rotation.z = elapsed * 0.14;
      ringMesh2.rotation.z = -elapsed * 0.18;
      domeCage.rotation.y = -elapsed * 0.08;
      jewelMesh.rotation.y = elapsed * 0.45;
      particles.rotation.y = elapsed * 0.04;

      // Gentle breathing levitation above water
      masterGroup.position.y = 0.1 + Math.sin(elapsed * 1.3) * 0.07;

      // Pulsing lantern heart inside the pavilion
      atriumMesh.scale.setScalar(1 + Math.sin(elapsed * 2.2) * 0.02);

      // Smooth mouse parallax damping
      targetRotX += (mouseY * 0.35 - targetRotX) * 0.06;
      targetRotY += (mouseX * 0.55 - targetRotY) * 0.06;

      camera.position.x = targetRotY * 1.5;
      camera.position.y = 0.9 - targetRotX * 0.7;
      camera.lookAt(0, 0.1, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      goldPrimaryMat.dispose();
      champagneTrimMat.dispose();
      bronzeColumnMat.dispose();
      glowingCoreMat.dispose();
      wireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-80 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-amber-glow/30 bg-amber-glow/10 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-[400px] sm:h-[460px] xl:h-[500px] relative cursor-grab active:cursor-grabbing flex items-center justify-center"
        title="Interactive 3D Hospitality Centerpiece — Drag or move mouse to tilt"
      />

      {/* Luxury Centerpiece Selector: Grand Hotel Pavilion vs. Golden Crane */}
      <div className="mt-2 z-20 flex items-center gap-2 p-1.5 rounded-full bg-shadow-darkest/90 border-hairline backdrop-blur-md shadow-luxury text-[10px] font-mono">
        <button
          onClick={() => setModelType("pavilion")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
            modelType === "pavilion"
              ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
              : "text-champagne-200/70 hover:text-white"
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Grand Hotel Pavilion</span>
        </button>

        <button
          onClick={() => setModelType("crane")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
            modelType === "crane"
              ? "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold shadow-glow"
              : "text-champagne-200/70 hover:text-white"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Golden Crane Emblem</span>
        </button>
      </div>

      <span className="text-[9px] font-mono text-champagne-200/40 uppercase tracking-widest mt-2">
        &bull; Bathed in Top-Right Golden Sunbeams &bull;
      </span>
    </div>
  );
}
