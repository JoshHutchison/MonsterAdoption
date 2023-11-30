import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Canvas
        shadows={ true }
        camera={ {
            fov: 45,
            near: 1,
            far: 300,
            position: [ -4, 30, 12 ]
            // position: [ -1, 2, 12 ]
        } }
    >
    
    <App />
    </Canvas>
    
  </React.StrictMode>,
)
