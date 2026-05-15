import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <span className="section-label mb-8">Contact</span>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter mb-12">
            Let's build <br />
            <span className="editorial-serif italic">The Future</span>
          </h2>

          <div className="space-y-8 mb-12">
            <a href="mailto:jeffrinmich@gmail.com" className="flex items-center gap-6 group interactive">
              <div className="w-12 h-12 border border-premium-border rounded-full flex items-center justify-center group-hover:bg-premium-black group-hover:text-white transition-all duration-300">
                <Mail size={20} />
              </div>
              <span className="text-lg md:text-xl font-medium">jeffrinmich@gmail.com</span>
            </a>
            <a href="tel:8438980831" className="flex items-center gap-6 group interactive">
              <div className="w-12 h-12 border border-premium-border rounded-full flex items-center justify-center group-hover:bg-premium-black group-hover:text-white transition-all duration-300">
                <Phone size={20} />
              </div>
              <span className="text-lg md:text-xl font-medium">8438980831</span>
            </a>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/jeffrin-i-686690384" },
              { icon: <Github size={18} />, href: "https://github.com/Jeffrin-I" },
              { icon: <Instagram size={18} />, href: "https://www.instagram.com/jeffmicheal657/" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-premium-border rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors interactive"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-premium-bg-alt p-8 md:p-12 rounded-3xl border border-premium-border"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-premium-border py-4 focus:outline-none focus:border-premium-black transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-premium-border py-4 focus:outline-none focus:border-premium-black transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-premium-border py-4 focus:outline-none focus:border-premium-black transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold group interactive"
            >
              Send Message
              <div className="w-10 h-10 bg-premium-black text-premium-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight size={16} />
              </div>
            </motion.button>
          </form>
        </motion.div>
      </div>

      <div className="mt-40 flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-premium-border">
         <div className="flex items-center gap-3">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
           <span className="text-[10px] uppercase tracking-widest font-medium text-premium-gray">Currently Available for New Projects</span>
         </div>
         <div className="flex gap-12">
            <span className="text-[10px] uppercase tracking-widest font-medium text-premium-gray">Made with Intelligence</span>
            <span className="text-[10px] uppercase tracking-widest font-medium text-premium-gray">Chennai, India</span>
         </div>
      </div>
    </section>
  );
}
