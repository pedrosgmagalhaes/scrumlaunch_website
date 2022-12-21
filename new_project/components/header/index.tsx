import React, { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import SocialIcons from '../social-icons'
import Scrumlaunch from '../../public/icons/LogoScrumlaunch.svg'
import MenuIcon from '../../public/icons/menu.svg'
import Arrow from '../../public/icons/toggleArrow.svg'

function Header() {
  const [showMenuDropdown, setShowMenuDropdown] = useState(false)
  const [showServices, setShowServices] = useState(false)

  const toggleDropdown = () => {
    setShowMenuDropdown((prev) => !prev)
  }

  const returnAnchorTags = () => (
    <>
      <a href="/about-us">About Us</a>

      <a href="/services" className={styles.services}>
        Services
        <Image
          src={Arrow}
          alt="arrow"
          className={`${showServices ? styles.rotate : ''}`}
        />
      </a>

      <a href="/case-studies">Case Studies</a>

      <a href="/careers">Careers</a>

      <a href="/blog">Blog</a>
    </>
  )

  return (
    <div id={styles.header}>
      <div className={styles.desktopContainer}>
        <Image src={Scrumlaunch} alt="scrumlaunch" className={styles.logoSL} />

        <nav className={styles.navbar}>{returnAnchorTags()}</nav>

        <div className={styles.containerBtn}>
          <button type="button" className={styles.contactUseBtn}>
            Contact Us
          </button>

          <div
            role="presentation"
            className={styles.menuIcon}
            onClick={toggleDropdown}
            onKeyDown={toggleDropdown}
          >
            <Image src={MenuIcon} alt="menu" />
          </div>
        </div>
      </div>

      <div
        className={`${styles.dropdown} ${showMenuDropdown ? styles.show : ''}`}
      >
        {returnAnchorTags()}

        <SocialIcons />
      </div>
    </div>
  )
}

export default Header
