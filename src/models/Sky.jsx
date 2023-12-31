import React from 'react'

import skyScene from '../assets/3d/sky.glb'
const Sky = () => {
    const sky = useGLTF('');
  return (
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky