"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLeadForm } from './LeadFormContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openLeadForm } = useLeadForm();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const openMobileLeadForm = () => {
    setIsOpen(false);
    openLeadForm();
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-white/90 backdrop-blur-lg shadow-lg py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Mobile Logo */}
          <div className="lg:hidden">
            <img src="/assets/cg_logo.png" alt="Casagrand" className="h-10" />
          </div>

          {/* Desktop Left Menu */}
          <ul className={`hidden lg:flex items-center space-x-10 text-sm font-bold uppercase tracking-widest ${scrolled ? 'text-zinc-900' : 'text-zinc-900'}`}>
            <li><a href="#overview" className="hover:text-amber-500 transition-colors">Overview</a></li>
            <li><a href="#communities" className="hover:text-amber-500 transition-colors">Communities</a></li>
            <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
          </ul>

          {/* Centered Desktop Logo */}
          <div className="hidden lg:block">
            <img 
              src="/assets/cg_logo.png" 
              alt="Casagrand" 
              className={`h-12 transition-all duration-300 ${scrolled ? 'scale-90 brightness-100' : ''}`} 
            />
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <ul className={`flex items-center space-x-10 text-sm font-bold uppercase tracking-widest ${scrolled ? 'text-zinc-900' : 'text-zinc-900'}`}>
              <li><a href="#floorplan" className="hover:text-amber-500 transition-colors">Floor Plan</a></li>
              <li><a href="#location" className="hover:text-amber-500 transition-colors">Location</a></li>
              <li><a href="#contact-us" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
            <a 
              href="tel:+911234567890" 
              className="cta-button cta-pill transition-all"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-zinc-900" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white h-screen z-[100000000000] transition-transform duration-500 lg:hidden overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/assets/clubhouse_banner.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/85" />
        <div className="relative flex flex-col h-full px-8 py-6">
          <div className="flex justify-between items-center mb-10">
            <img src="/assets/cg_logo.png" alt="Casagrand" className="h-10" />
            <button onClick={toggleMenu} className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center shadow-sm">
              <X size={22} />
            </button>
          </div>
          <ul className="flex flex-col space-y-5 text-lg font-bold text-zinc-900">
            <li><a href="#overview" onClick={toggleMenu}>Overview</a></li>
            <li><a href="#communities" onClick={toggleMenu}>Communities</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
            <li><a href="#floorplan" onClick={toggleMenu}>Floor Plan</a></li>
            <li><a href="#location" onClick={toggleMenu}>Location</a></li>
            <li><a href="#contact-us" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
          <div className="mt-auto">
            <button
              type="button"
              onClick={openMobileLeadForm}
              className="cta-button w-full"
            >
              <Phone size={20} />
              <span>Book Site Visit</span>
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
