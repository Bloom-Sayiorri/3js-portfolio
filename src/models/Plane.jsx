import React from 'react'

import planeScene from '../assets/3d/plane.glb';
import { useGLTF } from '@react-three/drei';


const Plane = () => {
    const { scene, animations } = useGLTF(birdscene);
  return (
    <mesh>

    </mesh>
  )
}

export default Plane