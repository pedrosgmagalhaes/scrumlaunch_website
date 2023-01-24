import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../buttons/accept-button'
import Arrow from '../../public/icons/arrowBlack.svg'
import CarouselMobile1 from '../../public/assets/carouselCase1Mobile.webp'
import CarouselDesktop1 from '../../public/assets/carouselCase1Desktop.webp'
import CarouselMobile2 from '../../public/assets/carouselCase2Mobile.webp'
import CarouselDesktop2 from '../../public/assets/carouselCase2Desktop.webp'
import style from './style.module.scss'

export default function CarouselCaseCard() {
  const [positionSelected, setPositionSelected] = useState(0)
  const [loadFirstTime, setLoadFirstTime] = useState(false)

  const handleChangeSelector = (position: number) => {
    setPositionSelected(position)
    if (!loadFirstTime) {
      setLoadFirstTime(true)
    }
  }

  return (
    <div className={style.carouselCaseComponent}>
      <div className={style.carouselCase}>
        <div
          className={`${style.animationCase} ${
            positionSelected !== 0 ? style.scrollLeft : ''
          } ${
            positionSelected === 0 && loadFirstTime ? style.scrollToRight : ''
          }`}
        >
          <h2
            className={`${style.caseTitle} ${
              positionSelected !== 0 ? style.transformToWhite : ''
            }`}
          >
            Case studies
          </h2>

          <div className={style.cardContainer}>
            <div className={style.caseTextContainer}>
              <h3
                className={`${style.caseSubTitle} ${
                  positionSelected !== 0 ? style.moveTextToTheLeft : ''
                }`}
              >
                Harvest
              </h3>

              <h3
                className={`${style.caseSubTitle2} ${
                  positionSelected !== 0 ? style.moveTextToTheRight : ''
                }`}
              >
                Campus Reel.
              </h3>

              <p
                className={`${style.subTextContext} ${
                  positionSelected !== 0 ? style.moveTextToTheLeft : ''
                }`}
              >
                From an idea to a market leader with millions of users powered
                by ScrumLaunch.
              </p>

              <p
                className={`${style.subTextContext2} ${
                  positionSelected !== 0 ? style.moveTextToTheRight : ''
                }`}
              >
                From an idea to a market leader with millions of users powered
                by ScrumLaunch.
              </p>

              <div
                className={`${style.cards} ${
                  positionSelected !== 0 ? style.moveTextToTheLeft : ''
                }`}
              >
                <div>
                  10M
                  <span>Active users</span>
                </div>

                <div>
                  $3M
                  <span>Saved on Devlopment Costs</span>
                </div>

                <div>
                  15
                  <span>Dedicated team members</span>
                </div>
              </div>

              <div
                className={`${style.cards2} ${
                  positionSelected !== 0 ? style.moveTextToTheRight : ''
                }`}
              >
                <div>
                  10M
                  <span>Active users</span>
                </div>

                <div>
                  $3M
                  <span>Saved on Devlopment Costs</span>
                </div>

                <div>
                  15
                  <span>Dedicated team members</span>
                </div>
              </div>

              <Button
                buttonText="View case"
                color="black"
                onClickHandler={() => {}}
                icon={Arrow}
              />
            </div>

            <Image
              className={`${style.img1} ${
                positionSelected !== 0 ? style.moveToTheBottom : ''
              }`}
              src={CarouselMobile1}
              alt="mobile case 1"
            />

            <Image
              className={`${style.img2} ${
                positionSelected !== 0 ? style.moveToTheBottom : ''
              }`}
              src={CarouselDesktop1}
              alt="desktop case 1"
            />

            <Image
              className={`${style.img3} ${
                positionSelected !== 0 ? style.moveToTheTop1 : ''
              }`}
              src={CarouselMobile2}
              alt="mobile case 2"
            />

            <Image
              className={`${style.img4} ${
                positionSelected !== 0 ? style.moveToTheTop2 : ''
              }`}
              src={CarouselDesktop2}
              alt="desktop case 2"
            />
          </div>
        </div>
      </div>

      <div className={style.carouselControl}>
        {new Array(5).fill({}).map((_, index) => (
          <div
            key={Math.random()}
            role="presentation"
            className={style.selector}
            style={{
              left: `${index * 40}px`,
              backgroundColor: `${
                positionSelected === index ? '#1e1f21' : '#f4f2ec'
              }`,
            }}
            onClick={() => handleChangeSelector(index)}
            onKeyDown={() => handleChangeSelector(index)}
          />
        ))}
      </div>

      <div className={style.mobileButton}>
        <Button
          buttonText="View case"
          color="black"
          onClickHandler={() => {}}
          icon={Arrow}
        />
      </div>
    </div>
  )
}
