import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function LightningArcs() {
  const group = useRef();

  const arcs = [];

  for (let i = 0; i < 120; i++) {
    const angle1 = (i / 120) * Math.PI * 2;
    const angle2 = angle1 + 0.5;

    const r1 = 1.5;
    const r2 = 2.8;

    arcs.push([
      [
        Math.cos(angle1) * r1,
        Math.sin(angle1) * r1,
        0,
      ],
      [
        Math.cos(angle2) * r2,
        Math.sin(angle2) * r2,
        0,
      ],
    ]);
  }

  useFrame(() => {
    if (group.current) {
      group.current.rotation.z += 0.01;
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={group}>
      {arcs.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#2b4e50"
          lineWidth={1}
          transparent
          opacity={0.8}
        />
      ))}
    </group>
  );
}