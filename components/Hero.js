"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-out scale-105"
          style={{ 
            backgroundImage: "url('/assets/main_banner-scaled.webp')",
          }}
        />
        {/* Modern Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md border border-amber-500/30">
              New Launch in Guduvanchery
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6">
              Elite Living <br />
              <span className="text-amber-500">Redefined.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed">
              Experience the grandest lifestyle at Casagrand Estancia. 
              Beautifully designed homes with 50+ world-class amenities 
              starting from <span className="text-white font-bold">₹45 Lakhs*</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-xl shadow-amber-900/20 group">
                <span>Download Brochure</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-2xl font-bold flex items-center justify-center space-x-2 backdrop-blur-md transition-all">
                <span>View Virtual Tour</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
        <span className="text-xs uppercase tracking-widest mb-2 font-bold">Scroll to Explore</span>
        <MousePointer2 size={20} />
      </div>

      {/* Stats overlay */}
      <div className="hidden lg:flex absolute bottom-20 right-10 flex-col space-y-8">
        <div className="text-right">
          <p className="text-4xl font-bold text-white">50+</p>
          <p className="text-xs text-zinc-400 uppercase tracking-widest">World Class Amenities</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold text-white">35+</p>
          <p className="text-xs text-zinc-400 uppercase tracking-widest">Acre Township</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold text-white">450+</p>
          <p className="text-xs text-zinc-400 uppercase tracking-widest">Happy Families</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
