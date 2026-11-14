"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";
import {
  Smartphone,
  Globe,
  Sparkles,
  Key,
  CheckCircle2,
  Compass,
  ArrowRight,
  Shield,
  Wifi,
  Battery,
  Lock,
  Unlock,
  Sun,
  Moon,
  RotateCcw,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { IMAGES } from "@/data/mockData";

export function HeroDualPlatform3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Interactive phone states inside hero
  const [phoneScreen, setPhoneScreen] = useState<"key" | "concierge" | "quote">("key");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [lightPreset, setLightPreset] = useState<"golden" | "dusk" | "night">("golden");

  // Parallax rotation angles
  const [mouseRot, setMouseRot] = useState({ x: 5, y: -6 });
  const [isHovering, setIsHovering] = useState(false);

  // References for Three.js scene
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const ringGroupRef = useRef<THREE.Group | null>(null);
  const amberLightRef = useRef<THREE.PointLight | null>(null);
  const goldLightRef = useRef<THREE.PointLight | null>(null);

  // Setup Three.js kinetic ambient scene in the background
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0d0804, 0.04);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 6.2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Warm ambient and interactive point lights
    const ambientLight = new THREE.AmbientLight(0x22160b, 2.0);
    scene.add(ambientLight);

    const amberLight = new THREE.PointLight(0xf5b841, 4.5, 18);
    amberLight.position.set(2.2, 2.8, 2.5);
    scene.add(amberLight);
    amberLightRef.current = amberLight;

    const goldLight = new THREE.PointLight(0xefe0b9, 2.2, 14);
    goldLight.position.set(-2.5, -1.0, 1.8);
    scene.add(goldLight);
    goldLightRef.current = goldLight;

    // 3D Orbital Rings & Kinetic Core Group
    const ringGroup = new THREE.Group();
    ringGroupRef.current = ringGroup;
    ringGroup.position.set(0, 0.1, -0.6);
    scene.add(ringGroup);

    // Golden Architectural Torus Rings
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      metalness: 0.95,
      roughness: 0.12,
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.02, 16, 100), ringMat);
    ring1.rotation.x = Math.PI / 3.2;
    ringGroup.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.016, 16, 80), ringMat);
    ring2.rotation.y = Math.PI / 2.6;
    ring2.rotation.z = Math.PI / 4;
    ringGroup.add(ring2);

    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.014, 16, 60), ringMat);
    ring3.rotation.x = -Math.PI / 4;
    ringGroup.add(ring3);

    // Architectural Wireframe Icosahedron
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0xefe0b9,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      metalness: 0.9,
    });
    const wireframeMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 1), wireframeMat);
    ringGroup.add(wireframeMesh);

    // Drifting Golden Dust Particles
    const particleCount = 75;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 5.5;
      particlePos[i + 1] = (Math.random() - 0.5) * 4.5;
      particlePos[i + 2] = (Math.random() - 0.5) * 4.5;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf5b841,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    ringGroup.add(particles);

    // 60fps Kinetic Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle continuous rotation
      ring1.rotation.z = elapsed * 0.18;
      ring2.rotation.x = elapsed * -0.14;
      ring3.rotation.y = elapsed * 0.22;
      wireframeMesh.rotation.y = elapsed * 0.08;
      particles.rotation.y = elapsed * 0.03;

      // Subtle breathing floating motion
      ringGroup.position.y = 0.1 + Math.sin(elapsed * 1.4) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update lighting preset in Three.js scene
  useEffect(() => {
    if (!amberLightRef.current || !goldLightRef.current) return;
    if (lightPreset === "golden") {
      amberLightRef.current.color.setHex(0xf5b841);
      amberLightRef.current.intensity = 4.8;
      goldLightRef.current.color.setHex(0xefe0b9);
    } else if (lightPreset === "dusk") {
      amberLightRef.current.color.setHex(0xe87a2a);
      amberLightRef.current.intensity = 5.2;
      goldLightRef.current.color.setHex(0x80613a);
    } else {
      amberLightRef.current.color.setHex(0x9c7a40);
      amberLightRef.current.intensity = 2.4;
      goldLightRef.current.color.setHex(0x4a3520);
    }
  }, [lightPreset]);

  // Pointer tracking for interactive 3D perspective response
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotY = ((x - centerX) / centerX) * 16;
    const rotX = -((y - centerY) / centerY) * 14;

    setMouseRot({ x: rotX, y: rotY });

    // Also tilt Three.js camera subtly
    if (cameraRef.current) {
      cameraRef.current.position.x = ((x - centerX) / centerX) * 0.45;
      cameraRef.current.position.y = 0.4 + -((y - centerY) / centerY) * 0.35;
      cameraRef.current.lookAt(0, 0.1, 0);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMouseRot({ x: 5, y: -6 });
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0.4, 6.2);
      cameraRef.current.lookAt(0, 0.1, 0);
    }
  };

  const toggleUnlockKey = () => {
    setIsUnlocked(!isUnlocked);
  };

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] h-[520px] sm:h-[560px] flex items-center justify-center select-none"
    >
      {/* 1. THREE.JS 3D KINETIC BACKGROUND CANVAS */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      />

      {/* 2. AMBIENT RADIAL LIGHT GLOW */}
      <div className="absolute w-84 h-84 rounded-full bg-radial from-amber-glow/25 via-amber-glow/5 to-transparent blur-3xl pointer-events-none z-0" />

      {/* 3. INTERACTIVE 3D DUAL-PLATFORM COMPOSITION CONTAINER */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          perspective: 1200,
          transformStyle: "preserve-3d",
        }}
      >
        {/* ========================================================
            LAYER A: DESKTOP WEB EXPERIENCE (FLOATING BACKDROP)
           ======================================================== */}
        <div
          className="absolute left-1 sm:left-4 top-10 sm:top-14 w-[310px] sm:w-[350px] rounded-2xl bg-[#140D07]/95 border border-champagne-200/25 p-3.5 shadow-2xl backdrop-blur-md transition-all duration-300"
          style={{
            transform: `perspective(1000px) rotateY(${mouseRot.y * 0.5 - 12}deg) rotateX(${
              mouseRot.x * 0.5 + 4
            }deg) translateZ(-50px)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Web Browser Chrome */}
          <div className="flex items-center justify-between pb-2 border-b border-champagne-200/10 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            </div>
            <div className="px-2.5 py-0.5 rounded-md bg-shadow-main text-[9px] font-mono text-champagne-200/70 border-hairline flex items-center gap-1">
              <Globe className="w-2.5 h-2.5 text-amber-glow" />
              <span>joclarifhotel.com/experience</span>
            </div>
            <span className="text-[9px] font-mono text-amber-glow uppercase">Web Flagship</span>
          </div>

          {/* Web Showcase Image & Transparent Rates */}
          <div className="space-y-2 text-left">
            <div className="relative h-28 rounded-lg overflow-hidden border-hairline">
              <Image
                src={IMAGES.suite}
                alt="Governor Suite 401"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0804] via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-serif text-ivory-warm block">
                    Governor Presidential Suite
                  </span>
                  <span className="text-[9px] font-mono text-amber-glow font-medium">
                    &#8358; 185,000 / night
                  </span>
                </div>
                <span className="text-[8px] bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 px-2 py-0.5 rounded font-mono">
                  Direct Rate
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-ivory-warm/70 pt-1">
              <span>Direct Booking Portal</span>
              <span className="text-emerald-400 font-mono">100% Revenue Capture</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            LAYER B: 3D INTERACTIVE SMARTPHONE (HERO FOCAL PIECE)
           ======================================================== */}
        <div
          className="absolute right-1 sm:right-6 bottom-4 sm:bottom-6 w-[225px] sm:w-[245px] h-[460px] sm:h-[480px] rounded-[42px] p-[8px] transition-all duration-200 cursor-pointer shadow-[0_35px_80px_rgba(10,5,2,0.95),0_0_40px_rgba(245,184,65,0.22)]"
          style={{
            background: "linear-gradient(135deg, #6e4e2f 0%, #2e1e11 40%, #150c06 100%)",
            border: "1.8px solid rgba(239, 224, 185, 0.45)",
            transform: `perspective(1000px) rotateY(${mouseRot.y * 0.9 + 10}deg) rotateX(${
              mouseRot.x * 0.9 - 4
            }deg) translateZ(45px)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Metallic Edge Specular Glint */}
          <div
            className="absolute inset-0 rounded-[42px] pointer-events-none"
            style={{
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.8)",
            }}
          />

          {/* Inner Display Glass */}
          <div className="w-full h-full bg-[#0D0804] rounded-[34px] overflow-hidden relative flex flex-col justify-between border border-black p-3.5 text-left">
            {/* Dynamic Island Notch */}
            <div className="mx-auto w-20 h-4 bg-black rounded-full border border-white/10 mb-2 flex items-center justify-between px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-950 border border-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-glow/60 animate-pulse" />
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between text-[9px] font-mono text-champagne-200/80 pb-1">
              <span>09:41</span>
              <div className="flex items-center gap-1 text-[9px]">
                <Wifi className="w-2.5 h-2.5" />
                <Battery className="w-3 h-3 text-amber-glow" />
              </div>
            </div>

            {/* Interactive Screen Content */}
            <div className="flex-1 space-y-2.5 py-1">
              {/* Screen 1: Digital Key */}
              {phoneScreen === "key" && (
                <div className="space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-mono text-amber-glow uppercase tracking-wider">
                      Resident Companion
                    </span>
                    <Badge variant="amber">Live</Badge>
                  </div>

                  <div className="p-3 rounded-2xl bg-gradient-to-br from-[#4A3520] to-[#22160B] border border-champagne-200/30 space-y-2 text-center shadow-subtle">
                    <div className="flex justify-between items-center text-left">
                      <div>
                        <span className="text-[8px] font-mono text-champagne-200/60 block">
                          Suite 401 &bull; Governor Wing
                        </span>
                        <h5 className="font-serif text-sm text-ivory-warm">
                          Alhaji I. Danjuma
                        </h5>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-shadow-darkest border-hairline flex items-center justify-center text-amber-glow">
                        {isUnlocked ? <Unlock className="w-3 h-3 text-emerald-400" /> : <Lock className="w-3 h-3" />}
                      </div>
                    </div>

                    {/* Interactive Unlock Key Button */}
                    <button
                      onClick={toggleUnlockKey}
                      className={`w-full py-2.5 rounded-xl text-[10px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-glow ${
                        isUnlocked
                          ? "bg-emerald-900/80 border border-emerald-500/60 text-emerald-300"
                          : "bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold"
                      }`}
                    >
                      <Key className={`w-3 h-3 ${isUnlocked ? "animate-none" : "animate-bounce"}`} />
                      <span>{isUnlocked ? "Door Unlocked" : "Tap Key at Door"}</span>
                    </button>
                    <span className="text-[7.5px] font-mono text-champagne-200/50 block">
                      {isUnlocked ? "Welcome to Suite 401 &bull; NFC Paired" : "Touch above to test NFC unlock"}
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-shadow-main/80 border-hairline space-y-0.5 text-[9px]">
                    <span className="text-[7.5px] font-mono text-amber-glow uppercase">Concierge Update</span>
                    <p className="text-ivory-warm font-light">&ldquo;Your Kaduna airport driver is on schedule.&rdquo;</p>
                  </div>
                </div>
              )}

              {/* Screen 2: AI Concierge */}
              {phoneScreen === "concierge" && (
                <div className="space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-mono text-amber-glow uppercase">AI Concierge</span>
                    <span className="text-[8px] font-mono text-champagne-200/60">Hausa / EN</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-shadow-main/90 border-hairline space-y-1.5 text-[9px]">
                    <p className="text-champagne-200/90 font-light">
                      &ldquo;Ina kwana! Dinner at Grand Savannah Lounge is served until 22:30 tonight.&rdquo;
                    </p>
                    <div className="pt-1 border-t border-champagne-200/10 flex items-center justify-between text-[8px]">
                      <span className="text-amber-glow font-mono">Special Seating?</span>
                      <span className="text-ivory-warm/60">Duty Manager Alerted</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 3: Instant Group Quote */}
              {phoneScreen === "quote" && (
                <div className="space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-mono text-amber-glow uppercase">Booking Co-Pilot</span>
                    <span className="text-[8px] font-mono text-emerald-400">Locked</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-shadow-main/90 border-hairline space-y-1 text-[9px]">
                    <span className="font-serif text-xs text-ivory-warm block">Wedding Delegation Quote</span>
                    <p className="text-champagne-200/80 font-light">
                      15 Deluxe Rooms + Grand Savannah Hall
                    </p>
                    <div className="flex justify-between items-center pt-1 border-t border-champagne-200/10 font-mono text-[9px]">
                      <span className="text-ivory-warm/60">Total:</span>
                      <span className="text-amber-glow font-semibold">&#8358; 2,850,000</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick 3-Screen Mini Switcher on Phone */}
            <div className="pt-2 border-t border-champagne-200/15 flex items-center justify-around">
              <button
                onClick={() => setPhoneScreen("key")}
                className={`text-[8px] font-mono px-2 py-0.5 rounded transition-colors ${
                  phoneScreen === "key" ? "bg-amber-glow text-shadow-darkest font-semibold" : "text-champagne-200/60"
                }`}
              >
                Key
              </button>
              <button
                onClick={() => setPhoneScreen("concierge")}
                className={`text-[8px] font-mono px-2 py-0.5 rounded transition-colors ${
                  phoneScreen === "concierge" ? "bg-amber-glow text-shadow-darkest font-semibold" : "text-champagne-200/60"
                }`}
              >
                Concierge
              </button>
              <button
                onClick={() => setPhoneScreen("quote")}
                className={`text-[8px] font-mono px-2 py-0.5 rounded transition-colors ${
                  phoneScreen === "quote" ? "bg-amber-glow text-shadow-darkest font-semibold" : "text-champagne-200/60"
                }`}
              >
                Quote
              </button>
            </div>

            {/* Bottom Home Indicator */}
            <div className="pt-1.5 flex justify-center">
              <div className="w-14 h-1 bg-champagne-200/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. LIGHTING ATMOSPHERE SELECTOR CONTROLS (BOTTOM-LEFT OF HERO STAGE) */}
      <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 p-1 rounded-full bg-shadow-darkest/90 border-hairline backdrop-blur-md text-[9px] font-mono shadow-subtle">
        <button
          onClick={() => setLightPreset("golden")}
          className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
            lightPreset === "golden"
              ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
              : "text-champagne-200/70 hover:text-white"
          }`}
        >
          <Sun className="w-2.5 h-2.5" />
          <span>Golden Dawn</span>
        </button>
        <button
          onClick={() => setLightPreset("dusk")}
          className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
            lightPreset === "dusk"
              ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
              : "text-champagne-200/70 hover:text-white"
          }`}
        >
          <Sparkles className="w-2.5 h-2.5" />
          <span>Dusk Glow</span>
        </button>
        <button
          onClick={() => setLightPreset("night")}
          className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
            lightPreset === "night"
              ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
              : "text-champagne-200/70 hover:text-white"
          }`}
        >
          <Moon className="w-2.5 h-2.5" />
          <span>Deep Night</span>
        </button>
      </div>
    </div>
  );
}

