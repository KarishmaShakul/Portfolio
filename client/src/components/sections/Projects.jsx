import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error("Failed to fetch projects, using fallbacks.", err);
        // Fallback for visual demo if API isn't up
        setProjects([
          { _id: '1', title: 'E-Commerce Platform', description: 'Full-stack MERN application with Stripe integration and admin dashboard.', techStack: ['React', 'Node', 'MongoDB'], liveLink: '#', githubLink: '#' },
          { _id: '2', title: 'Task Manager App', description: 'Real-time collaborative task management tool using Socket.io.', techStack: ['React', 'Express', 'Socket.io'], liveLink: '#', githubLink: '#' },
          { _id: '3', title: 'Portfolio Template', description: 'Brutalist portfolio template built for creative professionals.', techStack: ['Vite', 'Tailwind', 'Framer'], liveLink: '#', githubLink: '#' },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-32 px-6 lg:px-12 border-t border-[#333] bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none"
          >
            Selected <br/> <span className="text-accent">Works</span>
          </motion.h2>
          <div className="text-[#666] font-bold uppercase tracking-widest text-sm max-w-xs text-right">
            A curated collection of recent development projects.
          </div>
        </div>

        {loading ? (
          <div className="text-accent font-black text-2xl uppercase tracking-widest animate-pulse">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <motion.div 
                key={project._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col lg:flex-row border border-[#333] hover:border-accent transition-colors bg-[#111]"
              >
                {/* Project Image Placeholder - using brutalist solid color or pattern */}
                <div className="w-full lg:w-2/5 aspect-video lg:aspect-auto bg-[#1a1a1a] border-b lg:border-b-0 lg:border-r border-[#333] group-hover:border-accent flex items-center justify-center p-6 md:p-8 overflow-hidden relative">
                  <div className="text-[#333] text-9xl font-black absolute opacity-20 transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl font-black text-white relative z-10 text-center uppercase tracking-tight">{project.title}</h3>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-3/5 p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter hidden lg:block">{project.title}</h3>
                    <p className="text-[#aaa] text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-12">
                      {project.techStack?.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-[#222] text-[#888] text-xs font-bold uppercase tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-6 mt-auto">
                    <a href={project.liveLink || '#'} target="_blank" rel="noreferrer" className="text-accent font-black uppercase tracking-widest text-sm hover:underline underline-offset-8">
                      Live View [↗]
                    </a>
                    <a href={project.githubLink || '#'} target="_blank" rel="noreferrer" className="text-white font-black uppercase tracking-widest text-sm hover:text-accent transition-colors">
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;