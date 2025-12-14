import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Photos from './components/Photos';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main style={{ paddingTop: 'calc(var(--avatar-size, 20vw) + 1rem)' }} className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Photos />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Burka Muhammed. All rights reserved.
      </footer>
    </div>
  );
}
