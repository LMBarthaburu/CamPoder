import React, { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import Stihl from '../../Components/Stihl/Stihl'
import NavBar from '../../Components/NavBar/NavBar'
import { useSEO } from '../../hooks/useSEO'
import HeroSeccion from '../../Components/HeroSeccion/HeroSeccion'


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
      <HeroSeccion tipo='jardineria'/>
      <Stihl/>
      <Footer/>
    </>
  )
}

export default Jardineria