"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Maximize2, RotateCcw, Sun, Moon, Sparkles, Building, Layers, Eye } from "lucide-react";
import { Badge } from "../ui/Badge";

type SpaceKey = "hall" | "governor" | "executive";
type LightMood = "golden" | "gala" | "daylight";

export function SpatialPavilionViewer() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedSpace, setSelectedSpace] = useState<SpaceKey>("hall");
  const [lightMood, setLightMood] = useState<LightMood>("golden");
  const [isRotating, setIsRotating] = useState(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const spaceGroupRef = useRef<THREE.Group | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const mainPointLightRef = useRef<THREE.PointLight | null>(null);
  const fillLightRef = useRef<THREE.PointLight | null>(null);

  const spaceDetails = {
    hall: {
      name: "Grand Savannah Banquet Hall",
      type: "Banquet & Event Facility",
      capacity: "180–220 Guests (Banquet Seating)",
      sqm: "480 m²",
      ceiling: "6.2m Vaulted Ceiling",
      highlight: "Acoustic timber baffles, integrated 4K presentation projection & stage illumination.",
      notes: "Direct booking co-pilot links banquet availability with accommodation room blocks.",
    },
    governor: {
      name: "Governor Suite 401",
      type: "Presidential Luxury Suite",
      capacity: "Up to 3 Guests (VIP Delegation)",
      sqm: "125 m²",
      ceiling: "3.4m Coffered Ceiling",
      highlight: "Private executive reception salon, en-suite marble soaking bath, and bespoke dressing room.",
      notes: "Pre-allocated for wedding hosts and visiting dignitaries with fast-track digital check-in.",
    },
    executive: {
      name: "Executive Deluxe Wing",
      type: "Interconnected Accommodation",
      capacity: "15 Room Family Block",
      sqm: "42 m² per room",
      ceiling: "3.0m Height",
      highlight: "Contiguous family suite corridors with sound-isolated study lounges and high-speed Wi-Fi.",
      notes: "Visualized under single master parent reservation GRP-2026-8841.",
    },
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0d0804, 0.05);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 3.5, 7.5);
    camera.lookAt(0, 0.5, 0);

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

    // Luminous Golden Lighting Setup (Matching the Hero Still Waters Atmosphere)
    const ambientLight = new THREE.AmbientLight(0xefe0b9, 2.5);
    ambientLightRef.current = ambientLight;
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfff5d6, 0x8c5a19, 2.4);
    hemiLightRef.current = hemiLight;
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff6dd, 4.6);
    sunLight.position.set(4.5, 6.0, 3.8);
    sunLightRef.current = sunLight;
    scene.add(sunLight);

    const mainLight = new THREE.PointLight(0xf5b841, 4.2, 30);
    mainLight.position.set(2.5, 4.8, 3.0);
    mainPointLightRef.current = mainLight;
    scene.add(mainLight);

    const fillLight = new THREE.PointLight(0xefe0b9, 2.0, 20);
    fillLight.position.set(-3.5, 2.2, -2.0);
    fillLightRef.current = fillLight;
    scene.add(fillLight);

    // Reflective floor
    const floorGeo = new THREE.CircleGeometry(5.5, 48);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x170f07,
      roughness: 0.15,
      metalness: 0.75,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.01;
    scene.add(floor);

    // Floor outer ring accent
    const floorRingGeo = new THREE.RingGeometry(5.4, 5.5, 64);
    const floorRingMat = new THREE.MeshBasicMaterial({
      color: 0xf5b841,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const floorRing = new THREE.Mesh(floorRingGeo, floorRingMat);
    floorRing.rotation.x = -Math.PI / 2;
    floorRing.position.y = 0.01;
    scene.add(floorRing);

    // Dynamic Space Geometry Group
    const spaceGroup = new THREE.Group();
    spaceGroupRef.current = spaceGroup;
    scene.add(spaceGroup);

    // Build models for spaces
    const buildSpaceModel = (space: SpaceKey) => {
      // Clear previous children
      while (spaceGroup.children.length > 0) {
        const obj = spaceGroup.children[0];
        spaceGroup.remove(obj);
      }

      if (space === "hall") {
        // Banquet Hall 3D Wireframe / Pavilion Form - Warm luminous bronze materials
        const wallMat = new THREE.MeshStandardMaterial({
          color: 0x5a3d24,
          roughness: 0.28,
          metalness: 0.65,
          emissive: 0x362108,
          emissiveIntensity: 0.25,
          wireframe: false,
        });
        const amberTrimMat = new THREE.MeshStandardMaterial({
          color: 0xf5b841,
          roughness: 0.18,
          metalness: 0.85,
          emissive: 0x4a3210,
          emissiveIntensity: 0.35,
        });

        // Stage & Main Hall Frame
        const stageGeo = new THREE.BoxGeometry(3.6, 0.25, 1.4);
        const stage = new THREE.Mesh(stageGeo, wallMat);
        stage.position.set(0, 0.125, -1.8);
        spaceGroup.add(stage);

        // Banquet Tables (Representing 180-220 guest configuration)
        const tableGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.2, 16);
        const tableMat = new THREE.MeshStandardMaterial({
          color: 0xefe0b9,
          roughness: 0.35,
          metalness: 0.3,
          emissive: 0x302010,
          emissiveIntensity: 0.15,
        });

        const candleMat = new THREE.MeshStandardMaterial({
          color: 0xf5b841,
          emissive: 0xf5b841,
          emissiveIntensity: 1.25,
          roughness: 0.1,
          metalness: 0.2,
        });

        const tablePositions = [
          [-1.5, 0.1, -0.6], [0, 0.1, -0.6], [1.5, 0.1, -0.6],
          [-1.8, 0.1, 0.6], [-0.6, 0.1, 0.6], [0.6, 0.1, 0.6], [1.8, 0.1, 0.6],
          [-1.2, 0.1, 1.8], [0, 0.1, 1.8], [1.2, 0.1, 1.8],
        ];

        tablePositions.forEach(([x, y, z]) => {
          const table = new THREE.Mesh(tableGeo, tableMat);
          table.position.set(x, y, z);
          spaceGroup.add(table);

          // Centerpiece warm candle light
          const candleGeo = new THREE.ConeGeometry(0.06, 0.15, 8);
          const candle = new THREE.Mesh(candleGeo, candleMat);
          candle.position.set(x, y + 0.18, z);
          spaceGroup.add(candle);
        });

        // Ceiling Trusses
        const trussGeo = new THREE.TorusGeometry(2.8, 0.03, 8, 32);
        const truss = new THREE.Mesh(trussGeo, amberTrimMat);
        truss.rotation.x = Math.PI / 2;
        truss.position.y = 2.4;
        spaceGroup.add(truss);

      } else if (space === "governor") {
        // Governor Suite: Master Bed, Lounge, Balcony Frame
        const suiteMat = new THREE.MeshStandardMaterial({
          color: 0x5a3d24,
          roughness: 0.28,
          metalness: 0.65,
          emissive: 0x362108,
          emissiveIntensity: 0.25,
        });
        const goldTrim = new THREE.MeshStandardMaterial({
          color: 0xf5b841,
          roughness: 0.15,
          metalness: 0.85,
          emissive: 0x4a3210,
          emissiveIntensity: 0.35,
        });

        // King Bed Platform
        const bedBaseGeo = new THREE.BoxGeometry(2.2, 0.35, 2.4);
        const bedBase = new THREE.Mesh(bedBaseGeo, suiteMat);
        bedBase.position.set(0, 0.175, -0.8);
        spaceGroup.add(bedBase);

        // Headboard & Back Wall Accent
        const headboardGeo = new THREE.BoxGeometry(2.6, 1.6, 0.15);
        const headboard = new THREE.Mesh(headboardGeo, goldTrim);
        headboard.position.set(0, 0.8, -2.0);
        spaceGroup.add(headboard);

        // Executive Lounge Seating
        const sofaGeo = new THREE.BoxGeometry(1.6, 0.35, 0.7);
        const sofa = new THREE.Mesh(sofaGeo, suiteMat);
        sofa.position.set(0, 0.175, 1.4);
        spaceGroup.add(sofa);

        // Balcony Portal Frame
        const frameGeo = new THREE.TorusGeometry(2.2, 0.04, 16, 4);
        const frame = new THREE.Mesh(frameGeo, goldTrim);
        frame.rotation.z = Math.PI / 4;
        frame.position.set(0, 1.5, 0);
        spaceGroup.add(frame);

      } else {
        // Executive Wing: Interconnected Modular Suite Wings
        const wingMat = new THREE.MeshStandardMaterial({
          color: 0x5a3d24,
          roughness: 0.35,
          metalness: 0.6,
          emissive: 0x362108,
          emissiveIntensity: 0.25,
        });
        const amberWire = new THREE.MeshStandardMaterial({
          color: 0xf5b841,
          wireframe: true,
          emissive: 0xf5b841,
          emissiveIntensity: 0.6,
        });

        // 3 Connecting Room Blocks
        [-1.6, 0, 1.6].forEach((x, idx) => {
          const blockGeo = new THREE.BoxGeometry(1.2, 0.8, 1.6);
          const block = new THREE.Mesh(blockGeo, idx === 1 ? amberWire : wingMat);
          block.position.set(x, 0.4, 0);
          spaceGroup.add(block);
        });

        // Connecting Central Corridor
        const corridorGeo = new THREE.BoxGeometry(4.2, 0.1, 0.6);
        const corridor = new THREE.Mesh(corridorGeo, wingMat);
        corridor.position.set(0, 0.05, 1.2);
        spaceGroup.add(corridor);
      }
    };

    buildSpaceModel(selectedSpace);

    // Mouse drag interaction for manual orbit
    let isDragging = false;
    let prevMouseX = 0;
    let rotationVelocity = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      setIsRotating(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const delta = e.clientX - prevMouseX;
      prevMouseX = e.clientX;
      spaceGroup.rotation.y += delta * 0.008;
      rotationVelocity = delta * 0.004;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Touch support
    let prevTouchX = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevTouchX = e.touches[0].clientX;
        setIsRotating(false);
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const delta = e.touches[0].clientX - prevTouchX;
      prevTouchX = e.touches[0].clientX;
      spaceGroup.rotation.y += delta * 0.008;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    domElement.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", onResize);

    // Animation loop
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (isRotating && !isDragging) {
        spaceGroup.rotation.y += 0.004;
      } else if (!isDragging && Math.abs(rotationVelocity) > 0.0001) {
        spaceGroup.rotation.y += rotationVelocity;
        rotationVelocity *= 0.95;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      domElement.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [selectedSpace]);

  // Dynamic Atmospheric Lighting Mood Updates (Matching Hero Still Waters Lighting Architecture)
  useEffect(() => {
    if (!mainPointLightRef.current || !ambientLightRef.current) return;
    if (lightMood === "golden") {
      // Warm, radiant Still Waters golden dawn atmosphere with top-right sunbeam
      if (sunLightRef.current) {
        sunLightRef.current.color.setHex(0xfff6dd);
        sunLightRef.current.intensity = 5.0;
      }
      if (hemiLightRef.current) {
        hemiLightRef.current.color.setHex(0xfff5d6);
        hemiLightRef.current.groundColor.setHex(0x8c5a19);
        hemiLightRef.current.intensity = 2.4;
      }
      ambientLightRef.current.color.setHex(0xefe0b9);
      ambientLightRef.current.intensity = 2.6;
      mainPointLightRef.current.color.setHex(0xf5b841);
      mainPointLightRef.current.intensity = 4.6;
      if (fillLightRef.current) {
        fillLightRef.current.color.setHex(0xefe0b9);
        fillLightRef.current.intensity = 2.2;
      }
    } else if (lightMood === "gala") {
      // Atmospheric warm bronze gala evening with rich amber glows
      if (sunLightRef.current) {
        sunLightRef.current.color.setHex(0xf5b841);
        sunLightRef.current.intensity = 4.2;
      }
      if (hemiLightRef.current) {
        hemiLightRef.current.color.setHex(0xf5b841);
        hemiLightRef.current.groundColor.setHex(0x5e3a10);
        hemiLightRef.current.intensity = 2.0;
      }
      ambientLightRef.current.color.setHex(0xd49e52);
      ambientLightRef.current.intensity = 2.2;
      mainPointLightRef.current.color.setHex(0xe87a2a);
      mainPointLightRef.current.intensity = 4.8;
      if (fillLightRef.current) {
        fillLightRef.current.color.setHex(0xf5b841);
        fillLightRef.current.intensity = 2.0;
      }
    } else {
      // Bright crisp champagne daylight with sunlit warmth
      if (sunLightRef.current) {
        sunLightRef.current.color.setHex(0xfff9eb);
        sunLightRef.current.intensity = 5.4;
      }
      if (hemiLightRef.current) {
        hemiLightRef.current.color.setHex(0xfff9eb);
        hemiLightRef.current.groundColor.setHex(0xa87428);
        hemiLightRef.current.intensity = 2.8;
      }
      ambientLightRef.current.color.setHex(0xf7f1e6);
      ambientLightRef.current.intensity = 2.8;
      mainPointLightRef.current.color.setHex(0xffe8b8);
      mainPointLightRef.current.intensity = 4.2;
      if (fillLightRef.current) {
        fillLightRef.current.color.setHex(0xfff0d0);
        fillLightRef.current.intensity = 2.4;
      }
    }
  }, [lightMood]);

  const currentDetails = spaceDetails[selectedSpace];

  return (
    <div className="rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest p-6 sm:p-8 shadow-luxury backdrop-blur-md">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="amber">Interactive 3D Spatial Pavilion</Badge>
            <span className="text-[11px] font-mono text-champagne-300">
              WebGL Accelerated &bull; Conceptual Spatial Demo
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal">
            {currentDetails.name}
          </h3>
          <p className="text-xs text-ivory-warm/60 mt-1">
            Drag to rotate perspective in real time. Switch architectural zones &amp; lighting states below.
          </p>
        </div>

        {/* Space Selection Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-shadow-darkest border-hairline">
          <button
            onClick={() => setSelectedSpace("hall")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedSpace === "hall"
                ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                : "text-ivory-warm/70 hover:text-white"
            }`}
          >
            Grand Savannah Hall
          </button>
          <button
            onClick={() => setSelectedSpace("governor")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedSpace === "governor"
                ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                : "text-ivory-warm/70 hover:text-white"
            }`}
          >
            Governor Suite 401
          </button>
          <button
            onClick={() => setSelectedSpace("executive")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedSpace === "executive"
                ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                : "text-ivory-warm/70 hover:text-white"
            }`}
          >
            Executive Deluxe Wing
          </button>
        </div>
      </div>

      {/* Main 3D Canvas Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
        <div className="lg:col-span-8 relative">
          <div
            ref={mountRef}
            className="w-full h-80 sm:h-96 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing bg-shadow-darkest/90 border-hairline relative"
          >
            {/* Ambient Volumetric Ray Overlay */}
            <div className="volumetric-beam absolute inset-0 pointer-events-none" />

            {/* In-Canvas Ambient Controls Overlay */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="text-[10px] tracking-wider uppercase font-mono px-2 py-1 rounded bg-shadow-darkest/80 text-champagne-300 border-hairline backdrop-blur-sm flex items-center gap-1.5">
                <Eye className="w-3 h-3 text-amber-glow" />
                3D Spatial View
              </span>
            </div>

            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-shadow-darkest/80 p-1 rounded-lg border-hairline backdrop-blur-sm">
              <button
                onClick={() => setLightMood("golden")}
                title="Sunset Amber Lighting"
                className={`p-1.5 rounded text-xs transition-colors ${
                  lightMood === "golden"
                    ? "bg-amber-glow/20 text-amber-glow"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLightMood("gala")}
                title="Evening Gala Mood"
                className={`p-1.5 rounded text-xs transition-colors ${
                  lightMood === "gala"
                    ? "bg-amber-glow/20 text-amber-glow"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLightMood("daylight")}
                title="Daylight Clarity"
                className={`p-1.5 rounded text-xs transition-colors ${
                  lightMood === "daylight"
                    ? "bg-amber-glow/20 text-amber-glow"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsRotating(!isRotating)}
                title={isRotating ? "Pause Auto-Orbit" : "Resume Auto-Orbit"}
                className={`p-1.5 rounded text-xs transition-colors ${
                  isRotating
                    ? "text-amber-glow"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                <RotateCcw className={`w-3.5 h-3.5 ${isRotating ? "animate-spin-slow" : ""}`} />
              </button>
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
              <span className="text-[10px] text-ivory-warm/50 font-mono tracking-widest uppercase bg-shadow-darkest/70 px-3 py-1 rounded-full border-hairline">
                Interactive Canvas &bull; Drag to rotate &bull; Touch enabled
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Spatial Architectural Specifications */}
        <div className="lg:col-span-4 space-y-4 text-xs">
          <div className="p-4 rounded-xl bg-shadow-darkest/70 border-hairline space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-amber-glow block">
              Architectural Specifications
            </span>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-shadow-main/80 border-hairline">
                <span className="text-[10px] text-ivory-warm/50 block">Spatial Footprint</span>
                <span className="font-semibold text-ivory-warm text-sm">{currentDetails.sqm}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-shadow-main/80 border-hairline">
                <span className="text-[10px] text-ivory-warm/50 block">Ceiling Clearance</span>
                <span className="font-semibold text-ivory-warm text-sm">{currentDetails.ceiling}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-shadow-main/80 border-hairline">
              <span className="text-[10px] text-ivory-warm/50 block mb-1">Target Capacity</span>
              <span className="font-medium text-amber-glow">{currentDetails.capacity}</span>
            </div>

            <p className="text-[11px] text-ivory-warm/70 leading-relaxed font-light">
              {currentDetails.highlight}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-glow/5 border border-amber-glow/20 text-[11px] text-champagne-200/90 leading-relaxed">
            <strong className="text-amber-glow block mb-0.5">Ecosystem Integration:</strong>
            {currentDetails.notes}
          </div>
        </div>
      </div>
    </div>
  );
}

