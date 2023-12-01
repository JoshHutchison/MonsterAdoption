import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { useControls} from 'leva'
import { useFrame } from '@react-three/fiber'

export default function Model2 () {
    const [ pos, setPos ] = useState(0)
    const elf = useGLTF('./elf.gltf')
    console.log(elf);
    const animations = useAnimations(elf.animations, elf.scene)
    
    // const scroll = useScroll()     

    // useFrame(() => {
    //     setPos(scroll.range(0, 1))
    //     // console.log(pos)
    // })


    const { animationName } = useControls('elf',{
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
        object={elf.scene}
        scale={3}
        position={[0,0,0]}
        rotation={[0,0,0]}/>
        </>
    )
}