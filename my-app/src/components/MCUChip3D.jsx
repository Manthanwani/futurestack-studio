
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

import Room from "./Room";
import Workbench from "./Workbench";



function Chip({ powered }) {
  return (
    <group scale={1.2}>

      {/* PCB BOARD */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[10, 0.15, 10]} />
        <meshStandardMaterial color="#0a4f2f" />
      </mesh>

      {/* LCD DISPLAY */}
      <mesh position={[0, 0.7, -2]}>
        <boxGeometry args={[3, 0.2, 1.2]} />
        <meshStandardMaterial
          color="#003300"
          emissive="#00ff88"
          emissiveIntensity={powered ? 2 : 0}
        />
      </mesh>

      {/* LCD TEXT */}
      {powered && (
        <>
          <Text
            position={[0, 0.82, -1.35]}
            fontSize={0.13}
            color="#00ff88"
            anchorX="center"
          >
            MANTHAN WANI
          </Text>

          <Text
            position={[0, 0.62, -1.35]}
            fontSize={0.08}
            color="#00ff88"
            anchorX="center"
          >
            E&TC ENGINEER
          </Text>
        </>
      )}

      {/* MCU BODY */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.4, 3]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#00ff88"
          emissiveIntensity={powered ? 0.5 : 0}
        />
      </mesh>

      {/* MCU LABEL */}
      <Text
        position={[0, 0.25, 1.55]}
        fontSize={0.12}
        color="white"
        anchorX="center"
      >
        MCU CORE
      </Text>

      {/* LEFT PINS */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={`left-${i}`}
          position={[-1.7, -0.1, -1.2 + i * 0.35]}
        >
          <boxGeometry args={[0.4, 0.1, 0.1]} />
          <meshStandardMaterial color="silver" />
        </mesh>
      ))}

      {/* RIGHT PINS */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={`right-${i}`}
          position={[1.7, -0.1, -1.2 + i * 0.35]}
        >
          <boxGeometry args={[0.4, 0.1, 0.1]} />
          <meshStandardMaterial color="silver" />
        </mesh>
      ))}

      {/* TOP PINS */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={`top-${i}`}
          position={[-1.2 + i * 0.35, -0.1, -1.7]}
        >
          <boxGeometry args={[0.1, 0.1, 0.4]} />
          <meshStandardMaterial color="silver" />
        </mesh>
      ))}

      {/* BOTTOM PINS */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={`bottom-${i}`}
          position={[-1.2 + i * 0.35, -0.1, 1.7]}
        >
          <boxGeometry args={[0.1, 0.1, 0.4]} />
          <meshStandardMaterial color="silver" />
        </mesh>
      ))}

      {/* POWER LED */}
      <mesh position={[2.3, 0.2, 2]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={powered ? 5 : 0}
        />
      </mesh>

      {/* STATUS LED */}
      <mesh position={[2.8, 0.2, 2]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="red"
          emissive="red"
          emissiveIntensity={powered ? 2 : 0}
        />
      </mesh>

      {/* BLUE LED */}
      <mesh position={[3.3, 0.2, 2]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="blue"
          emissive="blue"
          emissiveIntensity={powered ? 2 : 0}
        />
      </mesh>

      {/* CAPACITORS */}
      <mesh position={[-2.2, 0.18, -1]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      <mesh position={[-2.7, 0.18, -1]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      <mesh position={[-2.2, 0.18, -1.6]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* RESISTORS */}
      <mesh position={[2.2, 0.1, -1]}>
        <boxGeometry args={[0.5, 0.1, 0.2]} />
        <meshStandardMaterial color="#c4a484" />
      </mesh>

      <mesh position={[2.9, 0.1, -1]}>
        <boxGeometry args={[0.5, 0.1, 0.2]} />
        <meshStandardMaterial color="#c4a484" />
      </mesh>

      <mesh position={[2.2, 0.1, -1.5]}>
        <boxGeometry args={[0.5, 0.1, 0.2]} />
        <meshStandardMaterial color="#c4a484" />
      </mesh>

      {/* CRYSTAL OSCILLATOR */}
      <mesh position={[0, 0.18, -2.8]}>
        <boxGeometry args={[0.9, 0.25, 0.4]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* USB CONNECTOR */}
      <mesh position={[0, 0.2, 4.4]}>
        <boxGeometry args={[1.2, 0.4, 0.8]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* HEADER PINS LEFT */}
      {[...Array(10)].map((_, i) => (
        <mesh
          key={`hl-${i}`}
          position={[-4.2, 0.25, -2 + i * 0.45]}
        >
          <boxGeometry args={[0.1, 0.5, 0.1]} />
          <meshStandardMaterial color="gold" />
        </mesh>
      ))}

      {/* HEADER PINS RIGHT */}
      {[...Array(10)].map((_, i) => (
        <mesh
          key={`hr-${i}`}
          position={[4.2, 0.25, -2 + i * 0.45]}
        >
          <boxGeometry args={[0.1, 0.5, 0.1]} />
          <meshStandardMaterial color="gold" />
        </mesh>
      ))}

      {/* PCB TRACES */}
      <mesh position={[0, -0.42, 2]}>
        <boxGeometry args={[5, 0.03, 0.08]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      <mesh position={[2, -0.42, 0]}>
        <boxGeometry args={[0.08, 0.03, 4]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      <mesh position={[-2, -0.42, 0]}>
        <boxGeometry args={[0.08, 0.03, 4]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      <mesh position={[0, -0.42, -2]}>
        <boxGeometry args={[4, 0.03, 0.08]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      <mesh position={[3, -0.42, 1]}>
        <boxGeometry args={[2, 0.03, 0.08]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      {/* CURRENT FLOW INDICATOR */}
      {powered && (
        <mesh position={[0, -0.3, 2]}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshStandardMaterial
            color="yellow"
            emissive="yellow"
            emissiveIntensity={8}
          />
        </mesh>
      )}
    </group>
  );
}

export default function MCUChip3D({ powered }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas
      shadows
camera={{
position: [12, 5, 12],
fov: 45,
}}

>

  <ambientLight intensity={0.8} />

<spotLight
position={[0, 8, 5]}
angle={0.5}
penumbra={1}
intensity={70}
castShadow
/>

  <Room />

  <Workbench />

  <Chip powered={powered} />

<OrbitControls
autoRotate
autoRotateSpeed={0.5}
enableZoom
target={[0, 0, 0]}
/> </Canvas>

    </div>
  );
}