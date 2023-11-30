import { useRef } from 'react'
import './App.css'
import Model from './components/Model'
import Model2 from './components/Model2'
import { Wolf, ElfWolf, BuffaloMan, Man, WolfReal, Spider, Raptor, Warrior, TwoHeadedWolf } from './components/Models'
import {  useFrame, useThree } from '@react-three/fiber'
import { Environment,OrbitControls, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'


function App() {
  const { viewport } = useThree() 
  const moving = useRef()
  
  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('environment map', {
    envMapIntensity: { value: 7, min: 0, max: 12 },
    envMapHeight: { value: 7, min: 0, max: 100 },
    envMapRadius: { value: 28, min: 10, max: 1000 },
    envMapScale: { value: 100, min: 10, max: 1000 }
})

// useFrame((state, delta)=> {
//   // moving.current.position.z += delta
//   console.log('movement', moving);
// }) 
  

  return (
    <>

      <Environment
            background        
            preset="warehouse"
            resolution={ 32 }
            ground={ {
                height: envMapHeight,
                radius: envMapRadius,
                scale: envMapScale
            } }
        >
        </Environment>

      <Perf position="top-left" />

      {/* <OrbitControls makeDefault /> */}

      <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } shadow-normalBias={0.04} />
      <ambientLight intensity={ 1.5 } />
    
      
      
      <ScrollControls pages={4} damping={0.1}>
      
        <Model ></Model>
        {/* <mesh receiveShadow position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow"  />
          </mesh> */}
        <Model2></Model2>
        <Wolf position={[-4, 0, 0]} rotation={[0,.5,0]}/>
        <ElfWolf ref={moving} scale={3} position={[-2.5, 0, 0]} rotation={[0,.5,0]}/>
        <BuffaloMan scale={.1} position={[10, 0, 0]} rotation={[0,0,0]}>
          
        </BuffaloMan>
        <Man scale={1} position={[4, 0, 0]} rotation={[0,0,0]}/>
        <WolfReal scale={2} position={[6, 0, 0]} rotation={[0,0,0]}/>
        <Spider scale={4} position={[-10, 0, 0]} rotation={[0,0,0]}/>
        <Raptor scale={.3} position={[-8, 0, 0]} rotation={[0,-Math.PI/2,0]}/>
        <Warrior scale={3} position={[-12, 0, 0]} rotation={[0,-Math.PI/4,0]}/>
        <TwoHeadedWolf scale={.01} position={[-6, 0, 0]} rotation={[0,0,0]}/>
        


        <Scroll>
          {/* Canvas contents in here will scroll along */}
          
          {/* <Foo position={[0, 0, 0]} />
          <Foo position={[0, viewport.height, 0]} />
          <Foo position={[0, viewport.height * 1, 0]} /> */}
        </Scroll>
        <Scroll html>
          {/* DOM contents in here will scroll along */}
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <h1>first page</h1>
            <h1 style={{ marginTop: '100vh' }}>second page</h1>
            <h1 style={{ marginTop: '200vh' }}>third page</h1>
            <h1 style={{ marginTop: '300vh' }}>fourth page</h1>


          </div>
          
          
        </Scroll>
      </ScrollControls>

 
     
    </>
  )
}

export default App
