"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Mobile Logo */}
          <div className="lg:hidden">
            <img src="/assets/cg_logo.png" alt="Casagrand" className="h-10" />
          </div>

          {/* Desktop Left Menu */}
          <ul className={`hidden lg:flex items-center space-x-10 text-sm font-bold uppercase tracking-widest ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
            <li><a href="#overview" className="hover:text-amber-500 transition-colors">Overview</a></li>
            <li><a href="#communities" className="hover:text-amber-500 transition-colors">Communities</a></li>
            <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
          </ul>

          {/* Centered Desktop Logo */}
          <div className="hidden lg:block">
            <img 
              src="/assets/cg_logo.png" 
              alt="Casagrand" 
              className={`h-12 transition-all duration-300 ${scrolled ? 'scale-90 brightness-100' : 'scale-110 brightness-0 invert'}`} 
            />
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <ul className={`flex items-center space-x-10 text-sm font-bold uppercase tracking-widest ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
              <li><a href="#floorplan" className="hover:text-amber-500 transition-colors">Floor Plan</a></li>
              <li><a href="#location" className="hover:text-amber-500 transition-colors">Location</a></li>
              <li><a href="#contact-us" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
            <a 
              href="tel:+911234567890" 
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-bold transition-all ${scrolled ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-white text-zinc-900 hover:bg-amber-500 hover:text-white'}`}
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className={`lg:hidden p-2 ${scrolled ? 'text-zinc-900' : 'text-white'}`} onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <img src="/assets/cg_logo.png" alt="Casagrand" className="h-10" />
            <button onClick={toggleMenu} className="text-zinc-900"><X size={32} /></button>
          </div>
          <ul className="flex flex-col space-y-8 text-2xl font-extrabold text-zinc-900">
            <li><a href="#overview" onClick={toggleMenu}>Overview</a></li>
            <li><a href="#communities" onClick={toggleMenu}>Communities</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
            <li><a href="#floorplan" onClick={toggleMenu}>Floor Plan</a></li>
            <li><a href="#location" onClick={toggleMenu}>Location</a></li>
            <li><a href="#contact-us" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
          <div className="mt-auto">
            <a href="tel:+911234567890" className="w-full bg-amber-600 text-white text-center py-5 rounded-2xl font-bold flex items-center justify-center space-x-3">
              <Phone size={24} />
              <span className="text-xl">Book Site Visit</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
