import React from 'react'
import './heroPauny.css'
import LogoPauny from '../../assets/pauny-logo-hero.png'

function HeroPauny() {
  return (
    <div className='hero-seccion-pauny d-flex justify-content-center align-items-center'>
      <img src={LogoPauny} alt="" className='logo-seccion' />
    </div>    )
}

export default HeroPauny