import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-2/3"
        >
          <div className="inline-block border-2 border-accent text-accent px-4 py-2 font-bold tracking-widest text-xs uppercase mb-8">
            Student & Building
          </div>
          
          <h1 className="font-black leading-none tracking-tighter uppercase mb-4">
            <span className="block text-white text-[clamp(40px,12vw,96px)]">KARISHMA</span>
            <span className="block text-transparent text-[clamp(20px,6vw,48px)]" style={{ WebkitTextStroke: '2px #666' }}>
              DEVELOPER
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#888] font-bold max-w-2xl uppercase tracking-wider border-l-4 border-accent pl-6 mt-8">
            Full Stack Developer specializing in crafting robust, scalable, and visually bold digital experiences.
          </p>

          <div className="mt-12 mb-24 md:mb-32 flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
            <a 
              href="#projects" 
              className="bg-accent text-dark px-8 py-4 font-black uppercase tracking-widest hover:bg-white transition-colors border-2 border-accent hover:border-white h-[60px] flex items-center justify-center box-border min-h-[44px] w-full md:w-auto"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-[#444] text-white px-8 py-4 font-black uppercase tracking-widest hover:border-accent hover:text-accent transition-colors h-[60px] flex items-center justify-center box-border min-h-[44px] w-full md:w-auto"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden lg:flex w-1/3 flex-col items-end gap-6"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`h-[4px] bg-[#333]`} 
              style={{ width: `${100 - i * 15}%` }} 
            />
          ))}
          <div className="mt-12 text-right">
            <div className="text-[6rem] font-black leading-none text-[#222]">MERN</div>
            <div className="text-accent font-bold tracking-[0.5em] uppercase">Stack Mastery</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-[#333] bg-[#0f0f0f] grid grid-cols-2 md:flex md:flex-row">
        {[
          { num: "CS", label: "Degree" },
          { num: "2", label: "Projects Shipped" },
          { num: "MERN", label: "Stack" },
          { num: "∞", label: "Things to Learn" }
        ].map((stat, i) => (
          <div key={i} className={`flex-1 flex flex-col justify-center px-4 md:px-8 lg:px-12 py-4 md:py-6 border-[#333] ${i % 2 === 0 ? 'border-r' : 'border-r-0 md:border-r'} ${i < 2 ? 'border-b md:border-b-0' : ''} md:last:border-r-0`}>
            <div className="text-[#ff6b35] font-black text-2xl md:text-3xl mb-1">{stat.num}</div>
            <div className="text-[#444] text-[10px] md:text-xs font-bold tracking-widest uppercase">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;