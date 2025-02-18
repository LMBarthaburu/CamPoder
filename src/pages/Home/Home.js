import React, { useEffect } from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Instagram from '../../Components/Instagram/Instagram'
import Marcas from '../../Components/Marcas/Marcas'
import NavBar from '../../Components/NavBar/NavBar'
import SliderMarcas from '../../Components/SliderMarcas/SliderMarcas'
import { useSEO } from '../../hooks/useSEO'

function Home() {
  useSEO({
    title:"CamPoder SRL | Un sólido respaldo para tu campo",
    description:"Venta de maquinária agrícola Pauny, implementos Stihl y semillas de maiz y sorgo Pioneer en Tucumán. Servicio técnico post-venta oficial Pauny y Stihl."
  })

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