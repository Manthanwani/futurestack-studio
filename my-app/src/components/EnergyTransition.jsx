import { useEffect } from "react";
import "./EnergyTransition.css";

export default function EnergyTransition({
  active,
  onComplete,
}) {
  useEffect(() => {
    if (!active) return;

    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <div className="energy-screen">
      <div className="energy-line"></div>
    </div>
  );
}