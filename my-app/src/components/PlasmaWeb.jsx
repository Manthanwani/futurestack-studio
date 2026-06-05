import * as THREE from "three";
import { useMemo } from "react";

export default function PlasmaWeb() {
  const lines = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 150; i++) {
      const a1 = (i / 150) * Math.PI * 2;
      const a2 = ((i + 1) / 150) * Math.PI * 2;

      const r1 = 2 + Math.sin(i * 0.2) * 0.5;
      const r2 = 2 + Math.sin((i + 1) * 0.2) * 0.5;

      arr.push([
        new THREE.Vector3(
          Math.cos(a1) * r1,
          Math.sin(a1) * r1,
          0
        ),
        new THREE.Vector3(
          Math.cos(a2) * r2,
          Math.sin(a2) * r2,
          0
        ),
      ]);
    }

    return arr;
  }, []);

  return (
    <>
      {lines.map((pair, i) => (
        <line key={i}>
          <bufferGeometry
            attach="geometry"
            setFromPoints={pair}
          />
          <lineBasicMaterial color="#094b4f" />
        </line>
      ))}
    </>
  );
}