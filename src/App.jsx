import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'


function App() {
  return (

    <div>
    <h1 style={{ fontWeight: "bold" }}>Hi,I'm Adhithyan
    <h2>Software Developer</h2></h1>

    <a href="#Homepage">Home    </a>
    <a href="#About">About    </a>
    <a href="#Project">Project    </a>
    <a href="#Contact">Contact    </a>

    
    <About/>
    <Project/>
    <Contact/>
  


    </div>
  )
}

export default App
