import React from 'react'
import './taller.css'


function Taller() {
  return (
    <section className='container my-4'>
      <div className='d-flex align-items-center justify-content-center'>
        <div>
          <h1>Servicio Técnico Mecánico</h1>
          <p>Nuestro equipo de mecánicos estará siempre disponible en donde los necesiten, contamos con servicio de mantenimiento y reparación en campo para tu maquinaria y la mas completa gama de repuestos, accesorios y consumibles para todos sus implementos STIHL y maquinaria Pauny. <br />
            Somos reconocidos como servicio técnico oficial por nuestras marcas y nuestros técnicos están capacitados para brindar un excelente servicios de reparación y mantenimiento.</p>
        </div>
      </div>
      <div className='mt-md-4 d-md-flex justify-content-center align-items-center'>
        <div className='col-12 col-md-6 text-md-end pe-md-5'>
          <h3 className='text-decoration-underline fw-bold'>Taller Principal</h3>
          <p>Av. Gobernador del Campo 918 - San Miguel de Tucumán</p>
          <h3 className='text-decoration-underline fw-bold'>Taller Stihl Yerba Buena</h3>
          <p>Av Peron 1600 - Open Plaza - Yerba Buena</p>
        </div>
        <div className='col-12 col-md-6'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14242.231610983843!2d-65.1805687!3d-26.8222021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10e8d2dab528d897!2sCampoder%20S.R.L.!5e0!3m2!1ses-419!2sar!4v1661388375367!5m2!1ses-419!2sar" className='map' title='map'/>

        </div>
      </div>
    </section>
  )
}

export default Taller