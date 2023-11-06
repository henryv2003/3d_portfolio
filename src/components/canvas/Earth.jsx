import { Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'
import { Camera } from "three"


const Earth = () => {
  const Earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive
    object={Earth.scene}
    scale={2.5}
    position-y={0}
    rotation-y={0}

    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop="demand"
    gl={{preserveDrawingBuffer: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-4, 3, 6] 
    }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minxPolarAngle={Math.PI / 2}
        />
        <Earth/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;