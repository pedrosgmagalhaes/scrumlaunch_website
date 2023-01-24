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
        slidesPerView={2}
        spaceBetween={90}
        slidesPerGroup={1}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        loopFillGroupWithBlank={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          scale: 0.8,
          stretch: 60,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
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
