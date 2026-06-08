import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function PlasmaCore() {
  const core = useRef();

  useFrame(({ clock }) => {
    if (!core.current) return;

    const s =
      1 + Math.sin(clock.elapsedTime * 3) * 0.05;

    core.current.scale.set(s, s, s);
    core.current.rotation.z += 0.002;
  });

  return (
    <group ref={core}>
      {/* Outer glow */}
      <mesh>
  <sphereGeometry args={[0.7,32,32]} />
  <meshBasicMaterial
    color="#000000"
    transparent
    opacity={0.08}
  />
</mesh>
      

      {/* Black hole */}
      <mesh>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </group>
  );
}