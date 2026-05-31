export default function Room() {
  return (
    <group>

      {/* FLOOR */}
      <mesh position={[0, -4.5, 0]}>
        <boxGeometry args={[50, 0.5, 50]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      {/* BACK WALL */}
      <mesh position={[0, 3, -25]}>
        <boxGeometry args={[50, 15, 0.5]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* LEFT WALL */}
      <mesh position={[-15, 6, 0]}>
        <boxGeometry args={[0.5, 15, 30]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* RIGHT WALL */}
      <mesh position={[15, 6, 0]}>
        <boxGeometry args={[0.5, 15, 30]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* MONITOR FRAME */}
<mesh position={[0, 3, -18]} castShadow>
  <boxGeometry args={[9, 5.2, 0.4]} />
  <meshStandardMaterial
    color="#0a0f1f"
    metalness={0.8}
    roughness={0.3}
  />
</mesh>

      {/* MONITOR SCREEN */}
<mesh position={[0, 4, -17.75]}>
  <boxGeometry args={[8, 4.2, 0.08]} />
  <meshStandardMaterial
    color="#021a08"
    emissive="#00ff88"
    intensity={6}
  />
</mesh>

      {/* MONITOR STAND */}
<mesh position={[0, 1.4, -18]}>
  <boxGeometry args={[0.4, 3, 0.4]} />
  <meshStandardMaterial
    color="#222"
    metalness={0.9}
    roughness={0.2}
  />
</mesh>

      {/* MONITOR BASE */}
      <mesh position={[0, 0.2, -15]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <meshStandardMaterial
  color="#001100"
  emissive="#00ff88"
  emissiveIntensity={0.25}
/>
{/* MONITOR BASE */}
<mesh position={[0, 0.15, -18]}>
  <boxGeometry args={[3, 0.2, 2]} />
  <meshStandardMaterial
    color="#151515"
    metalness={0.8}
    roughness={0.3}
  />
</mesh>

<pointLight
  position={[0, 4, -17]}
  emissiveIntensity={0.6}
  distance={20}
  color="#00ff88"
/>

    </group>
  );
}