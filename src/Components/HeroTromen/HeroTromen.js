import React from 'react'
import './heroTromen.css'
import LogoTromen from '../../assets/Logos/tromen-logo.png'

function HeroTromen() {
  return (
    <div className='hero-seccion-Tromen d-flex justify-content-center align-items-center'>
      <img src={LogoTromen} alt="" className='logo-seccion-tromen' />
    </div>  
  )
}

export default HeroTromen