import { useThree, extend, useFrame } from '@react-three/fiber'
import {useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import CustomObject from './CustomObject'

extend({ OrbitControls })

export default function Experience()
{   
    const {camera, gl } = useThree()
    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) =>
    {
        cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
    })
    return <>

        <orbitControls args={ [camera, gl.domElement] } />

        <directionalLight position={[ 1, 2 ,3]} intensity={0.5} color="orange"/>
        <ambientLight intesity={ 0.1} />

        <group ref={ groupRef }>
            <mesh rotation-y={ Math.PI * 0.25 } position-x={ -2 } scale={ 1 }>
                <sphereGeometry scale={ 1 }/>
                <meshStandardMaterial color="orange"/>
            </mesh>

            <mesh ref={ cubeRef } position-x={ 2 } scale={ 1 }>
                <boxGeometry scale={ 1 }/>
                <meshStandardMaterial color="purple" />
            </mesh>
        </group>
        <mesh rotation-x={ 5 } position-y={-2} scale={7}>
            <planeGeometry scale={6}/>
            <meshStandardMaterial color="green" />
        </mesh>

        <CustomObject />
    </>
}