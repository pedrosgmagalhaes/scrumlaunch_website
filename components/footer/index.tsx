import React, { useState } from 'react'
import Image from 'next/image'
import SocialIcons from '../social-icons/index'
import Logo from '../../public/icons/LogoScrumlaunch.svg'
import Arrow from '../../public/icons/toggleArrow.svg'
import styles from './style.module.scss'

export default function Footer() {
  const [showServices, setShowServices] = useState(true)

  const toggleServices = () => {
    setShowServices((prev) => !prev)
  }

  return (
    <div id={styles.footer}>
      <div className={styles.links}>
        <Image src={Logo} alt="ScrumLaunch" className={styles.imageLogo} />

        <nav>
          <a href="/about-us">About Us</a>

          <span
            role="presentation"
            className={styles.services}
            onClick={toggleServices}
          >
            Services
            <Image
              src={Arrow}
              alt="arrow"
              className={`${showServices ? styles.rotate : ''}`}
            />
          </span>

          {showServices && (
            <>
              <a href="/product-development">Product development</a>

              <a href="/staff-augmentation">Staff augmentation</a>
            </>
          )}

          <a href="/case-studies">Case Studies</a>

          <a href="/careers">Careers</a>

          <a href="/blog">Blog</a>

          <a href="/contact-us">Contact Us</a>
        </nav>

        <SocialIcons />
      </div>

      <div className={styles.llcSeparator}>
        <p>© {new Date().getFullYear()} ScrumLaunch LLC. All rights reserved</p>

        <div className={styles.divider} />
      </div>

      <div className={styles.tabletMobileContainer}>
        <p>© {new Date().getFullYear()} ScrumLaunch LLC. All rights reserved</p>

        <SocialIcons />
      </div>
    </div>
  )
}
