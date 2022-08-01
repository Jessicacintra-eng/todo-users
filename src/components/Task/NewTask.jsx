import React,{useState} from 'react'
import s from './NewTask.module.css'

const NewTask = () => {
  const [newTask, setNewTask] = useState('')
  function handleInputNewTask(target){
    setNewTask({
      userId:id,
      title:target.value,
      
    })
  }
  

  return (
    <div className={s.newTask}>
    <label htmlFor="name">Nova tarefa: </label>
    <input
      type="text"
      id="task"
      name="task"
      value= {newTask}
      className={s.inputCaixa}
      onChange={({target})=>handleInputNewTask(target)}
    />
    <button className={s.btn} onClick={console.log('oi')} > Adicionar </button></div>
  )
}

export default NewTask