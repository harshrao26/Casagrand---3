"use client";

import React, { useState } from 'react';

const Videos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      title: "Top Reasons to Buy", 
      embedUrl: "https://www.youtube.com/embed/ABQox8jMetc?si=e3_yQdZNM79PoGbm",
      thumb: "/assets/Screenshot-2025-09-22-115220.png"
    },
    { 
      title: "Walkthrough", 
      embedUrl: "https://www.youtube.com/embed/LCiA3j8SpW4?si=DJUeuEJmsefrJiYy",
      thumb: "/assets/sXsl8PCXbQ8-HD.jpg"
    }
  ];

  return (
    <section className="section-shell bg-white" id="videos">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-8">Visual <span className="text-amber-500">Experience</span></h2>
        
        <div className="max-w-4xl w-full md:w-auto mx-auto">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 md:mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  activeTab === index 
                    ? "bg-[var(--cta-color)] text-zinc-900 shadow-lg" 
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Video Container */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
            <iframe 
              src={tabs[activeTab].embedUrl}
              className="w-full h-full"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
