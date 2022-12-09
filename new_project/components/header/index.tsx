import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import Scrumlaunch from '../../public/icons/LogoScrumlaunch.svg'

function Header() {
  return (
    <div id={styles.header}>
      <Image src={Scrumlaunch} alt="scrumlaunch" width={80} height={37} />

      <nav className={styles.navbar}>
        <a href="/about-us">About Us</a>

        <a href="/services">Services</a>

        <a href="/case-studies">Case Studies</a>

        <a href="/careers">Careers</a>

        <a href="/blog">Blog</a>
      </nav>

      <button type="button" className={styles.contactUseBtn}>
        Contact Us
      </button>
    </div>
  )
}

export default Header
