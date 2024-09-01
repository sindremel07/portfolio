import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh 
        castShadow 
        receiveShadow 
        scale={hovered ? 2.75 : 2.5} 
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          map={decal}
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        enablePan={false}
        
        />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas