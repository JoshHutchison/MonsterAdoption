import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"

import { BuffaloMan, Earth } from "./Models"

export default function DragonEarth(props) {
    
    const [ rotation, setRotation ] = useState({
        x:0,
        y:0,
        z:0
    })
    const [ position, setPosition ] = useState({
        x:0,
        y:0,
        z:0
    })

    const scroll = useScroll()   
    
    useFrame((state, delta) => {
        const scroll_range = scroll.range(0, 1)
        // console.log(state)
        setRotation({x: 0, y: (Math.PI* 4 * scroll_range) , z:0 })
        // setPosition({x: 0, y: 10*(0.7-scroll_range), z:0})

        if (scroll_range > 0.3) {
            setPosition({x: 0, y: 100*(scroll_range-.3), z:0})
            console.log(scroll_range)
        } else {
            setPosition({x: 0, y: 0, z:0})         
            console.log(scroll_range)
        }
        // console.log(Math.PI/2);
        // state.camera.position({x:-1, y: 30 - (scroll_range * 28) , z: 12})
        // state.camera.position.y = 30 - (scroll_range * 28)
        // state.camera.lookAt(0,0,0)
        // state.controls.target = [0,0,0]
    })  
    
    
    return <group 
            rotation={[rotation.x, rotation.y, rotation.z]} 
            position={[position.x,position.y,position.z]}
            scale={.7}>
        <BuffaloMan scale={0.1} position={[0, -4, 0]} rotation={[0, 0, 0]} />
        <Earth />
        </group>
}