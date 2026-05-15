import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  };

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/jeffrin-i-686690384" },
    { icon: <Github size={18} />, href: "https://github.com/Jeffrin-I" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/jeffmicheal657/" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-premium-black/40 block">
            Student / Engineering
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-serif italic leading-[0.8] tracking-tighter mb-4">
          Jeffrin I.
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl font-medium tracking-tight text-premium-black/60 mb-12">
          AIML Student @ Saveetha Engineering College
        </motion.p>

        <motion.div variants={itemVariants} className="relative inline-block mb-16">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-premium-border p-1">
            <div className="w-full h-full rounded-full bg-premium-bg-alt grayscale contrast-125 overflow-hidden transition-all duration-700">
               <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200" 
                alt="Jeffrin I"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="max-w-md mx-auto text-premium-gray text-sm md:text-base leading-relaxed mb-12">
          Building AI products & modern digital experiences. Currently exploring the intersection of machine learning and software engineering.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-premium-border rounded-full flex items-center justify-center text-premium-gray hover:bg-premium-black hover:text-white transition-all duration-300 interactive"
              whileHover={{ y: -5 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase tracking-[0.3em] font-medium text-premium-gray">Scroll</span>
        <ArrowDown size={14} className="text-premium-gray" />
      </motion.div>
    </section>
  );
}
