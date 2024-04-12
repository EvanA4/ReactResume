import { useEffect, useState } from 'react'

import World from './components/World';
// import Opening from './components/Opening';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Content from './components/Content';
import Projects from './components/Projects';

import './App.css'

function App() {
  const [isDefault, setDefault] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        setDefault(1);
    }, 500) // 3700
  }, [setDefault])

  return (
    <>
      <Nav setDefault={setDefault} />
      <World isDefault={isDefault} />
      <div className='main'>
        {isDefault != 1 ? <></> : <Content />}
        {isDefault != 2 ? <></> : <Projects />}
        {isDefault == 0 ? <></> : <Contact />}
      </div>
    </>
  )
}

export default App
