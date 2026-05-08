"use client";

import React, { useState } from "react";
import { Play, Film, ArrowRight } from "lucide-react";

const Videos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Top 6 Reasons to Buy",
      desc: "A quick overview of the project’s strongest lifestyle and investment highlights.",
      videoUrl: "/vid/Copy of Top 6 reasons Casablanca-phase 2.mp4",
      thumb: "/ol.png",
    },
    {
      title: "Phase 2 Walkthrough",
      desc: "Explore the Phase 2 project visuals through a detailed walkthrough video.",
      videoUrl: "/vid/Copy of CG_CASABLANCAPHASE 2-001.mp4",
      thumb: "/ol.png",
    },
  ];

  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-white px-4 py-16 md:py-24"
    >
      <div className="absolute left-0 top-0 h-[440px] w-[440px] rounded-full bg-[#FD9A00]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FD9A00]/20 bg-[#FD9A00]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#FD9A00]">
            <Film size={14} />
            Video Tour
          </span>

          <h2 className="section-title">
            Explore the Project Through{" "}
            <span className="text-[#FD9A00]">Videos</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 md:text-base">
            Watch curated videos that explain the project highlights,
            walkthrough experience, and reasons to choose Casagrand Casablanca.
          </p>

          <div className="mt-8 space-y-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`group w-full rounded-3xl border p-5 text-left transition-all duration-300 ${
                  activeTab === index
                    ? "border-[#FD9A00]/35 bg-[#FD9A00]/10 shadow-[0_18px_60px_rgba(253,154,0,0.12)]"
                    : "border-zinc-100 bg-white shadow-sm hover:border-[#FD9A00]/30"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition ${
                      activeTab === index
                        ? "bg-[#FD9A00] text-black"
                        : "bg-zinc-100 text-zinc-800 group-hover:bg-[#FD9A00] group-hover:text-black"
                    }`}
                  >
                    <Play size={20} fill="currentColor" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-zinc-950">
                      {tab.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-500">
                      {tab.desc}
                    </p>
                  </div>

                  <ArrowRight className="ml-auto mt-1 h-5 w-5 shrink-0 text-zinc-400 transition group-hover:text-[#FD9A00]" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[40px] bg-[#FD9A00]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[36px] border border-zinc-100 bg-white p-3 shadow-[0_30px_100px_rgba(0,0,0,0.15)]">
            <video
              key={tabs[activeTab].videoUrl}
              className="aspect-video w-full rounded-[28px] bg-black object-cover"
              controls
              playsInline
              poster={tabs[activeTab].thumb}
            >
              <source src={tabs[activeTab].videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#FD9A00]">
                Now Playing
              </p>
              <h3 className="mt-2 text-xl font-semibold text-zinc-950">
                {tabs[activeTab].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;