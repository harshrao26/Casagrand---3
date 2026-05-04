"use client";

import React from 'react';
import { MapPin, School, GraduationCap, Hospital, Building2, Store, Plane, Train } from 'lucide-react';

const Location = () => {
  const essentials = [
    { icon: <Building2 />, label: "SIPCOT Industrial Hub", dist: "5 mins" },
    { icon: <Building2 />, label: "Renault Nissan / Daimler", dist: "10 mins" },
    { icon: <School />, label: "Sethu Bhaskara School", dist: "12 mins" },
    { icon: <Hospital />, label: "Jaya Hospital", dist: "15 mins" },
    { icon: <Store />, label: "Hiranandani Parks", dist: "10 mins" },
    { icon: <Train />, label: "Vandalur Railway Station", dist: "25 mins" },
    { icon: <Plane />, label: "Chennai Intl Airport", dist: "45 mins" },
  ];

  return (
    <section className="py-24" id="location">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl text-black font-extrabold text-black mb-4 text-center mb-16">Elite <span className="text-amber-500">Nearby Essentials</span></h2>
        
        <div className="grid lg:grid-cols-1 gap-12 items-start">
          {/* Map Side */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8004.399820820603!2d77.6154667!3d13.1101137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1986bd52076d%3A0x5e02cedde92bff31!2sCasagrand%20Estancia!5e1!3m2!1sen!2sin!4v1758084870128!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125"
            ></iframe>
          </div>

          {/* List Side */}
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-4">
            {essentials.map((item, index) => (
              <div 
                key={index} 
                className="   items-center p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mr-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon, { size: 20 })}
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900 leading-tight mb-1">{item.label}</p>
                  <p className="text-xs font-medium text-amber-700 uppercase tracking-widest">{item.dist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
