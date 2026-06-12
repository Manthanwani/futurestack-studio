import { Text } from "@react-three/drei";
import { useState } from "react";

function SkillBook({
  position,
  title,
  color,
  url,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <mesh
        scale={hovered ? 1.08 : 1.2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => window.open(url, "_blank")}
      >
        <boxGeometry args={[0.9, 2, 0.40]} />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.4 : 0.15}
        />
      </mesh>

      <Text
        position={[0, 0, 0.15]}
        fontSize={0.12}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  );
}

export default function LeftWallShelf() {
  return (
    <group
      position={[-14.4, 3, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      {/* TITLE */}

      <Text
        position={[0, 4.5, 0]}
        fontSize={0.5}
        color="#111827"
      >
        SKILLS
      </Text>

      {/* TOP SHELF */}

      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={[7, 0.15, 0.5]} />

        <meshStandardMaterial color="#7f5539" />
      </mesh>

      {/* BOTTOM SHELF */}

      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[7, 0.15, 0.5]} />

        <meshStandardMaterial color="#7f5539" />
      </mesh>

      {/* REACT */}

      <SkillBook
        position={[-2.5, 2.35, 0]}
        title="React"
        color="#61DAFB"
        url="https://react.dev"
      />

      {/* JAVASCRIPT */}

      <SkillBook
        position={[0, 2.35, 0]}
        title="JS"
        color="#F7DF1E"
        url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      />

      {/* PYTHON */}

      <SkillBook
        position={[2.5, 2.35, 0]}
        title="Python"
        color="#3776AB"
        url="https://www.python.org"
      />

      {/* JAVA */}

      <SkillBook
        position={[-2.5, -0.45, 0]}
        title="Java"
        color="#E76F00"
        url="https://www.java.com"
      />

      {/* IOT */}

      <SkillBook
        position={[0, -0.45, 0]}
        title="IoT"
        color="#00C896"
        url="https://en.wikipedia.org/wiki/Internet_of_things"
      />

      {/* EMBEDDED */}

      <SkillBook
        position={[2.5, -0.45, 0]}
        title="Embedded"
        color="#FF6B6B"
        url="https://en.wikipedia.org/wiki/Embedded_system"
      />

      {/* SHELF LIGHT */}

      <pointLight
        position={[0, 1, 1]}
        color="#ffe8cc"
        intensity={1.5}
        distance={10}
      />
      <spotLight
  position={[-12, 8, 3]}
  intensity={8}
  angle={0.4}
  color="#ffd6a5"
/>
    </group>
  );
}