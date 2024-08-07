import React from 'react';
import StickySection from './components/StickySection/StickySection';
import './App.css';
import './components/StickySection/StickySection.css'
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Project from './components/Project/Project';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';

function App() {
    return (
        <div className="App">
          <Navbar/>
            <StickySection id="home" className="home"><Hero/> </StickySection>
            <StickySection id="about" className="about"> <About/> </StickySection>
            <StickySection id="projects" className="projects"><Project/> </StickySection>
            <StickySection id="contact" className="contact"><Contact/> </StickySection>
        </div>
    );
}

export default App;
