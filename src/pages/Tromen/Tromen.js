import React, { useEffect } from 'react'
import HeroTromen from '../../Components/HeroTromen/HeroTromen'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import TromenLineas from '../../Components/TromenLineas/TromenLineas'

function Tromen() {
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