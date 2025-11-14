'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<any>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1
      meshRef.current.rotation.y = time * 0.15
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <MeshDistortMaterial
        ref={materialRef}
        color="#8b5cf6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  )
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.z = time * 0.1
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[3, 0, -2]}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <MeshDistortMaterial
        color="#00d4ff"
        attach="material"
        distort={0.3}
        speed={3}
        roughness={0.2}
        metalness={0.9}
      />
    </mesh>
  )
}

function FloatingBox() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.3
      meshRef.current.rotation.z = time * 0.15
      meshRef.current.position.x = -3 + Math.sin(time * 0.8) * 0.5
      meshRef.current.position.y = Math.cos(time * 0.6) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[-3, 0, -1]}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <MeshDistortMaterial
        color="#00ff88"
        attach="material"
        distort={0.4}
        speed={2.5}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  )
}

export function MeshGradient() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#00ff88" />

        <AnimatedSphere />
        <AnimatedTorus />
        <FloatingBox />
      </Canvas>
    </div>
  )
}
