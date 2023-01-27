import React, { useRef, useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";


import style from './style.module.scss'

import { EffectCoverflow, Navigation } from "swiper";

import slide1Image from '../../public/assets/carousel-with-fade/slide1.jpg'

export default function CarouselWithFade() {

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        loopFillGroupWithBlank={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          scale: 0.9,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          transformEl: ''
        }}
        breakpoints={
          {
            // when window width is >= 320px
            320: {
              width: 325,
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10
            },
            // when window width is >= 480px
            377: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10
            },
            // when window width is >= 640px
            769: {
              slidesPerView: 2,
              spaceBetween: 10,
              slidesPerGroup: 1
            }
          }
        } 
        pagination={false}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={style.swiperSlide}>
          <Image src={slide1Image} alt={'slide1'} />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Image src={slide1Image} alt={'slide1'} />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Image src={slide1Image} alt={'slide1'} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
