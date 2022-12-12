import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import CampusReel from '../../public/assets/campusReel.svg'
import RobCarrol from '../../public/assets/robCarrol.svg'
import Arrow from '../../public/icons/arrowBlack.svg'

export default function ClientTestimonial() {
  return (
    <div className={style.clientTestimonial}>
      <h1>Client Testimonials</h1>

      <div className={style.testimony}>
        <div className={style.iconsTestimony}>
          <div className={style.icon}>
            <Image src={CampusReel} alt="campus reel" />
          </div>

          <div className={style.icon}>client reel</div>

          <div className={style.icon}>client reel</div>
        </div>

        <div className={style.photo}>
          <Image src={RobCarrol} alt="Rob Carrol" />
        </div>

        <div className={style.aggregatedData}>
          <div className={style.modules}>
            <div>
              Active users
              <h2>10M</h2>
            </div>

            <div>
              Saved on Devlopment Costs
              <h2>$3M</h2>
            </div>

            <div>
              Dedicated team members
              <h2>15</h2>
            </div>
          </div>

          <div className={style.nextTestimony}>
            <div className={style.testimonyText}>testimony</div>

            <div className={style.nextButton}>
              <h3>Next Testimonial</h3>

              <div>
                <Image src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
