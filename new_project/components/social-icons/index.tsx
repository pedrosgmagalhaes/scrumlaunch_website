import React from 'react'
import Image from 'next/image'
import Behance from '../../public/icons/behance.svg'
import Dribbble from '../../public/icons/dribbble.svg'
import Instagram from '../../public/icons/instagram.svg'
import Linkedin from '../../public/icons/linkedin.svg'
import style from './style.module.scss'

export default function SocialIcons() {
  return (
    <div className={style.socialMedias}>
      <a href="/behance" target="_blank">
        <Image src={Behance} alt="Behance" />
      </a>

      <a href="/linkedin" target="_blank">
        <Image src={Linkedin} alt="Linkedin" />
      </a>

      <a href="/dribbble" target="_blank">
        <Image src={Dribbble} alt="Dribbble" />
      </a>

      <a href="/instagram" target="_blank">
        <Image src={Instagram} alt="Instagram" />
      </a>
    </div>
  )
}
