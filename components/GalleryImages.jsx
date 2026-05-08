import React from "react";

const Gallery = () => {
  const images = [
    "/indoor-images/image.png",
    "/indoor-images/image copy.png",
    "/indoor-images/image copy 2.png",
    "/indoor-images/image copy 3.png",
    "/indoor-images/image copy 4.png",
    "/indoor-images/image copy 5.png",
    "/indoor-images/image copy 6.png",
    "/indoor-images/image copy 7.png",
    "/indoor-images/image copy 8.png",
  ];

  return (
    <section
      id="gallery"
      className="relative  overflow-hidden bg-[#0c0c0c] px-4 py-16 md:py-24"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#FCB33A]/10 blur-[140px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent,rgba(252,179,58,0.04))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4  ">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[#FCB33A]/25 bg-[#FCB33A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#FCB33A]">
            Indoor Gallery
          </span>

          <h2 className="section-title section-title-on-dark">
            Designed Spaces, <span className="text-[#FCB33A]">Captured</span>
          </h2>

          <p className="section-copy-on-dark mx-auto mt-4 max-w-2xl">
            Explore premium indoor visuals showcasing modern finishes, elegant
            spaces, and a refined lifestyle experience.
          </p>
        </div>

        {/* Premium Stacked Gallery */}
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Big Feature */}
          <div className="group relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <img
              src={images[0]}
              alt="Featured indoor gallery"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-white backdrop-blur-md">
              Featured View
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[2px] text-[#FCB33A]">
                Premium Interior
              </p>

              <h3 className="mt-2 max-w-xl text-md font-semibold leading-tight text-white md:text-xl">
                Elegant indoor spaces crafted for modern luxury living.
              </h3>
            </div>
          </div>

          {/* Right Side Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="group relative min-h-[250px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
              >
                <img
                  src={image}
                  alt={`Indoor gallery ${index + 2}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wide Strip */}
        <div className="mt-5 grid gap-5 md:grid-cols-4">
          {images.slice(5).map((image, index) => (
            <div
              key={index}
              className="group relative min-h-[240px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
            >
              <img
                src={image}
                alt={`Indoor gallery ${index + 6}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                 
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-white">
            Experience the project through premium indoor visuals.
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-400">
            Get complete details about floor plans, amenities, pricing, and
            available plot options.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex rounded-full bg-[#FCB33A] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;