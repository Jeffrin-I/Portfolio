import { motion } from 'motion/react';

const stats = [
  { label: "Projects Completed", value: "2", suffix: "" },
  { label: "Hackathons Participated", value: "1", suffix: "" },
  { label: "Certifications Earned", value: "3", suffix: "" },
  { label: "Years of Learning", value: "0.5", suffix: "+" },
];

export default function Achievements() {
  return (
    <section className="py-24 md:py-40 bg-premium-black text-premium-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="text-left md:text-center"
            >
              <div className="text-5xl md:text-7xl font-serif italic mb-4">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
