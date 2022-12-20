import React from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
import styles from './style.module.scss'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Header />

      {/* <div>{children}</div> */}

      <Footer />
    </div>
  )
}
