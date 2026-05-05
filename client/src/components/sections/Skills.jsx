import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'MongoDB', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
  ];

  const tools = ['Git', 'Docker', 'Postman', 'Figma', 'Vite', 'REST APIs', 'Linux'];

  return (
    <section id="skills" className="py-16 md:py-32 px-6 lg:px-12 border-t border-[#333] bg-[#0a0a0a] overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto w-full mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div className="space-y-12">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white mb-12">
              Core <span className="text-accent">Stack</span>
            </h2>
            
            {skills.map((skill, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xl font-bold uppercase tracking-widest text-white">{skill.name}</span>
                  <span className="text-accent font-black">{skill.level}%</span>
                </div>
                <div className="h-[2px] w-full bg-[#222] relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="absolute top-0 left-0 h-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-[#333] mb-12 text-right">
              Arsenal
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#111] border border-[#222] p-6 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-dark transition-all"
                >
                  <span className="font-bold tracking-widest uppercase">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Marquee effect */}
      <div className="w-full bg-[#0f0f0f] py-4 mt-auto">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-[#ff6b35] text-[14px] font-bold uppercase tracking-[3px]">
                MONGODB ◆ EXPRESS ◆ REACT ◆ NODE.JS
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;