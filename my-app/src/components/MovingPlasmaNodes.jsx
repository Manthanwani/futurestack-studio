import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function MovingPlasmaNodes() {
  const group = useRef();

  const nodes = [];

  for (let i = 0; i < 100; i++) {
    nodes.push({
      angle: i * 0.15,
      radius: 2 + Math.sin(i * 0.3),
      offset: i * 0.05,
    });
  }

  useFrame(({ clock }) => {
    if (!group.current) return;

    group.current.children.forEach((mesh, i) => {
      const t = clock.elapsedTime + nodes[i].offset;

    if (
  Math.abs(mesh.position.x) < 0.1 &&
  Math.abs(mesh.position.y) < 0.1
) {
  mesh.position.x =
    (Math.random() - 0.5) * 5;

  mesh.position.y =
    (Math.random() - 0.5) * 5;
}
   mesh.position.z =
    Math.sin(t) * 3;
    });
  
    
  });

  return (
    <group ref={group}>
      {nodes.map((_, i) => (
        <mesh key={i}>
         scale={0.0001}
          <sphereGeometry args={[0.006, 4, 4]} />
          <meshBasicMaterial color="#9ffcff" />
        </mesh>
      ))}
    </group>
  );
}