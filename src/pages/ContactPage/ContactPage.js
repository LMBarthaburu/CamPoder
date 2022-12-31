import React, { useEffect } from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import Wtsp from '../../Components/Wtsp/Wtsp'
import './contactPage.css'
import Logo from '../../assets/navbar-img.jpg'
import LogoHogar from '../../assets/logo-hogar.png'


function ContactPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='contact-page'>
      <NavBar/>
      <ContactForm/>
      <div className='container d-flex flex-column flex-md-row align-items-center justify-content-evenly my-3'>
        <div className='my-2 my-md-0'>
          <img src={Logo} alt="" className='contact-img'/>
          <h5>Av. Gobernador del Campo 918</h5>
          <h5>San Miguel de Tucumán - Tucumán</h5>
          <h5>Horarios de atención:</h5>
          <p className='my-2'>Lunes a viernes: 08:30 - 17:30</p>
          <p className='my-2'>Sábados: 08:30 - 12:30</p>
          <h6>Telefono:</h6>
          <p>(0381) 4282034 / 4280218</p>
        </div>
        <div className='my-2 my-md-0'>
          <img src={LogoHogar} alt="" className='contact-img'/>
          <h5>Av. Perón 1600 - Open Plaza - L-24</h5>
          <h5>Yerba Buena - Tucumán</h5>
          <h5>Horarios de atención:</h5>
          <p className='my-2'>Lunes a viernes: 09:00 - 14:00 y 16:00 - 20:00</p>
          <p className='my-2'>Sábados: 09:00 - 14:00</p>
          <h6>Telefono:</h6>
          <p>(0381) 154010691</p>
        </div>
      </div>
      <Footer/>
      <Wtsp/>
    </section>
  )
}

export default ContactPage