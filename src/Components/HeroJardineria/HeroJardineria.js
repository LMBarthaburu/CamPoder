import React from 'react'
import './heroJardineria.css'
import LogoStihl from '../../assets/Logos/stihl-logo.png'

function HeroJardineria() {
  return (
    <div className='hero-seccion-jardineria d-flex justify-content-center align-items-center'>
      <img src={LogoStihl} alt="" className='logo-seccion-jardineria' />
    </div>    
  )
}

export default HeroJardineria