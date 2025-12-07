
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["C", "C++", "Python", "JavaScript", "TypeScript"]
    },
    {
      category: "Web Technologies",
      items: ["Next.js", "React.js", "Node.js", "Express.js", "TailwindCSS", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      category: "Tools & Platforms",
      items: ["Docker", "Redis", "Sanity CMS", "Git", "GitHub", "Postman", "Figma", "Insomnia"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-slate-400">A comprehensive list of technologies and tools I work with.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-bold mb-6 text-cyan-400 border-b border-slate-700 pb-2 inline-block">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
                    className="px-4 py-2 bg-slate-700/50 rounded-lg text-sm text-slate-300 border border-slate-600 hover:border-cyan-500/50 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
