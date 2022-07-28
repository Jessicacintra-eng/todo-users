import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from './Todolist.module.css'

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  //pegando o parametro id da rota a partir do useParams (hook para pegar parametro de rotas)
  const { id, name } = useParams();
  
  useEffect(() => {
    const getTasksFromUserId = async () => {
      const req = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`
      );
      setTasks(req.data);

    };
    getTasksFromUserId();
  }, []);
 

  return (
    <div className={s.main}>
      <aside className={s.aside}>
      <h3>{name}</h3>
      </aside>
      <div className={s.tasks} >
     
      
      {!!tasks && tasks.map((task) => {
        // console.log(task)
        // console.log(task.completed)
        // const taskColor= ()=>{
        //   const color = 
        //    console.log(color)
        //    return color
        //  }  
        return (
          <div className={s.task} style={{backgroundColor: task.completed? 'lightgreen':'tomato'}}key={task.id}>
            <p>{task.title}</p>
            <p>{task.completed? 'Completada':'A fazer'}</p> 
            
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Todolist;
