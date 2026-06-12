import { useState, useEffect } from "react";
import ContactFrame from "./ContactFrame";
import DeveloperDesk from "./DeveloperDesk";
import { Text, OrbitControls } from "@react-three/drei";
import linkedinImg from "./images/linkdin.png";
import githubImg from "./images/github.png";
import gmailImg from "./images/gmail.png";
import resumeImg from "./images/resume.png";
import LeftWallBooks from "./LeftWallBooks";
import ProjectPegboard from "./ProjectPegboard";
console.log("ROOM MOUNTED");


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
    <>
    <OrbitControls
      target={[0, 2, -10]}
      enablePan={false}
    />
    <group>
      {active && (
  <DeveloperDesk />
)}

      {/* FLOOR */}
      <mesh position={[0, -4.5, 0]}>
        <boxGeometry args={[33, 0.5, 50]} />
        <meshStandardMaterial
  color="#c69c6d"
  roughness={0.85}
  metalness={0.15}
/>
      </mesh>

      

      {showWalls && (
  <>
   {/*  BACK WALL  */}

<mesh position={[0, 3, -20]}>
  <boxGeometry args={[33, 15, 0.5]} />
  <meshStandardMaterial
    color="#f5efe6"
    roughness={0.95}
  />
</mesh>

<ContactFrame
  position={[11, 7, -19]}
  image={resumeImg}
  url="/resume.pdf"
/>

<ContactFrame
  position={[11,3,-19]}
  image={linkedinImg}
  url="https://www.linkedin.com/in/manthan-wani"
/>

<ContactFrame
  position={[14, 3, -19]}
  image={githubImg}
  url="https://github.com/Manthanwani"
/>

<ContactFrame
  position={[8, 3, -19]}
  image={gmailImg}
  url="manwani5656@gmail.com"
/>


{/*  LEFT WALL  */}

<mesh position={[-16, 3, 0]}>
  <boxGeometry args={[0.5, 15, 50]} />
  <meshStandardMaterial
    color="#f5efe6"
    roughness={0.95}
  />
</mesh>


 








{/*RIGHT WALL*/}

<mesh position={[16, 3, 0]}>
  <boxGeometry args={[0.5, 15, 50]} />
  <meshStandardMaterial
    color="#f5efe6"
    roughness={0.95}
  />
</mesh>


  

  </>
)}
      

      {/* MONITOR FRAME */}
<mesh position={[0, 3, -18]} castShadow>
  <boxGeometry args={[9, 5.2, 0.4]} />
  <meshStandardMaterial
    color="#05070d"
    metalness={1}
    roughness={0.15}
  />
</mesh>

     {/* MONITOR SCREEN */}
     

     
<mesh position={[0, 3, -17.75]}>
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
{showWalls && <LeftWallBooks />}
{showWalls && <ProjectPegboard />}


    </group>
    </>
  );
}