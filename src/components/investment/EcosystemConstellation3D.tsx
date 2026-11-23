"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { ECOSYSTEM_NODES, EcosystemNode } from "@/data/investmentMockData";
import { Sparkles, Maximize2, RotateCcw } from "lucide-react";

interface EcosystemConstellation3DProps {
  activeNodeId?: string;
  onSelectNode?: (node: EcosystemNode) => void;
}

export function EcosystemConstellation3D({
  activeNodeId,
  onSelectNode,
}: EcosystemConstellation3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<EcosystemNode | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const nodeMeshesRef = useRef<{ [id: string]: THREE.Mesh }>({});
  const activeNodeIdRef = useRef<string | undefined>(activeNodeId);

  useEffect(() => {
    activeNodeIdRef.current = activeNodeId;
  }, [activeNodeId]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 550;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0d0804, 0.05);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 8.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Warm Volumetric Lights (Matching Still Waters Palette)
    const ambientLight = new THREE.AmbientLight(0x22160b, 1.8);
    scene.add(ambientLight);

    // Top-Right God-Ray Golden Key Light
    const keyLight = new THREE.DirectionalLight(0xf5b841, 3.5);
    keyLight.position.set(6, 9, 5);
    scene.add(keyLight);

    // Champagne Rim Light
    const rimLight = new THREE.PointLight(0xefe0b9, 2.2, 20);
    rimLight.position.set(-5, -2, -4);
    scene.add(rimLight);

    // Warm Core Pulse Light
    const corePointLight = new THREE.PointLight(0xf5b841, 3.0, 8);
    corePointLight.position.set(0, 0, 0);
    scene.add(corePointLight);

    // 5. Central Architectural Monolith Wireframe (representing Joclarif Hotel Physical Core)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Multi-tiered stepped luxury architectural massing
    const baseGeo = new THREE.BoxGeometry(1.6, 2.4, 1.6);
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0x80613a,
      wireframe: true,
      emissive: 0x4a3520,
      emissiveIntensity: 0.4,
    });
    const baseMesh = new THREE.Mesh(baseGeo, wireMat);
    coreGroup.add(baseMesh);

    // Inner glowing crystal pavilion inside the core
    const innerCoreGeo = new THREE.OctahedronGeometry(0.7, 1);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0xf5b841,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0xdda74f,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCoreMesh);

    // Golden Armillary Horizon Rings around Core
    const ringGeo1 = new THREE.TorusGeometry(1.8, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xefe0b9, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat);
    ring1.rotation.x = Math.PI / 2.3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat);
    ring2.rotation.y = Math.PI / 3;
    coreGroup.add(ring2);

    // 6. 9 Ecosystem Nodes in 3D Space
    const nodeMeshes: { [id: string]: THREE.Mesh } = {};
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    ECOSYSTEM_NODES.forEach((node) => {
      // Outer sphere
      const sphereGeo = new THREE.SphereGeometry(0.32, 24, 24);
      const isCoreNode = node.id === "accommodation" || node.id === "intelligence";
      const sphereMat = new THREE.MeshStandardMaterial({
        color: isCoreNode ? 0xf5b841 : 0xefe0b9,
        emissive: isCoreNode ? 0xd99726 : 0x80613a,
        emissiveIntensity: 0.7,
        roughness: 0.3,
        metalness: 0.8,
      });

      const mesh = new THREE.Mesh(sphereGeo, sphereMat);
      mesh.position.set(node.position[0], node.position[1], node.position[2]);
      mesh.userData = { nodeId: node.id, nodeData: node };

      // Halo ring around each node
      const haloGeo = new THREE.RingGeometry(0.42, 0.46, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xf5b841,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      mesh.add(haloMesh);

      nodeGroup.add(mesh);
      nodeMeshes[node.id] = mesh;

      // 7. Golden Connecting Conduits from Core to Node
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(
          node.position[0] * 0.4 + (Math.random() - 0.5) * 0.5,
          node.position[1] * 0.4 + (Math.random() - 0.5) * 0.5,
          node.position[2] * 0.4
        ),
        new THREE.Vector3(node.position[0], node.position[1], node.position[2])
      );

      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.018, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: 0xdda74f,
        transparent: true,
        opacity: 0.45,
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      scene.add(tubeMesh);
    });

    nodeMeshesRef.current = nodeMeshes;

    // 8. Atmospheric Floating Golden Dust Particles
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf5b841,
      size: 0.055,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 9. Raycasting for Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeGroup.children, true);

      if (intersects.length > 0) {
        let targetMesh = intersects[0].object as THREE.Mesh;
        if (!targetMesh.userData.nodeId && targetMesh.parent) {
          targetMesh = targetMesh.parent as THREE.Mesh;
        }
        if (targetMesh.userData.nodeData) {
          setHoveredNode(targetMesh.userData.nodeData);
          container.style.cursor = "pointer";
          return;
        }
      }
      setHoveredNode(null);
      container.style.cursor = "grab";
    };

    const handlePointerClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeGroup.children, true);

      if (intersects.length > 0) {
        let targetMesh = intersects[0].object as THREE.Mesh;
        if (!targetMesh.userData.nodeId && targetMesh.parent) {
          targetMesh = targetMesh.parent as THREE.Mesh;
        }
        if (targetMesh.userData.nodeData && onSelectNode) {
          onSelectNode(targetMesh.userData.nodeData);
        }
      }
    };

    // Orbit drag controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      container.style.cursor = "grabbing";
    };

    const onMouseUp = () => {
      isDragging = false;
      container.style.cursor = "grab";
    };

    const onMouseMoveOrbit = (e: MouseEvent) => {
      handlePointerMove(e);
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        scene.rotation.y += deltaX * 0.006;
        scene.rotation.x = Math.max(-0.6, Math.min(0.6, scene.rotation.x + deltaY * 0.004));
      }
    };

    container.addEventListener("mousemove", onMouseMoveOrbit);
    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("click", handlePointerClick);

    // 10. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle auto-rotation
      if (autoRotate && !isDragging) {
        scene.rotation.y += 0.0022;
      }

      // Rotate inner crystal and armillary rings
      innerCoreMesh.rotation.y = elapsedTime * 0.4;
      innerCoreMesh.rotation.x = elapsedTime * 0.2;
      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.18;

      // Pulse core lighting
      corePointLight.intensity = 2.4 + Math.sin(elapsedTime * 2.5) * 0.8;

      // Pulse node halos and highlight active node
      Object.keys(nodeMeshes).forEach((id) => {
        const mesh = nodeMeshes[id];
        const isActive = id === activeNodeIdRef.current;
        const scale = isActive ? 1.35 : 1.0 + Math.sin(elapsedTime * 2 + mesh.position.x) * 0.06;
        mesh.scale.set(scale, scale, scale);

        const halo = mesh.children[0] as THREE.Mesh;
        if (halo) {
          halo.lookAt(camera.position);
          const mat = halo.material as THREE.MeshBasicMaterial;
          mat.opacity = isActive ? 0.95 : 0.45 + Math.sin(elapsedTime * 3 + mesh.position.y) * 0.2;
        }
      });

      // Drift particles gently
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", onMouseMoveOrbit);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("click", handlePointerClick);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [autoRotate, onSelectNode]);

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden border border-champagne-200/15 bg-gradient-to-b from-[#140c06]/80 via-[#0d0804]/90 to-[#0d0804] shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
      {/* Three.js canvas container */}
      <div ref={mountRef} className="w-full h-full cursor-grab" />

      {/* Atmospheric God-Ray overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gradient from-amber-glow/20 via-transparent to-transparent pointer-events-none blur-3xl opacity-60" />

      {/* Top Header Badge */}
      <div className="absolute top-5 left-6 right-6 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0d0804]/80 backdrop-blur-md border border-champagne-200/20 text-[10px] font-mono tracking-[0.22em] text-champagne-200 uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-glow animate-pulse" />
          <span>Interactive 3D Ecosystem Constellation</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-2.5 py-1 rounded-full border text-[9px] font-mono tracking-[0.18em] uppercase transition-all ${
              autoRotate
                ? "border-amber-glow/50 bg-amber-glow/15 text-amber-glow"
                : "border-champagne-200/20 bg-shadow-darkest/70 text-champagne-200/60"
            }`}
          >
            {autoRotate ? "Orbiting" : "Paused"}
          </button>
          <div className="px-2.5 py-1 rounded-full border border-champagne-200/15 bg-shadow-darkest/80 text-[9px] font-mono text-champagne-200/50 uppercase">
            Drag to Rotate
          </div>
        </div>
      </div>

      {/* Dynamic Hover / Active Node Card Overlay */}
      {hoveredNode && (
        <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md p-4 rounded-2xl bg-[#140c06]/95 backdrop-blur-xl border border-amber-glow/40 shadow-2xl transition-all animate-fadeIn">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] font-mono tracking-[0.25em] text-amber-glow uppercase">
              {hoveredNode.category}
            </span>
            <span className="text-[9px] font-mono text-champagne-200/50">Node Selected</span>
          </div>
          <h4 className="font-serif text-lg text-champagne-100 font-light mb-1">
            {hoveredNode.name}
          </h4>
          <p className="text-xs text-ivory-warm/75 font-light leading-relaxed mb-2">
            {hoveredNode.description}
          </p>
          <div className="pt-2 border-t border-champagne-200/10 flex items-center justify-between text-[10px]">
            <span className="text-champagne-200/60 font-mono">Revenue Synergy:</span>
            <span className="text-amber-glow font-medium text-right max-w-[240px] truncate">
              {hoveredNode.revenueImpact}
            </span>
          </div>
        </div>
      )}

      {/* Bottom Hint Strip */}
      <div className="absolute bottom-4 left-6 hidden sm:flex items-center gap-3 pointer-events-none text-[9px] font-mono text-ivory-warm/40 tracking-[0.2em] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-glow" />
        <span>9 Interconnected Revenue Nodes &bull; Click any node to inspect commercial engine</span>
      </div>
    </div>
  );
}
