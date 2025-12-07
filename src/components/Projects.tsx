
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AthletIQ",
      tech: ["React.js", "Node.js", "PostgreSQL", "TailwindCSS"],
      points: [
        "Built a full-stack fitness platform with calorie calculation, macro tracking, and workout logging",
        "Integrated an AI nutrition API covering 500,000+ foods with dynamic macro and calorie visualizations",
        "Implemented a high-performance, responsive UI that achieved a 95+ Lighthouse score"
      ],
      links: { github: "#", live: "#" },
      image: "/project-athletiq.png"
    },
    {
      title: "Projex",
      tech: ["Next.js", "Sanity CMS", "TypeScript", "TailwindCSS", "NextAuth.js"],
      points: [
        "Created a project discovery platform for submitting, exploring, and discussing 500+ projects",
        "Implemented GitHub OAuth with NextAuth.js and server actions for secure access control",
        "Used Sanity CMS with GROQ for real-time content and sub-100ms global search"
      ],
      links: { github: "#", live: "#" },
      image: "/project-projex.png"
    },
    {
      title: "InvoStake",
      tech: ["React.js", "TailwindCSS", "C++", "Foundry", "Move"],
      points: [
        "Built a DeFi platform enabling liquidity from locked tokens via smart contracts",
        "Implemented Fully Homomorphic Encryption (FHE) for privacy-preserving analytics",
        "Designed algorithmic investment baskets using on-chain data and risk profiles"
      ],
      links: { github: "#", live: "#" },
      image: "/project-invostake.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, blockchain, and system design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group relative h-[500px]"
            >

              {/* Background Image */}
              <div className="absolute inset-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent opacity-90"></div>
              </div>

              <div className="relative p-6 flex-1 flex flex-col z-10 h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <Folder className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.links.github} className="text-slate-300 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20">
                      <Github size={20} />
                    </a>
                    <a href={project.links.live} className="text-slate-300 hover:text-cyan-400 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <ul className="mb-6 space-y-2 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start">
                      <span className="mr-2 mt-1.5 w-1 h-1 bg-cyan-500 rounded-full flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 border border-white/10 text-cyan-200 text-xs font-medium rounded-full backdrop-blur-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
