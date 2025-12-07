import { useState, useEffect, Suspense, lazy } from 'react';
import Navigation from './components/Navigation';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-slate-50 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
        </div>
      }>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
