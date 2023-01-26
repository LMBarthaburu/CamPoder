import React from 'react'
import HeroImg from '../../assets/tractores/hero-img.png'
import './hero.css'
import NavbarImg from '../../assets/navbar-img.jpg'

function Hero() {
  return (
    <>
      <div className='container d-flex flex-column flex-lg-row align-items-center justify-content-center hero'>
        <div className='col-12 col-lg-6 text-center d-flex flex-column align-items-center justify-content-center'>
          <img src={NavbarImg} alt="Campoder logo" className='hero-logo' />
          <i className='fw-bold hero-title'>"UN SOLIDO RESPALDO PARA TU CAMPO"</i>
          <h6 className='mx-3 mx-md-4'>Encontrá todo para la producción de tu campo y el mateniemiento de tu jardín! Con más de 25 años en el rubro ofrecemos servicio post-venta oficial, reparación en campo y la más amplia gama de repuestos!</h6>
        </div>
        <div className='col-12 col-lg-6 text-center'>
          <img src={HeroImg} alt="Maquinaria agrícola" className='img-hero'/>
        </div>
      </div>
    </>
  )
}

export default Hero