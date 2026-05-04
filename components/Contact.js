"use client";

import React from 'react';
import { CalendarCheck, Phone, Mail } from 'lucide-react';
import { LeadFormFields } from './LeadFormContext';

const Contact = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="contact-us">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-8 leading-tight">
              Book Your <span className="text-amber-500">Site Visit</span> Now
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              Experience the grand living at Casagrand Casablanca. Fill out the form and our representative will get back to you shortly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Call Us</p>
                  <p className="text-md md:text-xl font-bold">+91 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Email Us</p>
                  <p className="text-md md:text-xl font-bold">info@casagrandcasablanca.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl text-zinc-950">
             
            <h3 className="text-3xl font-extrabold mb-4">Plan a Visit</h3>
            <p className="text-zinc-500 text-lg mb-10">
              Share your details once and our team will help with brochure, pricing, and site visit scheduling.
            </p>
            <LeadFormFields consentId="contact-lead-consent" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
