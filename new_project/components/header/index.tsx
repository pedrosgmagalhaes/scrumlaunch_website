import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

function Header() {
  return (
    <div id={styles.header}>
      <Image
        src="/public/icons/LogoScrumlaunch.svg"
        alt="scrumlaunch logo"
        width={80}
        height={37}
      />

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
