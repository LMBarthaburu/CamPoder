import React, { useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import HeroPauny from '../../Components/HeroPauny/HeroPauny'
import Tractores from '../../Components/Tractores/Tractores'
import { useSEO } from '../../hooks/useSEO'

function Pauny() {
  
  useSEO({
    title:"Maquinária agrícola Pauny | CamPoder SRL",
    description:"Concesionario oficial Pauny en Tucumán, venta de maquinária agrícola y tractores, repuestos y servicio técnico. "
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NavBar/>
      <HeroPauny/>
      <Tractores/>
      <Footer/>
    </>
  )
}

export default Pauny