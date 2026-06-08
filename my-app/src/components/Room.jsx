import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
console.log("ROOM MOUNTED");
import Workbench from "./Workbench";
export default function Room({ active }) {
const [screenText, setScreenText] = useState("");
const [showWalls, setShowWalls] = useState(false);
const [monitorOn, setMonitorOn] = useState(false);

  useEffect(() => {

  if (!active) return;

  const monitorTimer = setTimeout(() => {
  setMonitorOn(true);
}, 0);


  const t1 = setTimeout(() => {
    setScreenText("BOOTING...");
  }, 500);

  const t2 = setTimeout(() => {
    setScreenText("LOADING SYSTEM...");
  }, 2000);

  const t3 = setTimeout(() => {
    setScreenText("INITIALIZING PORTFOLIO...");
  }, 4000);

  const t4 = setTimeout(() => {
    setScreenText("SYSTEM READY");
  }, 6000);

  const t5 = setTimeout(() => {

    setScreenText(
      "MANTHAN WANI\nElectronics & Telecommunication Engineer\nSaiKet Systems Intern"
    );

    setShowWalls(true);

  }, 8000);

  return () => {
    clearTimeout(monitorTimer);
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
    clearTimeout(t4);
    clearTimeout(t5);
  };

}, [active]);
  

  return (
    <group>
      <Workbench />

      {/* FLOOR */}
      <mesh position={[0, -4.5, 0]}>
        <boxGeometry args={[50, 0.5, 50]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      

      {showWalls && (
  <>
    {/* BACK WALL */}
    <Text
      position={[0, 10, -24.5]}
      fontSize={0.5}
      color="#00ffff"
    >
      CONTACT
    </Text>

    <Text
      position={[0, 8, -24.5]}
      fontSize={0.22}
      color="white"
    >
      LinkedIn
    </Text>

    <Text
      position={[0, 7, -24.5]}
      fontSize={0.22}
      color="white"
    >
      GitHub
    </Text>

    <Text
      position={[0, 6, -24.5]}
      fontSize={0.22}
      color="white"
    >
      Email
    </Text>

    {/* LEFT WALL */}
    <Text
      position={[-14.6, 9, 0]}
      rotation={[0, Math.PI / 2, 0]}
      fontSize={0.5}
      color="#00ffff"
    >
      SKILLS
    </Text>

    <Text
      position={[-14.6, 7, 0]}
      rotation={[0, Math.PI / 2, 0]}
      fontSize={0.22}
      color="white"
    >
      React
    </Text>

    <Text
      position={[-14.6, 6, 0]}
      rotation={[0, Math.PI / 2, 0]}
      fontSize={0.22}
      color="white"
    >
      JavaScript
    </Text>

    <Text
      position={[-14.6, 5, 0]}
      rotation={[0, Math.PI / 2, 0]}
      fontSize={0.22}
      color="white"
    >
      Python
    </Text>

    <Text
      position={[-14.6, 4, 0]}
      rotation={[0, Math.PI / 2, 0]}
      fontSize={0.22}
      color="white"
    >
      Embedded Systems
    </Text>

    {/* RIGHT WALL */}
    <Text
      position={[14.6, 9, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      fontSize={0.5}
      color="#00ffff"
    >
      PROJECTS
    </Text>

    <Text
      position={[14.6, 7, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      fontSize={0.22}
      color="white"
    >
      IoT Predictive Maintenance
    </Text>

    <Text
      position={[14.6, 6, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      fontSize={0.22}
      color="white"
    >
      Smart Irrigation System
    </Text>

    <Text
      position={[14.6, 5, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      fontSize={0.22}
      color="white"
    >
      3D Portfolio
    </Text>
  </>
)}
      

      {/* MONITOR FRAME */}
<mesh position={[0, 3, -18]} castShadow>
  <boxGeometry args={[9, 5.2, 0.4]} />
  <meshStandardMaterial
    color="#0a0f1f"
    metalness={0.8}
    roughness={0.3}
  />
</mesh>

     {/* MONITOR SCREEN */}
     

     
<mesh position={[0, 4, -17.75]}>
  <boxGeometry args={[8, 4.2, 0.08]} />
  <meshStandardMaterial
    color="#00ff88"
    emissive="#000000"
    emissiveIntensity={0.25}
  />
</mesh>

{/* MONITOR TEXT */}
{monitorOn && (
  <Text
    position={[0, 4.2, -17.6]}
    fontSize={0.4}
    color="#000000"
    anchorX="center"
    anchorY="middle"
    maxWidth={20}
    textAlign="center"
  >
    {screenText}
  </Text>
)}

      {/* MONITOR STAND */}
<mesh position={[0, 1.4, -18]}>
  <boxGeometry args={[0.4, 3, 0.4]} />
  <meshStandardMaterial
    color="#222"
    metalness={0.9}
    roughness={0.2}
  />
</mesh>

      {/* MONITOR BASE */}
      <mesh position={[0, 0.2, -15]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <meshStandardMaterial
  color="#001100"
  emissive="#00ff88"
  emissiveIntensity={0.25}
/>
{/* MONITOR BASE */}
<mesh position={[0, 0.15, -18]}>
  <boxGeometry args={[3, 0.2, 2]} />
  <meshStandardMaterial
    color="#151515"
    metalness={0.8}
    roughness={0.3}
  />
</mesh>

<pointLight
  position={[0, 4, -17]}
  emissiveIntensity={0.6}
  distance={20}
  color="#00ff88"
/>

    </group>
  );
}