import React from 'react';
import Hero from './components/Hero'
import Cursor from './components/Cursor'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Cursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App;
