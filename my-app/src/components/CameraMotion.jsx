import { useFrame } from "@react-three/fiber";

export default function CameraMotion() {
  useFrame(({ camera, clock }) => {
  camera.position.z =
    8 - Math.sin(clock.elapsedTime * 0.3) * 2;


    
  });

  return null;
}