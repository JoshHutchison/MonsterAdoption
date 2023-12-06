import { useAnimations, useGLTF } from "@react-three/drei";
import { applyProps, useFrame, useLoader } from "@react-three/fiber";
import { useControls} from 'leva'
import { useEffect, useRef } from "react";

import * as THREE from 'three'

import earthImg from '../assets/earth.jpg'
import moonImg from '../assets/moon.png'

export function Elf(props) {
    const model = useGLTF('./elf.gltf')
    const animations = useAnimations(model.animations, model.scene)
    
    console.log('Elf', model);

    const { animationName } = useControls('Elf',{
        animationName: {options: animations.names}
    })    

    useEffect(() => {        
        
        const action = animations.actions[animationName]

        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
           
        }
    }, [animationName])
    return <primitive object={model.scene} {...props}/>
}


export function Fox (props) {    
    const model = useGLTF('./Fox.glb')
    
    const animations = useAnimations(model.animations, model.scene)    

    const { animationName } = useControls('fox',{
        animationName: {options: animations.names}
    })

    useEffect(() => {
        const action = animations.actions[animationName]

        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
           
        }
    }, [animationName])

    return (<primitive object={model.scene} {...props}/>
    
    )
}

export function Wolf(props) {
    const wolf = useGLTF('./wolf.gltf')
    const animations = useAnimations(wolf.animations, wolf.scene)
    console.log(wolf);

    const { animationName } = useControls('wolf',{
        animationName: {options: animations.names}
    })

    useEffect(() => {
        const action = animations.actions[animationName]

        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
           
        }
    }, [animationName])
    return <primitive object={wolf.scene} {...props}/>
}

export function ElfWolf(props) {
    const elfWolf = useGLTF('./elfWolf.gltf')
    console.log(elfWolf)
    const animations = useAnimations(elfWolf.animations, elfWolf.scene)

    const { animationName } = useControls('elfwolf',{
        animationName: {options: animations.names}
    })

    // useFrame((state, delta) => {
    //     if (elfWolf.scene) {
    //         elfWolf.scene.position.z += 1 * delta; // Move by 1 z-pixel every frame
    //       }
    //     if (elfWolf.scene.position.z > 10) {
    //         elfWolf.scene.position.z = 0 
    //     }
    // })

   
    useEffect(() => {
        const action = animations.actions['course_cavalier']
        action.play()
        const action2 = animations.actions['course_loup']
        action2.play()
        
    }, [])

    return <primitive object={elfWolf.scene} {...props}/>
}

export function BuffaloMan(props) {
    const buffalo_man = useGLTF('./Dragon_Baked_Actions2.glb')
    const animations = useAnimations(buffalo_man.animations, buffalo_man.scene)
    console.log('buffalo', buffalo_man);

    const { animationName } = useControls('dragon',{
        animationName: {options: animations.names}
    })

    applyProps(buffalo_man.materials['EYES.001'], {color:'white'})
    applyProps(buffalo_man.materials['Game_dragon.002'], {color:'#333'})
    applyProps(buffalo_man.materials['Game_dragon.003'], {color:'red'})
    console.log('buffalo', buffalo_man);

    // const existingMesh = buffalo_man.materials['Game_dragon.002'];
    // const targetNode = buffalo_man.nodes.breast; // Replace 'your_target_node_name' with the specific node's name
    // console.log('targetNode',targetNode);
    // // Assign the existing mesh to the target node
    // targetNode.add(existingMesh);

    useEffect(() => {
        const action = animations.actions[animationName]

        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
           
        }
    }, [animationName])
    return <primitive object={buffalo_man.scene} {...props}/>
}

export function Man(props) {
    const man = useGLTF('./man2.glb')
    const animations = useAnimations(man.animations, man.scene)
    // console.log('buffalo', buffalo_man);

    const { animationName } = useControls('man',{
        animationName: {options: animations.names}
    })

    useEffect(() => {
        const action = animations.actions[animationName]

        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
           
        }
    }, [animationName])
    return <primitive object={man.scene} {...props}/>
}

