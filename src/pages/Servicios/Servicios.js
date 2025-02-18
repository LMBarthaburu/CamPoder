import React, { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import HeroServicios from '../../Components/HeroServicios/HeroServicios'
import NavBar from '../../Components/NavBar/NavBar'
import Taller from '../../Components/Taller/Taller'
import { useSEO } from '../../hooks/useSEO'

function Servicios() {

  useSEO({
    title:"Servicio Técnico | CamPoder SRL",
    description:"Somos servicio técnico oficial Pauny y Stihl en Tucuman y Yerba Buena. Ofrecemos servicio postventa, service oficial, mantenimiento en campo y reparaciones en general."
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavBar/>
      <HeroServicios/>
      <Taller/>
      <Footer/>
    </>
  )
}

export default Servicios