import React from 'react';

const Configuration = () => {
  const configs = [
    { type: "Villa Plot", area: "600 - 1200", price: "₹ 44 Lacs*" },
    { type: "Villa Plot", area: "1200 - 1800", price: "₹ 88 Lacs*" },
    { type: "Villa Plot", area: "1800 - 2400", price: "₹ 1.32 Cr*" },
  ];

  return (
<div>
        <h2 className="text-2xl md:text-5xl text-black font-extrabold text-black mb-8 text-center">Plot Sizes & <span className="text-amber-500">Pricing</span> </h2>

    <section className="ccd-config-sec text-white py-24" id="configuration">

      <div className="container mx-auto px-4">
        
        <div className="ccd-config-top mb-12 flex justify-between items-center border-b border-white/10 pb-6">
          <span className="text-xl font-medium">Casagrand Casablanca - Oragadam</span>
          <span className="text-2xl font-bold text-amber-500">Starting from ₹ 44 Lacs*</span>
        </div>

        <div className="ccd-config-tabel overflow-x-auto rounded-xl shadow-2xl backdrop-blur-md bg-black/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-black/50">
                <th className="p-6 text-left border border-white/20 uppercase tracking-widest">TYPE</th>
                <th className="p-6 text-left border border-white/20 uppercase tracking-widest">AREA (SQFT)</th>
                <th className="p-6 text-left border border-white/20 uppercase tracking-widest">PRICE</th>
              </tr>
            </thead>
            <tbody>
              {configs.map((config, index) => (
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className="p-6 border border-white/10 font-bold">{config.type}</td>
                  <td className="p-6 border border-white/10 font-bold">{config.area}</td>
                  <td className="p-6 border border-white/10 font-bold text-amber-500">{config.price}</td>
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
