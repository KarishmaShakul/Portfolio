import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-32 px-6 lg:px-12 border-t border-[#333] bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Who <span className="text-accent">Am I?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <p className="text-xl md:text-2xl text-[#aaa] font-medium leading-relaxed">
              I am a passionate software developer who thrives on solving complex problems and turning ideas into robust, scalable applications. With a foundation in the MERN stack, I build digital experiences that are as performant under the hood as they are striking on the surface.
            </p>
            <p className="text-lg text-[#666] leading-relaxed">
              My approach is rooted in brutalism—cutting out the noise and focusing on pure functionality combined with bold design. I don't just write code; I architect solutions.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {['Frontend', 'Backend', 'Database', 'API Design'].map((tag) => (
                <span key={tag} className="px-4 py-2 border border-[#444] text-[#888] font-bold text-sm tracking-widest uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: "Education", value: "B.E CS", sub: "Graduating soon" },
              { title: "Location", value: "India", sub: "Available Worldwide" },
              { title: "Focus", value: "Full Stack", sub: "MERN Ecosystem" },
              { title: "Status", value: "Building", sub: "Open to Work" }
            ].map((card, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-[#333] p-8 hover:border-accent transition-colors group">
                <div className="text-accent text-sm font-bold tracking-widest uppercase mb-4">{card.title}</div>
                <div className="text-3xl font-black text-white group-hover:text-white mb-2">{card.value}</div>
                <div className="text-[#666] font-bold uppercase text-xs tracking-wider">{card.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;