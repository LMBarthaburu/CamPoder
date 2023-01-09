import React from 'react'
import Logo from '../../assets/Semillas/pioneer-logo-blaco.png'
import './heroSemillas.css'

function HeroSemillas() {
  return (
    <div className='hero-seccion-semillas d-flex justify-content-center align-items-center'>
      <img src={Logo} alt="" className='logo-seccion-semillas' />
    </div>  
  )
}

export default HeroSemillas