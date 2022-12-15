import React from 'react'
import Image from 'next/image'
import ModalImage from '../../public/assets/modalFormContact.svg'
import style from './style.module.scss'

interface Props {
  closeModal: () => void
}

export default function ContactModal({ closeModal }: Props) {
  return (
    <div className={style.modalContact}>
      <Image src={ModalImage} alt="business meeting" />

      <h2 className={style.titleModal}>Your request has been sent!</h2>

      <p>
        We’re looking forward to work with you and help you accomplish your
        business goals
      </p>

      <button type="button" onClick={closeModal}>
        Done
      </button>
    </div>
  )
}
