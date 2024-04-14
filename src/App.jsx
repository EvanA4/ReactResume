import { useEffect, useState, useCallback } from 'react'

import World from './components/World';
import Opening from './components/Opening';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Content from './components/Content';
import Projects from './components/Projects';

import './App.css'


function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}


function App() {
	// determine if old opening should be playing
	const [isOpening, setOpening] = useState(false);

	// determine color for experiences
	const [color, setColor] = useState([[256, 256, 256], [256, 256, 256]]);
	const calcColor = (y) => {
		var r1 = 0, r2 = 170, g = 255, b1 = 0, b2 = 0;
		b1 = 70 * Math.sin(y/150) + 195;
		b2 = 70 * Math.cos(y/150) + 195;

		return [[r1, g, b1], [r2, g, b2]];
	}

	// Y position on website to determine physics simulation and background colors of experience
	// credit to https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js
	// handles detection of scroll and y position of website
	const [y, setY] = useState(window.scrollY);
	const [physicsOn, setPhysics] = useState(false);
	const [isPressed, setIsPressed] = useState(false);

	const handleNavigation = useCallback(
		e => {
			const window = e.currentTarget;
			if (window.scrollY >= getWindowDimensions().height && physicsOn) {
				setPhysics(false);
				setIsPressed(false);
			}
			setY(window.scrollY);
			setColor(calcColor(y));
		}, [y, physicsOn]
	);

	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);


	return (
		<>
			{isOpening ? <Opening /> : <></>}
			<Nav setOpening={setOpening} />
			<World physicsOn={physicsOn} setPhysics={setPhysics} getWindowDimensions={getWindowDimensions} setIsPressed={setIsPressed} isPressed={isPressed} />
			<div className='main'>
				<Content color={color} /> : <></>
				<Projects />
				<Contact />
			</div>
		</>
	)
}

export default App
