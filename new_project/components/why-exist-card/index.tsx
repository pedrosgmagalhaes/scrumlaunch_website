import React from 'react'
import Image from 'next/image'
import WhyExist1 from '../../public/assets/whyExistCard1.svg'
import WhyExist2 from '../../public/assets/whyExistCard2.svg'
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

        <div>
          <div className={style.rightContainer}>
            <div>
              Here at ScrumLaunch we have high expectations. And you should too.
              We only hire the best. We expect the people you hire through us to
              perform at the same standard as the best domestic talent you could
              hire..
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

            <div>
              Our growth is 100% organic and based on client referral. That
              means your success is our success and we treat creating a team for
              your business as if we are doing it for ourselves, because in a
              way, we are.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
