import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../buttons/accept-button'
import Arrow from '../../public/icons/arrowBlack.svg'
import CarouselMobile1 from '../../public/assets/carouselCase1Mobile.svg'
import CarouselDesktop1 from '../../public/assets/carouselCase1Desktop.svg'
import style from './style.module.scss'

export default function CarouselCaseCard() {
  const [positionSelected, setPositionSelected] = useState(0)

  const handleChangeSelector = (position: number) => {
    setPositionSelected(position)
  }

  return (
    <div className={style.carouselCaseComponent}>
      <div className={style.carouselCase}>
        <div className={style.animationCase}>
          <h2 className={style.caseTitle}>Case studies.</h2>

          <div className={style.cardContainer}>
            <div className={style.caseTextContainer}>
              <h3 className={style.caseSubTitle}>Harvest</h3>

              <p>
                From an idea to a market leader with millions of users powered
                by ScrumLaunch.
              </p>

              <div className={style.cards}>
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
              className={style.img1}
              src={CarouselMobile1}
              alt="mobile case 1"
            />

            <Image
              className={style.img2}
              src={CarouselDesktop1}
              alt="desktop case 1"
            />
          </div>
        </div>
      </div>

      <div className={style.carouselControl}>
        {new Array(5).fill(1).map((_, index) => (
          <div
            key={Math.random()}
            role="presentation"
            className={style.selector}
            style={{
              backgroundColor:
                positionSelected === index ? '#1E1F21' : '#f4f2ec',
            }}
            onClick={() => handleChangeSelector(index)}
            onKeyDown={() => handleChangeSelector(index)}
          />
        ))}
      </div>
    </div>
  )
}
