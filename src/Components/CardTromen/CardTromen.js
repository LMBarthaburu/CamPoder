import React from 'react'
import BotonWtsp from '../BotonWtsp/BotonWtsp'
import '../CardTromen/cardTromen.css'

function CardTromen({id, modelo, img, tipo, diametroToatal, diametroCoccion, peso, categoria, alto, ancho, profundidad, ambiente, medidas, potencia, salida }) {
  return (
    <div className='tromen-card my-3 text-center d-flex flex-column align-items-center justify-content-between p-2'>
      <img src={img} alt={modelo} className='tromen-card-img'/>
      <div className='mb-3'>
        <h4>{modelo}</h4>
        {
          tipo?
          <h6 className='m-0'>Tipo: {tipo}</h6> : null
        }
        {
          diametroToatal?
          <h6 className='m-0'>Diametro Total: {diametroToatal}</h6> : null
        }
        {
          diametroCoccion?
          <h6 className='m-0'>Diametro Cocción: {diametroCoccion}</h6> : null
        }
        {
          peso?
          <h6 className='m-0'>Peso: {peso}</h6> : null
        }
        {
          alto?
          <h6 className='m-0'>Alto: {alto}</h6> : null
        }
        {
          ancho?
          <h6 className='m-0'>Ancho: {ancho}</h6> : null
        }
        {
          profundidad?
          <h6 className='m-0'>Profundidad: {profundidad}</h6> : null
        }
        {
          ambiente?
          <h6 className='m-0'>Ambiente a calefaccionar: {ambiente}</h6> : null
        }
        {
          medidas?
          <h6 className='m-0'>Medidas (an/al/prof): {medidas}</h6> : null
        }
        {
          potencia?
          <h6 className='m-0'>Potencia: {potencia}</h6> : null
        }
        {
          salida?
          <h6 className='m-0'>Salida: {salida}</h6> : null
        }
        <BotonWtsp modelo={modelo}/>
      </div>
    </div>
  )
}

export default CardTromen