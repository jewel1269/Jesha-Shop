"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';
import "./styles.css"

// Image imports
import slide1 from "../../Images/mobile-ja-1420en.jpg";
import slide2 from "../../Images/rewards-banner-1420.jpg";
import slide3 from "../../Images/supersaver1420en.jpg";

const HeroSlider: React.FC = () => {
  return (
    <section className="swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        
        centeredSlides={true}
        autoplay={{
          delay: 3000, // Adjust the delay as needed
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        
        modules={[ Autoplay]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <Image src={slide1} alt="Salads" fill style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide2} alt="Pizzas" fill style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide3} alt="Soups" fill style={{ objectFit: 'cover' }} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
