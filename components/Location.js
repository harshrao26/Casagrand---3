"use client";

import React from 'react';
import { MapPin, School, GraduationCap, Hospital, Building2, Store, Plane, Train } from 'lucide-react';

const Location = () => {
  const essentials = [
    { icon: <School />, label: "National Public School Kogilu", dist: "1.5 km" },
    { icon: <GraduationCap />, label: "Reva University", dist: "3.2 Km" },
    { icon: <Hospital />, label: "SPARSH Hospital Yelahanka", dist: "4.7 Km" },
    { icon: <Building2 />, label: "Manyata Tech Park", dist: "3 Km" },
    { icon: <Store />, label: "RMZ Galleria Mall", dist: "5.7 Km" },
    { icon: <Plane />, label: "Airport (KIAB)", dist: "20 km" },
    { icon: <Train />, label: "Upcoming Kogilu Metro", dist: "2.8 km" },
  ];

  return (
    <section className="py-24 bg-zinc-50" id="location">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">Vibrant Living, Nearby Essentials</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
          <div className="grid sm:grid-cols-2 gap-4">
            {essentials.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all group"
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
