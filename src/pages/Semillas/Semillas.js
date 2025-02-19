import React, { useEffect } from 'react'
import BeneficiosPioneer from '../../Components/BeneficiosPioneer/BeneficiosPioneer'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import Pioneer from '../../Components/Pioneer/Pioneer'
import TipoDeSemillas from '../../Components/TipoDeSemillas/TipoDeSemillas'
import { useSEO } from '../../hooks/useSEO'
import ConsejosPioneer from '../../Components/ConsejosPioneer/ConsejosPioneer'
import HeroSeccion from '../../Components/HeroSeccion/HeroSeccion'

function Semillas() {

  useSEO({
    title:"Semillas Pioneer | CamPoder SRL",
    description:"Somos representantes comercial Pioneer en Tucumán, zomas de Catamarca y Santiago del Estero. Semillas de Maiz, Sorgo, Soja y Agroquimicos marca Pionner"
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavBar/>
      <HeroSeccion tipo='semillas'/>
      <Pioneer/>
      <BeneficiosPioneer/>
      <TipoDeSemillas/>
      <ConsejosPioneer/>
      <Footer/>
    </>
  )
}

export default Semillas