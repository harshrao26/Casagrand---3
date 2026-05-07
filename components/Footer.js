"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white pt-12 md:pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/assets/cg_logo.png" alt="Casagrand" className="h-12 brightness-0 invert" />
            <p className="section-copy section-copy-on-dark">
              Casagrand Casablanca brings you the finest luxury living in the heart of the city. Experience unparalleled comfort and world-class amenities designed for your lifestyle.
            </p>
             
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 md:mb-8 uppercase tracking-widest text-amber-500">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#overview" className="text-white hover:text-white transition-colors">Overview</a></li>
              <li><a href="#amenities" className="text-white hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-white hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#floorplan" className="text-white hover:text-white transition-colors">Floor Plan</a></li>
              <li><a href="#location" className="text-white hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 md:mb-8 uppercase tracking-widest text-amber-500">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-amber-600 shrink-0 mt-1" size={20} />
                <span className="text-white">Vallakkottai, Oragadam, Chennai, Tamil Nadu 602105</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-amber-600 shrink-0" size={20} />
                <a href="tel:+911234567890" className="text-white hover:text-white transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-amber-600 shrink-0" size={20} />
                <a href="mailto:info@casagrand.com" className="text-white hover:text-white transition-colors">info@casagrand.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Disclaimer */}
          <div>
            <h3 className="text-lg font-bold mb-6 md:mb-8 uppercase tracking-widest text-amber-500">Legal</h3>
            <p className="text-white text-sm leading-relaxed mb-6">
              *Disclaimer: The information provided in this website is for guidance only. Prices and availability are subject to change without notice.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li><a href="https://casagrandcasablanca.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://casagrandcasablanca.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
            <div className="p-4 border border-zinc-800 rounded-lg">
              <p className="text-xs text-zinc-500">
                RERA Number: <br />
                <span className="text-zinc-300 font-mono">TN/01/Layout/0001/2024</span>
              </p>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>© {currentYear} Casagrand Builder Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://casagrandcasablanca.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://casagrandcasablanca.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
