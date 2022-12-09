import React from 'react'
import style from './style.module.scss'

interface Props {
  buttonText: string
  onClickHandler: () => void
}

export default function AcceptButton({ buttonText, onClickHandler }: Props) {
  return (
    <button
      type="button"
      className={style.acceptButton}
      onClick={onClickHandler}
    >
      {buttonText}

      <div className={style.icon} />
    </button>
  )
}
