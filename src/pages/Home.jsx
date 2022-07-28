import React from 'react'
import Header from '../components/Header/Header'
import Section from '../components/Section/Section'
import s from './Home.module.css'

const Home = () => {
  return (
    <div className={s.home}>
      <Header text='usuarios'/>
      <Section />
   
    </div>
  )
}

export default Home