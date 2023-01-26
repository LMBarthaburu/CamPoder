import React from 'react'
import './botonWtsp.css'



function BotonWtsp({modelo}) {
  const valor =`https://api.whatsapp.com/send?phone=3814010691&text=Hola! precio y disponibilidad de ${modelo}`
  return (
    <>
    <a href={valor} target='_blanck'>
      <button  className='mt-1 boton-wtsp'>Consultar disponibilidad</button>
    </a>
    </>  
  )
}

export default BotonWtsp