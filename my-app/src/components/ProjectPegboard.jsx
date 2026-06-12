import { Text } from "@react-three/drei";
import { useState } from "react";

function ProjectCard({ position, title, url, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      {/* Card */}
      <mesh
        scale={hovered ? 1.05 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => window.open(url, "_blank")}
      >
        <boxGeometry args={[2.8, 3.5, 0.08]} />
        <meshStandardMaterial
          color="#f8f5f0"
          emissive={color}
          emissiveIntensity={hovered ? 0.4 : 0.15}
        />
      </mesh>

      {/* Clip */}
      <mesh position={[0, 1.9, 0.1]}>
        <boxGeometry args={[0.4, 0.25, 0.15]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Title */}
      <Text
        position={[0, 0.7, 0.12]}
        fontSize={0.18}
        color="#111827"
        anchorX="center"
      >
        {title}
      </Text>

      {/* Click text */}
      <Text
        position={[0, -0.8, 0.12]}
        fontSize={0.12}
        color="#6b7280"
        anchorX="center"
      >
        Click To Open
      </Text>
    </group>
  );
}

export default function ProjectPegboard() {
  return (
    <group position={[14.6, 4, 0]} rotation={[0, -Math.PI / 2, 0]}>
      
      {/* Pegboard */}
      <mesh>
        <boxGeometry args={[10, 8, 0.1]} />
        <meshStandardMaterial color="#d8c3a5" />
      </mesh>

      {/* Title */}
      <Text
        position={[0, 3.2, 0.1]}
        fontSize={0.4}
        color="#111827"
        anchorX="center"
      >
        PROJECTS
      </Text>

      {/* Project Cards */}
      <ProjectCard
        position={[-2.5, 0.5, 0.1]}
        title={"3D Portfolio\nWebsite"}
        url="https://github.com/Manthanwani/futurestack-studio"
        color="#00e5ff"
      />

      <ProjectCard
        position={[0, 0.5, 0.1]}
        title={"Multi Tanent SAAS system\nwebsite"}
        url="https://github.com/YOUR_USERNAME"
        color="#22c55e"
      />

      <ProjectCard
        position={[2.5, 0.5, 0.1]}
        title={"IOT Predictive Maintenance \nWebsite"}
        url="https://github.com/YOUR_USERNAME"
        color="#f97316"
      />
    </group>
  );
}