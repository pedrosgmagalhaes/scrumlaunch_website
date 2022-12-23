import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import TechTalent1 from '../../public/assets/techTalent1.svg'
import TechTalent2 from '../../public/assets/techTalent2.svg'
import TechTalent3 from '../../public/assets/techTalent3.svg'
import TechTalentMobile from '../../public/assets/techTalentMobile.svg'

export default function TechTalentCard() {
  return (
    <div className={style.techTalentCard}>
      <Image
        src={TechTalent1}
        alt="Tech Talent Image 1"
        className={style.imageCard}
      />

      <div className={style.cardMultiple}>
        <ul className={style.cardElement}>
          <li>Design</li>
        </ul>

        <ul className={style.cardElement2}>
          <li>Development</li>
        </ul>

        <ul className={style.cardElement3}>
          <li>Testing</li>
        </ul>

        <ul className={style.cardElement4}>
          <li>Support</li>

          <p>maintenance requirements / approach</p>
        </ul>
      </div>

      <Image
        src={TechTalent2}
        alt="Tech Talent Image 2"
        className={style.imageCard}
      />

      <div className={style.cardInfoCompany}>
        <div className={style.employees}>
          150+
          <p>employees</p>
        </div>

        <div className={style.testCard}>
          <div className={style.unit}>
            15 <p>units</p>
          </div>

          <div className={style.developers}>
            97 <p>developers</p>
          </div>
        </div>
      </div>

      <Image
        src={TechTalent3}
        alt="Tech Talent Image 3"
        className={`${style.imageCard} ${style.mobileCard}`}
      />

      <div className={style.cardInfoCompanyMobile}>
        <div className={style.employees}>
          150+
          <p>employees</p>
        </div>
      </div>

      <Image
        src={TechTalentMobile}
        alt="business guy"
        className={style.desktopHide}
      />

      <div className={style.cardInfoCompanyMobile}>
        <div className={style.testCard}>
          <div className={style.unit}>
            15 <p>units</p>
          </div>

          <div className={style.developers}>
            97 <p>developers</p>
          </div>
        </div>
      </div>
    </div>
  )
}
