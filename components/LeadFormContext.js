"use client";

import React, { createContext, useContext, useState } from "react";
import { Mail, Phone, Send, User, X, MapPin } from "lucide-react";

const LeadFormContext = createContext(null);

export const useLeadForm = () => {
  const context = useContext(LeadFormContext);

  if (!context) {
    throw new Error("useLeadForm must be used inside LeadFormProvider");
  }

  return context;
};

export const LeadFormFields = ({ consentId = "lead-consent", onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="relative">
        <User
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3.5 pl-12 pr-5 text-zinc-900 outline-none transition focus:border-[#FD9A00] focus:bg-white focus:ring-4 focus:ring-[#FD9A00]/10"
          required
        />
      </div>

      <div className="relative">
        <Phone
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          size={20}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3.5 pl-12 pr-5 text-zinc-900 outline-none transition focus:border-[#FD9A00] focus:bg-white focus:ring-4 focus:ring-[#FD9A00]/10"
          required
        />
      </div>

      <div className="relative">
        <Mail
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          size={20}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3.5 pl-12 pr-5 text-zinc-900 outline-none transition focus:border-[#FD9A00] focus:bg-white focus:ring-4 focus:ring-[#FD9A00]/10"
          required
        />
      </div>

      <div className="flex items-start gap-3 py-2">
        <input
          type="checkbox"
          id={consentId}
          className="mt-1 accent-[#FD9A00]"
          defaultChecked
        />
        <label htmlFor={consentId} className="text-xs leading-relaxed text-zinc-500">
          I agree to the{" "}
          <a href="#" className="font-bold text-zinc-900 hover:underline">
            Privacy Policy
          </a>{" "}
          and authorize Casagrand to contact me.
        </label>
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-6 py-4 text-sm font-bold uppercase tracking-[1.5px] text-white transition hover:bg-[#FD9A00] hover:text-black"
      >
        <span>Submit Inquiry</span>
        <Send
          size={18}
          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
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
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative grid w-full max-w-4xl overflow-hidden rounded-[36px] bg-white shadow-[0_35px_120px_rgba(0,0,0,0.35)] md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative hidden min-h-[520px] overflow-hidden bg-zinc-950 md:block">
          <div
            className="absolute inset-0 bg-cover bg-left"
            style={{ backgroundImage: "url('/prop/Copy of Main Entrance.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FD9A00] px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-black">
              <MapPin size={14} />
              Kanakapura Road
            </p>

            <h3 className="text-4xl font-bold leading-tight">
              Visit Casagrand Casablanca
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Explore project highlights, pricing, floor plans, and site visit
              options with our advisor.
            </p>
          </div>
        </div>

        <div className="relative p-5 md:p-8">
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 transition hover:bg-zinc-200"
          >
            <X size={20} />
          </button>

          <div className="mb-7 pr-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#FD9A00]">
              Casagrand Casablanca
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-zinc-950 md:text-4xl">
              Book Your Site Visit
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Fill in your details and our team will contact you shortly.
            </p>
          </div>

          <LeadFormFields onSubmit={onClose} />
        </div>
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