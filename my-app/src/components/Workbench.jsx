export default function Workbench() {
  return (
    <group>
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[12, 0.5, 8]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>

      <mesh position={[-5, -2, -3]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial color="#3a2415" />
      </mesh>

      <mesh position={[5, -2, -3]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial color="#3a2415" />
      </mesh>

      <mesh position={[-5, -2, 3]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial color="#3a2415" />
      </mesh>

      <mesh position={[5, -2, 3]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial color="#3a2415" />
      </mesh>
    </group>
  );
}