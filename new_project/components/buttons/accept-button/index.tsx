import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'

interface Props {
  buttonText: string
  onClickHandler: () => void
  icon: string
  color: 'black' | 'white'
}

export default function AcceptButton({
  buttonText,
  onClickHandler,
  icon,
  color,
}: Props) {
  const returnColorButton = (invert: boolean): string => {
    switch (color) {
      case 'black':
        return invert ? '#fff' : '#1e1f21'

      case 'white':
        return invert ? '#1e1f21' : '#fff'

      default:
        return 'none'
    }
  }

  return (
    <button
      type="button"
      className={style.acceptButton}
      onClick={onClickHandler}
      style={{
        backgroundColor: returnColorButton(false),
        color: returnColorButton(true),
      }}
    >
      {buttonText}

      <div className={style.icon}>
        <Image src={icon} alt="icon" />
      </div>
    </button>
  )
}
