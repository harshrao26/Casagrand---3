"use client";

import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Overview = () => {
  const highlights = [
    "7.32 Acres of Sprawling Community",
    "B+G+13 Floors Architectural Marvel",
    "429 Well-Designed Signature Homes",
    "Contemporary Elevation with Facade Lighting"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="overview">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-amber-600 mb-4">The Grand Overview</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight mb-8">
                A Prestigious Address <br />
                for the <span className="text-amber-500 text-outline">Privileged Few.</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed mb-10">
              <p>
                <span className="font-bold text-zinc-900">Casagrand Estancia</span> offers an exceptional lifestyle in the vibrant locale of Guduvanchery. It's not just a home; it's a statement of your success and taste.
              </p>
              <p>
                Our community is an engineering marvel, featuring contemporary elevations uplifted with dramatic facade lighting and beautifully crafted landscapes that soothe the soul.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-amber-500" size={20} />
                  <span className="font-semibold text-zinc-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-amber-600 transition-all shadow-xl shadow-zinc-200">
                <Download size={20} />
                <span>Download Brochure</span>
              </button>
              <p className="text-xs font-mono text-zinc-400">
                RERA: TN/01/Building/0123/2025
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="/assets/intro.webp" 
                alt="Project Overview" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-amber-500/20 rounded-[40px] -z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/5 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Overview;
