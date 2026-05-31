import { Sparkles } from "@react-three/drei";

export default function PowerBurst({ active }) {
  if (!active) return null;

  return (
    <group position={[3.2, 0.7, 0]}>
      <Sparkles
        count={200}
        scale={4}
        size={6}
        speed={2}
      />
    </group>
  );
}