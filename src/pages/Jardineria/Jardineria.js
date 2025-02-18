import React, { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import Stihl from '../../Components/Stihl/Stihl'
import NavBar from '../../Components/NavBar/NavBar'
import HeroJardineria from '../../Components/HeroJardineria/HeroJardineria'
import { useSEO } from '../../hooks/useSEO'


function Jardineria() {

  useSEO({
    title:"Stihl - Tramontina | CamPoder SRL",
    description:"Concesionario oficial Stihl en Tucumán y Yerba Buena, servicio postventa oficial y la más amplia gama de repuestos. Herramientas de jardinaría Tramontina."
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavBar/>
      <HeroJardineria/>
      <Stihl/>
      <Footer/>
    </>
  )
}

export default Jardineria