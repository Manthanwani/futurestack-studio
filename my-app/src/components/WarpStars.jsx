import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function WarpStars() {
  const group = useRef();

  const stars = [];

  for (let i = 0; i < 800; i++) {
    stars.push({
      x: (i % 40) - 20,
      y: ((i * 7) % 40) - 20,
      z: -i * 0.5,
    });
  }

  useFrame(() => {
    if (!group.current) return;

    group.current.children.forEach((star) => {
      star.position.z += 0.4;

      if (star.position.z > 10) {
        star.position.z = -400;
      }
    });
  });

  return (
    <group ref={group}>
      {stars.map((s, i) => (
        <mesh
          key={i}
          position={[s.x, s.y, s.z]}
        >
          <sphereGeometry args={[0.008, 4, 4]} />
          <meshBasicMaterial
            color="#7bdfff"
            toneMapped={false}
            opacity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}