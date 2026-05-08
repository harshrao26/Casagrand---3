"use client";

import React from "react";
import {
  School,
  Hospital,
  Building2,
  Train,
  MapPin,
  Clock,
} from "lucide-react";

const Location = () => {
  const essentials = [
    { icon: Building2, label: "Forum Mall", dist: "5 mins" },
    { icon: Train, label: "Vajarahalli Metro Station", dist: "5 mins" },
    { icon: School, label: "JP Nagar, Global Tech Park", dist: "10 mins" },
    { icon: Hospital, label: "Electronic City", dist: "20 mins" },
  ];

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 md:py-24"
    >
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#FCB33A]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[#FCB33A]">
              Location Advantage
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-4xl">
              Elite Nearby{" "}
              <span className="text-[#FCB33A]">Essentials</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-gray-400 md:ml-auto md:text-right md:text-base">
            Enjoy quick access to metro connectivity, shopping destinations,
            business hubs, and essential city conveniences.
          </p>
        </div>

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <div className="relative h-[380px] overflow-hidden rounded-[28px] md:h-[560px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249596.35857717888!2d77.542995!3d12.855327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae416fa3f56111%3A0x71b84726cf41200a!2sCasagrand%20Casablanca!5e1!3m2!1sen!2sin!4v1778133269401!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale contrast-125"
            />

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/45 p-5 text-center backdrop-blur-xl md:text-left">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[3px] text-[#FCB33A]">
                    Project Location
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Casagrand Casablanca
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-[#FCB33A] px-5 py-3 text-sm font-bold text-black">
                  <MapPin size={17} />
                  <a href="https://maps.google.com/?cid=8194377754012098570&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed" target="_blank">View Location</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {essentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FCB33A]/40 hover:bg-[#FCB33A]/10"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#FCB33A] transition-all duration-300 group-hover:bg-[#FCB33A] group-hover:text-black">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <p className="text-sm font-bold uppercase leading-5 tracking-[1.2px] text-white">
                  {item.label}
                </p>

                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[1.5px] text-[#FCB33A]">
                  <Clock size={13} />
                  {item.dist}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Location;