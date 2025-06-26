import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import Projects from './components/Projects';
import CodingStats from './components/CodingStats';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for initial data fetch
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Loading Portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <OpenSource />
        <Projects />
        <CodingStats />
        <Contact />
      </main>
    </div>
  );
}

export default App;