import React, { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import Stihl from '../../Components/Stihl/Stihl'
import NavBar from '../../Components/NavBar/NavBar'
import HeroJardineria from '../../Components/HeroJardineria/HeroJardineria'


function Jardineria() {
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