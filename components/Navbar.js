"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Phone, Home, MapPin } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openLeadForm } = useLeadForm();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Overview", href: "#overview" },
     { label: "Gallery", href: "#gallery" },
    { label: "Amenities", href: "#amenities" },
    { label: "Pricing", href: "#pricing" },
    { label: "Location", href: "#location" },
  ];

  const closeMenu = () => setIsOpen(false);

  const openMobileLeadForm = () => {
    closeMenu();
    openLeadForm();
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-zinc-200 bg-white/95 py-3 shadow-sm backdrop-blur-xl"
          : "border-white/30 bg-white/80 py-4 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-3">
          <img src="/assets/cg_logo.png" alt="Casagrand" className="h-10" />

           
        </a>

        <ul className="hidden items-center gap-1 rounded-full bg-zinc-100 p-1 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[1.5px] text-zinc-700 transition hover:bg-white hover:text-[#FD9A00] hover:shadow-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
            <MapPin size={15} className="text-[#FD9A00]" />
            <a target="blank" href="https://www.google.com/maps?cid=8194377754012098570&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed">
              Bengaluru
            </a>
          </div>

          <button
            type="button"
            onClick={openLeadForm}
            className="inline-flex items-center gap-2 rounded-full bg-[#FD9A00] px-5 py-3 text-sm font-bold text-black transition hover:bg-zinc-950 hover:text-white"
          >
            <Phone size={16} />
            Call Now
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 lg:hidden"
        >
          <Menu size={22} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[999] bg-[#faf7f1] transition-opacity duration-300 lg:hidden ${
          isOpen ? "visible opacity-100 bg-white" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full bg-white flex-col p-6">
          <div className="mb-8 flex items-center justify-between">
            <img src="/assets/cg_logo.png" alt="Casagrand" className="h-10" />

            <button
              type="button"
              onClick={closeMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mb-8 rounded-[32px] bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FD9A00]/10 text-[#FD9A00]">
              <Home size={22} />
            </div>

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#FD9A00]">
              Casagrand Casablanca
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-zinc-950">
              Premium living in Bengaluru
            </h3>
          </div>Bengaluru


          <ul className="space-y-2">
            {[...links, { label: "Contact Us", href: "#contact-us" }].map(
              (link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-2xl bg-white px-5 py-4 text-lg font-semibold text-zinc-950 shadow-sm"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>

          <button
            type="button"
            onClick={openMobileLeadForm}
            className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FD9A00] px-6 py-4 text-sm font-bold uppercase tracking-[1.5px] text-black"
          >
            <Phone size={18} />
            Book Site Visit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;