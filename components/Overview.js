"use client";

import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLeadForm } from './LeadFormContext';

const Overview = () => {
  const { openLeadForm } = useLeadForm();

  const highlights = [
    "Superior Villa Plots in a Gated Community",
    "Prime Location in Oragadam",
    "Well-Planned Infrastructure & Roads",
    "Modern Amenities & Lush Green Spaces"
  ];

  return (
    <section className="section-shell bg-white overflow-hidden" id="overview">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center content-grid">
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
               <h2 className="section-eyebrow">The Grand Overview</h2>
              <h3 className="section-title mb-8">
                A Prestigious Address <br />
                for the <span className="text-amber-500 text-outline">Privileged Few.</span>
              </h3>
            </div>
            
            <div className="space-y-5 md:space-y-6 section-copy mb-10">
              <p>
                <span className="font-bold text-zinc-900">Casagrand Casablanca </span> offers an exceptional lifestyle with premium villa plots in the thriving hub of Oragadam. It&apos;s the perfect canvas for your dream home.
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
              <button
                type="button"
                onClick={openLeadForm}
                className="cta-button w-full sm:w-auto transition-all shadow-xl shadow-zinc-200"
              >
                <Download size={20} />
                <span>Download Brochure</span>
              </button>
              <p className="text-xs font-mono text-zinc-400">
                PRM/KA/RERA/1251/310/PR/040524/006862
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
            <div className="relative z-10  ">
              <img 
                src="/assets/intro.webp" 
                alt="Project Overview" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
                       </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Overview;
