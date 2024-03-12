import { Canvas } from "@react-three/fiber";

import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { Model } from "./Mannequin";
import { Cap } from "./Baseball_cap";
import { OldCap } from "./Old_cap";
import { useUiContext } from "../context/UiContext";

import { MaterialMenu } from "./MaterialMenu";
import { Suspense, useState } from "react";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Scene() {
  const { currentModel } = useUiContext();

  const [selected, setSelected] = useState<number>(0);
  console.log(selected);
  return (
    <>
      <Canvas>
        <Suspense fallback={<Loader />}>
          {/* <ModelMenu /> */}
          <MaterialMenu setSelected={setSelected} />
          <color attach="background" args={["#e6e7ff"]} />
          <PerspectiveCamera makeDefault position={[0, 5, 9]} />
          <OrbitControls
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
            maxDistance={10}
            minDistance={2}
          />
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />

          <Model />
          {currentModel === "old_cap" ? (
            <OldCap />
          ) : (
            <Cap scale={0.0089} position={[0, 2.35, 0.1]} />
          )}

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Scene;
