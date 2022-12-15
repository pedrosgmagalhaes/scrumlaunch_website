import React from 'react'
import Button from '../buttons/accept-button'
import Arrow from '../../public/icons/arrowBlack.svg'
import style from './style.module.scss'

export default function CarouselCaseCard() {
  return (
    <div className={style.carouselCase}>
      <div className={style.animationCase}>
        <h2>Case studies.</h2>

        <div>
          <div>
            <h3>Harvest</h3>

            <p>
              From an idea to a market leader with millions of users powered by
              ScrumLaunch.
            </p>

            <div>
              <div />

              <div />

              <div />
            </div>

            <Button
              buttonText="View case"
              color="black"
              onClickHandler={() => {}}
              icon={Arrow}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
