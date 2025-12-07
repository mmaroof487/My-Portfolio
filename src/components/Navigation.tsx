
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark for Hero

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Intersection Observer for detecting section theme
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is intersecting with the top part of the viewport
          if (entry.isIntersecting) {
            // Define dark sections
            const darkSections = ['hero', 'skills', 'experience', 'footer'];
            setIsDark(darkSections.includes(entry.target.id));
          }
        });
      },
      {
        threshold: 0,
        // This margin creates a horizontal line at the top of the viewport
        // It detects which section is currently under the navbar area (approx 80px)
        rootMargin: '-80px 0px -80% 0px'
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Also observe footer if it exists
    const footer = document.querySelector('footer');
    if (footer) observer.observe(footer);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? isDark
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-2'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-lg py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center"
          >
            <img
              src="/logo_minimal.png"
              alt="MM Logo"
              className="h-10 w-auto hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300"
            />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'text-slate-300 hover:text-cyan-400'
                    : 'text-slate-600 hover:text-indigo-600'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </button>
            ))}
            <a
              href="#"
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                isDark
                  ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Resume
            </a>
          </div>

          <button
            className={`md:hidden ${isDark ? 'text-white' : 'text-slate-800'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-4 py-4 space-y-3 ${isDark ? 'bg-slate-900/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'}`}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`block w-full text-left transition-colors duration-300 py-2 ${
                 isDark
                 ? 'text-slate-300 hover:text-cyan-400'
                 : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href="#"
            className={`block w-full text-center py-2 mt-4 rounded-lg border ${
              isDark
                ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
