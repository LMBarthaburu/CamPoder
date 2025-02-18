import React from 'react'
import './footer.css'
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'


function Footer() {
  return (
    <section className='footer position-static boton-0'>
      <div className='container text-center text-md-start d-flex flex-column flex-md-row  align-items-center align-items-md-start justify-content-evenly'>
        <div className='my-2 my-md-0'>
          <h5 className='fw-bold'>CamPoder SRL</h5>
          <p className='m-0'>Av Gobernador del Campo 918</p>
          <p className='m-0'>San Miguel de Tucumán - Tucumán</p>
          <a href='tel:+543814282034' className='m-0 text-decoration-none text-reset'>Tel: 0381-4282034</a>
        </div>
        <div className='my-2 my-md-0'>
          <h5 className='fw-bold'>CamPoder Hogar y Jardín</h5>
          <p className='m-0'>Av Peron 1600 - Open Plaza</p>
          <p className='m-0'>Yerba Buena - Tucumán</p>
          <a href='tel:+5493814010691' className='m-0 text-decoration-none text-reset'>Tel: 3814010691</a>
        </div>
        <div className='my-2 my-md-0 d-flex flex-column align-items-center align-items-md-start'>
          <h5 className='fw-bold'>Seguinos en nuestras redes</h5>
          <a className='m-0 d-flex align-items-center red-social'href='https://www.facebook.com/CampoderSRL' target='blank'><AiFillFacebook className='me-1'/>Facebook</a>
          <a className='m-0 d-flex align-items-center red-social'href='https://www.instagram.com/campoder.tuc/' target='blank'><AiFillInstagram className='me-1'/>Instragram</a>
        </div>
      </div>
    </section>
  )
}

export default Footer