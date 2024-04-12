import { useState, useEffect, useRef } from 'react'

import './styles/Content.css'

// credit for typing animation
// https://blog.logrocket.com/3-ways-implement-typing-animation-react/
const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Typing logic goes here
    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

export default function Content() {

    const aboutText = " I've been coding since 2021, dabbling with NodeJS, PyTorch, React, PyQT, and more.";

    return (
        <>
            <fieldset className='aboutSet'>
                <span className='aboutAnchor' id='About'></span>
                <legend id='About'>About</legend>
                <button className='cmdBtn' onClick={()=>{ setIsTyping(true) }}></button>
                <span className='aboutP'>
                    <span>Hi, I'm Evan Abbott, a computer science sophomore at UTK. I'm currently interested in data science and especially machine learning.</span>
                    <Typewriter text={aboutText} delay={100} />
                    <span className='rect'>|</span>
                </span>
            </fieldset>

            <div className='experienceContainer'>
                <p className='experienceP'>
                    <span className='experienceAnchor' id='Experience'></span>
                    Experience
                </p>
                <div className='experienceList'>
                    <div className='experienceItem'>
                        <p className='itemHeader'>Unpaid Internship</p>
                        <p className='itemDate'>Summer 2021</p>
                        <ul style={{ listStyle: "square" }}>
                            <li>GitHub and coding with others</li>
                            <li>GUI design with PyQt Creator</li>
                            <li>Beginner Python programming</li>
                            <li>Facial recognition of distorted images</li>
                        </ul>
                    </div >


                    <div className='experienceItem'>
                        <p className='itemHeader'>SULI at ORNL</p>
                        <p className='itemDate'>Summer 2022</p>
                        <ul style={{ listStyle: "square" }}>
                            <li>GitHub and coding with others</li>
                            <li>Presented my contributions at meetings</li>
                            <li>Object recognition with point clouds</li>
                            <li>Intermediate C++ and Python</li>
                            <li>Data Structures and algorithms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

// yarn add typewriter-effect