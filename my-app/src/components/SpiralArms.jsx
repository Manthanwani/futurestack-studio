import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function SpiralArms() {
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.z += 0.04;
    }
  });

  const particles = [];

  const arms = 180;
  const pointsPerArm = 300;

  for (let arm = 0; arm < arms; arm++) {
    for (let i = 0; i < pointsPerArm; i++) {
      const angle =
        (i / pointsPerArm) * Math.PI * 4 +
        (arm / arms) * Math.PI * 2;

      const radius = 0.1 + i * 0.005;

      particles.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: (i / pointsPerArm) * 0.5,
        
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
          
            <sphereGeometry args={[0.008, 6, 6]} />
          
          <meshBasicMaterial
            color="#9ad3d5"
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}