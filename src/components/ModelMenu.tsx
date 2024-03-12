// Replace 'path-to-your-Hud-component' with the actual path to your Hud component
import { Hud } from "@react-three/drei";
// Replace 'path-to-your-Button-component' with the actual path to your Button component
import { OldCap } from "./Old_cap";
import { Cap } from "./Baseball_cap";

export function ModelMenu() {
  return (
    <Hud>
      <OldCap position={[-5, -4, 0]} />
      <Cap scale={0.0089} position={[0, 2.35, 0.1]} />
    </Hud>
  );
}
