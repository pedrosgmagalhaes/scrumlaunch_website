import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import CampusReel from '../../public/assets/campusReel.webp'
import RobCarrol from '../../public/assets/robCarrol.webp'
import Button from '../../components/buttons/accept-button'
import Arrow from '../../public/icons/arrowBlack.svg'
import Star from '../../public/icons/starRed.svg'
import Clutch from '../../public/assets/clutch.webp'
import ClutchIcon from '../../public/assets/clutchIcon.webp'

export default function ClientTestimonial() {
  return (
    <section className={style.clientTestimonial}>
      <div className={style.header}>
        <h2>Client Testimonials</h2>
        <div className={style.stars}>
          {new Array(5).fill(1).map(() => (
            <Image key={Math.random()} src={Star} alt="star" />
          ))}
          <p>5.0</p>
        </div>
        <div className={style.clutch}>
          <p>
            from 20 reviews on
          </p>
          <Image src={Clutch} alt="Clutch" />
        </div>
      </div>
      

      <div className={style.testimony}>
        <div className={style.photo}>
          <Image src={RobCarrol} alt="Rob Carrol" />

          {/* <div className={style.subTitle}>
            <h3>Rob Carrol</h3>
            <span>CEO • CampusReel</span>
          </div> */}
        </div>

        <div className={style.aggregatedData}>
          <div className={style.position}>
            <h3>Rob Carrol</h3>
            <span>CEO <span className={style.dot}>•</span></span>
            <Image src={CampusReel} alt="campus reel" />
          </div>
          {/* <div className={style.iconsTestimony}>

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
          </div> */}

          <div className={style.nextTestimony}>

            <h3>Rob’s Thoughts:</h3>

            <p>
              “ScrumLaunch software developers have enabled CampusReel to go
              from an idea to a product with millions of monthly unique users
              over the past 5 years. We could not have gotten to where we are
              today without them.”
            </p>


            {/* <div className={style.nextButton}>
              <h3>Next Testimonial</h3>

              <div>
                <Image src={Arrow} alt="arrow" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Button
        buttonText="Next Testimonial"
        icon={Arrow}
        onClickHandler={() => {}}
        color="black"
      />
    </section>
  )
}
