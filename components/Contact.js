"use client";

import React from "react";
import { Phone, Mail, MapPin, CalendarCheck } from "lucide-react";
import { LeadFormFields } from "./LeadFormContext";

const Contact = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#faf7f1] px-4 py-16 md:py-24"
      id="contact-us"
    >
      {/* Background Effects */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#FD9A00]/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-white/80 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left Content */}
          <div className="rounded-[36px] border border-zinc-200/70 bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:p-8 lg:p-10">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FD9A00]/20 bg-[#FD9A00]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#FD9A00]">
              <CalendarCheck size={14} />
              Schedule Site Visit
            </span>

            <h2 className="section-title text-zinc-950">
              Book Your <span className="text-[#FD9A00]">Site Visit</span> Now
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600 md:text-base">
              Experience grand living at Casagrand Casablanca. Fill out the form
              and our representative will get back to you shortly with brochure,
              pricing, and visit scheduling details.
            </p>

            <div className="mt-8 space-y-4">
              <div className="group flex items-center gap-5 rounded-3xl border border-zinc-100 bg-zinc-50 p-5 transition-all duration-300 hover:border-[#FD9A00]/30 hover:bg-[#FD9A00]/5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#FD9A00] shadow-sm transition group-hover:bg-[#FD9A00] group-hover:text-white">
                  <Phone size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-zinc-500">
                    Call Us
                  </p>
                  <p className="mt-1 text-sm font-bold text-zinc-950 md:text-base">
                    +91 123 456 7890
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-5 rounded-3xl border border-zinc-100 bg-zinc-50 p-5 transition-all duration-300 hover:border-[#FD9A00]/30 hover:bg-[#FD9A00]/5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#FD9A00] shadow-sm transition group-hover:bg-[#FD9A00] group-hover:text-white">
                  <Mail size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-zinc-500">
                    Email Us
                  </p>
                  <p className="mt-1 text-sm font-bold text-zinc-950 md:text-base">
                    info@casagrandcasablanca.com
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-5 rounded-3xl border border-zinc-100 bg-zinc-50 p-5 transition-all duration-300 hover:border-[#FD9A00]/30 hover:bg-[#FD9A00]/5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#FD9A00] shadow-sm transition group-hover:bg-[#FD9A00] group-hover:text-white">
                  <MapPin size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-zinc-500">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-bold text-zinc-950 md:text-base">
                    Kanakapura Road, Bengaluru
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[44px] bg-[#FD9A00]/10 blur-2xl" />

            <div className="relative rounded-[36px] border border-zinc-200/70 bg-white p-6 text-zinc-950 shadow-[0_30px_100px_rgba(0,0,0,0.12)] md:rounded-[44px] md:p-8 lg:p-10">
              <div className="mb-7 text-center md:text-left">
                <span className="mb-4 inline-flex rounded-full bg-zinc-100 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-zinc-700">
                  Enquiry Form
                </span>

                <h3 className="text-2xl font-bold leading-tight text-zinc-950 md:text-3xl">
                  Plan a Visit
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
                  Share your details once and our team will help you with
                  brochure, pricing, availability, and site visit scheduling.
                </p>
              </div>

              <LeadFormFields consentId="contact-lead-consent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;