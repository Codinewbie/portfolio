import React from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/Techstack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/project';
function App() {
  return (
    <div className="">
      <Header />
    <div className="flex justify-center">
    <div className = "max-w-3xl md:max-w-4xl">
      
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
