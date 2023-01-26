import React from 'react'
import BotonWtsp from '../BotonWtsp/BotonWtsp'
import './tractoresCard.css'

function TractoresCard({img, modelo, motor, potencia, traccion, transmicion, sistemaHidraulico}) {
  return (
    <div className="tractores-card text-center my-3 d-md-flex d-lg-block">
      <img src={img} className="card-img-top tractores-card-img" alt={modelo}/>
      <div className="card-body text-center">
        <h5>Modelo: {modelo}</h5>
        <p className="card-text m-0"><span className='fw-bold'>Motor: </span>{motor}</p>
        <p className="card-text m-0"><span className='fw-bold'>Potencia: </span>{potencia}</p>
        <p className="card-text m-0"><span className='fw-bold'>Tracción: </span>{traccion}</p>
        <p className="card-text m-0"><span className='fw-bold'>Transmición: </span>{transmicion}</p>
        <p className="card-text m-0"><span className='fw-bold'>Sistema Hidráulico: </span>{sistemaHidraulico}</p>
        <BotonWtsp modelo={modelo}/>
      </div>
    </div>
  )
}

export default TractoresCard