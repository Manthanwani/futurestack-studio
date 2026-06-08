import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function EnergyPulse() {
  const pulse = useRef();

  useFrame(({ clock }) => {
    if (!pulse.current) return;

    const s =
      1 +
      ((Math.sin(clock.elapsedTime * 5) + 1) / 2) * 0.3;

    pulse.current.scale.set(s, s, s);

    pulse.current.material.opacity =
      0.3 -
      ((Math.sin(clock.elapsedTime * 5) + 1) / 2) * 0.2;
  });

  return (
    <mesh ref={pulse}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshBasicMaterial
        color="#10313a"
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}