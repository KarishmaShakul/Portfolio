import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('/api/contact', formData);
      toast.success('MESSAGE TRANSMITTED SUCCESSFULLY');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error('FAILED TO SEND MESSAGE');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-6 lg:px-12 border-t border-[#333] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Initiate <span className="text-accent">Contact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[#666] text-xs font-bold tracking-widest uppercase">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-[#333] py-4 text-white font-bold text-xl focus:outline-none focus:border-accent transition-colors placeholder-[#333]"
                    placeholder="JANE DOE"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#666] text-xs font-bold tracking-widest uppercase">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-[#333] py-4 text-white font-bold text-xl focus:outline-none focus:border-accent transition-colors placeholder-[#333]"
                    placeholder="JANE@EXAMPLE.COM"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[#666] text-xs font-bold tracking-widest uppercase">Message</label>
                <textarea 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-[#333] py-4 text-white font-bold text-xl focus:outline-none focus:border-accent transition-colors resize-none placeholder-[#333]"
                  placeholder="WHAT'S ON YOUR MIND?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-dark py-6 font-black text-xl uppercase tracking-widest hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-12"
          >
            <div>
              <h4 className="text-[#666] text-xs font-bold tracking-widest uppercase mb-4">Direct Line</h4>
              <a href="mailto:hello@example.com" className="text-3xl font-black text-white hover:text-accent transition-colors">
                hello@example.com
              </a>
            </div>
            
            <div>
              <h4 className="text-[#666] text-xs font-bold tracking-widest uppercase mb-4">Socials</h4>
              <div className="flex flex-col gap-4">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="text-xl font-bold text-[#aaa] hover:text-white flex justify-between items-center group border-b border-[#222] pb-4">
                    <span className="uppercase tracking-widest">{social}</span>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                      [↗]
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-12 border-t border-[#222]">
              <p className="text-[#444] font-bold text-sm tracking-widest uppercase">
                © {new Date().getFullYear()} KARISHMA. <br/>ALL RIGHTS RESERVED.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;