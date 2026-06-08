

import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import WarpStars from "./WarpStars";
import PlasmaCore from "./PlasmaCore";
import EnergyPulse from "./EnergyPulse";
import PlasmaWeb from "./PlasmaWeb";
import VortexRing from "./VortexRing";
import SpiralArms from "./SpiralArms";
import MovingPlasmaNodes from "./MovingPlasmaNodes";
import ElectricLines from "./ElectricLines";
import ElectricField from "./ElectricField";
import LightningArcs from "./LightningArcs";
import PlasmaNodes from "./PlasmaNodes";
import CameraMotion from "./CameraMotion";
{/*




  








*/}

export default function EnergyTunnel() {
  return (
    
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#05081a",
        zIndex: 9999,
      }}
    >
      <Canvas camera={{ position:[0,0,7], fov:85 }}>
        <group position={[0.4, -0.2, 0]}></group>
  <ambientLight intensity={5} />

  <pointLight
    position={[0, 0, 0]}
    intensity={25}
    color="#05081a"
  />
  <color attach="background" args={["#020616"]} />
{/*
 













 */}
<WarpStars />

<ElectricField />

<PlasmaWeb />

<SpiralArms />

<MovingPlasmaNodes />

<PlasmaNodes />

<ElectricLines />

<LightningArcs />

<VortexRing />

<EnergyPulse />

<PlasmaCore />

<CameraMotion />


  
  
  <EffectComposer>
    <Bloom
      intensity={2.5}
      luminanceThreshold={0.1}
      luminanceSmoothing={0.9}
    />
  </EffectComposer>
</Canvas>
    </div>
  );
}