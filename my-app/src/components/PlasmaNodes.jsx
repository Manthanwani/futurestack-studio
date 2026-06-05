export default function PlasmaNodes() {
  const points = [];

  for (let i = 0; i < 15000; i++) {
    const angle = i * 0.25;
    const radius = 2 + Math.sin(i * 0.15) * 1.2;

    points.push([
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      (i - 300) * 0.03,
    ]);
  }

  return (
    <>
      {points.map((p, i) => (
        <mesh
          key={i}
          position={p}
        >
          <sphereGeometry args={[0.008, 6, 6]} />
          <meshBasicMaterial
 color={
   i % 3 === 0
     ? "#6ffcff"
     : i % 3 === 1
     ? "#7bc9ff"
     : "#c8ffff"
 }
/>
        </mesh>
      ))}
    </>
  );
}