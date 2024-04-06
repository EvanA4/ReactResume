import { useState } from 'react'

import './styles/Nav.css'

export default function Nav(props) {
    const [navOpen, setNav] = useState(0);
    const btnStates = ['navBtn', 'openNavBtn', 'closeNavBtn'];
    const pgStates = ['pg', 'openPg', 'closePg'];

    return (
        <div className='navContainer'>
            <div className={pgStates[navOpen]}>
                <div className='hideLinks'>
                    <div className='navLinks'>
                            <a href="#About" onClick={()=>{
                                props.setDefault(1);
                                setNav(2);
                            }}><img className='icon' src="./src/components/supports/questionMark.svg"/>About</a>

                            <a href="#Experience" onClick={()=>{
                                props.setDefault(1);
                                setNav(2);
                            }}><img className='icon' src="./src/components/supports/book.svg"/>Experience</a>

                            <a href="#Contact" onClick={()=>{
                                setNav(2);
                            }}><img className='icon' src="./src/components/supports/magnifyingGlass.svg"/>Contact</a>

                            <a href="#Projects" onClick={()=>{
                                props.setDefault(2);
                                setNav(2);
                            }}><img className='icon' src="./src/components/supports/hammer.svg"/>Projects</a>
                    </div>
                </div>
                <button className={btnStates[navOpen]} onClick={()=>{
                    if (navOpen % 2 == 0) setNav(1);
                    else setNav(2);
                }}><img src="./src/components/supports/bookmark.svg"/></button>
            </div>
        </div>
    )
}