"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLeadForm } from './LeadFormContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openLeadForm } = useLeadForm();

  const footerLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
];

  return (
    <footer className="bg-zinc-900 text-white pt-12 md:pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/assets/cg_logo.png" alt="Casagrand" className="h-12 brightness-0 invert" />
            <p className="section-copy section-copy-on-dark">
              Casagrand Casablanca brings you the finest luxury living in the heart of the city. Experience unparalleled comfort and world-class amenities designed for your lifestyle.
            </p>
             
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-5 md:mb-6 uppercase tracking-widest text-amber-500">Quick Links</h3>
            <ul className="space-y-4">
  {footerLinks.map((item, index) => (
    <li key={index}>
      <a
        href={item.href}
        className="text-white transition-colors hover:text-[#FD9A00]"
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-5 md:mb-6 uppercase tracking-widest text-amber-500">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-amber-600 shrink-0 mt-1" size={20} />
                <span className="text-white">Vallakkottai, Oragadam, Chennai, Tamil Nadu 602105</span>
              </li>
              
              <li className="flex items-center space-x-4">
                <Mail className="text-amber-600 shrink-0" size={20} />
                <a href="mailto:info@casagrand.com" className="text-white hover:text-white transition-colors">info@casagrand.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Disclaimer */}
          <div>
            <h3 className="text-base font-bold mb-5 md:mb-6 uppercase tracking-widest text-amber-500">Legal</h3>
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
                <span className="text-zinc-300 font-mono">PRM/KA/RERA/1251/310/PR/040524/006862</span>
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

      <p className='text-xs text-zinc-500 text-center max-w-4xl mx-auto mt-10 pb-2'>
*Disclaimer: The information provided on this website is for general informational purposes only. All renderings, floor plans, and maps are artist&apos;s conceptions and not actual depictions of the building or its surroundings. Prices and availability are subject to change without notice. Please verify all details with our sales team before making a purchase.


Enquire

Brochure
      </p>
    </footer>
  );
};

export default Footer;
