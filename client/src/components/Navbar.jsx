import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-[60px] md:left-[80px] right-0 z-40 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-2xl font-black tracking-tighter text-white">
          K<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-bold tracking-widest text-[#888] hover:text-accent transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#0f0f0f] flex flex-col items-center justify-center z-30"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="py-6 text-center text-2xl font-black tracking-widest text-white hover:text-accent transition-colors uppercase w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="mt-8 border-2 border-accent text-accent px-8 py-4 font-black uppercase tracking-widest hover:bg-accent hover:text-dark transition-colors min-h-[44px] flex items-center justify-center"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;