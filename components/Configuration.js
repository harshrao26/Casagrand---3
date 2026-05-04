import React from 'react';

const Configuration = () => {
  const configs = [
    { type: "Studio + 1 BHK", unit: "Luxe", carpetArea: "740 - 741", balconyArea: "93", totalArea: "833 - 834" },
    { type: "2 BHK", unit: "Signature", carpetArea: "930 - 950", balconyArea: "50 - 100", totalArea: "980 - 1050" },
    { type: "3 BHK", unit: "Elite", carpetArea: "1250 - 1350", balconyArea: "100 - 120", totalArea: "1350 - 1470" },
    { type: "4 BHK", unit: "Ultra Luxe", carpetArea: "1650 - 1850", balconyArea: "150 - 200", totalArea: "1800 - 2050" },
  ];

  return (
    <section className="ccd-config-sec text-white py-24" id="configuration">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white text-center mb-12">Configuration</h2>
        
        <div className="ccd-config-top mb-12">
          <span className="text-1">Dubai Lifestyle Homes</span>
          <span className="text-2 font-bold">Price on Request</span>
        </div>

        <div className="ccd-config-tabel overflow-x-auto rounded-xl shadow-2xl backdrop-blur-md bg-black/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-black/50">
                <th className="p-6 border border-white/20">TYPE</th>
                <th className="p-6 border border-white/20">UNIT TYPE</th>
                <th className="p-6 border border-white/20">CARPET AREA (SQFT)</th>
                <th className="p-6 border border-white/20">BALCONY AREA (SQFT)</th>
                <th className="p-6 border border-white/20">TOTAL AREA (SQFT)</th>
              </tr>
            </thead>
            <tbody>
              {configs.map((config, index) => (
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className="p-6 border border-white/10">{config.type}</td>
                  <td className="p-6 border border-white/10">{config.unit}</td>
                  <td className="p-6 border border-white/10 font-bold">{config.carpetArea}</td>
                  <td className="p-6 border border-white/10">{config.balconyArea}</td>
                  <td className="p-6 border border-white/10 font-bold text-[var(--goldcolor)]">{config.totalArea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Configuration;
