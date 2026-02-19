import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

import Contact from './components/Contact';

import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white min-h-screen font-sans selection:bg-cyan-500/30">
      <ParticleBackground />
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <About />
      </section>

      <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
        <Portfolio />
      </section>

      <div className="bg-gray-950/30 backdrop-blur-sm">
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
          <Skills />
        </section>
      </div>

      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <Contact />
      </section>

      <Footer />

    </div>
  );
}

export default App;
