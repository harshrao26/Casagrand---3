import React from "react";

const Configuration = () => {
  const configs = [
    { type: "Villa Plot", area: "600 - 1200", price: "₹ 44 Lacs*" },
    { type: "Villa Plot", area: "1200 - 1800", price: "₹ 88 Lacs*" },
    { type: "Villa Plot", area: "1800 - 2400", price: "₹ 1.32 Cr*" },
  ];

  return (
    <section
      className="section-shell relative mx-auto px-4 overflow-hidden bg-[#0c0c0c]"
      id="configuration"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full"></div>

     {/* Heading */}
<div className="text-center mb-8 md:mb-10">
  
  <h2 className="section-title section-title-on-dark">
    Plot Sizes &{" "}
    <span className="text-[#FD9A00]">Pricing</span>
  </h2>

  <p className="section-copy section-copy-on-dark mt-3 max-w-xl mx-auto">
    Premium villa plots crafted for modern living with excellent
    connectivity and investment potential.
  </p>
</div>

{/* Top Card */}
<div className="backdrop-blur-xl  max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 flex flex-col md:flex-row justify-between items-center mb-6 shadow-[0_0_40px_rgba(255,255,255,0.03)]">
  
  <div>
    <h3 className="text-base md:text-lg font-semibold text-white">
      Casagrand Casablanca
    </h3>

    <p className="text-gray-50 text-center mt-1 text-sm md:text-base">
      Oragadam, Chennai
    </p>
  </div>

  <div className="mt-4 md:mt-0 text-center md:text-right">
    <p className="text-gray-50 text-xs">
      Starting Price
    </p>

    <h3 className="text-lg md:text-xl font-bold text-[#FD9A00]">
      ₹ 44 Lacs*
    </h3>
  </div>
</div>

{/* Table */}
<div className="overflow-hidden max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.3)]">
  
  <table className="w-full">
    
    <thead>
      <tr className="border-b border-white/10 bg-white/[0.03]">
        
        <th className="text-left p-4 md:p-5 text-gray-300 text-xs uppercase tracking-[2px] font-medium">
          Type
        </th>

        <th className="text-left p-4 md:p-5 text-gray-300 text-xs uppercase tracking-[2px] font-medium">
          Area (Sqft)
        </th>

        <th className="text-left p-4 md:p-5 text-gray-300 text-xs uppercase tracking-[2px] font-medium">
          Price
        </th>

      </tr>
    </thead>

    <tbody>
      {configs.map((config, index) => (
        <tr
          key={index}
          className="border-b border-white/5 hover:bg-white/[0.03] transition-all duration-300"
        >
          <td className="p-4 md:p-5 text-base md:text-base text-white font-medium">
            {config.type}
          </td>

          <td className="p-4 md:p-5 text-base md:text-base text-gray-300 font-medium">
            {config.area}
          </td>

          <td className="p-4 md:p-5">
            <span className="inline-flex items-center rounded-full bg-[#FD9A00]/10 border border-[#FD9A00]/20 px-3 py-1.5 text-[#FD9A00] text-base font-semibold">
              {config.price}
            </span>
          </td>
        </tr>
      ))}
    </tbody>

  </table>
</div>
    </section>
  );
};

export default Configuration;
