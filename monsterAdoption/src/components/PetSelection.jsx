import { Canvas } from "@react-three/fiber";
import {
  Wolf,
  ElfWolf,
  BuffaloMan,
  Man,
  WolfReal,
  Spider,
  Raptor,
  Warrior,
  TwoHeadedWolf,
  Earth,
} from "./Models";
import Model2 from "./Model2";
import useRefs from "react-use-refs";
import {
  View,
  Preload,
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

export default function PetSelection() {
  const [ref, view1, view2, view3, view4, view5, view6] = useRefs();
  return (
    <div ref={ref} className="container">
      <div className="text">
        <div className="card">          
          <h4>pet Name</h4>
          <div ref={view1} className="view translateX" />
        </div>
        <div className="card">
        <h4>pet Name</h4>
          <div ref={view2} className="view scale" />
        </div>
        <div className="card">
        <h4>pet Name</h4>
          <div ref={view3} className="view translateY" />
        </div>
        <div className="card">
        <h4>pet Name</h4>
          <div ref={view4} className="view scale" />
        </div>
        <div className="card">
        <h4>pet Name</h4>
          <div ref={view5} className="view translateX" />
        </div>
        <div className="card">
        <h4>pet Name</h4>
          <div ref={view6} className="view translateX" />
        </div>
      </div>
      <Canvas eventSource={ref} className="canvas" shadows={true}>
        <View track={view1}>
          <Common color="lightblue" />
          <Model2></Model2>
          <OrbitControls makeDefault />
        </View>
        <View track={view2}>
          <Common color="lightblue" />
          <Wolf position={[0, 0, 0]} rotation={[0, 0.5, 0]} />
          <OrbitControls makeDefault />
        </View>
        <View track={view3}>
          <Common color="lightblue" />

          <ElfWolf scale={3} position={[0, -1, 0]} rotation={[0, 0.5, 0]} />
          <OrbitControls makeDefault />
        </View>
        <View track={view4}>
          <Common color="lightblue" />
          <BuffaloMan scale={0.05} position={[0, -2, 0]} rotation={[0, 0, 0]} />
          <OrbitControls makeDefault />
        </View>
        <View track={view5}>
          <Common color="lightblue" />
          <WolfReal scale={2} position={[0, 0, 0]} rotation={[0, 0, 0]} />
          <OrbitControls makeDefault />
        </View>
        <View track={view6}>
          <Common color="lightblue" />
          <TwoHeadedWolf
            scale={0.01}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
          <OrbitControls makeDefault />
        </View>
        <Preload all />
      </Canvas>
    </div>
  );
}

const Common = ({ color }) => (
  <>
    {/* {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="white" /> */}
    {/* <Environment preset="dawn" /> */}
    <PerspectiveCamera makeDefault fov={40} position={[-4, 2, 6]} />

    <directionalLight
      castShadow
      position={[1, 2, 3]}
      intensity={4.5}
      shadow-normalBias={0.04}
    />
    <ambientLight intensity={1.5} />
  </>
);
