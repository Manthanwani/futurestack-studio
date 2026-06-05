import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function MovingPlasmaNodes() {
  const group = useRef();

  const nodes = [];

  for (let i = 0; i < 250; i++) {
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

      mesh.position.x *= 0.998;
      mesh.position.y *= 0.998;
    

      mesh.position.z =
        Math.sin(t) * 0.5;
    });
  
    
  });

  return (
    <group ref={group}>
      {nodes.map((_, i) => (
        <mesh key={i}>
         scale={0.0001}
          <sphereGeometry args={[0.001, 6, 6]} />
          <meshBasicMaterial color="#2f5560" />
        </mesh>
      ))}
    </group>
  );
}