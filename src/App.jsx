import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cursor from './components/Cursor'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen font-sans text-white bg-[var(--color-brand-dark)] selection:bg-[var(--color-brand-accent)] selection:text-white">
      <Navbar />
      <Cursor />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
    </div>
  )
}

export default App;
