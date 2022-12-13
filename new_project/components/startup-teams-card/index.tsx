import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import CampusReel from '../../public/assets/campusReel.svg'
import CommunityFunded from '../../public/assets/communityFunded.svg'
import Gipper from '../../public/assets/gipper.svg'
import Harvest from '../../public/assets/harvest.svg'
import Heli from '../../public/assets/heli.svg'
import Vesta from '../../public/assets/vesta.svg'

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
