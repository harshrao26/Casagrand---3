"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Users, Trophy, Sparkles, ArrowRight } from 'lucide-react';
import { useLeadForm } from './LeadFormContext';

const Clubhouse = () => {
  const { openLeadForm } = useLeadForm();

  const features = [
    { icon: <Coffee size={20} />, text: "Gourmet Cafe & Lounge" },
    { icon: <Users size={20} />, text: "Social Gathering Spaces" },
    { icon: <Trophy size={20} />, text: "Indoor Sports Arena" },
    { icon: <Sparkles size={20} />, text: "Terrace Garden & Deck" },
  ];

  return (
    <section 
      className="relative min-h-[60vh] flex items-center section-shell overflow-hidden" 
      id="communities"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/prop/Copy of Aerial Night.webp')" }}
      />
      
      {/* Multi-layered Overlays */}
      <div className="absolute inset-0 bg-zinc-950/10 z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/10 to-transparent z-2" />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30 z-2" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center content-grid">
          
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            

            <h2 className="section-title section-title-on-dark mb-8">
              27 Acres. <br />
              of Pure <span className="text-amber-500 italic">Grandeur.</span>
            </h2>

            <p className="section-copy section-copy-on-dark mb-10 max-w-2xl font-medium">
              Step into a world where luxury meets leisure. Our exquisitely designed clubhouse is the soul of the community, 
              featuring world-class indoor and terrace amenities that overlook the grand swimming pool and central podium.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-4 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-white font-bold md:text-lg group-hover:text-amber-400 transition-colors">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <button
              type="button"
              onClick={openLeadForm}
              className="cta-button transition-all duration-500 group shadow-2xl shadow-white/5"
            >
              <span>EXPLORE ALL AMENITIES</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
 

        </div>
      </div>

      {/* Decorative side accent */}
      <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Clubhouse;
