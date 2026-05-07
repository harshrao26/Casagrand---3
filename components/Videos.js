"use client";

import React, { useState } from 'react';

const Videos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      title: "Top 6 Reasons to Buy", 
      videoUrl: "/vid/Copy of Top 6 reasons Casablanca-phase 2.mp4",
      thumb: "/ol.png"
    },
    { 
      title: "Phase 2 Walkthrough", 
      videoUrl: "/vid/Copy of CG_CASABLANCAPHASE 2-001.mp4",
      thumb: "/ol.png"
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
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
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
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white group bg-black">
            <video 
              key={tabs[activeTab].videoUrl}
              className="w-full h-full object-cover"
              controls
              playsInline
              poster={tabs[activeTab].thumb}
            >
              <source src={tabs[activeTab].videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
