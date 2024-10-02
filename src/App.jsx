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
    <div className="flex justify-center">
    <div className = "max-w-3xl">
      <Header />
      <Hero />
      <TechStack/>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;
