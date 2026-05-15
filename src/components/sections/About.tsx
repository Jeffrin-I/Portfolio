import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Side Label */}
        <div className="md:col-span-1 hidden md:flex flex-col items-center pt-8">
          <span className="section-label">Biography</span>
        </div>

        {/* Content */}
        <div className="md:col-span-10 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight mb-12">
              Engineering student specialized in Artificial Intelligence and Machine Learning.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-widest text-premium-black/40 font-bold">About Me</p>
                <p className="text-premium-black/80 text-base leading-relaxed">
                  Passionate about building and deploying intelligent systems that bridge the gap between complex data and user experience. Currently focusing on developing robust ML architectures at Saveetha Engineering College.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-premium-black/40 mb-4">Interests & Focus</h4>
                  <ul className="text-sm text-premium-black/60 space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full" />
                      Neural Networks & Logic
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full" />
                      Deployment Architecture
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full" />
                      Algorithmic Efficiency
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Extra Vertical Label for Right side */}
        <div className="md:col-span-1 hidden md:flex flex-col items-center pt-8">
          <span className="section-label">Vision</span>
        </div>
      </div>
    </section>
  );
}
