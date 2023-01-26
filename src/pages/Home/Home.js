import React, { useEffect } from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Instagram from '../../Components/Instagram/Instagram'
import Marcas from '../../Components/Marcas/Marcas'
import NavBar from '../../Components/NavBar/NavBar'
import SliderMarcas from '../../Components/SliderMarcas/SliderMarcas'

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NavBar/>
      <Hero/>
      <Marcas/>
      <SliderMarcas/>
      <Instagram/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Home