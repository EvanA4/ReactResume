import * as THREE from 'three'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Lightformer, Text } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import { EffectComposer, N8AO } from '@react-three/postprocessing'

import './styles/World.css'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export default function World() {
    // credit to https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js
    // handles detection of scroll and y position of website
    const [y, setY] = useState(window.scrollY);
    const [prevScroll, setPrev] = useState(true);
    const [physicsOn, setPhysics] = useState(false);
    const [evans, setEvans] = useState([]);
    const [isPressed, setIsPressed] = useState(false);

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (window.scrollY === 0) {
                if (prevScroll !== true) {
                    setPrev(true);
                }
            } else {
                if (prevScroll !== false) {
                    setPrev(false);
                }
                if (window.scrollY >= getWindowDimensions().height && physicsOn) {
                    setPhysics(false);
                    setIsPressed(false);
                }
            }
            setY(window.scrollY);
        }, [y, physicsOn]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    const Evan3D = (props, vec = new THREE.Vector3) => {
        const { nodes, materials } = useGLTF('./src/components/supports/cheaperMiniEvan.glb');
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
            <p className='simText'>SIMULATION: {isPressed ? <span className="greenText">ON</span> : <span className="redText">OFF</span>}</p>
            <div className='sim'>
                {physicsOn ? <Canvas dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 15], fov: 17.5 }} style={{ background: "#111111" }} resize={{ scroll: false }}>
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
                </Canvas> :
                <>
                    <div className={isPressed ? 'toggledDiv' : 'toggleDiv'}>
                        <button className='toggleBtn' onClick={()=>{
                            setIsPressed(true);
                            setTimeout(() => {
                                setPhysics(true);
                                let pos = 15 * Math.tan(getWindowDimensions().width * 0.1527163 / getWindowDimensions().height) + 1.7;
                                setEvans([<Evan3D position={[0, 3.7, 0]} />, // top
                                          <Evan3D position={[pos, 0, 0]} />, // right
                                          <Evan3D position={[0, -4.1, 0]} />, // bottom
                                          <Evan3D position={[-pos, 0, 0]} /> // left
                                        ]);
                            }, 1000);
                        }}></button>
                        <img src="./src/components/supports/powerButton.svg"/>
                    </div>
                    <div className='btnShadow' id={isPressed ? 'toggledShadow' : ''}></div>
                </>}
            </div>
        </div>
    )
}

/*
location = 1.227296 + (374017 − 1.227296)/(1 + (height/0.005381233)^0.9531064)
location = 2.713608 + 0.0008374587*width + 8.784078*10^-7*width^2



width: 1371
height: 824
right: 5.5
left: -5.5

width: 1371
height: 602
right: 7
left: -7

width: 1371
height: 412
right: 9.5
left: -9.5

width: 1371
height: 298
right: 12.5
left: -12.5



width: 1371
height: 824
right: 5.5
left: -5.5

width: 1195
height: 824
right: 5
left: -5

width: 997
height: 824
right: 4.4
left: -4.4

width: 581
height: 824
right: 3.5
left: -3.5



width: 999
height: 720
predicted from height: 6.1
predicted from width: 4.43
avg: 5.265
actual: 
*/