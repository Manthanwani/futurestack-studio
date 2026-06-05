import { Canvas } from "@react-three/fiber";
import PlasmaCore from "./PlasmaCore";
import PlasmaNodes from "./PlasmaNodes";
import ElectricLines from "./ElectricLines";
import PlasmaWeb from "./PlasmaWeb";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import EnergyPulse from "./EnergyPulse";
import CameraMotion from "./CameraMotion";
import LightningArcs from "./LightningArcs";
import ElectricField from "./ElectricField";

import MovingPlasmaNodes from "./MovingPlasmaNodes";


import SpiralArms from "./SpiralArms";
import WarpStars from "./WarpStars";



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
      <Canvas camera={{ position: [0, 0, 4], fov: 80 }}>
  <ambientLight intensity={5} />

  <pointLight
    position={[0, 0, 0]}
    intensity={25}
    color="#05081a"
  />
  <color attach="background" args={["#020616"]} />

 <WarpStars />

<ElectricField />

<PlasmaWeb />

<SpiralArms />

<MovingPlasmaNodes />

<PlasmaNodes />

<ElectricLines />

<LightningArcs />

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