import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Music Player using Python",
    description: "A sleek, functional music player built with Python, featuring an intuitive UI and local library management.",
    tech: ["Python", "PyQt5", "Audio Processing"],
    github: "https://github.com/Jeffrin-I/Music-Player-in-Python.git",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Road Safety AI Assistant",
    description: "Advanced AI-based road safety assistant designed for accident prevention through real-time data analysis and awareness alerts.",
    tech: ["Python", "AI", "Data Analysis", "Computer Vision"],
    github: "https://github.com/Jeffrin-I/road-safety-ai",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
  }
];

function ProjectCard({ project, index }: { project: any; index: number; key?: number | string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1 }}
      className="group premium-card rounded-3xl p-8 border relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 h-64 bg-premium-black/5 rounded-2xl overflow-hidden grayscale contrast-125 mb-4 group-hover:grayscale-0 transition-all duration-700 border border-premium-border">
           <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
           />
        </div>

        <div className="w-full md:w-1/2 flex flex-col pt-4">
          <p className="text-xs uppercase tracking-widest opacity-40 font-bold mb-4">Selected Work</p>
          <h3 className="text-3xl md:text-4xl font-serif italic mb-3">
            {project.title}
          </h3>
          <p className="text-xs opacity-50 mb-4 font-medium uppercase tracking-wider">Logic: {project.tech.join(', ')}</p>
          <p className="text-sm md:text-base leading-relaxed opacity-70 mb-8">
            {project.description}
          </p>
          
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 bg-premium-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-premium-black hover:text-premium-white transition-all duration-300 interactive"
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col  mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.4em] font-bold text-premium-black/40 mb-4">Work / Engineering</p>
          <h2 className="text-5xl md:text-8xl font-serif italic tracking-tighter">
            Featured Projects
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
