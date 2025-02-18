import React from 'react'
import { Link } from 'react-router-dom'
import './errorPage.css'
import Logo from '../../assets/navbar-img.jpg'
import Esquina from '../../assets/esquina.png'
import { useSEO } from '../../hooks/useSEO'

function ErrorPage() {
  useSEO({
    title:"Error page | CamPoder SRL",
    description:"Venta de maquinária agrícola Pauny, implementos Stihl y semillas de maiz y sorgo Pioneer en Tucumán. Servicio técnico post-venta oficial Pauny y Stihl."
  })

  
  return (
    <section className='error d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center text-center text-lg-start'>
      <div>
        <img src={Esquina} alt="" className='esquina-1'/><img src={Esquina} alt=""className='esquina-2' />
      </div>
      <div className='text text-center'>
        <img src={Logo} alt="" className='error-logo'/>
        <h1 className='fw-bold'>Página no encontrada</h1>
        <h6>Error 404</h6>
        <Link to="/" className='error-link'>Volver al inicio</Link>
      </div>
    </section>
  )
}

export default ErrorPage