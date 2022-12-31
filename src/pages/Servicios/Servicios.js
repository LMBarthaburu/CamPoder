import React, { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import HeroServicios from '../../Components/HeroServicios/HeroServicios'
import NavBar from '../../Components/NavBar/NavBar'
import Taller from '../../Components/Taller/Taller'

function Servicios() {
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