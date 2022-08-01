import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from './Todolist.module.css'
import Task from "../Task/Task";
import NewTask from "../Task/NewTask";


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
      
       <NewTask />
      
      {!!tasks && tasks.map((task) => {
        return (
          <Task data={task} key={task.id}/>
        );
      })}
      </div>
    </div>
  );
};

export default Todolist;
