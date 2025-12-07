
import { motion } from 'framer-motion';
import { Code, Layout, Database, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-slate-900">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Full Stack Developer with strong foundation in Next.js, React, TypeScript, and Node.js.
            Currently building enterprise SaaS dashboards at <span className="text-indigo-600 font-semibold">XenKrypt</span> as part of the TGL Innovation Accelerator Program.
            Experienced in developing scalable applications with complex data visualization, real-time updates, and multi-tenant architecture.
            Proven track record of building full-stack projects from concept to deployment.
            Quick learner with ability to adapt to new technologies and business domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Layout className="w-8 h-8 text-blue-500" />, title: "Frontend", desc: "React, Next.js, TailwindCSS, HTML5, CSS3, Bootstrap" },
            { icon: <Server className="w-8 h-8 text-indigo-500" />, title: "Backend", desc: "Node.js, Express.js, Fast API" },
            { icon: <Database className="w-8 h-8 text-cyan-500" />, title: "Database & CMS", desc: "PostgreSQL, MongoDB, MySQL, Redis, Sanity CMS" },
            { icon: <Code className="w-8 h-8 text-purple-500" />, title: "Languages", desc: "JavaScript, TypeScript, Python, C, C++" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
