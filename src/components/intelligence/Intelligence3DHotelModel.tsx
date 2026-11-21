"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OPERATIONAL_ZONES, OperationalZone, WorkspaceId } from "@/data/intelligenceMockData";
import {
  Layers,
  RotateCw,
  Compass,
  Sparkles,
  ArrowRight,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Maximize2,
  X,
  ChevronRight,
  Building2,
} from "lucide-react";

interface Props {
  selectedZoneId: string | null;
  onSelectZone: (zone: OperationalZone) => void;
  onNavigateWorkspace: (ws: WorkspaceId) => void;
}

export function Intelligence3DHotelModel({
  selectedZoneId,
  onSelectZone,
  onNavigateWorkspace,
}: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [hoveredZone, setHoveredZone] = useState<OperationalZone | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  // References to Three.js elements
  const sceneRef = useRef<THREE.Scene | null>(null);
  const buildingGroupRef = useRef<THREE.Group | null>(null);
  const zoneMeshesRef = useRef<{ mesh: THREE.Mesh | THREE.Group; zone: OperationalZone }[]>([]);
  const beaconBeamsRef = useRef<{ ring: THREE.Mesh; zoneId: string }[]>([]);

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
    } catch {
      setHasWebGL(false);
      return;
    }

    let animId: number;
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 560;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0d0804, 0.035);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 4.4, 9.8);
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

    // Radiant Still Waters Golden Lighting Architecture
    const ambientLight = new THREE.AmbientLight(0xefe0b9, 2.5);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfff5d6, 0x8c5a19, 2.4);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff6dd, 4.8);
    sunLight.position.set(5.5, 7.0, 4.5);
    scene.add(sunLight);

    const keyLight = new THREE.PointLight(0xf5b841, 4.2, 30);
    keyLight.position.set(3.5, 5.2, 3.5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xefe0b9, 2.2, 25);
    fillLight.position.set(-4.5, 3.0, -2.5);
    scene.add(fillLight);

    // Reflective Polished Stone Ground Plane
    const groundGeo = new THREE.CircleGeometry(7.8, 64);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x140c06,
      roughness: 0.22,
      metalness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;
    scene.add(ground);

    // Glowing Hairline Outer Perimeter Ring
    const ringGeo = new THREE.RingGeometry(7.7, 7.8, 64);
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

    // Secondary Coordinate Grid Gridlines
    const innerRingGeo = new THREE.RingGeometry(4.8, 4.85, 48);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0xefe0b9,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = -Math.PI / 2;
    innerRing.position.y = 0.015;
    scene.add(innerRing);

    // Architectural Building Cutaway Group
    const buildingGroup = new THREE.Group();
    buildingGroupRef.current = buildingGroup;
    scene.add(buildingGroup);

    // Shared Architectural Materials
    const darkStoneMat = new THREE.MeshStandardMaterial({
      color: 0x5a3d24,
      roughness: 0.32,
      metalness: 0.65,
      emissive: 0x3d270f,
      emissiveIntensity: 0.32,
    });

    const bronzeTrimMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      roughness: 0.18,
      metalness: 0.85,
      emissive: 0x4a3210,
      emissiveIntensity: 0.35,
    });

    const amberGlassMat = new THREE.MeshStandardMaterial({
      color: 0xfff0aa,
      emissive: 0xf5b841,
      emissiveIntensity: 1.15,
      roughness: 0.1,
      metalness: 0.25,
      transparent: true,
      opacity: 0.92,
    });

    const activeZoneMat = new THREE.MeshStandardMaterial({
      color: 0xffb834,
      emissive: 0xf5b841,
      emissiveIntensity: 1.6,
      roughness: 0.1,
      metalness: 0.5,
    });

    zoneMeshesRef.current = [];
    beaconBeamsRef.current = [];

    // Helper to register interactive zone meshes
    const registerZoneMesh = (mesh: THREE.Mesh | THREE.Group, zoneId: string) => {
      const zone = OPERATIONAL_ZONES.find((z) => z.id === zoneId);
      if (zone) {
        mesh.userData = { zoneId, zone };
        zoneMeshesRef.current.push({ mesh, zone });
      }
    };

    // 1. Central Grand Reception & Atrium Lobby
    const lobbyGeo = new THREE.BoxGeometry(2.4, 1.4, 2.2);
    const lobbyMesh = new THREE.Mesh(lobbyGeo, darkStoneMat);
    lobbyMesh.position.set(0, 0.7, 0.6);
    buildingGroup.add(lobbyMesh);
    registerZoneMesh(lobbyMesh, "lobby_atrium");

    // Atrium Glass Facade (Glowing warm hotel entrance)
    const lobbyGlassGeo = new THREE.BoxGeometry(1.8, 1.2, 0.1);
    const lobbyGlass = new THREE.Mesh(lobbyGlassGeo, amberGlassMat);
    lobbyGlass.position.set(0, 0.7, 1.71);
    buildingGroup.add(lobbyGlass);

    // 2. West Wing (Deluxe & Executive Guest Rooms - 3 Tiered Floors)
    const westWingGeo = new THREE.BoxGeometry(2.2, 2.6, 1.8);
    const westWing = new THREE.Mesh(westWingGeo, darkStoneMat);
    westWing.position.set(-2.2, 1.3, 0);
    buildingGroup.add(westWing);
    registerZoneMesh(westWing, "rooms_west");

    // West Wing Balcony Bands & Window Rows
    for (let f = 0; f < 3; f++) {
      const bandGeo = new THREE.BoxGeometry(2.25, 0.08, 1.85);
      const band = new THREE.Mesh(bandGeo, bronzeTrimMat);
      band.position.set(-2.2, 0.5 + f * 0.8, 0);
      buildingGroup.add(band);

      const winGeo = new THREE.BoxGeometry(1.6, 0.45, 0.1);
      const winMesh = new THREE.Mesh(winGeo, amberGlassMat);
      winMesh.position.set(-2.2, 0.75 + f * 0.8, 0.91);
      buildingGroup.add(winMesh);
    }

    // 3. East Wing & Governor Suite 401 (4 Tiered Floors with Penthouse Balcony)
    const eastWingGeo = new THREE.BoxGeometry(2.2, 3.2, 1.8);
    const eastWing = new THREE.Mesh(eastWingGeo, darkStoneMat);
    eastWing.position.set(2.2, 1.6, 0);
    buildingGroup.add(eastWing);
    registerZoneMesh(eastWing, "rooms_east");

    for (let f = 0; f < 4; f++) {
      const bandGeo = new THREE.BoxGeometry(2.25, 0.08, 1.85);
      const band = new THREE.Mesh(bandGeo, bronzeTrimMat);
      band.position.set(2.2, 0.5 + f * 0.75, 0);
      buildingGroup.add(band);

      const winGeo = new THREE.BoxGeometry(1.6, 0.4, 0.1);
      const winMesh = new THREE.Mesh(winGeo, amberGlassMat);
      winMesh.position.set(2.2, 0.72 + f * 0.75, 0.91);
      buildingGroup.add(winMesh);
    }

    // Penthouse Governor Suite Crown Frame
    const crownGeo = new THREE.TorusGeometry(1.1, 0.04, 16, 4);
    const crown = new THREE.Mesh(crownGeo, bronzeTrimMat);
    crown.rotation.x = Math.PI / 2;
    crown.position.set(2.2, 3.25, 0);
    buildingGroup.add(crown);

    // 4. Savannah Dining & Commercial Kitchen Pavilion
    const diningGeo = new THREE.CylinderGeometry(1.3, 1.4, 1.0, 8);
    const diningMesh = new THREE.Mesh(diningGeo, darkStoneMat);
    diningMesh.position.set(-1.6, 0.5, -1.4);
    buildingGroup.add(diningMesh);
    registerZoneMesh(diningMesh, "dining_kitchen");

    const diningRoofGeo = new THREE.ConeGeometry(1.45, 0.45, 8);
    const diningRoof = new THREE.Mesh(diningRoofGeo, bronzeTrimMat);
    diningRoof.position.set(-1.6, 1.2, -1.4);
    buildingGroup.add(diningRoof);

    // 5. Grand Savannah Banquet Hall (East Pavilion)
    const banquetGeo = new THREE.BoxGeometry(2.6, 1.3, 1.8);
    const banquetMesh = new THREE.Mesh(banquetGeo, darkStoneMat);
    banquetMesh.position.set(2.6, 0.65, -1.2);
    buildingGroup.add(banquetMesh);
    registerZoneMesh(banquetMesh, "banquet_hall");

    // Banquet Arch Truss Accent
    const archGeo = new THREE.TorusGeometry(1.2, 0.035, 12, 24, Math.PI);
    const archMesh = new THREE.Mesh(archGeo, bronzeTrimMat);
    archMesh.position.set(2.6, 1.3, -1.2);
    buildingGroup.add(archMesh);

    // 6. Housekeeping & Linen Lower Hub (Sub-surface Basement Cutaway)
    const hskGeo = new THREE.BoxGeometry(3.2, 0.4, 1.6);
    const hskMesh = new THREE.Mesh(hskGeo, darkStoneMat);
    hskMesh.position.set(0, -0.2, 0.8);
    buildingGroup.add(hskMesh);
    registerZoneMesh(hskMesh, "housekeeping_hub");

    // 7. Executive Administration & Boardroom (Mezzanine Tower Core)
    const adminGeo = new THREE.BoxGeometry(1.8, 1.2, 1.4);
    const adminMesh = new THREE.Mesh(adminGeo, darkStoneMat);
    adminMesh.position.set(0, 1.9, -0.6);
    buildingGroup.add(adminMesh);
    registerZoneMesh(adminMesh, "admin_boardroom");

    // 8. Central Energy Plant & Standby Generators Compound
    const powerGeo = new THREE.BoxGeometry(1.6, 0.7, 1.4);
    const powerMesh = new THREE.Mesh(powerGeo, darkStoneMat);
    powerMesh.position.set(-2.8, 0.35, -1.6);
    buildingGroup.add(powerMesh);
    registerZoneMesh(powerMesh, "power_plant");

    // Twin Generator Exhaust Stacks
    [-0.3, 0.3].forEach((ox) => {
      const stackGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.9, 12);
      const stack = new THREE.Mesh(stackGeo, bronzeTrimMat);
      stack.position.set(-2.8 + ox, 0.8, -1.6);
      buildingGroup.add(stack);
    });

    // Interactive Pulsing Beacons & Stalks at each Zone Coordinate
    OPERATIONAL_ZONES.forEach((zone) => {
      const beaconGroup = new THREE.Group();
      beaconGroup.position.set(
        zone.modelCoordinates.x,
        zone.modelCoordinates.y + 0.6,
        zone.modelCoordinates.z
      );

      // Glowing Center Orb
      const orbGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const orbMat = new THREE.MeshStandardMaterial({
        color: zone.status === "Action Required" ? 0xe87a2a : 0xf5b841,
        emissive: zone.status === "Action Required" ? 0xe87a2a : 0xf5b841,
        emissiveIntensity: 1.8,
        roughness: 0.1,
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      beaconGroup.add(orb);

      // Vertical Stalk Laser down to zone surface
      const stalkGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.6, 8);
      const stalkMat = new THREE.MeshBasicMaterial({
        color: 0xf5b841,
        transparent: true,
        opacity: 0.6,
      });
      const stalk = new THREE.Mesh(stalkGeo, stalkMat);
      stalk.position.y = -0.3;
      beaconGroup.add(stalk);

      // Pulsing Radar Ring
      const pulseGeo = new THREE.RingGeometry(0.18, 0.22, 24);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0xf5b841,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
      });
      const pulseRing = new THREE.Mesh(pulseGeo, pulseMat);
      pulseRing.rotation.x = Math.PI / 2;
      beaconGroup.add(pulseRing);

      beaconBeamsRef.current.push({ ring: pulseRing, zoneId: zone.id });

      buildingGroup.add(beaconGroup);
      registerZoneMesh(beaconGroup, zone.id);
    });

    // Floating Golden Dust Motes / Photons
    const moteCount = 65;
    const moteGeo = new THREE.BufferGeometry();
    const motePos = new Float32Array(moteCount * 3);
    for (let i = 0; i < moteCount * 3; i += 3) {
      motePos[i] = (Math.random() - 0.5) * 8.5;
      motePos[i + 1] = Math.random() * 4.5 + 0.2;
      motePos[i + 2] = (Math.random() - 0.5) * 8.5;
    }
    moteGeo.setAttribute("position", new THREE.BufferAttribute(motePos, 3));
    const moteMat = new THREE.PointsMaterial({
      color: 0xf5b841,
      size: 0.06,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const motes = new THREE.Points(moteGeo, moteMat);
    scene.add(motes);

    // Mouse / Touch Interaction & Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let isDragging = false;
    let prevMouseX = 0;
    let rotationVelocity = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      setIsAutoRotating(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const delta = e.clientX - prevMouseX;
        prevMouseX = e.clientX;
        buildingGroup.rotation.y += delta * 0.007;
        rotationVelocity = delta * 0.003;
      }

      // Check Raycast Hover
      raycaster.setFromCamera(mouse, camera);
      const interactiveMeshes = zoneMeshesRef.current.map((item) => item.mesh);
      const intersects = raycaster.intersectObjects(interactiveMeshes, true);

      if (intersects.length > 0) {
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !hitObj.userData?.zone && hitObj.parent) {
          hitObj = hitObj.parent;
        }
        if (hitObj?.userData?.zone) {
          setHoveredZone(hitObj.userData.zone);
          setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          container.style.cursor = "pointer";
          return;
        }
      }

      setHoveredZone(null);
      setTooltipPos(null);
      container.style.cursor = isDragging ? "grabbing" : "grab";
    };

    const onMouseUp = (e: MouseEvent) => {
      if (isDragging && Math.abs(rotationVelocity) > 0.008) {
        // Was dragging, not clicking
      } else {
        // Check click on zone
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const interactiveMeshes = zoneMeshesRef.current.map((item) => item.mesh);
        const intersects = raycaster.intersectObjects(interactiveMeshes, true);

        if (intersects.length > 0) {
          let hitObj: THREE.Object3D | null = intersects[0].object;
          while (hitObj && !hitObj.userData?.zone && hitObj.parent) {
            hitObj = hitObj.parent;
          }
          if (hitObj?.userData?.zone) {
            onSelectZone(hitObj.userData.zone);
          }
        }
      }
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Touch Support
    let prevTouchX = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevTouchX = e.touches[0].clientX;
        setIsAutoRotating(false);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const delta = e.touches[0].clientX - prevTouchX;
      prevTouchX = e.touches[0].clientX;
      buildingGroup.rotation.y += delta * 0.007;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    dom.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Resize Observer
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Render Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Auto Orbit Rotation
      if (isAutoRotating && !isDragging) {
        buildingGroup.rotation.y += 0.003;
      } else if (!isDragging && Math.abs(rotationVelocity) > 0.0001) {
        buildingGroup.rotation.y += rotationVelocity;
        rotationVelocity *= 0.94;
      }

      // Animate Beacon Radar Pulses
      beaconBeamsRef.current.forEach(({ ring }, idx) => {
        const pulse = 1 + Math.sin(elapsed * 2.8 + idx * 0.7) * 0.25;
        ring.scale.set(pulse, pulse, pulse);
      });

      // Subtle Mote Drift
      motes.rotation.y = elapsed * 0.02;

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
      lobbyGeo.dispose();
      darkStoneMat.dispose();
      bronzeTrimMat.dispose();
      amberGlassMat.dispose();
    };
  }, [isAutoRotating, onSelectZone]);

  const activeZone = OPERATIONAL_ZONES.find((z) => z.id === selectedZoneId);

  return (
    <div className="relative w-full rounded-2xl border-hairline bg-gradient-to-b from-shadow-main/90 to-shadow-darkest overflow-hidden shadow-luxury">
      {/* 3D Canvas Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 sm:p-6 border-b border-champagne-200/10 bg-[#0d0804]/60 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-glow/15 border border-amber-glow/40 text-[10px] font-mono text-amber-glow">
              <Activity className="w-3 h-3 text-amber-glow animate-pulse" />
              <span>Real-Time Spatial Digital Twin</span>
            </span>
            <span className="text-[11px] font-mono text-champagne-300/60 hidden sm:inline">
              WebGL 60 FPS &bull; Architectural Cutaway
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-ivory-warm font-light">
            Interactive Operational Topology
          </h3>
          <p className="text-xs text-ivory-warm/65 mt-0.5">
            Hover over any zone or beacon to inspect live status. Click to open comprehensive operational drawer.
          </p>
        </div>

        {/* 3D Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
              isAutoRotating
                ? "border-amber-glow/50 bg-amber-glow/15 text-amber-glow shadow-glow"
                : "border-champagne-200/20 text-champagne-200/70 hover:text-white"
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? "animate-spin" : ""}`} />
            <span>{isAutoRotating ? "Auto-Orbit ON" : "Auto-Orbit OFF"}</span>
          </button>
        </div>
      </div>

      {/* Main WebGL Container Stage */}
      <div className="relative w-full h-[480px] sm:h-[560px] cursor-grab active:cursor-grabbing bg-[#0d0804]/90">
        {/* Ambient Top-Right God-Ray Light Beam Overlay */}
        <div className="volumetric-beam absolute inset-0 pointer-events-none opacity-40" />

        <div ref={mountRef} className="w-full h-full" />

        {/* Hover Floating HUD Tooltip */}
        {hoveredZone && tooltipPos && (
          <div
            className="absolute z-30 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3"
            style={{ left: tooltipPos.x, top: tooltipPos.y }}
          >
            <div className="p-3 rounded-xl bg-[#0d0804]/95 border border-amber-glow/50 shadow-luxury backdrop-blur-md min-w-[220px]">
              <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-champagne-200/10">
                <span className="font-serif text-sm text-champagne-200 font-medium">
                  {hoveredZone.name}
                </span>
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                    hoveredZone.status === "Optimal"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : hoveredZone.status === "Action Required"
                      ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                      : "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {hoveredZone.status}
                </span>
              </div>
              <div className="text-[11px] text-ivory-warm/70 mt-1.5 line-clamp-2">
                {hoveredZone.summary}
              </div>
              <div className="mt-2 pt-1.5 border-t border-champagne-200/10 flex items-center justify-between text-[10px] font-mono text-champagne-300/80">
                <span>Staff: {hoveredZone.staffOnDuty} active</span>
                <span className="text-amber-glow">Click to inspect &rarr;</span>
              </div>
            </div>
          </div>
        )}

        {/* In-Canvas Overlay Quick Navigator Badges */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-20 flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#0d0804]/85 border-hairline backdrop-blur-md max-w-full overflow-x-auto">
          <span className="text-[10px] font-mono text-champagne-300/60 uppercase px-2 py-1">
            Zones:
          </span>
          {OPERATIONAL_ZONES.map((zone) => {
            const isSelected = selectedZoneId === zone.id;
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => onSelectZone(zone)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? "bg-amber-glow text-shadow-darkest font-semibold shadow-glow"
                    : "text-ivory-warm/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    zone.status === "Optimal"
                      ? "bg-emerald-400"
                      : zone.status === "Action Required"
                      ? "bg-amber-400"
                      : "bg-blue-400"
                  }`}
                />
                <span>{zone.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Zone Bottom Drawer / Detail Deck */}
      {activeZone && (
        <div className="p-6 sm:p-7 border-t border-champagne-200/15 bg-gradient-to-r from-shadow-darkest via-shadow-main to-shadow-darkest animate-fadeIn">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-glow">
                  {activeZone.department} &bull; {activeZone.level}
                </span>
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                    activeZone.status === "Optimal"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : activeZone.status === "Action Required"
                      ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                      : "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {activeZone.status}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif text-ivory-warm font-light">
                {activeZone.name}
              </h4>
              <p className="text-xs sm:text-sm text-ivory-warm/75 leading-relaxed">
                {activeZone.summary}
              </p>
            </div>

            {/* Live Zone KPIs & Quick Jump */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {activeZone.kpis.map((kpi, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#0d0804]/70 border border-champagne-200/10"
                  >
                    <div className="text-[10px] font-mono text-champagne-300/60 uppercase">
                      {kpi.label}
                    </div>
                    <div className="text-sm font-serif text-champagne-200 font-medium mt-0.5">
                      {kpi.value}
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onNavigateWorkspace(activeZone.recommendedWorkspace)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs tracking-wider uppercase shadow-glow hover:opacity-95 transition-all shrink-0"
              >
                <span>Open {activeZone.recommendedWorkspace}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
