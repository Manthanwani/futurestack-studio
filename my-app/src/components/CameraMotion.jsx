import { useFrame } from "@react-three/fiber";

export default function CameraMotion() {
  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime % 12;

    // Floating motion
    camera.position.x =
      0.25 + Math.sin(clock.elapsedTime * 0.4) * 0.15;

    camera.position.y =
      Math.cos(clock.elapsedTime * 0.3) * 0.1;

    // Stage 1 (0-4 sec)
    if (t < 4) {
      camera.position.z = 7;
      camera.rotation.z = 0;
    }

    // Stage 2 (4-10 sec)
    else if (t < 10) {
      const progress = (t - 4) / 6;

      camera.position.z =
        7 - progress * 3.5;

      camera.rotation.z =
        Math.sin(clock.elapsedTime * 0.3) * 0.02;
    }

    // Stage 3 (10-12 sec)
    else {
      const progress = (t - 10) / 2;

      camera.position.z =
        3.5 - progress * 2.2;

      camera.rotation.z =
        progress * 0.08;
    }

    // Always face center
    camera.lookAt(0, 0, 0);
  });

  return null;
}