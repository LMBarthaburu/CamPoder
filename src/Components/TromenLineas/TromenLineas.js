import React from 'react'
import './tromenLineas.css'
import Calefaccion from '../../assets/Tromen/calefaccion.jpg'
import AireLibre from '../../assets/Tromen/aire-libre.jpg'
import Gourmet from '../../assets/Tromen/gourmet.jpg'


function TromenLineas() {
  const valorUrl =`https://api.whatsapp.com/send?phone=3814010691&text=Hola! precio y disponibilidad de Tromen`


  return (
    <div className='container'>
      <h1 className='my-3'>Líneas</h1>
      <div className='d-lg-flex justify-content-between my-3'>
        <a href={valorUrl} className='img-container-tromen text-center' value='calefaccion' target='blank'>
          <img src={Calefaccion} alt="Linea calefacción" className='img-tromen'/>
          <h2 className='linea-tromen'>Calefacción</h2>
        </a>
        <a href={valorUrl} className='img-container-tromen text-center' value='gourmet' target='blank'>
          <img src={Gourmet} alt="Linea gourmet" className='img-tromen'/>
          <h2 className='linea-tromen'>Gourmet</h2>
        </a>
        <a href={valorUrl} className='img-container-tromen text-center' value='aire-libre' target='blank'>
          <img src={AireLibre} alt="Linea aire libre" className='img-tromen'/>
          <h2 className='linea-tromen'>Aire Libre</h2>
        </a>
      </div>
    </div>
  )
}

export default TromenLineas