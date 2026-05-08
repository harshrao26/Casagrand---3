"use client";

import React, { useEffect, useState } from "react";
import {
  Download,
  CheckCircle2,
  Building2,
  Trees,
  Club,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLeadForm } from "./LeadFormContext";

const galleryImages = [
  {
    src: "/prop/Copy of Aerial Night.webp",
    tag: "Aerial View",
    title: "Grand Night-Time Community View",
    desc: "A beautifully planned Roman-inspired residential community with elegant lighting and premium open spaces.",
  },
  {
    src: "/prop/Copy of Clubhouse Dusk.webp",
    tag: "Luxury Clubhouse",
    title: "Roman-Inspired Clubhouse",
    desc: "Premium lifestyle spaces crafted for recreation, wellness, celebrations, and grand community experiences.",
  },
  {
    src: "/prop/Copy of Main Entrance.webp",
    tag: "Grand Arrival",
    title: "Iconic Main Entrance",
    desc: "A statement arrival experience designed with timeless architecture and a luxurious first impression.",
  },
  {
    src: "/prop/Copy of Podium Dusk (1).webp",
    tag: "Podium Lifestyle",
    title: "Elevated Podium Spaces",
    desc: "Beautifully designed leisure zones with landscaped decks, outdoor seating, and refined community areas.",
  },
   
];

const OverviewImageStack = () => {
  const [cards, setCards] = useState(galleryImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[620px] sm:h-[500px] lg:h-[560px]">
      {cards.slice(0, 3).map((card, index) => {
        const isFront = index === 0;

        const positions = [
          {
            x: 0,
            y: 92,
            rotate: 2,
            scale: 1,
            opacity: 1,
            zIndex: 30,
          },
          {
            x: 58,
            y: 42,
            rotate: 2,
            scale: 0.94,
            opacity: 0.72,
            zIndex: 20,
          },
          {
            x: 118,
            y: 0,
            rotate: 2,
            scale: 0.88,
            opacity: 0.5,
            zIndex: 10,
          },
        ];

        return (
          <motion.div
            key={card.src}
            className="absolute left-0 top-0 h-[315px] w-[88%] overflow-hidden rounded-[26px] bg-zinc-900 shad ow-[0_35px_90px_rgba(0,0,0,0.28)] sm:h-[390px] lg:h-[430px]"
            animate={positions[index]}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={card.src}
              alt={card.title}
              className="h-full w-full object-cover"
            />

            {/* <div className="absolute inset-0 bg-black/30" /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030614]/95 via-[#030614]/35 to-black/10" />

            {isFront && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="absolute bottom-8 left-6 right-6 text-white sm:bottom-10 sm:left-8 sm:right-8"
              >
                

                {/* <span className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-white/90 backdrop-blur-md">
                  {card.tag}
                </span> */}

                <h4 className="max-w-[480px] text-xl font-bold leading-tight tracking-[-0.5px] text-white lg:text-2xl ">
                  {card.title}
                </h4>

               
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

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
      className="relative mx-auto my-10 max-w-7xl overflow-hidden px-4 md:my-14"
    >
      <div className="relative z-10 mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
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
                <span className="text-[var(--accent)] text-outline">
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
                    className="mt-0.5 shrink-0 text-[var(--accent)]"
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

              <p className="text-center font-mono text-xs leading-5 text-zinc-400 sm:text-left">
                PRM/KA/RERA/1251/310/PR/040524/006862
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-visible"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <OverviewImageStack />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview;