import ReactSwipe from 'react-swipe'
import { isMobile } from 'react-device-detect'

import './styles/Projects.css'

export default function Projects() {

    let reactSwipeEl;

    return (
        <>
            <p className='projectLabel'>
                Projects
                <span className='projectsAnchor' id='Projects'></span>
            </p>
            <div className='projectContainer'>
                <ReactSwipe
                    swipeOptions={{ continuous: false }}
                    ref={el => (reactSwipeEl = el)}
                >


                    <div>
                        <div className='slide' id={isMobile ? 'mobileSlide' : 'normalSlide'} >
                            <a href='https://github.com/EvanA4/RCturtle' className='slideTitle'>RCTurtle</a>
                            <p className='slideDesc'>
                                Control a Minecraft robot from a web app with a 3D display! Uses a websocket server to connect the website and the robot.
                            </p>
                            <ul>
                                <li>React</li>
                                <li>ThreeJS for 3D display of the robot's environment</li>
                                <li>NodeJS websocket server</li>
                            </ul>
                            {isMobile ? <></> : <button className='nextBtn' onClick={() => reactSwipeEl.next()}><img src="./src/assets/navArrow.svg"/></button>}
                            {isMobile ? <></> : <button disabled className='prevBtn' onClick={() => reactSwipeEl.prev()}><img src="./src/assets/navArrow.svg"/></button>}
                            {isMobile ? <span className='swipeTip' id={'showTip' }>Swipe the cards!</span> : <></>}
                        </div>
                    </div>


                    <div>
                        <div className='slide' id={isMobile ? 'mobileSlide' : 'normalSlide'}>
                            <a href='https://github.com/EvanA4/ReactResumeSrc' className='slideTitle'>Resume Website</a>
                            <p className='slideDesc'>
                                A not-so-light website showing creativity, experience, and projects. Always being updated!
                            </p>
                            <ul>
                                <li>React</li>
                                <li>ThreeJS and Rapier for physics engine</li>
                                <li>Web design</li>
                            </ul>
                            {isMobile ? <></> : <button className='nextBtn' onClick={() => reactSwipeEl.next()}><img src="./src/assets/navArrow.svg"/></button>}
                            {isMobile ? <></> : <button className='prevBtn' onClick={() => reactSwipeEl.prev()}><img src="./src/assets/navArrow.svg"/></button>}
                        </div>
                    </div>
                    
                    
                    <div>
                        <div className='slide' id={isMobile ? 'mobileSlide' : 'normalSlide'}>
                            <a href='https://github.com/EvanA4/InstantStonks' className='slideTitle'>Instant Stonks</a>
                            <p className='slideDesc'>
                                Simulate a randomly selected stock portfolio! You can set the number of randomly selected stocks,
                                as well as the number of months to run the simulation.
                            </p>
                            <ul>
                                <li>Python</li>
                                <li>Pandas dataframes and matplotlib</li>
                                <li>Yahoo stocks API</li>
                            </ul>
                            {isMobile ? <></> : <button className='nextBtn' onClick={() => reactSwipeEl.next()}><img src="./src/assets/navArrow.svg"/></button>}
                            {isMobile ? <></> : <button className='prevBtn' onClick={() => reactSwipeEl.prev()}><img src="./src/assets/navArrow.svg"/></button>}
                        </div>
                    </div>


                    <div>
                        <div className='slide' id={isMobile ? 'mobileSlide' : 'normalSlide'}>
                            <a href='https://github.com/EvanA4/RREFsolver' className='slideTitle'>RREF Solver</a>
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
                            <a href='https://github.com/EvanA4/MCcoords' className='slideTitle'>MCcoords</a>
                            <p className='slideDesc'>
                                Determine the angle connecting two equal-height points with the Minecraft coordinate and angle system.
                                Helpful for creating paths between nether portals on the nether roof.
                            </p>
                            <ul>
                                <li>Basic C++</li>
                                <li>Saved me time in Minecraft</li>
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