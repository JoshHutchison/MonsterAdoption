import { Canvas } from "@react-three/fiber";
import useRefs from "react-use-refs";
import { useState, useEffect } from "react";

import {
  View,
  Preload,
  OrbitControls,
  Environment,
  PerspectiveCamera,

} from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as Models from './Models'; 
import axios from "axios"
import { ModelComponent } from "./ModelComponent";




  const listExportedFunctions = (module) => {
    const functionNames = [];
  
    for (const key in module) {
      if (Object.prototype.hasOwnProperty.call(module, key)) {
        if (typeof module[key] === 'function') {
          functionNames.push(key);
        }
      }
    }
  
    return functionNames;
  }  
  
const exportedFunctionNames = listExportedFunctions(Models);
console.log('Exported function names:', exportedFunctionNames);



export default function PetSelection() {
  
    const [pets, setPets] = useState([])

    useEffect(()  => {
        const getPets = async () => {
            const response = await axios.get(
              `http://localhost:8000/pets/`
            );
            console.log(response);
            setPets(response.data);
          };
          getPets();
        }, []);
    console.log('Pets', pets);
    const [ref, view1, view2, view3, view4, view5, view6,view7, view8, view9, view10, view11, view12] = useRefs();
  
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
        <div className="card">
        <h4>pet Name</h4>
          <div ref={view7} className="view translateX" />
        </div>
        <div className="card">
        <h4>pet Name</h4>
          <div ref={view8} className="view translateX" />
        </div>
        <div className="card">
        <h4>pet Name</h4>
          <div ref={view9} className="view translateX" />
        </div>
        <div className="card">
        <h4>pet Name</h4>
          <div ref={view10} className="view translateX" />
        </div>
        <div className="card">
        <h4>pet Name</h4>
          <div ref={view11} className="view translateX" />
        </div>
        
        
      </div>
      <Canvas eventSource={ref} className="canvas" shadows={true}>
      <Perf position="top-left" />
        <View track={view1}>
          <Common color="lightblue" />
          <ModelComponent 
            filePath={'./elf.gltf'} 
            scale={3} 
            position={[0,0,0]} 
            rotation={[0,0,0]}  />
          <OrbitControls makeDefault />
        </View>
        <View track={view2}>
          <Common color="lightblue" />
          <Models.Wolf position={[0, 0, 0]} rotation={[0, 0.5, 0]} />
          <OrbitControls makeDefault />
        </View>
        <View track={view3}>
          <Common color="lightblue" />

          <Models.ElfWolf scale={3} position={[0, -1, 0]} rotation={[0, 0.5, 0]} />
          <OrbitControls makeDefault />
        </View>
        <View track={view4}>
          <Common color="lightblue" />
          <Models.BuffaloMan scale={0.05} position={[0, -2, 0]} rotation={[0, 0, 0]} />
          <OrbitControls makeDefault />
        </View>
        <View track={view5}>
          <Common color="lightblue" />
          <Models.WolfReal scale={2} position={[0, 0, 0]} rotation={[0, 0, 0]} />
          <OrbitControls makeDefault />
        </View>
        <View track={view6}>
          <Common color="lightblue" />
          <Models.Warrior
            scale={3}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
          <OrbitControls makeDefault />
        </View>
        <View track={view7}>
          <Common color="lightblue" />
          <Models.TwoHeadedWolf
            scale={0.01}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
          <OrbitControls makeDefault />
        </View>
        <View track={view8}>
          <Common color="lightblue" />
          <Models.Fox
            scale={0.02}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
          <OrbitControls makeDefault />
        </View>
        <View track={view9}>
          <Common color="lightblue" />
          <Models.Man
            scale={1}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
          <OrbitControls makeDefault />
        </View>
        <View track={view10}>
          <Common color="lightblue" />
          <Models.Raptor
            scale={0.3}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
          <OrbitControls makeDefault />
        </View>        
        <View track={view11}>
          <Common color="lightblue" />
          <Models.Spider
            scale={4}
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
