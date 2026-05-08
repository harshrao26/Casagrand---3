"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLeadForm } from "./LeadFormContext";

const MobileActions = () => {
  const { openLeadForm } = useLeadForm();
  const pathname = usePathname();

  if (pathname === "/thankyou") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/90 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl md: ">
      <div className="mx-auto flex max-w-md gap-3">
        <button
          type="button"
          onClick={openLeadForm}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-bold uppercase tracking-[1px] text-white transition active:scale-95"
        >
          <Phone size={18} />
          Call Us
        </button>

        <button
          type="button"
          onClick={openLeadForm}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#FCB33A] px-4 py-3 text-sm font-bold uppercase tracking-[1px] text-black transition active:scale-95"
        >
          <MessageSquare size={18} />
          Get A Quote
        </button>
      </div>
    </div>
  );
};

export default MobileActions;