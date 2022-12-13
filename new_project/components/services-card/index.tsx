import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import ServiceCard1 from '../../public/assets/serviceCard1.svg'
import ServiceCard2 from '../../public/assets/serviceCard2.svg'

export default function ServicesCard() {
  return (
    <div className={style.servicesCard}>
      <h1 className={style.title}>Services</h1>

      <div className={style.serviceContainer}>
        <div className={style.container}>
          Product <br /> Development
        </div>

        <Image src={ServiceCard1} alt="person working on notebook" />
      </div>

      <div className={style.serviceContainer}>
        <div className={style.container2}>
          Staff <br /> Augmentation
        </div>

        <Image src={ServiceCard2} alt="business meeting in company" />
      </div>
    </div>
  )
}
