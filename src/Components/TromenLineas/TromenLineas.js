import React from 'react'
import './tromenLineas.css'
import CardTromen from '../CardTromen/CardTromen'
import {Tromen} from '../../assets/dataBase/Tromen'


function TromenLineas() {
  const calefaccion = Tromen.filter(Tromen=>Tromen.categoria==='Calefaccion')
  const Gourmet = Tromen.filter(Tromen=>Tromen.categoria==='Gourmet')
  const AireLibre = Tromen.filter(Tromen=>Tromen.categoria==='Aire Libre')

  

  return (
    <div className='container'>
      <h1 className='mt-5'>Tromen</h1>
        <p className='fs-6 fw-normal'>Tromen no solo es sinónimo de calefacción, si no de Fuegos. Conseguí aquí la mas amplia linea de hornos, parrillas, calefactores y todos los accesorios para tu cocina y tu tromen.</p>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header calefaccion" id="panelsStayOpen-headingOne">
            <button className="accordion-button accordion-tromen collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Calefacción
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <div className='d-flex flex-wrap justify-content-lg-around align-items-center mb-5 ' id='caja'>
                {
                  calefaccion.map(item=>
                    <CardTromen 
                      key={item.id} 
                      modelo={item.modelo} 
                      img={item.img} 
                      tipo={item.tipo} 
                      diametroToatal={item.diametroTotal} 
                      diametroCoccion={item.diametroCoccion} 
                      peso={item.peso} 
                      categoria={item.categoria} 
                      alto={item.alto} 
                      ancho={item.ancho} 
                      profundidad={item.profundidad} 
                      ambiente={item.ambiente} 
                      medidas={item.medidas} 
                      potencia={item.potencia} 
                      salida={item.salida}/>
                  )
                }
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header gourmet" id="panelsStayOpen-headingTwo">
              <button className="accordion-button accordion-tromen collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Gourmet
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div className="accordion-body">
                <div className='d-flex flex-wrap justify-content-lg-around align-items-center mb-5 ' id='caja'>
                  {
                    Gourmet.map(item=>
                      <CardTromen 
                        key={item.id} 
                        modelo={item.modelo} 
                        img={item.img} 
                        tipo={item.tipo} 
                        diametroToatal={item.diametroTotal} 
                        diametroCoccion={item.diametroCoccion} 
                        peso={item.peso} 
                        categoria={item.categoria} 
                        alto={item.alto} 
                        ancho={item.ancho} 
                        profundidad={item.profundidad} 
                        ambiente={item.ambiente} 
                        medidas={item.medidas} 
                        potencia={item.potencia} 
                        salida={item.salida}/>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header aire-libre" id="panelsStayOpen-headingThree">
              <button className="accordion-button accordion-tromen collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Aire Libre
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
              <div className="accordion-body">
                <div className='d-flex flex-wrap justify-content-lg-around align-items-center mb-5 ' id='caja'>
                  {
                    AireLibre.map(item=>
                      <CardTromen 
                        key={item.id} modelo={item.modelo} 
                        img={item.img} 
                        tipo={item.tipo} 
                        diametroToatal={item.diametroTotal} 
                        diametroCoccion={item.diametroCoccion} 
                        peso={item.peso} 
                        categoria={item.categoria} 
                        alto={item.alto} 
                        ancho={item.ancho} 
                        profundidad={item.profundidad} 
                        ambiente={item.ambiente} 
                        medidas={item.medidas} 
                        potencia={item.potencia} 
                        salida={item.salida}/>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TromenLineas