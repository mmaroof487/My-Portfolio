
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 overflow-hidden relative text-center">

          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-slate-900 mb-6"
            >
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Connect</span>
            </motion.h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex justify-center items-center space-x-8">
              <a href="mailto:mmaroof487@gmail.com" className="flex flex-col items-center space-y-2 text-slate-600 hover:text-blue-600 transition-colors group">
                <div className="p-4 bg-blue-50 rounded-full group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <span className="font-medium text-sm">Email</span>
              </a>
              <a href="https://github.com/mmaroof487" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 text-slate-600 hover:text-slate-900 transition-colors group">
                <div className="p-4 bg-slate-100 rounded-full group-hover:scale-110 group-hover:bg-slate-200 transition-all duration-300">
                  <Github className="w-8 h-8" />
                </div>
                <span className="font-medium text-sm">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/MohammadMaroof" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 text-slate-600 hover:text-blue-700 transition-colors group">
                <div className="p-4 bg-blue-50 rounded-full group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                  <Linkedin className="w-8 h-8" />
                </div>
                <span className="font-medium text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
