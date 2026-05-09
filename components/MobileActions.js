"use client";

import React from "react";
import { MessageSquare, Download } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLeadForm } from "./LeadFormContext";

const MobileActions = () => {
  const { openLeadForm } = useLeadForm();
  const pathname = usePathname();

  if (pathname === "/thankyou") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/90 px-3 py-2 shadow-[0_-12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl md:px-4 md:py-3">
      <div className="mx-auto flex max-w-md gap-2 md:gap-3">
        <button
          type="button"
          onClick={openLeadForm}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[var(--accent)] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.5px] text-white transition active:scale-95 md:gap-2 md:px-6 md:py-4 md:text-sm md:tracking-[1px]"
        >
          <Download size={15} strokeWidth={1.8} />
          Brochure
        </button>

        <button
          type="button"
          onClick={openLeadForm}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[var(--secondary-1)] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.5px] text-white transition active:scale-95 md:gap-2 md:px-4 md:py-3 md:text-sm md:tracking-[1px]"
        >
          <MessageSquare size={15} />
          Get A Quote
        </button>
      </div>
    </div>
  );
};

export default MobileActions;
