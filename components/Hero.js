"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, User, Send } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[72vh] w-full overflow-hidden pt-20 md:h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-out"
          style={{
            backgroundImage: "url('/prop/Copy of Main Entrance.webp')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />
      </div>

      {/* Bottom Horizontal Form */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-5 md:pb-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-white/20 bg-white/95 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl md:rounded-full md:p-3">
          <form className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center">
            {/* Name */}
            <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3">
              <User className="h-5 w-5 shrink-0 text-[#FD9A00]" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent text-sm font-medium text-zinc-900 outline-none placeholder:text-zinc-400"
              />
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3">
              <Phone className="h-5 w-5 shrink-0 text-[#FD9A00]" />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-transparent text-sm font-medium text-zinc-900 outline-none placeholder:text-zinc-400"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3">
              <Mail className="h-5 w-5 shrink-0 text-[#FD9A00]" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent text-sm font-medium text-zinc-900 outline-none placeholder:text-zinc-400"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-[#FD9A00] px-7 py-3.5 text-sm font-bold uppercase tracking-[1px] text-black transition hover:bg-zinc-950 hover:text-white"
            >
              <Send className="h-4 w-4" />
              Enquire Now
            </button>
          </form>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-32 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 p-1">
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;