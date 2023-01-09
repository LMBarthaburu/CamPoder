import React from 'react'
import './tipoDeSemillas.css'
import MaizSub from '../../assets/Semillas/maiz-subtropical.png'
import MaizTemp from '../../assets/Semillas/maiz-templado.png'
import Sorgo from '../../assets/Semillas/sorgo.png'
import Leptra from '../../assets/Semillas/leptra.png'

function TipoDeSemillas() {
  return (
    <section className='container my-4'>
      <div>
        <h2 className='semilla-titulo'>Semillas Pioneer</h2>
        <div className='d-lg-flex justify-content-evenly align-items-center text-center'>
          <div className='my-2'>
            <h4 className='semillas-sutitulo maiz'>Maiz Subtropical</h4>
            <img src={MaizSub} alt="" className='w-100'/>
          </div>
          <div className='my-2'>
            <h4 className='semillas-sutitulo maiz'>Maiz Templado</h4>
            <img src={MaizTemp} alt="" className='w-100'/>
          </div>
        </div>
      </div>
      <div className='my-3'>
        <img src={Leptra} alt="Leptra" className='leptra' />
        <p>Los híbridos con tecnología LEPTRA son la mejor elección para el control de las principales plagas que atacan el cultivo de maíz. Ofrecen una excelente opción para los agricultores que quieren mas seguridad y rentabilidad en sus cultivos.  Otorgan al productor la posibilidad de tener mas flexibilidad y una mayor confianza en sus decisiones de siembra.
        Cuentan con el mejor control de lepidópteros del mercado y ofrecen la posibilidad de control de malezas resistentes gracias a su tecnología Liberty Link que vuelve a estos híbridos resistentes al glufosinato de amonio.</p>
      </div>
      <div className='text-center my-2 justify-content-center align-items-center'>
        <div>
          <h4 className='semillas-sutitulo sorgo'>Sorgo Pioneer</h4>
          <h6 className='sorgo fw-bold  '>Granifero/Doble Proposito</h6>
          <img src={Sorgo} alt="" className='sorgo-img'/>
        </div>
      </div>
    </section>
  )
}

export default TipoDeSemillas