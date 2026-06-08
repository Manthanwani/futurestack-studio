import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function VortexRing() {
  const ring = useRef();

  useFrame((state) => {
    if (ring.current) {
      ring.current.rotation.z += 0.03;
      ring.current.rotation.x = 0.4;
        Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[1.1, 0.04, 8, 200]} />
      <meshStandardMaterial
        color="#baffff"
        emissive="#baffff"
        emissiveIntensity={2}
      />
    </mesh>
  );
}