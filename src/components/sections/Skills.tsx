import { motion } from 'motion/react';

const skills = [
  { name: "Python", percentage: 60 },
  { name: "C", percentage: 40 },
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 70 },
  { name: "React.js", percentage: 85 },
  { name: "AI/ML", percentage: 75 },
];

function SkillBar({ name, percentage }: { name: string; percentage: number; key?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group interactive"
    >
      <div className="flex justify-between text-xs font-bold uppercase mb-3 tracking-widest">
        <span className="text-premium-black/60">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-[1px] w-full bg-premium-black/5 relative overflow-hidden">
        <motion.div
           initial={{ scaleX: 0 }}
           whileInView={{ scaleX: percentage / 100 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
           className="h-full bg-premium-black origin-left w-full"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40 px-6" style={{ backgroundColor: 'var(--premium-white)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-baseline">
          <div className="md:col-span-1 hidden md:block">
             <span className="section-label">Expertise</span>
          </div>
          <div className="md:col-span-11 flex flex-col md:flex-row justify-between items-end gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter">
                Skills & Logic
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xs text-[11px] uppercase tracking-[0.2em] font-bold leading-relaxed opacity-60"
            >
              Specialized in artificial intelligence, engineering logic, and modern interface design.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-24 gap-y-12 max-w-5xl mx-auto pl-0 md:pl-12">
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  );
}
