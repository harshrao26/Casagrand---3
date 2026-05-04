import React from 'react';

const Clubhouse = () => {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center py-24 bg-fixed bg-cover bg-center" 
      style={{ backgroundImage: "url('/assets/clubhouse_banner.webp')" }}
      id="communities"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Where Community <br />
              Meets <span className="text-amber-500">Luxury.</span>
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-zinc-200 text-xl leading-relaxed">
              Step into a world where luxury meets leisure. A luxurious clubhouse of 22,500 Sft. furnished
              with indoor and terrace amenities overlooking the grand swimming pool and central podium. 
              Whether you’re looking to relax, socialize, or celebrate, this grand facility offers the 
              perfect setting for every occasion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubhouse;
