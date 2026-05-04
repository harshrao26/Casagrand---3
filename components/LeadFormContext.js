"use client";

import React, { createContext, useContext, useState } from 'react';
import { Mail, Phone, Send, User, X } from 'lucide-react';

const LeadFormContext = createContext(null);

export const useLeadForm = () => {
  const context = useContext(LeadFormContext);

  if (!context) {
    throw new Error('useLeadForm must be used inside LeadFormProvider');
  }

  return context;
};

export const LeadFormFields = ({ consentId = 'lead-consent', onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
        <input
          type="text"
          placeholder="Your Name"
          className="w-full pl-12 pr-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[var(--cta-color)]/30 focus:border-[var(--cta-color)] transition-all"
          required
        />
      </div>

      <div className="relative">
        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full pl-12 pr-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[var(--cta-color)]/30 focus:border-[var(--cta-color)] transition-all"
          required
        />
      </div>

      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full pl-12 pr-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[var(--cta-color)]/30 focus:border-[var(--cta-color)] transition-all"
          required
        />
      </div>

      <div className="flex items-start space-x-3 py-2">
        <input type="checkbox" id={consentId} className="mt-1 accent-[var(--cta-color)]" defaultChecked />
        <label htmlFor={consentId} className="text-xs text-zinc-500 leading-relaxed">
          I agree to the <a href="#" className="text-zinc-900 font-bold hover:underline">Privacy Policy</a> and authorize Casagrand to contact me.
        </label>
      </div>

      <button
        type="submit"
        className="cta-button w-full font-bold py-5 rounded-2xl shadow-xl shadow-black/10 transition-all flex items-center justify-center space-x-3 group"
      >
        <span>Submit Inquiry</span>
        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
};

const LeadFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="Close lead form"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 md:p-8">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--cta-color)] mb-3">
              Casagrand Casablanca
            </p>
            <h2 className="text-3xl font-extrabold text-zinc-950 leading-tight">
              Book Your Site Visit
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center hover:bg-zinc-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <LeadFormFields onSubmit={onClose} />
      </div>
    </div>
  );
};

export const LeadFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadForm = () => setIsOpen(true);
  const closeLeadForm = () => setIsOpen(false);

  return (
    <LeadFormContext.Provider value={{ openLeadForm, closeLeadForm }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={closeLeadForm} />
    </LeadFormContext.Provider>
  );
};
