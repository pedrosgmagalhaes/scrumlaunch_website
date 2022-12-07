import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

function Header() {
  return (
    <div id={styles.header}>
      <Image
        src="/public/icons/Logo SL.svg"
        alt="scrumlaunch logo"
        width={80}
        height={37}
      />

      <div>menu nav</div>

      <button type="button" className={styles.contactUseBtn}>
        Contact Us
      </button>
    </div>
  )
}

export default Header
