import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function VortexRing() {
  const ring = useRef();

  useFrame((state) => {
    if (ring.current) {
      ring.current.rotation.z += 0.03;
      ring.current.rotation.x =
        Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[0.9, 0.03, 16, 150]} />
      <meshStandardMaterial
        color="#7eabb4"
        emissive="#abab95"
        emissiveIntensity={2}
      />
    </mesh>
  );
}