export function WolfReal(props) {
    const model = useGLTF('./realwolf.glb')
    const animations = useAnimations(model.animations, model.scene)
    // console.log('buffalo', buffalo_man);

    const { animationName } = useControls('wolfReal',{
        animationName: {options: animations.names}
    })

    let angle = 0; // Initialize angle for circular motion

    useFrame((state, delta) => {
        // Update angle to create circular motion
        angle += delta;

        const xOld = model.scene.position.x
        const zOld = model.scene.position.z

        // Calculate X and Z coordinates for circular motion
        const radius = 4; // Adjust the radius of the circle
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        

        // Update the model's position
        if (model.scene) {
            model.scene.position.x = x;
            model.scene.position.z = z; 

            const targetAngle = Math.atan2(zOld - model.scene.position.z, xOld - model.scene.position.x);
            model.scene.rotation.y = - (targetAngle + Math.PI / 2); 
            
        }
    });

    useEffect(() => {
        const action = animations.actions[animationName]

        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
           
        }
    }, [animationName])
    return <primitive object={model.scene} {...props}/>
}

export function Spider(props) {
    const model = useGLTF('./spider.glb')
    const animations = useAnimations(model.animations, model.scene)
    // console.log('buffalo', buffalo_man);

    const { animationName } = useControls('Spider',{
        animationName: {options: animations.names}
    })

    useEffect(() => {
        const action = animations.actions[animationName]

        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
           
        }
    }, [animationName])
    return <primitive object={model.scene} {...props}/>
}

export function Raptor(props) {
    const model = useGLTF('./raptor.glb')
    const animations = useAnimations(model.animations, model.scene)
    console.log('raptor', model);

    const { animationName } = useControls('Raptor',{
        animationName: {options: animations.names}
    })

    useEffect(() => {
        const action = animations.actions[animationName]

        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
           
        }
    }, [animationName])
    return <primitive object={model.scene} {...props}/>
}

export function Warrior(props) {
    const model = useGLTF('./Wraith_Animated.glb')
    const animations = useAnimations(model.animations, model.scene)
    
    console.log('warrior', model);

    const { animationName } = useControls('Warrior',{
        animationName: {options: animations.names}
    })
    

    useEffect(() => {
        if (!animations || !animations.actions[animationName]) return null;
        
        const action = animations.actions[animationName]

        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
           
        }
    }, [animationName])
    return <primitive object={model.scene} {...props}/>
}

export function TwoHeadedWolf(props) {
    const model = useGLTF('./wolf2head.glb')
    const animations = useAnimations(model.animations, model.scene)
    
    console.log('mech', model);

    const { animationName } = useControls('TwoHeadedWolf',{
        animationName: {options: animations.names}
    })
    

    useEffect(() => {
        
        
        const action = animations.actions[animationName]

        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
           
        }
    }, [animationName])
    return <primitive object={model.scene} {...props}/>
}

export function Earth(props) {
  
    const ref = useRef()
    const [texture, moon] = useLoader(THREE.TextureLoader, [earthImg, moonImg])



    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.2
    })

    
    return (
        <group ref={ref} scale={1} position={[0, 0, -20]}>
          <mesh>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial map={texture} roughness={1} fog={false} />
          </mesh>
          <mesh position={[5, 2, -8]}>
            <sphereGeometry args={[0.75, 32, 32]} />
            <meshStandardMaterial roughness={1} map={moon} fog={false} />
          </mesh>
          <pointLight position={[-5, -5, -5]} distance={1000} intensity={6} />
          {/* <mesh position={[-30, -10, -60]}>
            <sphereGeometry args={[4, 32, 32]} />
            <meshBasicMaterial color="#FFFF99" fog={false} />
            <pointLight distance={6100} intensity={50} color="white" />
          </mesh> */}
        </group>
      )
}


