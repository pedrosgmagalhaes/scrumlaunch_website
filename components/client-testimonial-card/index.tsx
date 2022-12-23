import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import CampusReel from '../../public/assets/campusReel.svg'
import RobCarrol from '../../public/assets/robCarrol.svg'
import Arrow from '../../public/icons/arrowBlack.svg'
import Star from '../../public/icons/starRed.svg'
import Clutch from '../../public/assets/clutch.svg'
import ClutchIcon from '../../public/assets/clutchIcon.svg'

export default function ClientTestimonial() {
  return (
    <div className={style.clientTestimonial}>
      <h1 className={style.title}>Client Testimonials</h1>

      <div className={style.testimony}>
        <div className={style.photo}>
          <Image src={RobCarrol} alt="Rob Carrol" />

          <div className={style.subTitle}>
            <h3>Rob Carrol</h3>
            <span>CEO • CampusReel</span>
          </div>
        </div>

        <div className={style.aggregatedData}>
          <div className={style.iconsTestimony}>
            <div className={style.icon}>
              <Image src={CampusReel} alt="campus reel" />
            </div>

            <div className={style.icon}>
              <Image src={Clutch} alt="Clutch" />

              <div>
                {new Array(5).fill(1).map(() => (
                  <Image key={Math.random()} src={Star} alt="star" />
                ))}

                <p>20 REWIEWS</p>
              </div>
            </div>

            <div className={`${style.icon} ${style.hideMobile}`}>
              <Image src={ClutchIcon} alt="Clutch Icon" />

              <div className={style.reviewContent}>Review us on CLUTCH</div>

              <h5 className={style.mobileText}>Review us on CLUTCH</h5>

              <div className={style.iconTestimonyArrow}>
                <Image src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className={style.nextTestimony}>
            <div className={style.testimonyText}>
              <h3>Rob’s Thoughts:</h3>

              <p>
                “ScrumLaunch software developers have enabled CampusReel to go
                from an idea to a product with millions of monthly unique users
                over the past 5 years. We could not have gotten to where we are
                today without them.”
              </p>
            </div>

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
