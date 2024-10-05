import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Lightformer, Text } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import { EffectComposer, N8AO } from '@react-three/postprocessing'

import './styles/World.css'

export default function World(props) {
    const [evans, setEvans] = useState([]);
    const [evanTapped, setEvanTapped] = useState(0);
    const tipStates = ['showTip', 'hideTip', 'tip'];


    // 3D evan object for physics engine
    const Evan3D = (props, vec = new THREE.Vector3) => {
        const { nodes, materials } = useGLTF('/cheaperMiniEvan.glb');
        const api = useRef();
        useFrame(() => {
            vec = api.current?.translation();
            api.current?.applyImpulse({ x: vec.x * -.2, y: vec.y * -.2, z: vec.z * -.2 });
        })

        return (
            <RigidBody {...props} linearDamping={2} angularDamping={1} friction={0} ref={api} rotation={[0, -1.5, 0]} canSleep={false} onClick={(e) => {
                e.stopPropagation();

                const randomVec = new THREE.Vector3();
                randomVec.randomDirection();
                randomVec.multiplyScalar(250);

                api.current.applyImpulse({ x: randomVec.x, y: randomVec.y, z: randomVec.z });

                randomVec.randomDirection();
                randomVec.multiplyScalar(200);

                api.current.applyTorqueImpulse({ x: randomVec.x, y: randomVec.y, z: randomVec.z });

                if (evanTapped == 0) setEvanTapped(1);
            }}>
                <mesh
                    geometry={nodes.MiniEvan.geometry}
                    material={materials.NormalColorsMetal}>
                </mesh>
            </RigidBody>
        )
    }


    return (
        <div className='worldContainer'>
            <p className='simText'>SIMULATION: {props.isPressed ? <span className="greenText">ON</span> : <span className="redText">OFF</span>}</p>
            <div className='sim'>
                {props.physicsOn ?
                <>
                    <Canvas dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 15], fov: 17.5 }} style={{ background: "#111111" }} resize={{ scroll: false }}>
                        {/* <mesh position={[0, 0, -50]}>
                            <Text
                                scale={[.004 * width, .004 * width, .004 * width]}
                            >
                                Physics!
                            </Text>
                        </mesh> */}
                        <ambientLight intensity={0.4} />
                        <Physics gravity={[0, 0, 0]} allowSleep={false}>
                            {...evans}
                        </Physics>
                        <EffectComposer disableNormalPass multisampling={8}>
                            <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
                        </EffectComposer>
                        <Environment resolution={256}>
                            <group rotation={[-Math.PI / 3, 0, 1]}>
                                <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
                                <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
                                <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
                                <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
                            </group>
                        </Environment>
                    </Canvas>
                    <span className='tapTip' id={tipStates[evanTapped]}>Tap the heads!</span>
                </> :
                <>
                    <div className={props.isPressed ? 'toggledDiv' : 'toggleDiv'}>
                        <button className='toggleBtn' onClick={()=>{
                            props.setIsPressed(true);
                            setTimeout(() => {
                                if (evanTapped == 1) setEvanTapped(2);
                                props.setPhysics(true);
                                let pos = 15 * Math.tan(props.getWindowDimensions().width * 0.1527163 / props.getWindowDimensions().height) + 1.7;
                                setEvans([<Evan3D position={[0, 3.7, 0]} />, // top
                                          <Evan3D position={[pos, 0, 0]} />, // right
                                          <Evan3D position={[0, -4.1, 0]} />, // bottom
                                          <Evan3D position={[-pos, 0, 0]} /> // left
                                        ]);
                            }, 1000);
                        }}></button>
                        <img src="/powerButton.svg"/>
                    </div>
                    <div className='btnShadow' id={props.isPressed ? 'toggledShadow' : ''}></div>
                </> }
            </div>
        </div>
    )
}