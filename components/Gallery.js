"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Gallery = () => {
  const images = [
    { src: "/prop/Copy of Aerial Night.webp", title: "Majestic Aerial Night View" },
    { src: "/prop/Copy of Clubhouse Dusk.webp", title: "Exquisite Clubhouse at Dusk" },
    { src: "/prop/Copy of Main Entrance.webp", title: "Grand Entrance Portal" },
    { src: "/prop/Copy of Podium Dusk (1).webp", title: "Serene Evening Podium" },
    { src: "/prop/Copy of Poduim 1 To Osr.webp", title: "Lush Greenery & Open Spaces" },
  ];

  return (
    <section className="section-shell overflow-hidden" id="gallery">
      <div className="container mx-auto px-4">
        <div className="section-header-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Visual <span className="text-amber-500">Symphony.</span>
          </motion.h2>
          <p className="section-copy max-w-2xl mx-auto">
            Take a glimpse into the life that awaits you at Casagrand Casablanca. 
            Every corner is crafted for perfection.
          </p>
        </div>
        
        <div className="relative px-4 md:px-10">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={false}
            modules={[EffectCoverflow, Autoplay]}
            className="gallerySwiper !overflow-visible"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index} className="max-w-[500px] md:max-w-[900px] rounded-[32px] overflow-hidden group shadow-2xl transition-all">
                <div className="relative h-[320px] md:h-[560px]">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent  transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white text-sm font-bold">{item.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

  );
};

export default Gallery;
