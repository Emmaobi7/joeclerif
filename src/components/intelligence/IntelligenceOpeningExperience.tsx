"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { ArrowRight, Sparkles, Building2, Shield, Eye, Database } from "lucide-react";

interface Props {
  onEnter: () => void;
}

export function IntelligenceOpeningExperience({ onEnter }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0603, 0.04);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 9.2);
    camera.lookAt(0, 1.0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Warm Ambient and Golden Sunbeam Lighting
    const ambientLight = new THREE.AmbientLight(0xefe0b9, 2.2);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfff5d6, 0x8c5a19, 2.2);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff6dd, 4.2);
    sunLight.position.set(4.5, 6.0, 3.8);
    scene.add(sunLight);

    const keyLight = new THREE.PointLight(0xf5b841, 4.0, 25);
    keyLight.position.set(2.5, 4.0, 3.0);
    scene.add(keyLight);

    // Architectural Wireframe Monolith & Departmental Nodes
    const monolithGroup = new THREE.Group();
    scene.add(monolithGroup);

    const darkMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a3520,
      roughness: 0.3,
      metalness: 0.7,
      emissive: 0x362108,
      emissiveIntensity: 0.28,
    });

    const amberGlowMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      emissive: 0xf5b841,
      emissiveIntensity: 1.4,
      roughness: 0.2,
      metalness: 0.8,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xf5b841,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    // Central Tower & Wings
    const centralGeo = new THREE.BoxGeometry(2.0, 3.4, 1.8);
    const centralTower = new THREE.Mesh(centralGeo, darkMaterial);
    centralTower.position.set(0, 1.7, 0);
    monolithGroup.add(centralTower);

    const centralWire = new THREE.Mesh(centralGeo, wireMat);
    centralWire.position.set(0, 1.7, 0);
    monolithGroup.add(centralWire);

    // Lateral Wings
    const westGeo = new THREE.BoxGeometry(1.8, 2.2, 1.4);
    const westWing = new THREE.Mesh(westGeo, darkMaterial);
    westWing.position.set(-1.8, 1.1, 0);
    monolithGroup.add(westWing);

    const eastGeo = new THREE.BoxGeometry(1.8, 2.2, 1.4);
    const eastWing = new THREE.Mesh(eastGeo, darkMaterial);
    eastWing.position.set(1.8, 1.1, 0);
    monolithGroup.add(eastWing);

    // Concentric Orbiting Golden Rings (Representing Intelligence Ingestion Flow)
    const ring1Geo = new THREE.TorusGeometry(3.6, 0.02, 16, 64);
    const ring1 = new THREE.Mesh(ring1Geo, amberGlowMaterial);
    ring1.rotation.x = Math.PI / 2.3;
    monolithGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(4.2, 0.02, 16, 64);
    const ring2 = new THREE.Mesh(ring2Geo, wireMat);
    ring2.rotation.x = -Math.PI / 2.5;
    monolithGroup.add(ring2);

    // Departmental Signal Nodes (Pulsing glowing orbs)
    const nodeCoords = [
      [-1.8, 1.8, 0.8],
      [1.8, 1.8, 0.8],
      [0, 3.2, 0],
      [0, 0.8, 1.1],
      [-1.2, 0.4, -1.0],
      [1.2, 0.4, -1.0],
    ];
    const nodeOrbs: THREE.Mesh[] = [];
    nodeCoords.forEach(([x, y, z]) => {
      const orbGeo = new THREE.SphereGeometry(0.1, 16, 16);
      const orb = new THREE.Mesh(orbGeo, amberGlowMaterial);
      orb.position.set(x, y, z);
      monolithGroup.add(orb);
      nodeOrbs.push(orb);
    });

    // Handle Window Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      monolithGroup.rotation.y = elapsed * 0.12;
      ring1.rotation.z = elapsed * 0.25;
      ring2.rotation.z = -elapsed * 0.2;

      // Pulse nodes sequentially
      nodeOrbs.forEach((orb, i) => {
        const pulse = 1.0 + Math.sin(elapsed * 3.0 + i * 1.2) * 0.35;
        orb.scale.set(pulse, pulse, pulse);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0A0603] flex flex-col justify-between overflow-hidden select-none">
      {/* Background Volumetric Sunbeam Effect */}
      <div className="sunbeams opacity-60" aria-hidden="true" />

      {/* Background 3D Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-85" />

      {/* Top Subtle Bar */}
      <div className="relative z-10 w-full px-6 sm:px-12 py-6 flex items-center justify-between border-b border-champagne-200/10 bg-[#0a0603]/40 backdrop-blur-sm">
        <a href="/" className="flex items-center gap-2.5 text-champagne-200/80 hover:text-champagne-200 transition-colors">
          <span className="font-serif text-lg tracking-[0.3em] uppercase">Joclarif</span>
          <span className="text-[9px] font-mono tracking-widest text-amber-glow uppercase px-2 py-0.5 rounded border border-amber-glow/30 bg-amber-glow/10">
            Intelligence
          </span>
        </a>

        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-champagne-300/60 hidden sm:inline">
            Executive Operations Platform &bull; Zaria, Nigeria
          </span>
          <a
            href="/"
            className="text-xs font-mono text-champagne-200/70 hover:text-white transition-colors"
          >
            &larr; Return to Presentation
          </a>
        </div>
      </div>

      {/* Main Cinematic Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center my-auto py-12 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-glow/40 bg-amber-glow/10 backdrop-blur-md text-amber-glow text-xs font-mono tracking-[0.25em] uppercase shadow-glow animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Autonomous Hotel Intelligence Layer</span>
        </div>

        <div className="space-y-4">
          <div className="text-xs sm:text-sm font-mono tracking-[0.38em] text-champagne-200/60 uppercase">
            J O C L A R I F &bull; I N T E L L I G E N C E
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-champagne-100 tracking-wide leading-[1.05] drop-shadow-[0_12px_40px_rgba(20,12,5,0.9)]">
            The Intelligence Behind <br />
            <span className="italic font-extralight text-amber-glow">Every Operation.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-warm/75 font-light leading-relaxed pt-2">
            An integrated intelligence experience giving hotel ownership and executive management
            clarity across financial performance, workforce attendance, asset condition, and guest operations.
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onEnter}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs tracking-[0.26em] uppercase shadow-glow hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Enter Command Centre</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Value Pillars Footer Badges */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          <div className="p-3.5 rounded-xl bg-shadow-darkest/70 border border-champagne-200/10 backdrop-blur-md">
            <Building2 className="w-4 h-4 text-amber-glow mb-1.5" />
            <div className="text-xs font-serif text-champagne-200">3D Spatial Topology</div>
            <div className="text-[10px] text-ivory-warm/60 mt-0.5">Live cutaway view of all 8 hotel zones</div>
          </div>
          <div className="p-3.5 rounded-xl bg-shadow-darkest/70 border border-champagne-200/10 backdrop-blur-md">
            <Database className="w-4 h-4 text-amber-glow mb-1.5" />
            <div className="text-xs font-serif text-champagne-200">Unified Data Ingestion</div>
            <div className="text-[10px] text-ivory-warm/60 mt-0.5">Connects legacy Excel &amp; modern apps</div>
          </div>
          <div className="p-3.5 rounded-xl bg-shadow-darkest/70 border border-champagne-200/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-glow mb-1.5" />
            <div className="text-xs font-serif text-champagne-200">AI Natural Language</div>
            <div className="text-[10px] text-ivory-warm/60 mt-0.5">Evidence inspector behind each answer</div>
          </div>
          <div className="p-3.5 rounded-xl bg-shadow-darkest/70 border border-champagne-200/10 backdrop-blur-md">
            <Shield className="w-4 h-4 text-amber-glow mb-1.5" />
            <div className="text-xs font-serif text-champagne-200">Role-Based Control</div>
            <div className="text-[10px] text-ivory-warm/60 mt-0.5">Owner, GM, HR &amp; Ops simulation</div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Note */}
      <div className="relative z-10 w-full px-6 py-4 border-t border-champagne-200/10 text-center text-[10px] font-mono text-champagne-300/40 bg-[#0a0603]/60 backdrop-blur-sm">
        Simulated Executive Demonstration &bull; Nigerian Hospitality Intelligence &bull; Still Waters Edition
      </div>
    </div>
  );
}
