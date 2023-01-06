import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import CampusReel from '../../public/assets/campusReel.webp'
import CommunityFunded from '../../public/assets/communityFunded.webp'
import Gipper from '../../public/assets/gipper.webp'
import Harvest from '../../public/assets/harvest.webp'
import Heli from '../../public/assets/heli.webp'
import Vesta from '../../public/assets/vesta.webp'

const iconArray = [
  Gipper,
  Vesta,
  CampusReel,
  CommunityFunded,
  CampusReel,
  CommunityFunded,
  Heli,
  Harvest,
  Vesta,
  Gipper,
  Harvest,
  Heli,
]

export default function StartupCard() {
  return (
    <div className={style.startupCard}>
      <div className={style.container}>
        <h1 className={style.title}>
          Join 100+ startups that build successful teams with ScrumLaunch
        </h1>

        <div className={style.mobileTitle}>
          <span>100+</span>

          <h1>startups that build successful teams with ScrumLaunch</h1>
        </div>

        <div className={style.companyIcons}>
          {iconArray.map((icon) => (
            <div key={Math.random()} className={style.icons}>
              <Image src={icon} alt="icons" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
