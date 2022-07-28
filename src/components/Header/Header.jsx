import React from 'react'
import s from './Header.module.css'

const Header = ({text}) => {
  return (
    <header className={s.header} >
      <h1>{text}</h1>
    </header>
  )
}

export default Header