import React, { useRef, useState } from 'react'
import Image from 'next/image'

import VueImg from '../../public/assets/technologies/vue.jpg'
import JavaScriptImg from '../../public/assets/technologies/js.jpg'
import ReactImg from '../../public/assets/technologies/react.jpg'
import NodeImg from '../../public/assets/technologies/node.jpg'
import PythonImg from '../../public/assets/technologies/python.jpg'
import FlutterImg from '../../public/assets/technologies/flutter.jpg'
import PhpImg from '../../public/assets/technologies/php.jpg'
import RubyImg from '../../public/assets/technologies/ruby.jpg'
import SwiftImg from '../../public/assets/technologies/swift.jpg'

import style from './style.module.scss'

const images = [
  {
    image: VueImg,
    name: 'Vue'
  },
  {
    image: JavaScriptImg,
    name: 'JavaSript'
  },
  {
    image: ReactImg,
    name: 'React'
  },
  {
    image: NodeImg,
    name: 'NodeJS'
  },
  {
    image: PythonImg,
    name: 'Python'
  },
  {
    image: FlutterImg,
    name: 'Flutter'
  },
  {
    image: PhpImg,
    name: 'PHP'
  },
  {
    image: RubyImg,
    name: 'Ruby on Rails'
  },
  {
    image: SwiftImg,
    name: 'Swift'
  },
]

export default function TechnologiesCarousel() {

  return (
    <section className={style.scrumLaunchTechnologies}>
      <h2>
        ScrumLaunch Technologies
      </h2>

      <div className={style.sliderContainer}>
        {/* 1. */}
        <div className={style.sliderOuter}>
          {/* 2. */}
          <div className={style.slider}>
            {/* 3 */}
            {images.map((i) => {
              return (
                <div className={style.slide}>
                  <Image src={i.image} alt={i.name}/>
                  <h3>{i.name}</h3>
                </div>
              );
            })}
            {images.map((i) => {
              return (
                <div className={style.slide}>
                  <Image src={i.image} alt={i.name}/>
                  <h3>{i.name}</h3>
                </div>
              );
            })}
          </div>
          <div className={style.sliderBackwards}>
            {/* 3 */}
            {images.map((i) => {
              return (
                <div className={style.slide}>
                  <Image src={i.image} alt={i.name}/>
                  <h3>{i.name}</h3>
                </div>
              );
            })}
            {images.map((i) => {
              return (
                <div className={style.slide}>
                  <Image src={i.image} alt={i.name}/>
                  <h3>{i.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
