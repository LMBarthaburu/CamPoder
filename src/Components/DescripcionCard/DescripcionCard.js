import React from 'react'
import './descripcionCard.css'

function DescripcionCard({texto, imagen, id}) {
  return (
    <div className='container d-lg-flex my-3 descripcion-card'>
      <div className='mb-3 mb-lg-0 col-12 col-lg-6 pe-lg-3'>
        <p className='fs-5'>{texto}</p>
      </div>
      <img src={imagen} alt="descripcion imagen" className='descripcion-img col-12 col-lg-6' />
    </div>
  )
}

export default DescripcionCard