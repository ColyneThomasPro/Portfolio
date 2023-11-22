import React from 'react'
import Profil from '../components/Profil'
import Contact from '../components/Contact'
import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Header id="#header"/>
      <Profil id="#profil"/>
      <Contact  id="#contact"/>
    </div>
  )
}

export default Home