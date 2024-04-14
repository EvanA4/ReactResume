import { useState } from 'react'

import './styles/Nav.css'

export default function Nav() {
    const [navOpen, setNav] = useState(0);
    const btnStates = ['navBtn', 'openNavBtn', 'closeNavBtn'];
    const pgStates = ['pg', 'openPg', 'closePg'];

    return (
        <div className={pgStates[navOpen]}>
            <div className='hideLinks'>
                <div className='navLinks'>
                        <a href="#About" onClick={()=>{
                            setNav(2);
                        }}><img className='icon' src="./src/assets//questionMark.svg"/>About</a>

                        <a href="#Experience" onClick={()=>{
                            setNav(2);
                        }}><img className='icon' src="./src/assets/book.svg"/>Experience</a>

                        <a href="#Projects" onClick={()=>{
                            setNav(2);
                        }}><img className='icon' src="./src/assets/hammer.svg"/>Projects</a>

                        <a href="#Contact" onClick={()=>{
                            setNav(2);
                        }}><img className='icon' src="./src/assets/magnifyingGlass.svg"/>Contact</a>
                </div>
            </div>
            <button className={btnStates[navOpen]} onClick={()=>{
                if (navOpen % 2 == 0) setNav(1);
                else setNav(2);
            }}><img src="./src/assets/bookmark.svg"/></button>
        </div>
    )
}