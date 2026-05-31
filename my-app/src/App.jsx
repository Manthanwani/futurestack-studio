import { useState } from "react";
import MCUChip3D from "./components/MCUChip3D";
import EnergyTransition from "./components/EnergyTransition";



function App() {
  const [powered, setPowered] = useState(false);
const [energyMode, setEnergyMode] = useState(false);
  
  

  return (
    
    <>

      <MCUChip3D
  powered={powered}
  setPowered={(value) => {
    setPowered(value);

    if (value) {
      setEnergyMode(true);
      
    }
  }}
/>

<EnergyTransition
  active={energyMode}
  onComplete={() => setEnergyMode(false)}
/>


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