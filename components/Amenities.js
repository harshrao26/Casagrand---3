"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Trophy,
  ShoppingCart,
  Flame,
  Dumbbell,
  Layout,
  Waves,
  Trees,
  Baby,
  Gamepad2,
  Volleyball,
  Film,
  Dog,
  Car,
  Zap,
  Coffee,
  BookOpen,
  BriefcaseBusiness,
  Scissors,
  HeartPulse,
  ShieldCheck,
  Footprints,
  Bath,
  CircleDot,
  Bike,
  ChevronLeft,
  ChevronRight,
  Users,
Flower2,
TreePalm,
} from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Trophy, label: "Golf Putting" },
    { icon: ShoppingCart, label: "Convenience Store" },
    { icon: Flame, label: "Barbeque Setup" },
    { icon: Dumbbell, label: "Gym" },
    { icon: Layout, label: "Courtyards" },
    { icon: Waves, label: "Swimming Pool" },
    { icon: Trees, label: "Forest Trail" },
    { icon: Baby, label: "Kids Play Area" },
    { icon: Gamepad2, label: "Games Room" },
    { icon: Volleyball, label: "Sports Court" },
    { icon: Film, label: "Sky Cinema" },
    { icon: Dog, label: "Pet Park" },
    { icon: Car, label: "Car Wash Bay" },
    { icon: Zap, label: "EV Charging" },
    { icon: Coffee, label: "Coffee Shop" },
    { icon: BookOpen, label: "Library" },
    { icon: BriefcaseBusiness, label: "Co-working Space" },
    { icon: Scissors, label: "Salon & Spa" },
    { icon: HeartPulse, label: "Clinic & Pharmacy" },
    { icon: ShieldCheck, label: "CCTV Security" },
    { icon: Footprints, label: "Walking Trail" },
    { icon: Bath, label: "Jacuzzi & Steam" },
    { icon: CircleDot, label: "Cricket Net" },
    { icon: Bike, label: "Skating Rink" },
    { icon: Users, label: "Guest Rooms" },
{ icon: Flower2, label: "Floral Garden" },
{ icon: TreePalm, label: "Palm Garden" },
    
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(amenities.length / itemsPerPage);
  const [activePage, setActivePage] = useState(0);

  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) =>
      amenities.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
    );
  }, [totalPages]);

  const nextSlide = () => {
    setActivePage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setActivePage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-white px-4 py-16 md:py-24"
    >
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#FCB33A]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[#FCB33A]/20 bg- [#FCB33A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#FCB33A]">
            100+ Lifestyle Amenities
          </span>

          <h2 className="section-title secti on-header-center">
            Elite Living <span className="text-[#FCB33A]">Amenities</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
            A premium collection of lifestyle, wellness, sports, convenience,
            and leisure amenities crafted for modern community living.
          </p>
        </div>


        <div className="overflow-hidden rounded-[32px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="w-full shrink-0">
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="group flex min-h-[150px] flex-col items-center justify-center rounded-3xl   border-zinc-100 bg-white p-5 text-center  -[0_18px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FCB33A]/30 hover:bg-[#FCB33A]/5 border-2"
                      >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FCB33A]/10 text-[#FCB33A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FCB33A] group-hover:text-white">
                          <Icon className="h-7 w-7" strokeWidth={1.8} />
                        </div>

                        <p className="text-xs font-bold uppercase leading-5  ] text-zinc-800">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>




        <div className="mt-6 flex items-center justify-center gap-3">
          
          <div className="flex items-center gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActivePage(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activePage === index
                    ? "w-8 bg-[#FCB33A]"
                    : "w-2.5 bg-zinc-300"
                }`}
              />
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Amenities;