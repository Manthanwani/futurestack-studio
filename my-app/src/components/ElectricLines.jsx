import * as THREE from "three";

export default function ElectricLines() {
  const points = [];

  for (let i = 0; i < 120; i++) {
    const angle = i * 0.35;
    const radius = 2 + Math.sin(i * 0.2);

    points.push(
      new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0
      )
    );
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(
    points
  );

  return (
    <line>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color="#0a1619" />
    </line>
  );
}