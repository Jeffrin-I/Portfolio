import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Ensure dark mode is removed if it was previously set
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-premium-white/80 backdrop-blur-md py-4 border-b border-premium-border' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-sm font-bold tracking-[0.3em] uppercase"
          whileHover={{ opacity: 0.5 }}
        >
          Portfolio / 2026
        </motion.a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          
          <motion.a
            href="#contact"
            className="text-[11px] font-semibold uppercase tracking-widest bg-premium-black text-white px-5 py-1.5 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Available for hire
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
