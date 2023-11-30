import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { useControls} from 'leva'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model () {
    const [ rotation, setRotation ] = useState({
        x:Math.PI/2,
        y:Math.PI/4,
        z:0
    })
    const fox = useGLTF('./Fox.glb')
    // console.log(fox)
    const animations = useAnimations(fox.animations, fox.scene)
    
    const scroll = useScroll()     

    useFrame((state, delta) => {
        const scroll_range = scroll.range(0, 1)
        console.log(state)
        setRotation({x: Math.PI/2 - (Math.PI/2 * scroll_range), y:Math.PI/4 - (Math.PI/4 * scroll_range) , z:0 })
        // console.log(Math.PI/2);
        // state.camera.position({x:-1, y: 30 - (scroll_range * 28) , z: 12})
        state.camera.position.y = 30 - (scroll_range * 28)
        state.camera.lookAt(0,0,0)
        // state.controls.target = [0,0,0]
    })



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

    return (
        <>
    <primitive  
        object={fox.scene}
        scale={0.02}
        position={[0,0,0]}
        // rotation={[rotation.x,(Math.PI/2) + rotation.y,rotation.z]}
        // rotation={[0,0,1]}
        rotation={[rotation.x, rotation.y, rotation.z]}
        />
        </>
    )
}