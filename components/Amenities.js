"use client";

import React from 'react';
import { 
  Trophy, 
  ShoppingCart, 
  Flame, 
  Dumbbell, 
  Layout, 
  Waves 
} from 'lucide-react';

const Amenities = () => {
  const eliteAmenities = [
    { icon: <Trophy className="w-8 h-8" />, label: "Golf Course" },
    { icon: <ShoppingCart className="w-8 h-8" />, label: "Super Market" },
    { icon: <Flame className="w-8 h-8" />, label: "Barbeque Setup" },
    { icon: <Dumbbell className="w-8 h-8" />, label: "Gym" },
    { icon: <Layout className="w-8 h-8" />, label: "Courtyards" },
    { icon: <Waves className="w-8 h-8" />, label: "Swimming Pool" },
  ];

  return (
    <section className="py-20 bg-white" id="amenities">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl text-black font-extrabold text-black mb-4 text-center mb-16">Elite Living <span className="text-amber-500">Amenities</span> </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {eliteAmenities.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all group shadow-sm hover:shadow-md"
            >
              <div className="mb-4 text-amber-600 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-zinc-800 uppercase tracking-wider text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
