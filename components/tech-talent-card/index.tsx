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
      activeBgColor: '#ffffff',
      bgColor: '#E2CCFF'
    },
    {
      text: 'Support for founders and early-stage companies',
      activeBgColor: '#ffffff',
      bgColor: '#FFCCDC'
    },
    {
      text: 'Personalized, dedicated account management',
      activeBgColor: '#ffffff',
      bgColor: '#FFD7C2'
    },
    {
      text: 'Global talent insights and strategies',
      activeBgColor: '#ffffff',
      bgColor: '#E1E2E3'
    },
    {
      text: 'Outcome-oriented focus on business success',
      activeBgColor: '#ffffff',
      bgColor: '#97F7E0'
    },
  ]

  const [cards, setBgColour] = useState(cardsInitial);

    const setCardBgColour = (count: number) => {
      setBgColour(existingItems => {
        return existingItems.map((item, index) => {
          return index === count ? { ...item, activeBgColor: item.activeBgColor == item.bgColor ? '#ffffff' : item.bgColor } : item
        })
      })
    };
  

  return (
    <div className={style.techTalentCard}>
      <div className={style.card}>
        <h2>
          Our Superpowers
        </h2>
      </div>
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className={style.card}
            style={{ backgroundColor: card.activeBgColor }}
            onMouseEnter={() => setCardBgColour(index)}
            onMouseLeave={() => setCardBgColour(index)}
          >
            <div className={style.indicator}>{index + 1}</div>
            <h3>{card.text}</h3>
          </div>
        );
      })}
    </div>
  )
}
