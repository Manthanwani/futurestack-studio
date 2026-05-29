import { useState, useEffect } from "react";

export default function BootScreen({ onComplete }) {
  const [step, setStep] = useState(0);
  const [powerOn, setPowerOn] = useState(false);

  useEffect(() => {
    if (!powerOn) return;

    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2500),
      setTimeout(() => setStep(3), 4000),
      setTimeout(() => setStep(4), 5500),
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 7000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [powerOn, onComplete]);

  return (
    <div className="boot-screen">
      {!powerOn ? (
        <button
          className="power-btn"
          onClick={() => setPowerOn(true)}
        >
          POWER ON
        </button>
      ) : (
        <div className="boot-log">
          {step >= 1 && <p>⚡ Initializing System...</p>}
          {step >= 2 && <p>📡 Loading Modules...</p>}
          {step >= 3 && <p>🔧 Starting Microcontroller...</p>}
          {step >= 4 && <p>✅ System Ready</p>}
        </div>
      )}
    </div>
  );
}