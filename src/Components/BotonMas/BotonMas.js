import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './botonMas.css'

function BotonMas({categoria,modelo}) {
  return (
    <a href={`/${categoria}/${modelo}`} target='blank' className='boton-mas-link'><button className='boton-mas'>Ver más <FaArrowRight /></button></a>
  )
}

export default BotonMas