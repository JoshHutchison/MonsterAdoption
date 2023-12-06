import { Canvas } from "@react-three/fiber";
import useRefs from "react-use-refs";
import { useState, useEffect, useRef } from "react";

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
  const [pets, setPets] = useState([]);
  const canvasRef = useRef(null);
  let refsArr = []
    for (let index = 0; index < 20; index++) {
      if (refsArr != [] ) {
        refsArr.push(useRef())
      }
      
      
    }
  console.log('refsarr',refsArr)
  // const viewRefs = useRefs(2);
  console.log('pets', pets.length);
  // const [ref, view1, view2, view3, view4, view5, view6,view7, view8, view9, view10, view11, view12] = useRefs();

  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/pets/`);
        console.log(response);
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };
    getPets();
    
  }, []);


    // // Populate refsArr with refs based on pets length
    // if (pets.length > 0) {
    //   for (let index = 0; index < pets.length; index++) {
    //     refsArr.push(useRef());
    //   }
    // }


  return (
    <div>
    {pets.length !== 0 ? (<div ref={canvasRef} className="container">
    <div className="text">
      {pets.map((pet, index) => (
        
          <div key={index} className="card">
            <h4>{pet.name}</h4>
            <div ref={refsArr[index]} className="view translateX" />
          </div>
      
        
      ))}
      </div>
      {/* <div className="card">          
          <h4>pet Name</h4>
          <div ref={refsArr[1]} className="view translateX" />
        </div> */}
      <Canvas ref={canvasRef} className="canvas" shadows={true}>
      {/* <OrbitControls makeDefault /> */}
        {/* <Perf position="bottom-right" /> */}
        {pets.map((pet, index) => (
          <View key={index} track={refsArr[index]}>
            <Common color="lightblue" />
            <ModelComponent
              scale={pet.model_state.scale} 
              position={pet.model_state.position} 
              rotation={pet.model_state.rotation}
              filePath={pet.model_filename}
            />
            <OrbitControls makeDefault />
          </View>
  ))}
        {/* <Preload all /> */}
      </Canvas>
    </div>): (
        // Render when pets array is empty
        <div>No pets available.</div>
      )}
    </div>
  )
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
