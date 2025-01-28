// src/Scene.tsx
import { Circle, Html, OrbitControls, Stats, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';


interface MyComponentProps {
  drwing: string;
  mtrl: string;
}


function Loader() {
  const { progress } = useProgress()
  console.log(progress)
  return <Html center>{progress} % loaded</Html>
}

  const Scene: React.FC<MyComponentProps> = ({drwing,mtrl}) => {
  const materials = useLoader(MTLLoader, `./${mtrl}`)

  const obj_sngl = useLoader(OBJLoader, `./${drwing}`, loader => {
    materials.preload()
    loader.setMaterials(materials)
  })
//   obj_sngl.materialLibraries(`./${mtrl}`)

//   const loader = new OBJLoader();
//   loader.load(`./${drwing}`);

  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
        <directionalLight
          position={[-1.3, 6.0, 4.4]}
          castShadow
          intensity={Math.PI * 1}
        />
        <primitive
          object={obj_sngl}
          

          position={[0,0,0]}
          rotation={[-0.01,-0.2,-0.1]}
          children-0-castShadow
        />
        {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle> */}
        <OrbitControls target={[0, 0, 0]} />
        {/* <axesHelper args={[5]} /> */}
        <Stats />
      </Canvas>
    </Suspense>
  );
};

export default Scene;
