import React from 'react'
import Beneficos from '../../assets/beneficios-pioneer.jpg'

function BeneficiosPioneer() {
  return (
    <section className='container my-4'>
      <h2 className='fw-bold'>Beneficios para Productores Pioneer</h2>
      <div className=' d-lg-flex justify-content-center align-items-center'>
        <div className='col-12 col-lg-6'>
          <img src={Beneficos} alt="" className='w-100' />
        </div>
        <div className='col-12 col-lg-6 pt-2 pt-lg-0 ps-lg-3'>
          <ul>
            <li className='fs-4'>Asistencia técnica personalizada</li>
            <li className='fs-4'>La red de ensayos más amplia</li>
            <li className='fs-4'>Reserva de semillas en precampaña</li>
            <li className='fs-4'>Despacho de la semilla a campo</li>
            <li className='fs-4'>Informe de placas recomendadas</li>
            <li className='fs-4'>Atención de reclamos en 48 horas</li>
            <li className='fs-4'>Financiación</li>
            <li className='fs-4'>Beneficio de resiembra</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BeneficiosPioneer