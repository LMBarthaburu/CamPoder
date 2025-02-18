import React from 'react'
import './tipoDeSemillas.css'
import P2297 from '../../assets/Semillas/P2297.png'
import P2021 from '../../assets/Semillas/P0622.png'
import P1804 from '../../assets/Semillas/P1804.png'
import P2089 from '../../assets/Semillas/P2089.png'
import S60A01 from '../../assets/Semillas/60A01.png'
import S75A06 from '../../assets/Semillas/75A06.png'
import S80A02 from '../../assets/Semillas/80A02.png'



function TipoDeSemillas() {
  const Maiz=[
    {
      title:'P2297 PWUE', 
      description:'Nuevo híbrido de excelente potencial y estabilidad de rendimiento para las zonas centro y norte. Muy buen perfil agronómico. Disponible en tecnología Power Core®Ultra.',
      img:`${P2297}`
    },
    {
      title:'P2089 VYHR', 
      description:'Superá tus propios records de rendimiento. Destacado resultado en el norte del país durante 3 años consecutivos desde su lanzamiento. Disponible en tecnología Leptra® y con Lumivia® como tratamiento premium de semillas.',
      img:`${P2089}`
    },
    {
      title:'P1804 PWUE', 
      description:'Híbrido con potencial de rendimiento, estabilidad y velocidad de secado a cosecha. Gran adaptación a varias zonas del país y con destacado desempeño en la zona Norte y Litoral. Muy buena tolerancia a tizón. Disponible en tecnología Power Core® Ultra.',
      img:`${P1804}`
    },
    {
      title:'P2021 PWUE', 
      description:'Máximo rendimiento y estabilidad en siembras tardías. Excelente adaptación a la región centro, litoral y núcleo. Muy buen comportamiento frente a tizón. Cuenta con PowerCore® Ultra Enlist, la mejor biotecnología que le confiere el mejor control de insectos y la mayor variedad de herramientas para control de malezas.',
      img:`${P2021}`
    },
  ]
  const Sorgo=[
    {
      title:'80T25', 
      description:'Es un híbrido granífero que se puede destinar tanto a la cosecha de sus granos como al silaje de planta entera. Su voluminoso porte y rendimiento en grano lo convierten en un excelente material doble propósito.',
      tipo:'Sorgo Doble Propósito – Silaje'
    },
    {
      title:'81G67', 
      description:'Sorgo ideal para alcanzar los mayores rendimientos, de ciclo intermedio-largo. Buena adaptabilidad a ambientes con estrés y destacable comportamiento ante el ataque de pájaros. Por su buena producción de biomasa y de grano este material es indicado para confeccionar reservas con planta entera, como de grano húmedo.',
      tipo:'Sorgo Granífero'
    },
  ]
  const Soja=[
    {
      title:'P 60A01 SCE ', 
      description:'La variedad para ambientes de Centro y Norte. Con tecnología Conkesta® E3 STS® grupo 6 corto. Alto potencial de rendimiento para siembras de primera y segunda. Posee buen comportamiento sanitario siendo resistente al Cancro de tallo. ',
      img:`${S60A01}`
    },
    {
      title:'P 75A06 SCE', 
      description:'La variedad para ambientes potenciales del Norte. Con tecnología Conkesta® E3 STS® grupo 7 medio. Alto potencial de rendimiento para siembras de primera y segunda. Posee buen comportamiento sanitario siendo resistente al Cancro de tallo y a la Mancha de ojo de rana.',
      img:`${S75A06}`
    },
    {
      title:'P 80A02 SCE', 
      description:'La variedad para ambientes restrictivos del Norte. Con tecnología Conkesta® E3 STS® grupo 8 corto. Alto potencial de rendimiento para siembras de primera y segunda. Posee buen comportamiento sanitario siendo resistente al Cancro de tallo.',
      img:`${S80A02}`
    },
  ]
  return (
    <section className='container my-4'>
      <div>
        <h2 className='semilla-titulo'>Semillas Pioneer</h2>
        <h3 className='semilla-sutitulo maiz'>Semillas de Maiz</h3>
        <div className="accordion accordion-flush" id="accordionFlushMaiz">
        {
          Maiz.map((item, index)=>
            <div className="accordion-item" key={item.title}>
              <h2 className="accordion-header">
                <button className="accordion-button accordion-semillas maiz collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}-maiz`} aria-expanded="false" aria-controls={`flush-collapse${index}-maiz`}>
                  {item.title}
                </button>
              </h2>
              <div id={`flush-collapse${index}-maiz`} className="accordion-collapse collapse">
                <img src={item.img} alt={item.title} className='w-100'/>
                <div className="accordion-body px-3 px-lg-5">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          )
        }
        </div>
        <h3 className='semilla-sutitulo soja'>Semillas de Soja</h3>
        <div className="accordion accordion-flush" id="accordionFlushSoja">
        {
          Soja.map((item, index)=>
            <div className="accordion-item" key={item.title}>
              <h2 className="accordion-header">
                <button className="accordion-button accordion-semillas soja collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}-soja`} aria-expanded="false" aria-controls={`flush-collapse${index}-soja`}>
                  {item.title}
                </button>
              </h2>
              <div id={`flush-collapse${index}-soja`} className="accordion-collapse collapse">
              <img src={item.img} alt={item.title} className='w-100'/>
                <div className="accordion-body px-3 px-lg-5">
                  <p className='mt-3'>{item.description}</p>
                </div>
              </div>
            </div>
          )
        }
        </div>
        <h3 className='semilla-sutitulo sorgo'>Semillas de Sorgo</h3>
        <div className="accordion accordion-flush" id="accordionFlushSorgo">
        {
          Sorgo.map((item, index)=>
            <div className="accordion-item" key={item.title}>
              <h2 className="accordion-header">
                <button className="accordion-button accordion-semillas sorgo collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}-sorgo`} aria-expanded="false" aria-controls={`flush-collapse${index}-sorgo`}>
                  {item.title}
                </button>
              </h2>
              <div id={`flush-collapse${index}-sorgo`} className="accordion-collapse collapse">
                <div className="accordion-body px-3 px-lg-5">
                  <p><strong>{item.tipo}</strong></p>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          )
        }
        </div>
      </div>
    </section>
  )
}

export default TipoDeSemillas