import React from 'react';
import { User, Phone, Mail, Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="footer-call-sec bg-zinc-50 py-20" id="contact-us">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-heading mb-4">Book Your Site Visit Now</h2>
        <p className="text-xl text-gray-600 mb-12">Experience Dubai Lifestyle in Kogilu, North Bangalore</p>
        
        <div className="footer-call-wrap flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/3">
            <img 
              src="/assets/Untitled-design-19.png" 
              alt="Casagrand Logo" 
              className="max-w-[200px] mx-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="lg:w-1/2 w-full">
            <form className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 space-y-6">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--estancia-brown)] transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Enter Your Name" 
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--estancia-brown)] transition-all"
                  required 
                />
              </div>
              
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--estancia-brown)] transition-colors" size={20} />
                <input 
                  type="tel" 
                  placeholder="Enter Phone Number" 
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--estancia-brown)] transition-all"
                  required 
                />
              </div>
              
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--estancia-brown)] transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--estancia-brown)] transition-all"
                  required 
                />
              </div>
              
              <div className="flex items-center gap-3 text-left">
                <input type="checkbox" id="consent" className="w-5 h-5 accent-[var(--estancia-brown)]" defaultChecked />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-[var(--estancia-brown)] hover:underline">Privacy Policy</a>.
                </label>
              </div>
              
              <button className="w-full py-4 bg-[var(--primarycolor)] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg shadow-black/20">
                <Send size={18} />
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
