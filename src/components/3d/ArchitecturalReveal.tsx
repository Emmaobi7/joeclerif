"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Eye, Sparkles, Sun, Moon, Compass, RotateCcw } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";

export function ArchitecturalReveal() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [lightingMode, setLightingMode] = useState<"night" | "dusk" | "golden">("dusk");
  const [cameraAngle, setCameraAngle] = useState(0);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const buildingGroupRef = useRef<THREE.Group | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const keyLightRef = useRef<THREE.PointLight | null>(null);
  const fillLightRef = useRef<THREE.PointLight | null>(null);
  const windowLightsRef = useRef<THREE.Mesh[]>([]);

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
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0d0804, 0.04);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 3.8, 9.5);
    camera.lookAt(0, 1.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Luminous Golden Lighting Setup (Matching the Hero Still Waters Atmosphere)
    const ambientLight = new THREE.AmbientLight(0xefe0b9, 2.4);
    ambientLightRef.current = ambientLight;
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfff5d6, 0x8c5a19, 2.2);
    hemiLightRef.current = hemiLight;
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff6dd, 4.6);
    sunLight.position.set(5.5, 6.5, 4.2);
    sunLightRef.current = sunLight;
    scene.add(sunLight);

    const keyLight = new THREE.PointLight(0xf5b841, 4.2, 28);
    keyLight.position.set(3.5, 5.0, 3.2);
    keyLightRef.current = keyLight;
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xefe0b9, 2.0, 22);
    fillLight.position.set(-4.5, 2.5, -2.5);
    fillLightRef.current = fillLight;
    scene.add(fillLight);

    // Ground Plane with subtle reflection
    const groundGeo = new THREE.CircleGeometry(7.5, 64);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x130c06,
      roughness: 0.25,
      metalness: 0.75,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    scene.add(ground);

    // Glowing Hairline Circular Water Boundary
    const ringGeo = new THREE.RingGeometry(7.4, 7.5, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf5b841,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.01;
    scene.add(ring);

    // Architectural Building Group
    const buildingGroup = new THREE.Group();
    buildingGroupRef.current = buildingGroup;
    scene.add(buildingGroup);

    // Warm, Luminous Materials (No dark or muddy shadow faces)
    const darkStoneMat = new THREE.MeshStandardMaterial({
      color: 0x5a3d24,
      roughness: 0.32,
      metalness: 0.65,
      emissive: 0x3d270f, // Warm honey-amber undertone
      emissiveIntensity: 0.35,
    });

    const bronzeTrimMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      roughness: 0.2,
      metalness: 0.85,
      emissive: 0x4a3210,
      emissiveIntensity: 0.3,
    });

    const amberWindowMat = new THREE.MeshStandardMaterial({
      color: 0xfff0aa,
      emissive: 0xf5b841,
      emissiveIntensity: 1.15, // Radiant interior hotel lighting
      roughness: 0.1,
      metalness: 0.2,
    });

    const windowMeshes: THREE.Mesh[] = [];

    // 1. Central Grand Atrium Tower
    const centralGeo = new THREE.BoxGeometry(2.4, 3.8, 2.0);
    const centralTower = new THREE.Mesh(centralGeo, darkStoneMat);
    centralTower.position.set(0, 1.9, 0);
    buildingGroup.add(centralTower);

    // Atrium Glass Column (Glowing Warm Interior)
    const glassAtriumGeo = new THREE.BoxGeometry(0.8, 3.2, 0.1);
    const glassAtrium = new THREE.Mesh(glassAtriumGeo, amberWindowMat);
    glassAtrium.position.set(0, 1.7, 1.02);
    buildingGroup.add(glassAtrium);
    windowMeshes.push(glassAtrium);

    // 2. West Wing (Tiered Terrace Accommodation)
    const westWingGeo = new THREE.BoxGeometry(2.2, 2.6, 1.6);
    const westWing = new THREE.Mesh(westWingGeo, darkStoneMat);
    westWing.position.set(-2.0, 1.3, -0.2);
    buildingGroup.add(westWing);

    // West Wing Cantilevered Terraces
    for (let floor = 0; floor < 3; floor++) {
      const balconyGeo = new THREE.BoxGeometry(2.0, 0.08, 0.35);
      const balcony = new THREE.Mesh(balconyGeo, bronzeTrimMat);
      balcony.position.set(-2.0, 0.7 + floor * 0.8, 0.7);
      buildingGroup.add(balcony);

      // Window Strips
      const winGeo = new THREE.BoxGeometry(1.6, 0.35, 0.05);
      const win = new THREE.Mesh(winGeo, amberWindowMat);
      win.position.set(-2.0, 0.95 + floor * 0.8, 0.62);
      buildingGroup.add(win);
      windowMeshes.push(win);
    }

    // 3. East Wing (Presidential Suites & Banquet Pavilion)
    const eastWingGeo = new THREE.BoxGeometry(2.4, 2.2, 2.2);
    const eastWing = new THREE.Mesh(eastWingGeo, darkStoneMat);
    eastWing.position.set(2.1, 1.1, 0.1);
    buildingGroup.add(eastWing);

    // East Wing Ribbon Glass Facade
    for (let floor = 0; floor < 2; floor++) {
      const ribbonGeo = new THREE.BoxGeometry(2.0, 0.45, 0.05);
      const ribbon = new THREE.Mesh(ribbonGeo, amberWindowMat);
      ribbon.position.set(2.1, 0.75 + floor * 0.85, 1.22);
      buildingGroup.add(ribbon);
      windowMeshes.push(ribbon);
    }

    // 4. Rooftop Penthouse Canopy & Floating Finial Arcs
    const roofCanopyGeo = new THREE.BoxGeometry(3.0, 0.12, 2.4);
    const roofCanopy = new THREE.Mesh(roofCanopyGeo, bronzeTrimMat);
    roofCanopy.position.set(0, 3.86, 0);
    buildingGroup.add(roofCanopy);

    const roofRingGeo = new THREE.TorusGeometry(1.6, 0.03, 16, 64);
    const roofRingMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      roughness: 0.1,
      metalness: 0.95,
    });
    const roofRing = new THREE.Mesh(roofRingGeo, roofRingMat);
    roofRing.rotation.x = Math.PI / 2;
    roofRing.position.set(0, 4.3, 0);
    buildingGroup.add(roofRing);

    // 5. Entrance Colonnade Portico
    const porticoGeo = new THREE.BoxGeometry(2.0, 0.08, 0.8);
    const portico = new THREE.Mesh(porticoGeo, bronzeTrimMat);
    portico.position.set(0, 0.8, 1.4);
    buildingGroup.add(portico);

    for (let p = -0.7; p <= 0.7; p += 0.46) {
      const colGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.8, 12);
      const col = new THREE.Mesh(colGeo, bronzeTrimMat);
      col.position.set(p, 0.4, 1.7);
      buildingGroup.add(col);
    }

    // 6. Floating Ambient Light Particles
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 10;
      pos[i + 1] = Math.random() * 5;
      pos[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xf5b841,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    windowLightsRef.current = windowMeshes;

    // Mouse and Pointer Tracking for Camera Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let prevX = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const delta = e.clientX - prevX;
        prevX = e.clientX;
        buildingGroup.rotation.y += delta * 0.007;
      }
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseup", onMouseUp);

    // Touch Support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevX = e.touches[0].clientX;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const delta = e.touches[0].clientX - prevX;
      prevX = e.touches[0].clientX;
      buildingGroup.rotation.y += delta * 0.007;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    dom.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Window Resize
    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Slow architectural rotation when not dragging
      if (!isDragging) {
        buildingGroup.rotation.y += 0.0025;
      }

      roofRing.rotation.z = elapsed * 0.08;

      // Parallax smooth interpolation
      targetX += (mouseX * 0.4 - targetX) * 0.05;
      targetY += (mouseY * 0.25 - targetY) * 0.05;
      camera.position.x = targetX * 1.8;
      camera.position.y = 3.8 - targetY * 1.0;
      camera.lookAt(0, 1.4, 0);

      // Subtle light breathing
      keyLight.intensity = 4.2 + Math.sin(elapsed * 1.8) * 0.45;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      dom.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      groundGeo.dispose();
      groundMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      centralGeo.dispose();
      darkStoneMat.dispose();
      bronzeTrimMat.dispose();
      amberWindowMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  // Dynamic Atmospheric Lighting Mode Switching (Matching Hero Still Waters Lighting)
  useEffect(() => {
    if (!keyLightRef.current || !sunLightRef.current || !ambientLightRef.current || !hemiLightRef.current) return;

    if (lightingMode === "night") {
      // Midnight Palette: Glowing Amber Hotel Windows & Subtle Moonlit Silhouettes
      sunLightRef.current.color.setHex(0x607898);
      sunLightRef.current.intensity = 2.0;
      keyLightRef.current.color.setHex(0xf5b841);
      keyLightRef.current.intensity = 3.8;
      ambientLightRef.current.color.setHex(0x382614);
      ambientLightRef.current.intensity = 1.6;
      hemiLightRef.current.color.setHex(0x4a5b78);
      hemiLightRef.current.groundColor.setHex(0x1a1008);
      windowLightsRef.current.forEach((m) => {
        (m.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.6; // Radiant interior glow
      });
    } else if (lightingMode === "dusk") {
      // Dusk Glow: Rich Saturated Sunset Amber Ray & Warm Gold Reflections
      sunLightRef.current.color.setHex(0xf5b841);
      sunLightRef.current.intensity = 5.0;
      keyLightRef.current.color.setHex(0xe87a2a);
      keyLightRef.current.intensity = 4.8;
      ambientLightRef.current.color.setHex(0xd49e52);
      ambientLightRef.current.intensity = 2.4;
      hemiLightRef.current.color.setHex(0xf5b841);
      hemiLightRef.current.groundColor.setHex(0x5e3a10);
      windowLightsRef.current.forEach((m) => {
        (m.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.25;
      });
    } else {
      // Golden Dawn: Drenched in Radiant Top-Right Sunlight & Shimmering Champagne
      sunLightRef.current.color.setHex(0xfff6dd);
      sunLightRef.current.intensity = 5.5;
      keyLightRef.current.color.setHex(0xf5b841);
      keyLightRef.current.intensity = 4.6;
      ambientLightRef.current.color.setHex(0xefe0b9);
      ambientLightRef.current.intensity = 2.8;
      hemiLightRef.current.color.setHex(0xfff5d6);
      hemiLightRef.current.groundColor.setHex(0x8c5a19);
      windowLightsRef.current.forEach((m) => {
        (m.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.9;
      });
    }
  }, [lightingMode]);

  return (
    <section id="architectural-reveal" className="py-24 bg-[#0D0804] relative border-t border-champagne-200/10 overflow-hidden">
      {/* Volumetric Breathing Sunbeams */}
      <div className="sunbeams" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        <SectionHeader
          badge="Signature Experience A"
          subtitle="Spatial Architectural Emergence"
          title="From Darkness into Form: The Architectural Silhouette"
          description="A spatial study of luxury hospitality volume, cantilevered suites, and illuminated public spaces emerging from twilight. Drag to orbit the architectural mass in real time."
        />

        {/* 3D Architectural Emergence Showcase Container */}
        <div className="relative rounded-3xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest p-6 sm:p-10 shadow-luxury overflow-hidden">
          {/* Top Atmospheric Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-amber-glow block mb-1">
                Conceptual Massing Model &bull; Still Waters Lighting Pass
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-ivory-warm">
                The Spatial Form of Joclarif
              </h3>
            </div>

            {/* Lighting State Toggles */}
            <div className="flex items-center gap-2 bg-shadow-darkest p-1.5 rounded-xl border-hairline text-xs">
              <span className="text-[10px] uppercase text-ivory-warm/40 px-2 font-mono hidden sm:inline">
                Lighting:
              </span>
              <button
                onClick={() => setLightingMode("night")}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all font-mono ${
                  lightingMode === "night"
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                Deep Night
              </button>
              <button
                onClick={() => setLightingMode("dusk")}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all font-mono ${
                  lightingMode === "dusk"
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                Dusk Glow
              </button>
              <button
                onClick={() => setLightingMode("golden")}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all font-mono ${
                  lightingMode === "golden"
                    ? "bg-amber-glow text-shadow-darkest font-semibold"
                    : "text-ivory-warm/60 hover:text-white"
                }`}
              >
                Golden Dawn
              </button>
            </div>
          </div>

          {/* WebGL Canvas */}
          <div className="relative mt-6">
            <div
              ref={mountRef}
              className="w-full h-[420px] sm:h-[500px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing bg-[#0d0804]/90 border-hairline relative"
            >
              {/* Radial beam glow inside canvas */}
              <div className="volumetric-beam absolute inset-0 pointer-events-none" />

              {/* In-canvas spatial badge */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="text-[10px] uppercase font-mono tracking-wider px-3 py-1.5 rounded-full bg-shadow-darkest/80 text-champagne-200 border-hairline backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-glow animate-pulse" />
                  Real-Time 3D Silhouette Model
                </span>
              </div>

              {/* Interaction Hint */}
              <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none">
                <span className="text-[10px] text-ivory-warm/50 font-mono tracking-widest uppercase bg-shadow-darkest/80 px-4 py-1.5 rounded-full border-hairline backdrop-blur-sm">
                  Drag to orbit model &bull; Hover to shift cinematic camera perspective
                </span>
              </div>
            </div>
          </div>

          {/* Architectural Notes Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 mt-6 border-t border-champagne-200/10 text-xs text-ivory-warm/75 font-light">
            <div className="p-3.5 rounded-xl bg-shadow-darkest border-hairline">
              <strong className="text-champagne-200 font-medium block mb-1">
                Terraced Suites &amp; Cantilevers
              </strong>
              Tiered accommodation wings engineered for acoustic privacy and generous natural light.
            </div>
            <div className="p-3.5 rounded-xl bg-shadow-darkest border-hairline">
              <strong className="text-champagne-200 font-medium block mb-1">
                Central Luminous Atrium
              </strong>
              Warm illuminated public arrival zone connecting guest reception with dining lounges.
            </div>
            <div className="p-3.5 rounded-xl bg-shadow-darkest border-hairline">
              <strong className="text-champagne-200 font-medium block mb-1">
                Spatial Ecosystem Tie-in
              </strong>
              Every physical room represented connects directly to the central reservation engine.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

