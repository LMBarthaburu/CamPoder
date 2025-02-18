import React from 'react'
import Beneficos from '../../assets/Semillas/beneficios-pioneer.jpg'

function BeneficiosPioneer() {
  const beneficios=[
    {label:'Asistencia técnica personalizada', id:1},
    {label:'La red de ensayos más amplia', id:2},
    {label:'Reserva de semillas en precampaña', id:3},
    {label:'Despacho de la semilla a campo', id:4},
    {label:'Informe de placas recomendadas', id:5},
    {label:'Atención de reclamos en 48 horas', id:6},
    {label:'Financiación', id:7},
  ]
  return (
    <section className='container'>
      <h1 className='fw-bold'>Beneficios para Productores Pioneer</h1>
      <div className=' d-lg-flex justify-content-center align-items-center'>
        <div className='col-12 col-lg-6'>
          <img src={Beneficos} alt="" className='w-100' />
        </div>
        <div className='col-12 col-lg-6 pt-2 pt-lg-0 ps-lg-3'>
          <ul>
            {
              beneficios.map(beneficio=>(
                <li key={beneficio.id} className='fs-5'>{beneficio.label}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BeneficiosPioneer