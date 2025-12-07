
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "XenKrypt",
      role: "Frontend Development Intern",
      period: "Dec 2025 - Present",
      location: "SRM Campus, Chennai",
      description: "TGL Innovation Accelerator Program",
      points: [
        "Developing an enterprise security platform featuring real-time threat monitoring, vulnerability analytics, and cryptography-backed secure workflows",
        "Building multi-tenant SaaS dashboards using Next.js 14, TypeScript, Tailwind CSS, and role-based access control",
        "Implementing WebSocket-based real-time alerting, optimizing performance for large-scale security event streams, and conducting stress/UI reliability testing",
        "Working on a zero-effort client-side encryption system enabling seamless secure file access without user-managed keys or passwords"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Professional Experience
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform -translate-x-1/2"></div>

              <div className={`md:flex items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 mt-1.5"></div>

                <div className="md:w-5/12">
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.company}</h3>
                       <span className="text-xs font-mono text-cyan-400 border border-cyan-500/30 px-2 py-1 rounded">Intern</span>
                    </div>
                    <h4 className="text-lg text-slate-300 mb-2">{exp.role}</h4>
                    <p className="text-sm text-slate-500 italic mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-300">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
