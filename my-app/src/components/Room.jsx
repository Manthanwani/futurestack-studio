export default function Room() {
  return (
    <group>

      {/* FLOOR */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[30, 0.5, 30]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* BACK WALL */}
      <mesh position={[0, 8, -25]}>
        <boxGeometry args={[30, 15, 0.5]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* LEFT WALL */}
      <mesh position={[-15, 6, 0]}>
        <boxGeometry args={[0.5, 15, 30]} />
        <meshStandardMaterial color="#151515" />
      </mesh>

      {/* RIGHT WALL */}
      <mesh position={[15, 6, 0]}>
        <boxGeometry args={[0.5, 15, 30]} />
        <meshStandardMaterial color="#151515" />
      </mesh>

      {/* MONITOR FRAME */}
      <mesh position={[0, 4, -18]}>
        <boxGeometry args={[8, 4.5, 0.3]} />
        <meshStandardMaterial color="#0d1b3d" />
      </mesh>

      {/* MONITOR SCREEN */}
      <mesh position={[0, 4, -14.8]}>
        <boxGeometry args={[8.5, 4, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* MONITOR STAND */}
      <mesh position={[0, 1.5, -15]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* MONITOR BASE */}
      <mesh position={[0, 0.2, -15]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#222" />
      </mesh>

    </group>
  );
}