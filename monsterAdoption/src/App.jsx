import { useRef } from 'react'
import './App.css'
import Model from './components/Model'
import Model2 from './components/Model2'
import { Wolf, ElfWolf, BuffaloMan, Man, WolfReal, Spider, Raptor, Warrior, TwoHeadedWolf } from './components/Models'
import {  useFrame, useThree, Canvas } from '@react-three/fiber'
import { Environment,OrbitControls, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import Home from './components/Home'
import Home2 from './components/Home2'
import Nav from './components/Nav'
import Main from './components/Main'



function App() {
  

  return (
    <>
      {/* <Nav></Nav> */}
      {/* <Nav></Nav> */}
      <Main/>
    
    </>
  )
}

export default App
