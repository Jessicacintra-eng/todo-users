import React from 'react'
import Todolist from '../components/TodoList/Todolist'
import Header from '../components/Header/Header'
import s from './TodoList.module.css'


const TodoList = () => {
  return (
    <div className={s.tarefas}>
      <header className={s.header}><h1>Tarefas</h1></header>
      <Todolist/>
    </div>
  )
}

export default TodoList