import React from 'react'
import '../JardineriaCard/jardineriaCard.css'

function JardineriaCard({id, tipo, imagen, modelo, motor, potencia, peso, espada}) {
  return (
    <div className='col-12 col-md-6 col-lg-3 my-3 text-center d-flex flex-column align-items-center justify-content-between p-2'>
      <img src={imagen} alt={modelo} className='jardineria-card-img'/>
      <div>
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
      </div>
    </div>
  )
}

export default JardineriaCard