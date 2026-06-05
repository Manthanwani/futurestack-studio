import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function ElectricField() {
  const group = useRef();

  const lines = [];

  const arms = 180;
  const pointsPerArm = 200;

  for (let arm = 0; arm < arms; arm++) {
    const vertices = [];

    for (let i = 0; i < pointsPerArm; i++) {
      const t = i / pointsPerArm;

      const angle =
        arm * ((Math.PI * 2) / arms) +
        t * 10;

      const radius =
  0.3 +
  t * 3 +
  Math.sin(t * 25 + arm) * 0.15 +
  Math.cos(t * 50 + arm) * 0.08;

      const x =
        Math.cos(angle) * radius;

      const y =
        Math.sin(angle) * radius;

      const z =
        -t * 2;

      vertices.push(x, y, z);
    }

    lines.push(vertices);
  }

  useFrame(() => {
    if (group.current) {
      group.current.rotation.z += 0.003;
    }
  });

  return (
    <group ref={group}>
      {lines.map((vertices, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={vertices.length / 3}
              array={new Float32Array(vertices)}
              itemSize={3}
            />
          </bufferGeometry>

          <lineBasicMaterial
            color="#9dfcff"
            transparent
            opacity={0.15}
          />
        </line>
      ))}
    </group>
  );
}