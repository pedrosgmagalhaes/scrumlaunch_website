import React from 'react'
import SocialIcons from '../social-icons/index'
import style from './style.module.scss'

export default function Footer() {
  return (
    <div id={style.footer}>
      <div className={style.links}>
        <nav>
          <a href="/about-us">About Us</a>

          <a href="/product-development">Product development</a>

          <a href="/staff-augmentation">Staff augmentation</a>

          <a href="/case-studies">Case Studies</a>

          <a href="/careers">Careers</a>

          <a href="/blog">Blog</a>

          <a href="/contact-us">Contact Us</a>
        </nav>

        <SocialIcons />
      </div>

      <div className={style.llcSeparator}>
        <p>© 2022 ScrumLaunch LLC. All rights reserved</p>

        <div className={style.divider} />
      </div>
    </div>
  )
}
