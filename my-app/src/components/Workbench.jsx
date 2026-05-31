export default function Workbench() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[12, 0.5, 8]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>

      <mesh position={[-4, -2, -4]}>
        <boxGeometry args={[0.3, 4, 0.3]} />
        <meshStandardMaterial color="#3a2415" />
      </mesh>

      <mesh position={[4, -2, -4]}>
        <boxGeometry args={[0.3, 4, 0.3]} />
        <meshStandardMaterial color="#3a2415" />
      </mesh>

      <mesh position={[-4, -2, 4]}>
        <boxGeometry args={[0.3, 4, 0.3]} />
        <meshStandardMaterial color="#3a2415" />
      </mesh>

      <mesh position={[4, -2, 4]}>
        <boxGeometry args={[0.3, 4, 0.3]} />
        <meshStandardMaterial color="#3a2415" />
      </mesh>
    </group>
  );
}