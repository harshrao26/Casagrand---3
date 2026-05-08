"use client";

import React from "react";

const PricingConfiguration = () => {
  const phase2 = [
    {
      bhk: "2 BHK",
      unitType: "Compact",
      area: "1410 Sqft - 1661 Sqft",
      price: "₹ 7999 / Sqft",
      range: "₹ 1.20Cr to 1.38Cr",
    },
    {
      bhk: "3 BHK",
      unitType: "Compact",
      area: "1923 Sqft - 2171 Sqft",
      price: "₹ 7999 / Sqft",
      range: "₹ 1.64Cr to 1.82Cr",
    },
    {
      bhk: "4 BHK",
      unitType: "Compact",
      area: "2742 Sqft",
      price: "₹ 8199 / Sqft",
      range: "₹ 2.37Cr Onwards",
    },
    {
      bhk: "5 BHK",
      unitType: "Compact",
      area: "3939 Sqft",
      price: "₹ 8399 / Sqft",
      range: "₹ 3.37Cr Onwards",
    },
  ];

  const phase1 = [
    {
      bhk: "2 BHK",
      unitType: "Apartment",
      area: "1266 Sqft - 1639 Sqft",
      price: "-",
      range: "Sold Out",
    },
    {
      bhk: "3 BHK",
      unitType: "Apartment",
      area: "1982 Sqft",
      price: "-",
      range: "Sold Out",
    },
    {
      bhk: "4 BHK",
      unitType: "Apartment",
      area: "3039 Sqft",
      price: "₹ 7799 / Sqft",
      range: "₹ 2.43 Cr Onwards",
    },
    {
      bhk: "5 BHK",
      unitType: "Floor Villa",
      area: "3987 Sqft",
      price: "₹ 8199 / Sqft",
      range: "₹ 3.35 Cr Onwards",
    },
    {
      bhk: "5 BHK",
      unitType: "Pent House",
      area: "3800 Sqft - 3884 Sqft",
      price: "-",
      range: "₹ 3.64 Cr to 3.70 Cr",
    },
  ];

  const renderPricingTable = (title, data) => {
    return (
      <div className="mb-12 md:mb-16">
        <div className="mb-6 flex items-center justify-center">
          <h3 className="rounded-full border border-[#FCB33A]/20 bg-[#FCB33A]/10 px-6 py-3 text-center text-lg font-bold tracking-wide text-white md:text-2xl">
            {title}
          </h3>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl md:block">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-[#FCB33A]/10">
                <th className="border border-white/10 px-5 py-5 text-sm font-extrabold uppercase tracking-[3px] text-[#FCB33A]">
                  BHK
                </th>
                <th className="border border-white/10 px-5 py-5 text-sm font-extrabold uppercase tracking-[3px] text-[#FCB33A]">
                  Unit Type
                </th>
                <th className="border border-white/10 px-5 py-5 text-sm font-extrabold uppercase tracking-[3px] text-[#FCB33A]">
                  Built-up Area
                </th>
                <th className="border border-white/10 px-5 py-5 text-sm font-extrabold uppercase tracking-[3px] text-[#FCB33A]">
                  Price Per Sq. Ft.
                </th>
                <th className="border border-white/10 px-5 py-5 text-sm font-extrabold uppercase tracking-[3px] text-[#FCB33A]">
                  Price Range
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="transition duration-300 hover:bg-[#FCB33A]/10"
                >
                  <td className="border border-white/10 px-5 py-5 text-base font-semibold text-white">
                    {item.bhk}
                  </td>

                  <td className="border border-white/10 px-5 py-5 text-base font-medium text-zinc-300">
                    {item.unitType}
                  </td>

                  <td className="border border-white/10 px-5 py-5 text-base font-medium text-zinc-300">
                    {item.area}
                  </td>

                  <td className="border border-white/10 px-5 py-5 text-base font-medium text-zinc-300">
                    {item.price}
                  </td>

                  <td
                    className={`border border-white/10 px-5 py-5 text-base font-bold ${
                      item.range === "Sold Out"
                        ? "text-red-400"
                        : "text-white"
                    }`}
                  >
                    {item.range}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="grid gap-4 md:hidden">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-[#FCB33A]">
                    Configuration
                  </p>

                  <h4 className="mt-1 text-2xl font-bold text-white">
                    {item.bhk}
                  </h4>
                </div>

                <span
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] ${
                    item.range === "Sold Out"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-[#FCB33A]/15 text-[#FCB33A]"
                  }`}
                >
                  {item.range === "Sold Out" ? "Sold Out" : "Available"}
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="font-semibold text-zinc-500">
                    Unit Type
                  </span>
                  <span className="text-right font-bold text-white">
                    {item.unitType}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="font-semibold text-zinc-500">Area</span>
                  <span className="text-right font-bold text-white">
                    {item.area}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="font-semibold text-zinc-500">
                    Price / Sqft
                  </span>
                  <span className="text-right font-bold text-white">
                    {item.price}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="font-semibold text-zinc-500">
                    Price Range
                  </span>
                  <span
                    className={`text-right font-bold ${
                      item.range === "Sold Out"
                        ? "text-red-400"
                        : "text-[#FCB33A]"
                    }`}
                  >
                    {item.range}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 md:py-24"
    >
      <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#FCB33A]/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[#FCB33A]/25 bg-[#FCB33A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#FCB33A]">
            Apartments Price Details
          </span>

          <h2 className="section-title section-title-on-dark">
            Configuration &{" "}
            <span className="text-[#FCB33A]">Pricing</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            Explore apartment configurations, built-up areas, price per square
            foot, and price range for Phase 1 and Phase 2.
          </p>
        </div>

        {renderPricingTable("Apartments - Phase 2", phase2)}
        {renderPricingTable("Apartments - Phase 1", phase1)}

        <div className="mx-auto max-w-2xl rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 text-center backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[1.5px] text-zinc-400 md:text-sm">
            *Price mentioned is basic cost + other charges
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingConfiguration;
