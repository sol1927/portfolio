import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

const page = () => {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contacts />
    </>
    )
}

export default page