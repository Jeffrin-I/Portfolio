import { motion } from 'motion/react';

const educationData = [
  {
    institution: "Saveetha Engineering College",
    degree: "B.Tech AIML",
    department: "Artificial Intelligence and Machine Learning",
    year: "1st Year",
    performance: "8.9 CGPA",
    description: "Focusing on foundational engineering principles and advanced AI concepts. Actively participating in technical workshops and innovation labs."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <span className="section-label mb-8">Background</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mt-4">
              Academic <br />
              <span className="editorial-serif italic">Foundation</span>
            </h2>
          </motion.div>
        </div>

        <div className="md:col-span-8">
          <div className="space-y-12">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="bg-premium-black text-premium-white p-8 md:p-12 rounded-3xl"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-6 font-bold">Academic Achievement</p>
                
                <h3 className="text-3xl md:text-5xl font-serif italic mb-2">{edu.institution}</h3>
                <p className="text-sm md:text-lg font-medium opacity-80 mb-8">{edu.degree} &middot; {edu.department}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-[10px] uppercase opacity-50 mb-1">Current CGPA</p>
                    <p className="text-2xl font-bold">{edu.performance}</p>
                  </div>
                  <div className="text-right md:text-left">
                    <p className="text-[10px] uppercase opacity-50 mb-1">Current Year</p>
                    <p className="text-lg font-medium">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
