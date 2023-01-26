import React from 'react'
import BotonWtsp from '../BotonWtsp/BotonWtsp'
import '../JardineriaCard/jardineriaCard.css'

function JardineriaCard({id, tipo, imagen, modelo, motor, potencia, peso, espada, cuchilla, altura,caudal,velocidad, presion, deposito, alcance, capacidad, diametro, profundidad, caudalAgua, energia, carga}) {
//  const valor =`https://api.whatsapp.com/send?phone=3814010691&text=${modelo}`
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
        {
          alcance?
          <h6 className='m-0'>Alcance: {alcance}</h6>:null
        }
        {
          capacidad?
          <h6 className='m-0'>Capacidad de deposito: {capacidad}</h6>:null
        }
        {
          diametro?
          <h6 className='m-0'>Diametro de corte: {diametro}</h6>:null
        }
        {
          profundidad?
          <h6 className='m-0'>Profundidad de corte: {profundidad}</h6>:null
        }
        {
          caudalAgua?
          <h6 className='m-0'>Caudal de agua: {caudalAgua}</h6>:null
        }
        {
          energia?
          <h6 className='m-0'>Energía: {energia}</h6>: null
        }
        {
          carga?
          <h6 className='m-0'>Tipo de carga: {carga}</h6>:null
        }
            {/* <a href={valor} target='_blanck'>
      <button  className='mt-1'>Consultar disponibilidad</button>
    </a> */}
      <BotonWtsp modelo={modelo}/>
      </div>
    </div>
  )
}

export default JardineriaCard