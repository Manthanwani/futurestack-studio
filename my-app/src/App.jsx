import { useState, useEffect } from "react";
import MCUChip3D from "./components/MCUChip3D";
import EnergyTunnel from "./components/EnergyTunnel";
import { Canvas } from "@react-three/fiber";

import Room from "./components/Room";



function App() {
  const [powered, setPowered] = useState(false);
  const [showTunnel, setShowTunnel] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [flash, setFlash] = useState(false);

  
useEffect(() => {
  if (showTunnel) {
    const timer = setTimeout(() => {

      setFlash(true);

      setTimeout(() => {
        setShowTunnel(false);
      }, 300);

      setTimeout(() => {
        setShowPortfolio(true);
        setFlash(false);
      }, 1000);

    }, 10000);

    return () => clearTimeout(timer);
  }
}, [showTunnel]);


  
  

  return (
    
    <>

  
  
{!showPortfolio && (
  <MCUChip3D
    powered={powered}
    setPowered={setPowered}
    setShowTunnel={setShowTunnel}
  />
)}

 {!powered && (
      <div className="powerText">
        Click PCB Power Switch
      </div>
    )}
{showTunnel && <EnergyTunnel />}
{flash && <div className="flash" />}
{showPortfolio && (
  <Canvas
    shadows
    camera={{
      position: [0, 6, 18],
      fov: 60,
    }}
  >
    <ambientLight intensity={1.5} />
    <directionalLight
      position={[10, 10, 10]}
      intensity={2}
    />

  <Room active={powered} />
  

    
  </Canvas>
)}








      {powered && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#00d5ff",
            fontSize: "30px",
            fontWeight: "bold",
            zIndex: 50,
            textShadow: "0 0 10px #00ffe5",
          }}
        >
          
          
        </div>
      )}
    </>
    
    
  );
}

export default App;