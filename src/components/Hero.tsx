
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/hero-1.png', '/hero-2.png', '/hero-3.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),rgba(15,23,42,1))]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-cyan-400 font-medium text-lg mb-4 tracking-wide">HELLO, I'M</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Mohammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Maroof</span>
              </h1>
            </motion.div>

            <motion.div
              className="h-12 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl text-slate-300 font-light">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.p
              className="text-slate-400 text-lg md:text-xl mb-12 max-w-lg mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Building scalable applications with strong foundation in Next.js, React, TypeScript, and Node.js.
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://github.com/mmaroof487"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
              >
                <Github size={24} className="group-hover:stroke-white" />
              </a>
              <a
                href="https://linkedin.com/in/MohammadMaroof"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mmaroof487@gmail.com"
                className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-red-500 hover:border-red-500 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <Mail size={24} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <button
                onClick={scrollToAbout}
                className="animate-bounce text-slate-400 hover:text-white transition-colors duration-300"
              >
                <ChevronDown size={40} />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800"
          >
             <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Abstract Tech Background"
                />
             </AnimatePresence>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
