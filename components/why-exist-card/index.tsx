import React from 'react'
import Image from 'next/image'
import WhyExist1 from '../../public/assets/whyExistCard1.webp'
import WhyExist2 from '../../public/assets/whyExistCard2.webp'
import style from './style.module.scss'

export default function WhyExistCard() {
  return (
    <div className={style.whyExistCard}>
      <h1 className={style.title}>Why we exist</h1>

      <div className={style.container}>
        <div className={style.leftContainer}>
          US companies need to access to great talent and shouldn’t have to
          scour the globe on their own.
        </div>

        <div className={style.divContainer}>
          <div className={style.rightContainer}>
            <div className={style.colorContainer}>
              Here at ScrumLaunch we have <b>high expectations.</b> And you
              should too. We only hire the best. We expect the people you hire
              through us to perform at the same standard as the best domestic
              talent you could hire..
            </div>

            <div>
              <Image src={WhyExist1} alt="people working in an workspace" />
            </div>
          </div>

          <div className={style.rightContainer}>
            <div>
              <Image
                src={WhyExist2}
                alt="people happy in an business meeting"
              />
            </div>

            <div className={style.colorContainer2}>
              Our growth is <b>100% organic and based on client referral.</b>
              That means your success is our success and we treat creating a
              team for your business as if we are doing it for ourselves,
              because in a way, we are.
            </div>
          </div>
        </div>
      </div>

      <div className={style.containerMobile}>
        <div className={style.leftContainer}>
          US companies need to access to great talent and shouldn’t have to
          scour the globe on their own.
        </div>

        <Image src={WhyExist2} alt="people happy in an business meeting" />

        <Image src={WhyExist1} alt="people working in an workspace" />

        <div className={style.colorContainer2}>
          Your success is our success, and we treat hiring a team for your
          business as if we were doing it for ourselves.
        </div>

        <div className={style.colorContainer}>
          Here at ScrumLaunch we have <b>high expectations.</b> And you should
          too. We only hire the best. We expect the people you hire through us
          to perform at the same standard as the best domestic talent you could
          hire..
        </div>
      </div>
    </div>
  )
}
