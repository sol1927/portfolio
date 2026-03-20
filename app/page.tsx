import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Certificates from './components/Certificates'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}

export default page