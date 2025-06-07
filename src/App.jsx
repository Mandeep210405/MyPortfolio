import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import GalaxyBackground from './components/GalaxyBackground';
import './App.css';
import './Navbar.css'
import Skills2 from './components/Skills2';
import Education from './components/Education';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      {/* Galaxy Background */}
      <GalaxyBackground />

      {/* Components */}
      <Navbar />
      <Hero />
      <Skills2></Skills2>
      {/* <Skills /> */}
      <Education></Education>
      <Projects></Projects>
      <Contact />
      <Testimonials></Testimonials>
    </div>
  );
}

export default App;