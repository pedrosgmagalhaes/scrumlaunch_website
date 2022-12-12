import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'

interface Props {
  buttonText: string
  onClickHandler: () => void
  icon: string
}

export default function AcceptButton({
  buttonText,
  onClickHandler,
  icon,
}: Props) {
  return (
    <button
      type="button"
      className={style.acceptButton}
      onClick={onClickHandler}
    >
      {buttonText}

      <div className={style.icon}>
        <Image src={icon} alt="icon" />
      </div>
    </button>
  )
}
