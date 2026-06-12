import { Text, useTexture } from "@react-three/drei";
import { useState } from "react";


export default function ContactFrame({
  position,
  title,
  
  url,
  image,
}) {
   

  const [hovered, setHovered] = useState(false);

  const texture = useTexture(image);
  return (
    <group position={position}>
      {/* Outer Frame */}
     <mesh
  scale={hovered ? 1.08 : 1}
  onPointerOver={() => setHovered(true)}
  onPointerOut={() => setHovered(false)}
  onClick={() => window.open(url, "_blank")}
>
  <boxGeometry args={[2.4, 3, 0.15]} />
  <meshStandardMaterial
    color={hovered ? "#45392f" : "#bc6e47"}
  />
 
</mesh>

      {/* Inner Canvas */}
      <mesh position={[0, 0, 0.08]}>
  <planeGeometry args={[2, 2.6]} />
  <meshStandardMaterial map={texture} />
</mesh>

     <Text
        position={[0, 0, 0.12]}
        fontSize={0.22}
        color="#111827"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text> 
    </group>
  );
}