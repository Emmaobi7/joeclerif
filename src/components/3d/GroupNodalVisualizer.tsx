"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Network, Sparkles, Bed, Building, CheckCircle2, Info, Users, CreditCard } from "lucide-react";
import { Badge } from "../ui/Badge";
import { MOCK_GROUP_RESERVATION } from "@/data/mockData";

export function GroupNodalVisualizer() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);

  const sampleNodes = [
    {
      id: "HALL-01",
      name: "Grand Savannah Banquet Hall",
      role: "Event & Banquet Facility",
      details: "180 Guests Banquet Seating &bull; Nov 25 Evening &bull; Stage, AV & Generator Backup",
      status: "Reserved & Linked",
      billing: "Consolidated Master Folio",
      type: "hall",
    },
    {
      id: "STE-401",
      name: "Governor Suite 401 (Parents)",
      role: "Chief & Mrs. O. Adewale",
      details: "VIP Welcome Basket &bull; Ground-floor preference &bull; 3 Nights",
      status: "Allocated",
      billing: "Master Folio",
      type: "vip",
    },
    {
      id: "STE-402",
      name: "Bridal Prep Suite 402",
      role: "Bride & Bridal Party",
      details: "Full-length steamer &bull; Late checkout requested &bull; 3 Nights",
      status: "Allocated",
      billing: "Split to Master",
      type: "suite",
    },
    {
      id: "RM-312",
      name: "Executive King 312",
      role: "Groom & Best Man",
      details: "Adjacent to bridal wing &bull; High-floor view &bull; 3 Nights",
      status: "Allocated",
      billing: "Split to Master",
      type: "room",
    },
    {
      id: "RM-314",
      name: "Executive King 314",
      role: "Dr. Ibrahim Danjuma",
      details: "Arriving via Kaduna Airport &bull; Quiet wing requested",
      status: "Allocated",
      billing: "Guest Direct Pay",
      type: "room",
    },
    {
      id: "WNG-210",
      name: "Deluxe Family Wing (Rooms 214-220)",
      role: "Adewale Extended Family (10 Guests)",
      details: "5 Interconnected Rooms &bull; Children cots requested &bull; Early check-in",
      status: "Allocated",
      billing: "Split Folio",
      type: "block",
    },
  ];

  const currentNode = sampleNodes[activeNodeIndex];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    const width = container.clientWidth || 700;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0d0804, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 4.4, 8.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Center Master Node
    const centerGeo = new THREE.SphereGeometry(0.65, 32, 32);
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      emissive: 0x80613a,
      emissiveIntensity: 0.65,
      roughness: 0.2,
      metalness: 0.85,
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    networkGroup.add(centerMesh);

    // Orbital Rings
    const orbitRingGeo = new THREE.TorusGeometry(3.2, 0.015, 16, 96);
    const orbitRingMat = new THREE.MeshBasicMaterial({
      color: 0xf5b841,
      transparent: true,
      opacity: 0.25,
    });
    const orbitRing = new THREE.Mesh(orbitRingGeo, orbitRingMat);
    orbitRing.rotation.x = Math.PI / 2;
    networkGroup.add(orbitRing);

    // Satellite Nodes: 16 connected units
    const nodeCount = 16;
    const nodeMeshes: THREE.Mesh[] = [];
    const lineGeos: THREE.BufferGeometry[] = [];

    const nodeGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const standardMat = new THREE.MeshStandardMaterial({
      color: 0xefe0b9,
      roughness: 0.3,
      metalness: 0.6,
    });
    const hallMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      emissive: 0xb87f1c,
      emissiveIntensity: 0.5,
      roughness: 0.1,
      metalness: 0.9,
    });

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x80613a,
      transparent: true,
      opacity: 0.45,
    });

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = i === 0 ? 3.6 : 3.0 + (i % 3) * 0.4;
      const y = Math.sin(i * 1.4) * 0.7;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const isHall = i === 0;
      const mesh = new THREE.Mesh(nodeGeo, isHall ? hallMat : standardMat);
      mesh.position.set(x, y, z);
      networkGroup.add(mesh);
      nodeMeshes.push(mesh);

      // Line from center
      const pts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(lineGeo, lineMat);
      networkGroup.add(line);
      lineGeos.push(lineGeo);
    }

    // Packet Pulses along connecting cords
    const pulseGeo = new THREE.SphereGeometry(0.065, 8, 8);
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0xf5b841 });
    const pulses: { mesh: THREE.Mesh; targetIdx: number; progress: number }[] = [];

    for (let i = 0; i < 8; i++) {
      const pMesh = new THREE.Mesh(pulseGeo, pulseMat);
      networkGroup.add(pMesh);
      pulses.push({
        mesh: pMesh,
        targetIdx: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
      });
    }

    // Lighting
    const amb = new THREE.AmbientLight(0x22160b, 2.2);
    scene.add(amb);

    const amberLight = new THREE.PointLight(0xf5b841, 4.0, 24);
    amberLight.position.set(0, 3.5, 3.0);
    scene.add(amberLight);

    // Mouse Drag interaction
    let isDragging = false;
    let prevMouseX = 0;
    const dom = renderer.domElement;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const delta = e.clientX - prevMouseX;
      prevMouseX = e.clientX;
      networkGroup.rotation.y += delta * 0.007;
    };
    const onMouseUp = () => {
      isDragging = false;
    };

    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Resize
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
      const delta = clock.getDelta();

      if (!isDragging) {
        networkGroup.rotation.y += 0.003;
      }

      // Breathing pulse for center
      const time = clock.getElapsedTime();
      const scale = 1 + Math.sin(time * 2.2) * 0.06;
      centerMesh.scale.set(scale, scale, scale);

      // Data pulses flow outward to allocations
      pulses.forEach((p) => {
        p.progress += delta * 0.38;
        if (p.progress >= 1) {
          p.progress = 0;
          p.targetIdx = Math.floor(Math.random() * nodeCount);
        }
        const targetPos = nodeMeshes[p.targetIdx].position;
        p.mesh.position.lerpVectors(new THREE.Vector3(0, 0, 0), targetPos, p.progress);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      centerGeo.dispose();
      centerMat.dispose();
      orbitRingGeo.dispose();
      orbitRingMat.dispose();
      nodeGeo.dispose();
      standardMat.dispose();
      hallMat.dispose();
      lineMat.dispose();
      pulseGeo.dispose();
      pulseMat.dispose();
      lineGeos.forEach((g) => g.dispose());
    };
  }, []);

  return (
    <div className="rounded-3xl border-hairline bg-gradient-to-b from-shadow-main to-shadow-darkest p-6 sm:p-10 shadow-luxury space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-champagne-200/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="amber">Signature Experience C &bull; 3D Nodal Topology</Badge>
            <span className="text-[10px] font-mono text-champagne-200">
              Parent-Child Allocation Engine
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-ivory-warm font-normal">
            The Grand Event Reservation Network
          </h3>
          <p className="text-xs text-ivory-warm/65 font-light mt-1">
            Visualizing how 1 Master Wedding Reservation orchestrates 15 suites and the Grand Savannah Banquet Hall with zero overbooking conflict.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-shadow-darkest p-2 rounded-xl border-hairline text-xs">
          <span className="w-2 h-2 rounded-full bg-amber-glow animate-pulse" />
          <span className="font-mono text-champagne-200 text-[11px]">
            Master: GRP-2026-8841 (Folashade Adewale, Lagos)
          </span>
        </div>
      </div>

      {/* 3D Canvas + Interactive Node Detail Rail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* 3D WebGL Canvas */}
        <div className="lg:col-span-8 relative">
          <div
            ref={mountRef}
            className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing bg-shadow-darkest/95 border-hairline relative"
          >
            <div className="volumetric-beam absolute inset-0 pointer-events-none" />

            {/* In-canvas Legend */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-2 pointer-events-none text-[10px]">
              <span className="px-3 py-1 rounded-full bg-shadow-darkest/90 text-amber-glow border-hairline backdrop-blur-md flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-glow animate-pulse" />
                Center: Master Reservation
              </span>
              <span className="px-3 py-1 rounded-full bg-shadow-darkest/90 text-champagne-200 border-hairline backdrop-blur-md flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne-200" />
                Satellites: 15 Suites + 1 Hall
              </span>
            </div>

            <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
              <span className="text-[10px] text-ivory-warm/50 font-mono tracking-widest uppercase bg-shadow-darkest/80 px-3.5 py-1 rounded-full border-hairline">
                Drag to orbit 3D network &bull; Golden pulses indicate live inventory lock
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Node Explorer Inspector */}
        <div className="lg:col-span-4 space-y-3">
          <div className="p-2 bg-shadow-darkest rounded-xl border-hairline flex flex-col gap-1.5 max-h-[384px] overflow-y-auto">
            <span className="text-[10px] uppercase font-mono tracking-wider text-ivory-warm/40 px-2 pt-1 block">
              Inspect Linked Allocations:
            </span>
            {sampleNodes.map((node, idx) => (
              <button
                key={node.id}
                onClick={() => setActiveNodeIndex(idx)}
                className={`w-full text-left p-3 rounded-lg text-xs transition-all ${
                  activeNodeIndex === idx
                    ? "bg-shadow-main border-hairline-amber shadow-glow"
                    : "hover:bg-shadow-main/50 border border-transparent text-ivory-warm/70"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] text-amber-glow font-semibold">
                    {node.id}
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-shadow-darkest text-champagne-200 border-hairline font-mono">
                    {node.status}
                  </span>
                </div>
                <p className="font-semibold text-ivory-warm text-xs">{node.name}</p>
                <p className="text-[11px] text-ivory-warm/50 mt-0.5 font-light">{node.role}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Node Details Card */}
      <div className="p-5 rounded-2xl bg-shadow-darkest border-hairline grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-xs">
        <div>
          <span className="text-[10px] uppercase font-mono text-ivory-warm/40 block mb-0.5">
            Inspected Allocation Node
          </span>
          <span className="font-serif text-lg text-champagne-200 font-normal">
            {currentNode.name}
          </span>
          <p className="text-ivory-warm/60 font-light mt-0.5">{currentNode.role}</p>
        </div>

        <div>
          <span className="text-[10px] uppercase font-mono text-ivory-warm/40 block mb-0.5">
            Coordination &amp; Facilities
          </span>
          <p className="text-ivory-warm/80 font-light" dangerouslySetInnerHTML={{ __html: currentNode.details }} />
        </div>

        <div className="p-3 rounded-xl bg-shadow-main border-hairline flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono text-ivory-warm/40 block">
              Folio Billing Route
            </span>
            <span className="font-mono text-amber-glow font-semibold">{currentNode.billing}</span>
          </div>
          <CreditCard className="w-4 h-4 text-amber-glow" />
        </div>
      </div>
    </div>
  );
}
