"use client";

import React from "react";
import { Download, CheckCircle2, Building2, Trees, Club, Home } from "lucide-react";
import { motion } from "framer-motion";
import { useLeadForm } from "./LeadFormContext";

const Overview = () => {
  const { openLeadForm } = useLeadForm();

  const highlights = [
    "Roman-themed luxury community on Kanakapura Road",
    "805 well-designed homes across approx. 18 acres",
    "100+ world-class indoor and outdoor amenities",
    "88% open space with 15 acres for landscape & amenities",
  ];

  const stats = [
    {
      icon: Building2,
      value: "805",
      label: "Premium Homes",
    },
    {
      icon: Trees,
      value: "88%",
      label: "Open Space",
    },
    {
      icon: Club,
      value: "42,000",
      label: "Sq.ft Clubhouse",
    },
    {
      icon: Home,
      value: "2-5 BHK",
      label: "Luxury Residences",
    },
  ];

  return (
    <section
      id="overview"
      className="relative mx-auto my-10 max-w-7xl overflow-hidden bg-white px-4 md:my-14"
    >
 
      <div className="relative z-10 mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="relative">
              <h2 className="section-eyebrow">The Grand Overview</h2>

              <h3 className="section-title mb-7">
                Roman-Inspired Luxury Living <br />
                at{" "}
                <span className="text-[#FCB33A] text-outline">
                  Casagrand Casablanca.
                </span>
              </h3>
            </div>

            <div className="mb-8 space-y-5 text-sm leading-7 text-zinc-600 md:text-base">
              <p>
                <span className="font-bold text-zinc-900">
                  Casagrand Casablanca
                </span>{" "}
                is a prestigious Roman-themed residential community located on
                Kanakapura Road, Bengaluru. Designed across approx. 18 acres,
                the project brings together grand architecture, spacious homes,
                landscaped open spaces, and premium lifestyle experiences.
              </p>

              <p>
                The community features thoughtfully planned 2, 3, 4 BHK
                apartments along with 5 BHK floor villas and penthouses. With
                100+ world-class amenities, 88% open space, and 15 acres
                dedicated to landscaping and recreational zones, Casablanca is
                crafted for a refined urban lifestyle.
              </p>
            </div>

            <div className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#FCB33A]"
                    size={20}
                  />
                  <span className="text-sm font-semibold leading-6 text-zinc-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

           

            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <button
                type="button"
                onClick={openLeadForm}
                className="cta-button w-full transition-all sm:w-auto"
              >
                <Download size={20} />
                <span>Download Brochure</span>
              </button>

              <p className="text-center text-xs font-mono leading-5 text-zinc-400 sm:text-left">
                PRM/KA/RERA/1251/310/PR/040524/006862
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="absolute -inset-4 rounded-[40px] bg-[#FCB33A]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-zinc-100 bg-white p-3  -[0_30px_100px_rgba(0,0,0,0.12)]">
              <img
                src="/assets/intro.webp"
                alt="Casagrand Casablanca Overview"
                className="h-auto w-full rounded-[28px] object-cover transition-transform duration-700 hover:scale-105"
              />

               
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview;