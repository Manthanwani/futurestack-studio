import { useState } from "react";
import MCUChip3D from "./components/MCUChip3D";
import BootScreen from "./components/BootScreen";

function App() {
  const [powered, setPowered] = useState(false);

  return (
    <>
      <BootScreen
        onComplete={() => setPowered(true)}
      />

      <MCUChip3D powered={powered} />

      {powered && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#00ff88",
            fontSize: "30px",
            fontWeight: "bold",
            zIndex: 50,
            textShadow: "0 0 10px #00ff88",
          }}
        >
          MANTHAN WANI
        </div>
      )}
    </>
  );
}

export default App;