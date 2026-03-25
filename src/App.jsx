import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import WhyHireMe from './components/WhyHireMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
          <About />
        </section>

        <section id="portfolio" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
          <Portfolio />
        </section>

        <div className="bg-white/[0.02]">
          <section id="skills" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
            <Skills />
          </section>
        </div>

        <section id="why-hire-me" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
          <WhyHireMe />
        </section>

        <section id="contact" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
