import { useEffect } from 'react'
import ReactSwipe from 'react-swipe'
import { isMobile } from 'react-device-detect'

import './styles/Projects.css'

export default function Projects() {

    let reactSwipeEl;

    return (
        <>
            <p className='projectLabel' id='Projects'>Projects</p>
            <div className='projectContainer'>
                <ReactSwipe
                    swipeOptions={{ continuous: false }}
                    ref={el => (reactSwipeEl = el)}
                >
                    <div>
                        <div className='slide' id={isMobile ? 'mobileSlide' : 'normalSlide'}>
                            <p className='slideTitle'>RCTurtle</p>
                            <p className='slideDesc'>Control a Minecraft robot from a web app with a 3D display!</p>
                            <ul>
                                <li>ReactJS</li>
                                <li>ThreeJS</li>
                                <li>NodeJS</li>
                            </ul>
                            {isMobile ? <></> : <button className='nextBtn' onClick={() => reactSwipeEl.next()}><img src="./src/assets/navArrow.svg"/></button>}
                            {isMobile ? <></> : <button disabled className='prevBtn' onClick={() => reactSwipeEl.prev()}><img src="./src/assets/navArrow.svg"/></button>}
                        </div>
                    </div>
                    <div>
                        <div className='slide' id={isMobile ? 'mobileSlide' : 'normalSlide'}>
                            <p className='slideTitle'>RREF Solver</p>
                            <p className='slideDesc'>Can solve a system of equations of any size with Gauss Jordan Elimination.</p>
                            <ul>
                                <li>Basic C++</li>
                                <li>Saved me time in matrix algebra</li>
                            </ul>
                            {isMobile ? <></> : <button className='nextBtn' onClick={() => reactSwipeEl.next()}><img src="./src/assets/navArrow.svg"/></button>}
                            {isMobile ? <></> : <button className='prevBtn' onClick={() => reactSwipeEl.prev()}><img src="./src/assets/navArrow.svg"/></button>}
                        </div>
                    </div>
                    <div>
                        <div className='slide' id={isMobile ? 'mobileSlide' : 'normalSlide'}>
                            <p className='slideTitle'>Resume Website</p>
                            <p className='slideDesc'>A not-so-light website showing experience and projects.</p>
                            <ul>
                                <li>ReactJS</li>
                                <li>ThreeJS</li>
                                <li>Web design</li>
                            </ul>
                            {isMobile ? <></> : <button disabled className='nextBtn' onClick={() => reactSwipeEl.next()}><img src="./src/assets/navArrow.svg"/></button>}
                            {isMobile ? <></> : <button className='prevBtn' onClick={() => reactSwipeEl.prev()}><img src="./src/assets/navArrow.svg"/></button>}
                        </div>
                    </div>
                </ReactSwipe>
            </div>
        </>
    );
}

// yarn add react-device-detect react-swipe