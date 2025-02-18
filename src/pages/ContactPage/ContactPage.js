import React, { useEffect } from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import Wtsp from '../../Components/Wtsp/Wtsp'
import './contactPage.css'
import Logo from '../../assets/navbar-img.jpg'
import LogoHogar from '../../assets/logo-hogar.png'
import { useSEO } from '../../hooks/useSEO'


function ContactPage() {
  useSEO({
    title:"Contacto | CamPoder SRL",
    description:"Venta de maquinária agrícola Pauny, implementos Stihl y semillas de maiz y sorgo Pioneer en Tucumán y Yerb Buena. Servicio técnico post-venta oficial Pauny y Stihl."
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='contact-page'>
      <NavBar/>
      <ContactForm/>
      <div className='container mt-lg-4 d-lg-flex justify-content-center align-items-center'>
        <div className='text-center col-11 col-md-12 col-lg-6 m-3'>
          <img src={Logo} alt="" className='contact-img'/>
          <div className='mb-2'>
            <h5>Av. Gobernador del Campo 918</h5>
            <h5>San Miguel de Tucumán - Tucumán</h5>
            <h5>Horarios de atención:</h5>
            <p className='my-2'>Lunes a viernes: 08:30 - 17:30</p>
            <p className='my-2'>Sábados: 08:30 - 12:30</p>
            <h6>Telefono:</h6>
            <a href='tel:+543814282034' className='text-reset'>(0381) 4282034 / 4280218</a>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14242.231610983843!2d-65.1805687!3d-26.8222021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10e8d2dab528d897!2sCampoder%20S.R.L.!5e0!3m2!1ses-419!2sar!4v1661388375367!5m2!1ses-419!2sar" className='map m-2' title='map'/>
        </div>
        <div className='text-center col-11 col-md-12 col-lg-6 m-3'>
          <img src={LogoHogar} alt="" className='contact-img'/>
          <div className='mb-2'>
            <h5>Av. Perón 1600 - Open Plaza - L-24</h5>
            <h5>Yerba Buena - Tucumán</h5>
            <h5>Horarios de atención:</h5>
            <p className='my-2'>Lunes a viernes: 09:00 - 14:00 y 16:00 - 20:00</p>
            <p className='my-2'>Sábados: 09:00 - 14:00</p>
            <h6>Telefono:</h6>
            <a href='tel:+5493814010691' className='text-reset'>(0381) 154010691</a>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2044804619695!2d-65.290058!3d-26.801617000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242cc4acadc1d%3A0xffe9350fae22d45d!2sCamPoder%20Yerba%20Buena!5e0!3m2!1ses-419!2ses!4v1738326105253!5m2!1ses-419!2ses" className='map' title='map' />
        </div>
      </div>
      <Footer/>
      <Wtsp/>
    </section>
  )
}

export default ContactPage