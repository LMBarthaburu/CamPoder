import React, { useEffect } from 'react'
import { useSEO } from '../../hooks/useSEO'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Stanley from '../../Components/Termos/Termos'
import HeroSeccion from '../../Components/HeroSeccion/HeroSeccion'

function Termos() {
  useSEO({
    title:" Termos Stanley | CamPoder SRL",
    description:"Consegui toda la linea de termos, mates, vasos, bombillas, etc de la marca Stanley al mejor precio y 100% originales en nuestra suscursal de Yerba Buena, Tucumán"
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavBar/>
      <HeroSeccion tipo='termos'/>
      <Stanley/>
      <Footer/>
    </>
  )

}

export default Termos