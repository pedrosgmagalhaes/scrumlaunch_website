import React from 'react'
import Image from 'next/image'
import HiringCard1 from '../../public/assets/hiringCard1.svg'
import HiringCard2 from '../../public/assets/hiringCard2.svg'
import HiringCard3 from '../../public/assets/hiringCard3.svg'
import HiringCard4 from '../../public/assets/hiringCard4.svg'
import style from './style.module.scss'

export default function HiringAndRetentionCard() {
  return (
    <div className={style.hiringRetentionCard}>
      <div className={style.specificCard}>Hiring and Retention</div>

      <div />

      <div className={style.overallCard}>
        <Image src={HiringCard1} alt="two persons talking in an meeting" />
      </div>

      <div className={style.overallCard}>
        <h2>Personalized recruiting</h2>

        <span className={style.highlight}>5h per candidate.</span>

        <p>
          Our five step hiring process includes an English proficiency
          assessment, culture fit interview, technical interviews and technical
          assessment. We believe that cultural fit is as important as technical
          proficiency for long term success.
        </p>
      </div>

      <div className={style.overallCard}>
        <h2>Highly selective</h2>

        <span className={style.highlight2}>
          3% of talent hired after vetting.
        </span>

        <p>
          Due to our rigorous vetting procedure we ensure that you get the best
          talent to boost your success
        </p>
      </div>

      <div className={style.overallCard}>
        <Image src={HiringCard2} alt="business meeting showing graphs" />
      </div>

      <div className={style.overallCard}>
        <Image src={HiringCard3} alt="two persons talking in an video call" />
      </div>

      <div className={style.overallCard}>
        <h2>Time saving onboarding process</h2>

        <span className={style.highlight3}>
          10 hours saved during onboarding for each new hire.
        </span>

        <p>
          We handle HR and all the administration required to get someone up and
          running.
        </p>
      </div>

      <div className={style.overallCard}>
        <h2 className={style.subTitle}>Talent Retention</h2>

        <span className={style.highlight4}>
          2x higher retention than industry average.
        </span>

        <p>
          We take care of your engineering team, making sure everyone has a
          professional development and growth plan, keeps on learning new skills
          and gets benefits and perks.
        </p>
      </div>

      <div className={style.overallCard}>
        <Image src={HiringCard4} alt="workspace with people working" />
      </div>

      <div className={style.mobileCard}>
        <div className={style.container}>
          <h2>Personalized recruiting</h2>

          <Image src={HiringCard1} alt="two persons talking in an meeting" />

          <span className={style.highlight}>5h per candidate.</span>

          <p>
            Our five step hiring process includes an English proficiency
            assessment, culture fit interview, technical interviews and
            technical assessment. We believe that cultural fit is as important
            as technical proficiency for long term success.
          </p>
        </div>

        <div className={style.container}>
          <h2>Highly selective</h2>

          <Image src={HiringCard2} alt="business meeting showing graphs" />

          <span className={style.highlight2}>
            3% of talent hired after vetting.
          </span>

          <p>
            Due to our rigorous vetting procedure we ensure that you get the
            best talent to boost your success
          </p>
        </div>

        <div className={style.container}>
          <h2>Time saving onboarding process</h2>

          <Image src={HiringCard3} alt="two persons talking in an video call" />

          <span className={style.highlight3}>
            10 hours saved during onboarding for each new hire.
          </span>

          <p>
            We handle HR and all the administration required to get someone up
            and running.
          </p>
        </div>

        <div className={style.container}>
          <h2 className={style.subTitle}>Talent Retention</h2>

          <Image src={HiringCard4} alt="workspace with people working" />

          <span className={style.highlight4}>
            2x higher retention than industry average.
          </span>

          <p>
            We take care of your engineering team, making sure everyone has a
            professional development and growth plan, keeps on learning new
            skills and gets benefits and perks.
          </p>
        </div>
      </div>
    </div>
  )
}
