"use client";

import React from 'react';
import { Send, Phone, Mail, User } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="contact-us">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img 
          src="/assets/Untitled-design-19.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Book Your <span className="text-amber-500">Site Visit</span> Now
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              Experience the grand living at Casagrand Estancia. Fill out the form and our representative will get back to you shortly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Call Us</p>
                  <p className="text-xl font-bold">+91 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Email Us</p>
                  <p className="text-xl font-bold">info@casagrandestancia.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl">
            <form className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full pl-12 pr-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full pl-12 pr-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full pl-12 pr-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                />
              </div>
              
              <div className="flex items-start space-x-3 py-2">
                <input type="checkbox" id="consent" className="mt-1 accent-amber-600" defaultChecked />
                <label htmlFor="consent" className="text-xs text-zinc-500 leading-relaxed">
                  I agree to the <a href="#" className="text-amber-600 font-bold hover:underline">Privacy Policy</a> and authorize Casagrand to contact me regarding my interest.
                </label>
              </div>

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-amber-900/20 transition-all flex items-center justify-center space-x-3 group">
                <span>Submit Inquiry</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
