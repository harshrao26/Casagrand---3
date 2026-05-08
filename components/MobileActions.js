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
  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-bold uppercase tracking-[1px] text-white transition active:scale-95 bg-gradient-to-r from-[#8b6a1f] via-[#c6a04a] to-[#7a5a18] px-6 py-4 text-sm     font-  text-white transition-all duration-300 active:scale-[0.98]"
>
  <span className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

  <span className="absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[320%]" />

  <span className="relative z-10 flex items-center gap-2">
    <Phone size={17} strokeWidth={1.8} />
    Call Us
  </span>
</button>

        <button
          type="button"
          onClick={openLeadForm}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#280E38] px-4 py-3 text-sm font-bold uppercase tracking-[1px] text-white transition active:scale-95"
        >
          <MessageSquare size={18} />
          Get A Quote
        </button>
      </div>
    </div>
  );
};

export default MobileActions;
