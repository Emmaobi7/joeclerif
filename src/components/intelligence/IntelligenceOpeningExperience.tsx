"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ArrowRight, Sparkles, Brain, Shield, Eye, Database, Cpu } from "lucide-react";

interface Props {
  onEnter: () => void;
}

export function IntelligenceOpeningExperience({ onEnter }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0603, 0.038);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 8.8);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // Radiant Still Waters Golden Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xefe0b9, 2.6);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfff5d6, 0x8c5a19, 2.5);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff6dd, 4.8);
    sunLight.position.set(5.5, 6.8, 4.2);
    scene.add(sunLight);

    const keyLight = new THREE.PointLight(0xf5b841, 4.5, 25);
    keyLight.position.set(3.0, 4.2, 3.2);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xefe0b9, 2.2, 22);
    fillLight.position.set(-4.0, 2.0, -2.5);
    scene.add(fillLight);

    // Master Thinking Lobe Group
    const thinkingLobeGroup = new THREE.Group();
    scene.add(thinkingLobeGroup);

    // Procedural Generation of Dual Cerebral Lobes (Left & Right Hemispheres)
    const createLobeGeometry = (isRight: boolean) => {
      const geo = new THREE.IcosahedronGeometry(1.45, 4);
      const pos = geo.attributes.position;

      for (let i = 0; i < pos.count; i++) {
        let x = pos.getX(i);
        let y = pos.getY(i);
        let z = pos.getZ(i);

        // Flatten medial longitudinal fissure between the two hemispheres
        if (isRight && x < 0) x *= 0.32;
        if (!isRight && x > 0) x *= 0.32;

        // Anatomical brain proportions: elongated anteroposteriorly
        y *= 1.12;
        z *= 1.32;

        // Multi-frequency organic gyri & sulci cerebral folds
        const fold1 = Math.sin(x * 4.2 + y * 3.6) * Math.cos(z * 3.8);
        const fold2 = Math.sin(x * 8.2 - z * 7.4) * 0.35;
        const fold3 = Math.cos(y * 6.5 + z * 5.0) * 0.25;
        const displacement = 1.0 + (fold1 + fold2 + fold3) * 0.11;

        pos.setXYZ(i, x * displacement, y * displacement, z * displacement);
      }
      geo.computeVertexNormals();
      return geo;
    };

    // Luxury Still Waters Materials for the Thinking Lobe
    const lobeMaterial = new THREE.MeshStandardMaterial({
      color: 0x5a3d24,
      roughness: 0.26,
      metalness: 0.72,
      emissive: 0x3d270f,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.94,
    });

    const synapticWireMat = new THREE.MeshBasicMaterial({
      color: 0xf5b841,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });

    // 1. Left Cerebral Lobe
    const leftLobeGeo = createLobeGeometry(false);
    const leftLobeMesh = new THREE.Mesh(leftLobeGeo, lobeMaterial);
    leftLobeMesh.position.set(-0.68, 0, 0);
    thinkingLobeGroup.add(leftLobeMesh);

    const leftWireMesh = new THREE.Mesh(leftLobeGeo, synapticWireMat);
    leftWireMesh.position.set(-0.68, 0, 0);
    thinkingLobeGroup.add(leftWireMesh);

    // 2. Right Cerebral Lobe
    const rightLobeGeo = createLobeGeometry(true);
    const rightLobeMesh = new THREE.Mesh(rightLobeGeo, lobeMaterial);
    rightLobeMesh.position.set(0.68, 0, 0);
    thinkingLobeGroup.add(rightLobeMesh);

    const rightWireMesh = new THREE.Mesh(rightLobeGeo, synapticWireMat);
    rightWireMesh.position.set(0.68, 0, 0);
    thinkingLobeGroup.add(rightWireMesh);

    // 3. Central Glowing Neural Synapse Core (The Corpus Callosum Nucleus)
    const nucleusGeo = new THREE.SphereGeometry(0.72, 32, 32);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      emissive: 0xf5b841,
      emissiveIntensity: 2.2,
      roughness: 0.1,
      metalness: 0.9,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    nucleus.position.set(0, 0, 0);
    nucleus.scale.set(0.5, 1.2, 1.4);
    thinkingLobeGroup.add(nucleus);

    // 4. Interconnecting Synaptic Neural Arcs (Fibers bridging thoughts)
    const arcGroup = new THREE.Group();
    thinkingLobeGroup.add(arcGroup);

    const arcCurves: THREE.CatmullRomCurve3[] = [
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.2, 0.8, 0.4),
        new THREE.Vector3(0, 1.4, 0.8),
        new THREE.Vector3(1.2, 0.8, 0.4),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.4, -0.4, 0.2),
        new THREE.Vector3(0, -0.9, 0.6),
        new THREE.Vector3(1.4, -0.4, 0.2),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.1, 0.2, -0.8),
        new THREE.Vector3(0, 0.6, -1.3),
        new THREE.Vector3(1.1, 0.2, -0.8),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.9, 1.1, -0.4),
        new THREE.Vector3(0, 1.6, -0.2),
        new THREE.Vector3(0.9, 1.1, -0.4),
      ]),
    ];

    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      emissive: 0xf5b841,
      emissiveIntensity: 1.5,
      roughness: 0.15,
      metalness: 0.8,
    });

    arcCurves.forEach((curve) => {
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.025, 8, false);
      const tube = new THREE.Mesh(tubeGeo, tubeMat);
      arcGroup.add(tube);
    });

    // 5. Cortical Nodes (Pulsing Thought Centers for Hotel Departments)
    const nodeCoords = [
      [-1.3, 0.9, 0.6, "Finance"],
      [1.3, 0.9, 0.6, "Operations"],
      [-1.5, -0.2, 0.4, "Workforce"],
      [1.5, -0.2, 0.4, "Assets"],
      [-0.8, 1.3, -0.4, "Guest Flow"],
      [0.8, 1.3, -0.4, "Reservations"],
      [-1.2, 0.1, -0.9, "Supply Chain"],
      [1.2, 0.1, -0.9, "Energy Plant"],
    ];

    const nodeOrbs: THREE.Mesh[] = [];
    nodeCoords.forEach(([x, y, z]) => {
      const orbGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const orbMat = new THREE.MeshStandardMaterial({
        color: 0xfff0aa,
        emissive: 0xf5b841,
        emissiveIntensity: 2.0,
        roughness: 0.1,
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      orb.position.set(Number(x), Number(y), Number(z));
      thinkingLobeGroup.add(orb);
      nodeOrbs.push(orb);
    });

    // 6. Gyroscopic Cognitive Armillary Rings (Concentrated Orbiting Thought Bands)
    const armillaryGroup = new THREE.Group();
    thinkingLobeGroup.add(armillaryGroup);

    const ring1Geo = new THREE.TorusGeometry(2.6, 0.016, 16, 64);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      emissive: 0x4a3210,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.2;
    armillaryGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.1, 0.014, 16, 64);
    const ring2 = new THREE.Mesh(ring2Geo, synapticWireMat);
    ring2.rotation.x = -Math.PI / 2.6;
    ring2.rotation.y = Math.PI / 4;
    armillaryGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(3.6, 0.012, 16, 64);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xefe0b9,
      transparent: true,
      opacity: 0.25,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 3;
    armillaryGroup.add(ring3);

    // 7. Synaptic Photons / Spark Field
    const sparkCount = 95;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount * 3; i += 3) {
      const radius = 1.8 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      sparkPos[i] = radius * Math.sin(phi) * Math.cos(theta);
      sparkPos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      sparkPos[i + 2] = radius * Math.cos(phi);
    }
    sparkGeo.setAttribute("position", new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xf5b841,
      size: 0.065,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    thinkingLobeGroup.add(sparks);

    // Mouse Parallax & Drag Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let prevClientX = 0;
    let manualRotY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevClientX = e.clientX;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      if (isDragging) {
        const delta = e.clientX - prevClientX;
        prevClientX = e.clientX;
        manualRotY += delta * 0.006;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

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

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Autonomous Gyroscopic Cognitive Rotation
      thinkingLobeGroup.rotation.y = elapsed * 0.16 + manualRotY;
      ring1.rotation.z = elapsed * 0.22;
      ring2.rotation.z = -elapsed * 0.18;
      ring3.rotation.x = elapsed * 0.14;

      // Cognitive Breathing Effect (Brain pulsation in sync with hotel operations)
      const breath = 1.0 + Math.sin(elapsed * 1.8) * 0.022;
      leftLobeMesh.scale.set(breath, breath, breath);
      rightLobeMesh.scale.set(breath, breath, breath);
      leftWireMesh.scale.set(breath, breath, breath);
      rightWireMesh.scale.set(breath, breath, breath);

      // Nucleus Heartbeat Glow
      const corePulse = 1.0 + Math.sin(elapsed * 3.2) * 0.08;
      nucleus.scale.set(0.5 * corePulse, 1.2 * corePulse, 1.4 * corePulse);

      // Sequential Synaptic Node Fires
      nodeOrbs.forEach((orb, i) => {
        const pulse = 1.0 + Math.sin(elapsed * 3.6 + i * 0.9) * 0.45;
        orb.scale.set(pulse, pulse, pulse);
      });

      // Smooth Mouse Parallax
      targetX += (mouseX * 0.4 - targetX) * 0.05;
      targetY += (mouseY * 0.3 - targetY) * 0.05;
      camera.position.x = targetX * 1.6;
      camera.position.y = 2.2 + targetY * 0.8;
      camera.lookAt(0, 0.2, 0);

      sparks.rotation.y = elapsed * 0.05;

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
      leftLobeGeo.dispose();
      rightLobeGeo.dispose();
      nucleusGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      sparkGeo.dispose();
      lobeMaterial.dispose();
      synapticWireMat.dispose();
      tubeMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0A0603] flex flex-col justify-between overflow-hidden select-none">
      {/* Background Volumetric Sunbeam Effect */}
      <div className="sunbeams opacity-65" aria-hidden="true" />

      {/* Background 3D Canvas with The Thinking Lobe */}
      <div ref={mountRef} className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing opacity-90" />

      {/* Top Subtle Bar */}
      <div className="relative z-10 w-full px-6 sm:px-12 py-6 flex items-center justify-between border-b border-champagne-200/10 bg-[#0a0603]/40 backdrop-blur-sm">
        <a href="/" className="flex items-center gap-2.5 text-champagne-200/80 hover:text-champagne-200 transition-colors">
          <span className="font-serif text-lg tracking-[0.3em] uppercase">Joclarif</span>
          <span className="text-[9px] font-mono tracking-widest text-amber-glow uppercase px-2 py-0.5 rounded border border-amber-glow/30 bg-amber-glow/10 flex items-center gap-1.5">
            <Cpu className="w-3 h-3 text-amber-glow animate-pulse" />
            <span>Thinking Lobe Active</span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-champagne-300/60 hidden sm:inline">
            Autonomous Cognitive Core &bull; Zaria, Nigeria
          </span>
          <a
            href="/"
            className="text-xs font-mono text-champagne-200/70 hover:text-white transition-colors"
          >
            &larr; Return to Presentation
          </a>
        </div>
      </div>

      {/* Main Cinematic Content Overlaid on the Thinking Lobe */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center my-auto py-12 space-y-7 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-glow/40 bg-amber-glow/10 backdrop-blur-md text-amber-glow text-xs font-mono tracking-[0.25em] uppercase shadow-glow animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Cognitive Hospitality Core</span>
        </div>

        <div className="space-y-4">
          <div className="text-xs sm:text-sm font-mono tracking-[0.38em] text-champagne-200/60 uppercase">
            J O C L A R I F &bull; I N T E L L I G E N C E
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-champagne-100 tracking-wide leading-[1.05] drop-shadow-[0_12px_40px_rgba(20,12,5,0.95)]">
            A Hotel That Can <br />
            <span className="italic font-extralight text-amber-glow">Understand Itself.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-warm/80 font-light leading-relaxed pt-2">
            An integrated cognitive layer uniting legacy spreadsheets, real-time PMS bookings,
            biometric attendance, and generator telemetry into one living neural manifold.
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <button
            type="button"
            onClick={onEnter}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-amber-glow to-amber-deep text-shadow-darkest font-semibold text-xs tracking-[0.26em] uppercase shadow-glow hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Enter Command Centre</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cognitive Core Pillars Badges */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-left pointer-events-auto">
          <div className="p-3.5 rounded-xl bg-shadow-darkest/75 border border-champagne-200/10 backdrop-blur-md">
            <Brain className="w-4 h-4 text-amber-glow mb-1.5" />
            <div className="text-xs font-serif text-champagne-200">Dual-Hemisphere Lobe</div>
            <div className="text-[10px] text-ivory-warm/60 mt-0.5">Biometric &amp; operational cross-sync</div>
          </div>
          <div className="p-3.5 rounded-xl bg-shadow-darkest/75 border border-champagne-200/10 backdrop-blur-md">
            <Database className="w-4 h-4 text-amber-glow mb-1.5" />
            <div className="text-xs font-serif text-champagne-200">Multi-Source Synthesis</div>
            <div className="text-[10px] text-ivory-warm/60 mt-0.5">Excel 2018–2024 to live Modbus IoT</div>
          </div>
          <div className="p-3.5 rounded-xl bg-shadow-darkest/75 border border-champagne-200/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-glow mb-1.5" />
            <div className="text-xs font-serif text-champagne-200">Verifiable Synapses</div>
            <div className="text-[10px] text-ivory-warm/60 mt-0.5">Cryptographic evidence inspector</div>
          </div>
          <div className="p-3.5 rounded-xl bg-shadow-darkest/75 border border-champagne-200/10 backdrop-blur-md">
            <Shield className="w-4 h-4 text-amber-glow mb-1.5" />
            <div className="text-xs font-serif text-champagne-200">Role-Gated Cortex</div>
            <div className="text-[10px] text-ivory-warm/60 mt-0.5">Owner, GM, HR &amp; Ops simulation</div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Note */}
      <div className="relative z-10 w-full px-6 py-4 border-t border-champagne-200/10 text-center text-[10px] font-mono text-champagne-300/40 bg-[#0a0603]/60 backdrop-blur-sm">
        Drag to rotate the Thinking Lobe &bull; Joclarif Neural Hospitality Core &bull; Still Waters Edition
      </div>
    </div>
  );
}
