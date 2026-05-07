import React from 'react';

const Configuration = () => {
  const configs = [
    { type: "Villa Plot", area: "600 - 1200", price: "₹ 44 Lacs*" },
    { type: "Villa Plot", area: "1200 - 1800", price: "₹ 88 Lacs*" },
    { type: "Villa Plot", area: "1800 - 2400", price: "₹ 1.32 Cr*" },
  ];

  return (
<div className="section-shell section-topless">
        <h2 className="section-title text-center mb-8">Plot Sizes & <span className="text-amber-500">Pricing</span> </h2>

    <section className="ccd-config-sec text-white py-12 md:py-20" id="configuration">

      <div className="container mx-auto px-4">
        
        <div className="ccd-config-top mb-10 md:mb-12 flex flex-col md:flex-row justify-between text-center md:text-left items-center border-b border-white/10 pb-6 gap-4">
          <span className="md:text-xl text-lg font-medium">Casagrand Casablanca - Oragadam</span>
          <span className="md:text-2xl text-xl font-bold text-amber-500">Starting from ₹ 44 Lacs*</span>
        </div>

        <div className="ccd-config-tabel overflow-x-auto rounded-xl shadow-2xl backdrop-blur-md bg-black/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-black/50">
                <th className="p-4 md:p-6 text-left border border-white/20 uppercase tracking-widest">TYPE</th>
                <th className="p-4 md:p-6 text-left border border-white/20 uppercase tracking-widest">AREA (SQFT)</th>
                <th className="p-4 md:p-6 text-left border border-white/20 uppercase tracking-widest">PRICE</th>
              </tr>
            </thead>
            <tbody>
              {configs.map((config, index) => (
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 md:p-6 border border-white/10 font-bold">{config.type}</td>
                  <td className="p-4 md:p-6 border border-white/10 font-bold">{config.area}</td>
                  <td className="p-4 md:p-6 border border-white/10 font-bold text-amber-500">{config.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
</div>
  );
};

export default Configuration;
