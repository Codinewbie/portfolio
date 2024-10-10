import React from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/Techstack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/project';
import './App.css'
function App() {
  return (
    <div className="flex flex-col">
      <Header />
    <div className="flex justify-center w-full px-7">
      <div className='max-w-4xl '>
        <Hero />
        <TechStack/>
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
