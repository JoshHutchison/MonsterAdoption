import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls} from 'leva'
import { useEffect } from "react";
import { FogExp2 } from "three";

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
        const radius = 6; // Adjust the radius of the circle
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

    const { animationName } = useControls('Mech',{
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

