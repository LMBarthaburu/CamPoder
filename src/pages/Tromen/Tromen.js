import React, { useEffect } from 'react'
import HeroTromen from '../../Components/HeroTromen/HeroTromen'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import TromenLineas from '../../Components/TromenLineas/TromenLineas'
import { useSEO } from '../../hooks/useSEO'

function Tromen() {

  useSEO({
    title:"Tromen | CamPoder SRL",
    description:"Parrillas, hornos, leñeros, calefactores, salamandras y toda la linea Tromen disponible en nuestras dos sucursales, en San Miguel de Tucumán y en Yerba Buena"
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavBar/>
      <HeroTromen/>
      <TromenLineas/>
      <Footer/>
    </>
  )
}

export default Tromen