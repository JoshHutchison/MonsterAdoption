import { useRef, useState } from "react";
import { useFrame, useThree, Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ScrollControls,
  Scroll,
  useScroll,
} from "@react-three/drei";

import { useControls } from "leva";

import { BuffaloMan, Earth } from "./Models";
import DragonEarth from "./DragonEarth";
import Nav from "./Nav";



export default function Home2() {

    

  return (
    <>
    <div className="home">
      <Canvas
        shadows={ true }
        camera={ {
            fov: 45,
            near: 1,
            far: 300,
            position: [ -4, 2, 12 ]
            // position: [ -1, 2, 12 ]
        } }
    >  
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1.5} />

      <ScrollControls pages={2} damping={0.5}>
        <DragonEarth/>
        <Scroll>
          {/* Canvas contents in here will scroll along */}

        </Scroll>
        <Scroll html>
          {/* DOM contents in here will scroll along */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Monster Adoption Inc</h1>
            <h1 style={{ marginTop: "100vh" }}>second page</h1>
    
          </div>
        </Scroll>
      </ScrollControls>
      </Canvas>
      </div>
    </>
  );
}
