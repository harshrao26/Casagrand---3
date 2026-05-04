import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const MobileActions = () => {
  return (
    <div className="ccd-mb-footer">
      <div className="flex w-full">
        <a 
          href="tel:9790921293" 
          className="flex-1 py-4 bg-[#d5b9a1] text-white flex items-center justify-center gap-2 font-bold"
        >
          <Phone size={18} />
          Call Us
        </a>
        <a 
          href="#contact-us" 
          className="flex-1 py-4 bg-[#FFEBEA] text-[#881a10] flex items-center justify-center gap-2 font-bold border-l border-[#881a10]/10"
        >
          <MessageSquare size={18} />
          Enquire Now
        </a>
      </div>
    </div>
  );
};

export default MobileActions;
