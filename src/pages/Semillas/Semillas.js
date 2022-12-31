import React, { useEffect } from 'react'
import BeneficiosPioneer from '../../Components/BeneficiosPioneer/BeneficiosPioneer'
import Footer from '../../Components/Footer/Footer'
import HeroSemillas from '../../Components/HeroSemillas/HeroSemillas'
import NavBar from '../../Components/NavBar/NavBar'
import Pioneer from '../../Components/Pioneer/Pioneer'
import TipoDeSemillas from '../../Components/TipoDeSemillas/TipoDeSemillas'

function Semillas() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavBar/>
      <HeroSemillas/>
      <BeneficiosPioneer/>
      <Pioneer/>
      <TipoDeSemillas/>
      <Footer/>
    </>
  )
}

export default Semillas