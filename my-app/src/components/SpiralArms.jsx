import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function SpiralArms() {
  const group = useRef();

 useFrame(({ clock }) => {
  if (!group.current) return;

  group.current.rotation.z += 0.0015;

  group.current.children.forEach((mesh, i) => {
    const t = clock.elapsedTime * 0.5 + i * 0.02;

    const r = 0.5 + ((i % 90) * 0.015);

    mesh.position.x =
      Math.cos(t) * r;

    mesh.position.y =
      Math.sin(t) * r;
  });
});

  const particles = [];

  const arms = 36;
  const pointsPerArm = 90;

  for (let arm = 0; arm < arms; arm++) {
    for (let i = 0; i < pointsPerArm; i++) {
      const angle =
        (i / pointsPerArm) * Math.PI * 4 +
        (arm / arms) * Math.PI * 2;

      const radius = 0.15 + i * 0.01;

      particles.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: (i / pointsPerArm) * 4 - 2
      });
    }
  }

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh
          key={i}
          position={[p.x, p.y, p.z]}
        >
          <sphereGeometry args={[0.004, 4, 4]} />
          <meshBasicMaterial
            color="#9ad3d5"
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}