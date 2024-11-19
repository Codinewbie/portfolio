import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/project';
import './App.css';

function App() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <Header />
      
      {/* Main Content */}
      <div className="flex justify-center w-full px-7">
        <div className="max-w-4xl">
          <Hero />
          <TechStack />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
