import React, { useState } from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import TechTalent1 from '../../public/assets/techTalent1.webp'
import TechTalent2 from '../../public/assets/techTalent2.webp'
import TechTalent3 from '../../public/assets/techTalent3.webp'
import TechTalentMobile from '../../public/assets/techTalentMobile.webp'

export default function TechTalentCard() {

  const cardsInitial = [
    {
      text: 'A Long-term technology partner',
      bgColor: 'lavender'
    },
    {
      text: 'Support for founders and early-stage companies',
      bgColor: 'pink'
    },
    {
      text: 'Personalized, dedicated account management',
      bgColor: 'orange'
    },
    {
      text: 'Global talent insights and strategies',
      bgColor: 'grey'
    },
    {
      text: 'Outcome-oriented focus on business success',
      bgColor: 'ligth-green'
    },
  ]

  return (
    <div className={style.techTalentCard}>
      <div className={style.card}>
        <h2>
          Our Superpowers
        </h2>
      </div>
      {cardsInitial.map((card, index) => {
        return (
          <div
            key={index}
            className={style['card--' + card.bgColor]}
          >
            <div className={style.indicator}>{index + 1}</div>
            <h3>{card.text}</h3>
          </div>
        );
      })}
    </div>
  )
}
