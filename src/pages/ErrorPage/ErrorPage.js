import React from 'react'
import { Link } from 'react-router-dom'
import Vial from '../../assets/tractores/vial.png'
import './errorPage.css'
import Logo from '../../assets/navbar-img.jpg'
import Esquina from '../../assets/esquina.png'

function ErrorPage() {
  return (
    <section className='error d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center text-center text-lg-start'>
      <div>
        <img src={Esquina} alt="" className='esquina-1'/><img src={Esquina} alt=""className='esquina-2' />
      </div>
      <div className='text'>
        <img src={Vial} alt="" className='error-vial'/>
      </div>
      <div className='text'>
        <img src={Logo} alt="" className='error-logo'/>
        <h2 className='fw-bold'>Este sitio está en construcción</h2>
        <h4>Disculpe las molestias ocasionadas</h4>
        <Link to="/" className='error-link'>Volver al inicio</Link>
      </div>
    </section>
  )
}

export default ErrorPage