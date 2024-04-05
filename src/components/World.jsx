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
    const { height, width } = useWindowDimensions();
    const [y, setY] = useState(window.scrollY);
    const [prevScroll, setPrev] = useState(true);
    const [physicsOn, setPhysics] = useState(false);
    const [evans, setEvans] = useState([
    ]);

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
                if (window.scrollY >= height && physicsOn) {
                    setPhysics(false);
                }
            }
            setY(window.scrollY);
        }, [y, height, physicsOn]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    const Evan3D = (props, vec = new THREE.Vector3) => {
        const { nodes, materials } = useGLTF('./assets/cheaperMiniEvan.glb');
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

    useEffect(() => {
        const intervalId2 = setInterval(() => {
            if (physicsOn && evans.length < 4) {
                if (evans.length === 0) {
                    setEvans(prevArray => [...prevArray, <Evan3D position={[6.5, 0, 0]} />]);
                } else if (evans.length === 1) {
                    setEvans(prevArray => [...prevArray, <Evan3D position={[0, 3.8, 0]} />]);
                } else if (evans.length === 2) {
                    setEvans(prevArray => [...prevArray, <Evan3D position={[0, -4.1, 0]} />]);
                } else {
                    setEvans(prevArray => [...prevArray, <Evan3D position={[-6.5, 0, 0]} />]);
                }
            }
        }, 2000);

        return () => {
            clearInterval(intervalId2);
        };
    }, [physicsOn, evans]);

    return (
        <div style={{ width: "100%", height: "100%" }} className='worldContainer'>
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
            <button className='toggleBtn' onClick={() => {
                setPhysics(!physicsOn);
                if (!physicsOn) setEvans([]);
            }}
            >{physicsOn ? 'End' : 'Click to '}<span>{physicsOn ? '' : 'Start'}</span></button>}
            {physicsOn ? <p className={prevScroll ? 'scrollOpenPhysics' : 'scrollClosedPhysics'}>
                scroll down
            </p> :
            <p className={prevScroll ? 'scrollOpen' : 'scrollClosed'}>
                or scroll down
            </p>}
        </div>
    )
}