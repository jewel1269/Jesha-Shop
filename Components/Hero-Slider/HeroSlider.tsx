"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';
import "./styles.css"
import Link from "next/link";

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
         <Link href="/allelectronics"> <Image src={slide1} alt="allelectronics" fill style={{ objectFit: 'cover' }} /></Link>
        </SwiperSlide>
        <SwiperSlide>
         <Link href="/allregular"> <Image src={slide2} alt="Pizzas" fill style={{ objectFit: 'cover' }} /></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/allfood"><Image src={slide3} alt="allfood" fill style={{ objectFit: 'cover' }} /></Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
