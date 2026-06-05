
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useState, useEffect } from "react";
import Room from "./Room";
import Workbench from "./Workbench";





function Chip({
  powered,
  setPowered,
  
  
  
  
  
  
  setShowTunnel,
  
  
})

    
 {
  const [flowPosition, setFlowPosition] = useState(-4);
  

  
  

  useEffect(() => {
    if (!powered) return;

    const interval = setInterval(() => {
      setFlowPosition((prev) => {
        if (prev > 4) return -4;
        return prev + 0.1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [powered]);

  return (
    <group scale={1.2}>

      {/* PCB BOARD */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[10, 0.15, 10]} />
        <meshStandardMaterial
  color="#0a4f2f"
  emissive={powered ? "#00ff88" : "#000000"}
  emissiveIntensity={powered ? 0.3 : 0}
  
/>
        
      </mesh>
      {powered && (
  <mesh position={[flowPosition, 0.45, 2]}>
    <sphereGeometry args={[0.08, 16, 16]} />
    <meshStandardMaterial
      color="#00ff88"
      emissive="#00ff88"
      emissiveIntensity={4}
    />
  </mesh>)}

  {powered && (
  <mesh position={[flowPosition - 2, 0.45, -2]}>
    <sphereGeometry args={[0.08, 16, 16]} />
    <meshStandardMaterial
      color="#00ff88"
      emissive="#00ff88"
      emissiveIntensity={4}
    />
  </mesh>
)}


      {/* POWER SWITCH */}

<mesh
  position={[3.2, 0.35, -1]}
  onClick={() => {
  setPowered(true);

   
  
    setShowTunnel(true);
   
    

  setTimeout(() => {
    setShowTunnel(false);
  }, 12000);
}}
>

  <boxGeometry args={[1.2, 0.4, 1]} />
  <meshStandardMaterial
    color={powered ? "#00ff88" : "#ff5500"}
    emissive={powered ? "#00ff88" : "#ff5500"}
    emissiveIntensity={2}
  />

  
</mesh>


<Text
  position={[3.2, 1, -1]}
  fontSize={0.25}
  color="#ffffff"
>
  POWER
</Text>

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
  position={[0, 4.8, -14.6]}
  fontSize={0.45}
  color="#333"
  anchorX="center"
  anchorY="middle"
>
  MANTHAN WANI
</Text>

<Text
  position={[0, 4.2, -14.6]}
  fontSize={0.30}
  color="#333"
  anchorX="center"
  anchorY="middle"
>
   Electronics & Telecommunication Engineer
</Text>

<Text
  position={[0, 3.8, -14.6]}
  fontSize={0.27}
  color="#333"
  anchorX="center"
  anchorY="middle"
>
 Saiket System Intern
</Text>

<Text
  position={[0, 3.3, -17.6]}
  fontSize={0.35}
  color="#46a168"
>
  SYSTEM READY
</Text>
        </>
      )}

      {/* MCU BODY */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[3, 0.4, 3]} />
        <meshStandardMaterial
          color="#b0f9c0"
          emissive="#00ff88"
          emissiveIntensity={powered ? 0.5 : 0}
        />
      </mesh>

      {/* MCU LABEL */}
      <Text
        position={[0, 0.35, 1.55]}
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
          position={[-1.7, 0.3, -1.2 + i * 0.35]}
        >
          <boxGeometry args={[0.4, 0.1, 0.1]} />
          <meshStandardMaterial color="silver" />
        </mesh>
      ))}

      {/* RIGHT PINS */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={`right-${i}`}
          position={[1.7, 0.3, -1.2 + i * 0.35]}
        >
          <boxGeometry args={[0.4, 0.1, 0.1]} />
          <meshStandardMaterial color="silver" />
        </mesh>
      ))}

      {/* TOP PINS */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={`top-${i}`}
          position={[-1.2 + i * 0.35, 0.1, -1.7]}
        >
          <boxGeometry args={[0.1, 0.1, 0.4]} />
          <meshStandardMaterial color="silver" />
        </mesh>
      ))}

      {/* BOTTOM PINS */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={`bottom-${i}`}
          position={[-1.2 + i * 0.35, 0.1, 1.7]}
        >
          <boxGeometry args={[0.1, 0.1, 0.4]} />
          <meshStandardMaterial color="silver" />
        </mesh>
      ))}

      {/* POWER LED */}
      <mesh position={[2.3, 0.35, 2]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={powered ? 5 : 0}
        />
      </mesh>

      {/* STATUS LED */}
      <mesh position={[2.8, 0.35, 2]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="red"
          emissive="red"
          emissiveIntensity={powered ? 2 : 0}
        />
      </mesh>

      {/* BLUE LED */}
      <mesh position={[3.3, 0.35, 2]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="blue"
          emissive="blue"
          emissiveIntensity={powered ? 2 : 0}
        />
      </mesh>

      {/* CAPACITORS */}
      <mesh position={[-2.2, 0.35, -1]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
        <meshStandardMaterial color="#9f3e3e" />
      </mesh>

      <mesh position={[-2.7, 0.35, -1]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      <mesh position={[-2.2, 0.35, -1.6]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* RESISTORS */}
      <mesh position={[2.2, 0.35, -1]}>
        <boxGeometry args={[0.5, 0.1, 0.2]} />
        <meshStandardMaterial color="#c4a484" />
      </mesh>

      <mesh position={[2.9, 0.35, -1]}>
        <boxGeometry args={[0.5, 0.1, 0.2]} />
        <meshStandardMaterial color="#c4a484" />
      </mesh>

      <mesh position={[2.2, 0.35, -1.5]}>
        <boxGeometry args={[0.5, 0.1, 0.2]} />
        <meshStandardMaterial color="#c4a484" />
      </mesh>

      {/* CRYSTAL OSCILLATOR */}
      <mesh position={[0, 0.35, -2.8]}>
        <boxGeometry args={[0.9, 0.25, 0.4]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* USB CONNECTOR */}
      <mesh position={[0, 0.35, 4.4]}>
        <boxGeometry args={[1.2, 0.4, 0.8]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* HEADER PINS LEFT */}
      {[...Array(10)].map((_, i) => (
        <mesh
          key={`hl-${i}`}
          position={[-4.2, 0.35, -2 + i * 0.45]}
        >
          <boxGeometry args={[0.1, 0.5, 0.1]} />
          <meshStandardMaterial color="gold" />
        </mesh>
      ))}

      {/* HEADER PINS RIGHT */}
      {[...Array(10)].map((_, i) => (
        <mesh
          key={`hr-${i}`}
          position={[4.2, 0.35, -2 + i * 0.45]}
        >
          <boxGeometry args={[0.1, 0.5, 0.1]} />
          <meshStandardMaterial color="gold" />
        </mesh>
      ))}

      {/* PCB TRACES */}
      <mesh position={[0, 0.42, 2]}>
        <boxGeometry args={[5, 0.03, 0.08]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      <mesh position={[2, 0.42, 0]}>
        <boxGeometry args={[0.08, 0.03, 4]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      <mesh position={[-2, 0.42, 0]}>
        <boxGeometry args={[0.08, 0.03, 4]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      <mesh position={[0, 0.42, -2]}>
        <boxGeometry args={[4, 0.03, 0.08]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      <mesh position={[3, 0.42, 1]}>
        <boxGeometry args={[2, 0.03, 0.08]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      {/* CURRENT FLOW INDICATOR */}
      {powered && (
        <mesh position={[0, 0.35, 2]}>
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

export default function MCUChip3D({
  powered,
  setPowered,
  setShowTunnel,
}) {
   const [bootStep, setBootStep] = useState(0);
  
   

  useEffect(() => {
    if (!powered) return;

    setTimeout(() => setBootStep(1), 1000);
    setTimeout(() => setBootStep(2), 2500);
    setTimeout(() => setBootStep(3), 4000);
  }, [powered]);
  return (
    <div
  style={{
    width: "100vw",
    height: "100vh",
    position: "relative",
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

  <Chip
  powered={powered}
  setPowered={setPowered}
  setShowTunnel={setShowTunnel}
  
  
/>

<OrbitControls
  autoRotate
  autoRotateSpeed={0.8}
  enableZoom={true}
  enablePan={false}
  minDistance={8}
  maxDistance={20}
  target={[0, 0, 0]}
/>

</Canvas>

{!powered && (
  <div
    style={{
  position: "absolute",
  bottom: "60px",
  left: "50%",
  transform: "translateX(-50%)",
  color: "#fff",
  fontSize: "34px",
  fontWeight: "bold",
  textShadow:
    "0 0 10px #00ff88, 0 0 30px #00ff88",

    }}
  >
    Click PCB Power Switch
  </div>
)}

{powered && (
  <div
    style={{
      position: "absolute",
      top: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      color: "#00ff88",
      fontFamily: "monospace",
      fontSize: "20px",
      fontWeight: "bold",
      textShadow: "0 0 15px #00ff88",
      zIndex: 100,
    }}
  >
    {bootStep === 0 && "Initializing System..."}
    {bootStep === 1 && "Loading Profile..."}
    {bootStep === 2 && "Loading Projects..."}
    {bootStep === 3 && "System Ready"}
  </div>
)}

</div>
  );
}