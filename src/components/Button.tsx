import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface ButtonProps {
  id: number;
  texture: any; // Adjust the type accordingly based on the actual type of 'texture'
  position: [number, number, number];
  roughness?: number;
  setSelected: (id: number) => void;
}

function Button({
  id,
  texture,
  position,
  roughness,
  setSelected,
}: ButtonProps) {
  const ref = useRef<any>(); // Adjust the type accordingly based on the actual type of 'ref'

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 2; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={ref} position={position} onPointerDown={() => setSelected(id)}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        roughness={roughness}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

export default Button;
