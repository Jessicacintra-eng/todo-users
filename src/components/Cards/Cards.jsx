import React from 'react'
import s from './Card.module.css'
import {NavLink} from 'react-router-dom'

const Card = ({dados}) => {
  const {id, name, email} = dados  
  return (
    <div className={s.card} >
        <h2>{name}</h2>
        <p>{email}</p>
        <NavLink to={`/todoList/${id}`} className={s.btn}>Ver detalhes</NavLink>
    </div>
  )
}

export default Card