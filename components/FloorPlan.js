"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const floorPlanData = {
  "1 BHK": [
    {
      title: "1 Bedroom Apartment (Type A)",
      type: "1 BHK + Studio",
      carpetArea: "647 SQ.FT",
      balconyArea: "93 SQ.FT",
      totalArea: "740 SQ.FT",
      img: "/assets/3.jpg"
    },
    {
      title: "1 Bedroom Apartment (Type B)",
      type: "1 BHK",
      carpetArea: "622 SQ.FT",
      balconyArea: "50 SQ.FT",
      totalArea: "672 SQ.FT",
      img: "/assets/2.jpg"
    }
  ],
  "2 BHK": [
    {
      title: "2 Bedroom Apartment (Type A)",
      type: "2 BHK",
      carpetArea: "950 SQ.FT",
      balconyArea: "100 SQ.FT",
      totalArea: "1050 SQ.FT",
      img: "/assets/2-2.jpg"
    }
  ],
  "3 BHK": [
    {
      title: "3 Bedroom Apartment (Type A)",
      type: "3 BHK",
      carpetArea: "1250 SQ.FT",
      balconyArea: "120 SQ.FT",
      totalArea: "1370 SQ.FT",
      img: "/assets/13.jpg"
    }
  ],
  "4 BHK": [
    {
      title: "4 Bedroom Apartment (Type A)",
      type: "4 BHK",
      carpetArea: "1650 SQ.FT",
      balconyArea: "150 SQ.FT",
      totalArea: "1800 SQ.FT",
      img: "/assets/4-1.jpg"
    }
  ]
};

const FloorPlan = () => {
  const [activeTab, setActiveTab] = useState("1 BHK");

  return (
    <section className="pb-20 pt-10 bg-white" id="floorplan">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl text-black font-extrabold text-black mb-4 text-center">Floor <span className="text-amber-500">Plan</span></h2>
        
        <ul className="floorplan-tab-header mb-12">
          {Object.keys(floorPlanData).map((tab) => (
            <li key={tab}>
              <button 
                onClick={() => setActiveTab(tab)}
                className={`nav-link pb-2 transition-all ${activeTab === tab ? 'active border-b-2 border-black font-bold' : 'opacity-60 hover:opacity-100'}`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <div className="floorplan-content">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="floorplanSwiper"
          >
            {floorPlanData[activeTab].map((plan, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-50 p-8 rounded-3xl">
                  <div className="md:w-1/2 text-left space-y-6">
                    <h3 className="text-2xl font-bold text-[var(--casablanca-brown)]">{plan.title}</h3>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">TYPE</p>
                        <p className="font-bold">{plan.type}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">CARPET AREA</p>
                        <p className="font-bold">{plan.carpetArea}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">BALCONY AREA</p>
                        <p className="font-bold">{plan.balconyArea}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">TOTAL CARPET AREA</p>
                        <p className="font-bold">{plan.totalArea}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <img src={plan.img} alt={plan.title} className="w-full h-auto" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan;
