"use client";

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { useLeadForm } from './LeadFormContext';

const MobileActions = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="ccd-mb-footer">
      <div className="flex w-full">
        <a 
          href="tel:9790921293" 
          className="cta-button flex-1 py-4 flex items-center justify-center gap-2 font-bold"
        >
          <Phone size={18} />
          Call Us
        </a>
        <button
          type="button"
          onClick={openLeadForm}
          className="cta-button flex-1 py-4 flex items-center justify-center gap-2 font-bold border-l border-black/10"
        >
          <MessageSquare size={18} />
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default MobileActions;
