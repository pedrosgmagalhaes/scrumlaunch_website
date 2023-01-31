import React, {useRef} from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

import style from './style.module.scss'

import { Swiper as SwiperType, EffectCoverflow } from 'swiper';

import slide1Image from '../../public/assets/carousel-with-fade/slide1.jpg'

export default function CarouselWithFade() {
  const swiperRef = useRef<SwiperType>();

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loopFillGroupWithBlank={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          scale: 0.9,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView="auto"
        breakpoints={
          {
            // when window width is >= 320px
            320: {
              width: 325,
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0
            },
            // when window width is >= 480px
            376: {
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
        modules={[EffectCoverflow]}
        className="swiperWithFade"
      >
        <SwiperSlide>
          <Image src={slide1Image} alt={'slide1'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide1Image} alt={'slide2'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide1Image} alt={'slide3'} />
        </SwiperSlide>
      </Swiper>
      <div className={style.buttonPrev} onClick={() => swiperRef.current?.slidePrev()} />
      <div className={style.buttonNext} onClick={() => swiperRef.current?.slideNext()} />

    </>
  )
}
