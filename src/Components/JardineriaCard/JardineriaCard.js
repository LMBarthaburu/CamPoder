import React from 'react'
import '../JardineriaCard/jardineriaCard.css'

function JardineriaCard({id, tipo, imagen, modelo, motor, potencia, peso, espada, cuchilla, altura,caudal,velocidad, presion, deposito}) {
  return (
    <div className='jardineria-card my-3 text-center d-flex flex-column align-items-center justify-content-between p-2'>
      <img src={imagen} alt={modelo} className='jardineria-card-img'/>
      <div className='mb-3'>
        <h2>{modelo}</h2>
        {
          motor?
          <h6 className='m-0'>Motor: {motor}</h6> : null
        }
        {
          potencia?
          <h6 className='m-0'>Potencia: {potencia}</h6> : null
        }
        {
          peso?
          <h6 className='m-0'>Peso: {peso}</h6>:null
        }
        {
          espada?
          <h6 className='m-0'>Espada: {espada}</h6>:null
        }
        {
          cuchilla?
          <h6 className='m-0'>Cuchilla: {cuchilla}</h6>:null
        }
        {
          altura?
          <h6 className='m-0'>Altura: {altura}</h6>:null
        }
        {
          caudal?
          <h6 className='m-0'>Caudal de aire: {caudal}</h6>:null
        }
        {
          velocidad?
          <h6 className='m-0'>Velocidad de aire: {velocidad}</h6>:null
        }
        {
          deposito?
          <h6 className='m-0'>Capacidad del depósito: {deposito}</h6>:null
        }
        {
          presion?
          <h6 className='m-0'>Presíon de trabajo: {presion}</h6>:null
        }
      </div>
    </div>
  )
}

export default JardineriaCard