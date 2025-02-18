import React, { useEffect, useState } from 'react'
import './termos.css'
import TermosCard from '../TermosCard/TermosCard'
import {StanleyDB} from '../../assets/dataBase/Stanley.js'


function Stanley() {
  const [data, setData] = useState([])
  const [categoria, setCategoria] = useState('todo')

  const Categorias = [
    { value: 'todo', label: 'Todos los Productos' },
    { value: 'termos', label: 'Termos' },
    { value: 'mates', label: 'Mates' },
    { value: 'hidratacion', label: 'Hidratación' },
    { value: 'cafe', label: 'Café' },
    { value: 'bar', label: 'Bar' },
    { value: 'alimentos', label: 'Alimentos' },
  ]

  const selectData = (valor) => {
    if (valor === 'todo') {
      setData(StanleyDB)
    } else {
      const filteredData = StanleyDB.filter(item => item.categoria === valor)
      setData(filteredData)
    }
  }

  useEffect(() => {
    selectData(categoria)
  }, [categoria])

  return (
    <div className='container'>
      <h1 className='mt-5'>Termos Stanley</h1>
      <p>La marca Stanley posee una rica historia centenaria. En 1913, el visionario William Stanley Jr. fusionó el aislamiento al vacío con la robustez del acero para fabricar una botella transportable, cambiando para siempre la forma de consumir bebidas calientes. Fue así como nació el flamante termo de acero que se ha ganado nuestros corazones.
      En un siglo, su termo hermético ha evolucionado de concepto a icono, convirtiéndose en una parte esencial de la jornada laboral, los viajes por carretera y las aventuras al aire libre.</p>
      <select onChange={(e) => setCategoria(e.target.value)} defaultValue="todo" id='opciones-termos'>
        {
          Categorias.map(categoria=><option key={categoria.value} value={categoria.value} className='opcion-termos'>{categoria.label}</option>)
        }
      </select>
        {
          data.length>0?
          <>
            <div className='d-flex flex-wrap justify-content-lg-around align-items-center mb-5'>
            {
              data.map(item=>
              <TermosCard 
                key={item.id}
                modelo={item.modelo} 
                imagen={item.img}
              />)
            }
            </div>
            <small>*Variedad de colores disponibles</small>
          </>
        :
        <h3>No hay resultados</h3>
      }
    </div>
  )
}

export default Stanley