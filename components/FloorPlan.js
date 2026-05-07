"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const floorPlanData = {
  "2 BHK": [
    {
      title: "2 Bedroom Apartment (Type A)",
      type: "2 BHK",
      carpetArea: "950 SQ.FT",
      balconyArea: "100 SQ.FT",
      totalArea: "1050 SQ.FT",
      img: "/assets/2-2.jpg",
    },
  ],

  "3 BHK": [
    {
      title: "3 Bedroom Apartment (Type A)",
      type: "3 BHK",
      carpetArea: "1250 SQ.FT",
      balconyArea: "120 SQ.FT",
      totalArea: "1370 SQ.FT",
      img: "/assets/13.jpg",
    },
  ],

  "4 BHK": [
    {
      title: "4 Bedroom Apartment (Type A)",
      type: "4 BHK",
      carpetArea: "1550 SQ.FT",
      balconyArea: "150 SQ.FT",
      totalArea: "1700 SQ.FT",
      img: "/assets/14.jpg",
    },
  ],
};

const FloorPlan = () => {
  const [activeTab, setActiveTab] = useState("2 BHK");

  return (
    <section
      className="section-shell  "
      id="floorplan"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
           

          <h2 className="section-title">
            Floor <span className="text-amber-500">Plans</span>
          </h2>

          <p className="section-copy mt-3 max-w-xl mx-auto">
            Spacious layouts with smart interiors and modern living spaces.
          </p>
        </div>

        {/* Tabs */}
          <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
          {Object.keys(floorPlanData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-5 py-2 rounded-xl transition-all duration-300 text-sm font-medium border ${
                activeTab === tab
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-white text-zinc-700 border-zinc-200 hover:border-amber-400 hover:text-amber-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Swiper */}
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="pb-10"
        >
          {floorPlanData[activeTab].map((plan, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white r ">

                <div className="grid lg:grid-cols-2">

                  {/* Left */}
                  <div className="  flex flex-col justify-center">

                   
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 leading-snug mb-5">
                      {plan.title}
                    </h3>

                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-3">

                      <div className="  rounded-2xl p-4 border border-zinc-100">
                        <p className="text-[10px] uppercase tracking-[2px] text-gray-400 mb-1">
                          Type
                        </p>

                        <h4 className="text-sm md:text-base font-semibold text-zinc-900">
                          {plan.type}
                        </h4>
                      </div>

                      <div className="rounded-2xl p-4 border border-zinc-100">
                        <p className="text-[10px] uppercase tracking-[2px] text-gray-400 mb-1">
                          Carpet Area
                        </p>

                        <h4 className="text-sm md:text-base font-semibold text-zinc-900">
                          {plan.carpetArea}
                        </h4>
                      </div>

                      <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100">
                        <p className="text-[10px] uppercase tracking-[2px] text-gray-400 mb-1">
                          Balcony Area
                        </p>

                        <h4 className="text-sm md:text-base font-semibold text-zinc-900">
                          {plan.balconyArea}
                        </h4>
                      </div>

                      <div className="bg-amber-500 rounded-2xl p-4">
                        <p className="text-[10px] uppercase tracking-[2px] text-white/70 mb-1">
                          Total Area
                        </p>

                        <h4 className="text-sm md:text-base font-semibold text-white">
                          {plan.totalArea}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className=" p-3 md:p-5 flex items-center justify-center">

                    <div className="w-full rounded-2xl overflow-hidden bg-white border border-zinc-200">

                      <img
                        src={plan.img}
                        alt={plan.title}
                        className="w-full h-auto object-contain"
                      />

                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FloorPlan;
