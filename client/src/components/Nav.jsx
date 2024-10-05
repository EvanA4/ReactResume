import { useState } from 'react'

import './styles/Nav.css'

export default function Nav(props) {
    const [navOpen, setNav] = useState(0);
    const btnStates = ['navBtn', 'openNavBtn', 'closeNavBtn'];
    const pgStates = ['pg', 'openPg', 'closePg'];

    return (
        <div className={pgStates[navOpen]}>
            <div className='hideLinks'>
                <div className='navLinks'>
                        <a href="#About" onClick={()=>{
                            setNav(2);
                        }}><img className='icon' src="/questionMark.svg"/>About</a>

                        <a href="#Experience" onClick={()=>{
                            setNav(2);
                        }}><img className='icon' src="/book.svg"/>Experience</a>

                        <a href="#Projects" onClick={()=>{
                            setNav(2);
                        }}><img className='icon' src="/hammer.svg"/>Projects</a>

                        <a href="#Contact" onClick={()=>{
                            setNav(2);
                        }}><img className='icon' src="/magnifyingGlass.svg"/>Contact</a>
                        <button className='openingBtn' onClick={() => {
                            props.setOpening(true);
                            setTimeout(() => {
                                props.setOpening(false);
                            }, 3570);
                        }}><img src="/wave.svg" /></button>
                </div>
            </div>
            <button className={btnStates[navOpen]} onClick={()=>{
                if (navOpen % 2 == 0) setNav(1);
                else setNav(2);
            }}><img src="/bookmark.svg"/></button>
        </div>
    )
}