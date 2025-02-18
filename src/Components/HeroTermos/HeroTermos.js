import React from 'react'
import './heroTermos.css'
import Logo from '../../assets/Logos/logo-stanley-blanco.png'


function HeroTermos() {
  return (
    <div className='hero-seccion-termos d-flex justify-content-center align-items-center'>
      <img src={Logo} alt="" className='logo-seccion-termos' />
    </div>  
  )
}

export default HeroTermos