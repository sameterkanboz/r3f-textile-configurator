// Replace 'path-to-your-Hud-component' with the actual path to your Hud component
import Button from "./Button";
import { Environment, Hud, OrthographicCamera } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
// Replace 'path-to-your-Button-component' with the actual path to your Button component
import * as THREE from "three";
import { OldCap } from "./Old_cap";
import { Cap } from "./Baseball_cap";
import { useUiContext } from "../context/UiContext";
interface MaterialMenuProps {
  setSelected: (id: number) => void;
}

export function MaterialMenu({ setSelected }: MaterialMenuProps) {
  const texture = useLoader(THREE.TextureLoader, [
    "./../textures/1.jpg",
    "./../textures/2.jpg",
    "./../textures/3.jpg",
    "./../textures/4.jpg",
  ]);
  const { handleModelChange, handleTextureChange } = useUiContext();
  return (
    <Hud>
      <OrthographicCamera makeDefault position={[0, 0, 2]} zoom={50} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <Environment preset="forest" />
      <group scale={0.7}>
        <mesh
          onClick={() => {
            handleModelChange("old_cap");
          }}
        >
          <OldCap position={[5, 2, 0]} rotation={[0, -0.5, 0]} />
        </mesh>
        <mesh
          onClick={() => {
            handleModelChange("new_cap");
          }}
        >
          <Cap scale={0.0089} rotation={[0, -0.5, 0]} position={[5, 2, 0]} />
        </mesh>
      </group>
      <mesh
        onClick={() => {
          handleTextureChange("1.jpg");
        }}
      >
        <Button
          id={0}
          texture={texture[0]}
          position={[-3, -5, 0]}
          setSelected={setSelected}
        />
      </mesh>
      <mesh
        onClick={() => {
          handleTextureChange("2.jpg");
        }}
      >
        <Button
          id={1}
          texture={texture[1]}
          position={[-1, -5, 0]}
          roughness={0.2}
          setSelected={setSelected}
        />
      </mesh>
      <mesh
        onClick={() => {
          handleTextureChange("3.jpg");
        }}
      >
        <Button
          id={2}
          texture={texture[2]}
          position={[1, -5, 0]}
          setSelected={setSelected}
        />
      </mesh>
      <mesh
        onClick={() => {
          handleTextureChange("4.jpg");
        }}
      >
        <Button
          id={3}
          texture={texture[3]}
          position={[3, -5, 0]}
          roughness={0.5}
          setSelected={setSelected}
        />
      </mesh>
    </Hud>
  );
}
