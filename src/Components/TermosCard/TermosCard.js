import React, { useState } from 'react'
import './termosCard.css'
import BotonWtsp from '../BotonWtsp/BotonWtsp'
import BotonMas from '../BotonMas/BotonMas'

function TermosCard({id, modelo, imagen}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  }

  const handleOverlayClick = () => {
    setIsExpanded(false);
  }

  return (
    <div className='termos-card my-3 text-center d-flex flex-column align-items-center justify-content-between p-2'>
      <img 
        src={imagen} 
        alt={modelo} 
        className='termos-card-img' 
        onClick={handleImageClick} 
      />
      <div className='mb-3'>
        <h4>{modelo}</h4>
        <BotonMas  modelo={modelo} categoria={'termos'}/>
        <BotonWtsp modelo={modelo}/>
      </div>
      {isExpanded && (
        <div className='overlay' onClick={handleOverlayClick}>
          <img 
            src={imagen} 
            alt={modelo} 
            className='expanded-img' 
          />
        </div>
      )}
    </div>
  )
}

export default TermosCard