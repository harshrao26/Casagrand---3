"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Gallery = () => {
  const images = [
    { src: "/assets/amenities_2-scaled.webp", title: "Grand Entrance" },
    { src: "/assets/amenities_3-scaled.webp", title: "Lush Greenery" },
    { src: "/assets/4-1-1.jpg", title: "Clubhouse Interior" },
    { src: "/assets/2-1-1.jpg", title: "Swimming Pool" },
    { src: "/assets/1-1-1.jpg", title: "Kids Play Area" },
    { src: "/assets/amenities_4-scaled.webp", title: "Gymnasium" },
    { src: "/assets/amenities_1-scaled.webp", title: "Landscaped Gardens" },
    { src: "/assets/3-1-1.jpg", title: "Multipurpose Hall" },
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
            navigation={true}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="gallerySwiper !overflow-visible"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index} className="max-w-[400px] md:max-w-[700px] rounded-[32px] overflow-hidden group shadow-2xl transition-all">
                <div className="relative aspect-video">
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

      <style jsx global>{`
        .gallerySwiper .swiper-button-next,
        .gallerySwiper .swiper-button-prev {
          color: #ffffffff !important;
          background: rgba(255, 255, 255, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .gallerySwiper .swiper-button-next:after,
        .gallerySwiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
