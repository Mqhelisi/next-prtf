import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

const Cnvs = () => {
  return (
    <div id="canvas-container">
      <Canvas >
    <mesh>
    <pointLight position={[10, 10, 10]} />

      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  </Canvas>
    </div>
  )
}

export {Cnvs}