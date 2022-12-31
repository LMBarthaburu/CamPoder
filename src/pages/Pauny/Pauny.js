import React, { useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import HeroPauny from '../../Components/HeroPauny/HeroPauny'
import Tractores from '../../Components/Tractores/Tractores'

function Pauny() {
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