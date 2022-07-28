import React from "react";
import { useState, useEffect } from "react";
import Card from "../Cards/Cards";
import s from './Section.module.css'

const url = "https://jsonplaceholder.typicode.com/users";

const Section = () => {
  const [users, setUser] = useState();
  async function handleReq() {
    const response = await fetch(url);
    const json = await response.json();
    setUser(json);
  }
  useEffect(() => {
    handleReq();
  }, []);

  return (
    <section className={s.section}>
      {!!users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <Card dados={user} />
            </div>
          );
        })}
    </section>
  );
};

export default Section;
