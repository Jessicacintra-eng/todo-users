import React, {useState}  from 'react'
import s from './Task.module.css'

const Task = ({data}) => {
  const [status,setStatus]=useState(data.completed);
  return (
    <div className={s.task} style={status?{background:'lightgreen'} : {background:'tomato'}}>
      <p>{data.title}</p>
      <div className={s.status}>
        <p>{status?'Feita':'A fazer'}</p>
        <button className={s.btn} onClick={()=>{
          setStatus(!status)
        }
        }>{status?'Refazer':'Pronto'}</button>
      </div>
    </div>
  )
}

export default Task