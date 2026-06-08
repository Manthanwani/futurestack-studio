

export default function DeveloperDesk() {
  return (
    <group
    position={[0, -0.5, -10]}
      rotation={[0, 0, 0]}
    >

      {/* DESK TOP */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[12, 0.4, 6]} />
        <meshStandardMaterial
          color="#4a2c17"
          roughness={0.7}
        />
      </mesh>

      {/* LEGS */}

      <mesh position={[-5, -2, 2]}>
        <boxGeometry args={[0.3, 5, 0.3]} />
        <meshStandardMaterial color="#1a0d05" />
      </mesh>

      <mesh position={[5, -2, 2]}>
        <boxGeometry args={[0.3, 5, 0.3]} />
        <meshStandardMaterial color="#1a0d05" />
      </mesh>

      <mesh position={[-5, -2, -2]}>
        <boxGeometry args={[0.3, 5, 0.3]} />
        <meshStandardMaterial color="#1a0d05" />
      </mesh>

      <mesh position={[5, -2, -2]}>
        <boxGeometry args={[0.3, 5, 0.3]} />
        <meshStandardMaterial color="#1a0d05" />
      </mesh>

      {/* KEYBOARD */}

      <mesh position={[0, 1.02, -1.8]}>
  <boxGeometry args={[3, 0.12, 1]} />
  <meshStandardMaterial
    color="#1f2937"
    metalness={0.4}
    roughness={0.3}
  />
</mesh>

<pointLight
  position={[0, 1.2, -1.8]}
  intensity={1.5}
  distance={5}
  color="#00d4ff"
/>

      {/* MOUSE */}

      <mesh position={[2.8, 1.08, -1.8]}>
  <capsuleGeometry args={[0.15, 0.2, 8, 16]} />
  <meshStandardMaterial
    color="#0f172a"
    metalness={0.2}
  />
</mesh>
      {/* MOUSE PAD */}

      <mesh position={[1.6, 0.93, -1.8]}>
  <boxGeometry args={[3.2, 0.04, 1.5]} />
  <meshStandardMaterial color="#111827" />
</mesh>
{/* laptop*/ }

      <group position={[-3.3, 1.05, -1]}>

  <mesh>
    <boxGeometry args={[2.3, 0.08, 1.6]} />
    <meshStandardMaterial
      color="#bfc5ce"
      metalness={0.9}
    />
  </mesh>

  <mesh
    position={[0, 0.75, -0.7]}
    rotation={[-0.9, 0, 0]}
  >
    <boxGeometry args={[2.2, 1.4, 0.05]} />
    <meshStandardMaterial
      color="#111827"
      emissive="#7dd3fc"
      emissiveIntensity={0.15}
    />
  </mesh>

</group>

      {/* COFFEE MUG */}

      <group position={[3.3, 1.15, -0.8]}>

  <mesh>
    <cylinderGeometry args={[0.25, 0.25, 0.45, 32]} />
    <meshStandardMaterial color="#ffffff" />
  </mesh>

  <mesh position={[0.28, 0, 0]}>
    <torusGeometry args={[0.09, 0.025, 16, 32]} />
    <meshStandardMaterial color="#ffffff" />
  </mesh>

</group>
      {/* PHONE */}

      <mesh position={[3.8, 0.95, 1]}>
        <boxGeometry args={[0.7, 0.05, 1.3]} />
        <meshStandardMaterial
          color="#000"
          emissive="#00aaff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* NOTEBOOK */}

      <mesh position={[-1.5, 1.02, 1]}>
  <boxGeometry args={[1.6, 0.15, 2]} />
  <meshStandardMaterial
    color="#fafafa"
  />
</mesh>

      {/* HEADPHONES */}

      <mesh position={[3.5, 1.02, 1]}>
  <boxGeometry args={[0.8, 0.04, 1.5]} />
  <meshStandardMaterial
    color="#0f172a"
    emissive="#38bdf8"
    emissiveIntensity={0.15}
  />
</mesh>

      {/* RGB DESK glow */}

      <mesh position={[3.5, 1.02, 1]}>
  <boxGeometry args={[0.8, 0.04, 1.5]} />
  <meshStandardMaterial
    color="#0f172a"
    emissive="#38bdf8"
    emissiveIntensity={0.15}
  />
</mesh>

    </group>
  );
}