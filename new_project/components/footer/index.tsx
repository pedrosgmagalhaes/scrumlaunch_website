import React from 'react'
import style from './style.module.scss'

export default function Footer() {
  return (
    <div id={style.footer}>
      <div>
        <nav>
          <a href="/about-us">About Us</a>

          <a href="/product-development">Product development</a>

          <a href="/staff-augmentation">Staff augmentation</a>

          <a href="/case-studies">Case Studies</a>

          <a href="/careers">Careers</a>

          <a href="/blog">Blog</a>

          <a href="/contact-us">Contact Us</a>
        </nav>
      </div>
    </div>
  )
}
