import React, { useState } from 'react'
import BotonWtsp from '../BotonWtsp/BotonWtsp'
import './tractoresCard.css'
import BotonMas from '../BotonMas/BotonMas'


function TractoresCard({img, modelo, motor, potencia, traccion, transmicion, sistemaHidraulico}) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  }
  
  const handleOverlayClick = () => {
    setIsExpanded(false);
  }
  return (
    <div className="tractores-card text-center my-3 d-md-flex d-lg-block">
      <img 
        src={img} 
        className="card-img-top tractores-card-img" 
        alt={modelo}
        onClick={handleImageClick}
      />
      <div className="card-body">
        <h5>Modelo: {modelo}</h5>
        <p className="card-text m-0"><span className='fw-bold'>Motor: </span>{motor}</p>
        <p className="card-text m-0"><span className='fw-bold'>Potencia: </span>{potencia}</p>
        <p className="card-text m-0"><span className='fw-bold'>Tracción: </span>{traccion}</p>
        <p className="card-text m-0"><span className='fw-bold'>Transmición: </span>{transmicion}</p>
        <p className="card-text m-0"><span className='fw-bold'>Sistema Hidráulico: </span>{sistemaHidraulico}</p>
        <BotonWtsp modelo={modelo}/>
        <BotonMas modelo={modelo} categoria={'maquinaria'}/>
      </div>
      {isExpanded && (
        <div className='overlay' onClick={handleOverlayClick}>
          <img 
            src={img} 
            alt={modelo} 
            className='expanded-img' 
          />
        </div>
      )}
    </div>
  )
}

export default TractoresCard