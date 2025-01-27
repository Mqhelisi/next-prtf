import { Suspense, useEffect, useState } from "react"
import { Canvas} from "@react-three/fiber"
import { OrbitControls, Preload, Gltf, Resize } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Computers = ({isMobile,drwing}) => {
  // const computer = useGLTF(`./${drwing}`)
  return (
    <mesh >
      <hemisphereLight intensity={1}  
      groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight
      position={[-1, 3, 1]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>
      <Resize scale={3}>

      {/* <primitive
      object={computer.scene}
      scale={isMobile ? 0.5:0.75} 
      position={isMobile? [0,-1.3,-1.7] : [0,-3.25,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}
      /> */}
      <Gltf src = {`./${drwing}`}   />

      </Resize>

    </mesh>
  )
}
const ComputersCanvas = ({model}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',
    handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange)
    }
  },[])


  return(
    <Canvas frameloop="demand"
    shadows
    camera={{position:[20,3,5], fov:25}}
    gl={{preserveDrawingBuffer:true}}>
      <Suspense 
      // fallback = {<CanvasLoader/>}
      >
        <OrbitControls
        enableZoom={true}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}/>
        <Computers isMobile={isMobile} drwing={model}/>

      </Suspense>
    </Canvas>
  )
}

export default ComputersCanvas