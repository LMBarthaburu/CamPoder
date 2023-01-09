import React from 'react'
import './tractores.css'
import LineaConvencional from '../../assets/tractores/linea-convencional.png'
import LineaEvo from '../../assets/tractores/linea-evo.png'
import LineaBravo from '../../assets/tractores/linea-bravo.png'
import LineaNovo from '../../assets/tractores/linea-novo.png'
import LineaBrioso from '../../assets/tractores/linea-brioso.png'
import LineaVial from '../../assets/tractores/linea-vial.png'
import {Pauny} from '../../assets/dataBase/Pauny.js'
import TractoresCard from '../TractoresCard/TractoresCard'


function Tractores() {
  const convencional = Pauny.filter(Pauny=>Pauny.serie==='convencional')
  const evo = Pauny.filter(Pauny=>Pauny.serie==='evo')
  const bravo = Pauny.filter(Pauny=>Pauny.serie==='bravo')
  const novo = Pauny.filter(Pauny=>Pauny.serie==='novo')
  const brioso = Pauny.filter(Pauny=>Pauny.serie==='brioso')
  const vial = Pauny.filter(Pauny=>Pauny.serie==='vial')

  return (
    <div className='container'>
      <h1 className='mt-5'>Maquinária Agrícola</h1>
      <p>Somos concesionario oficial Pauny en Tucumán, una empresa argentina líder en el rubro metalmecánico, reconocida por la producción de una completa gama de tractores de mediana y alta potencia, y de una sólida maquinaria vial. La fuerza que elige la mayoría para dar soluciones concretas al crecimiento y al desarrollo de tareas productivas -tanto agropecuarias como viales- en el país.</p>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center ps-3'>
        <img src={LineaConvencional} alt="Linea convencional" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap justify-content-between align-items-center'>
        {convencional.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center ps-3'>
        <img src={LineaEvo} alt="Linea Evo" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap justify-content-between align-items-center'>
        {evo.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center'>
        <img src={LineaBravo} alt="Linea Bravo" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap justify-content-between align-items-center'>
        {bravo.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center'>
        <img src={LineaNovo} alt="Linea Novo" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap justify-content-between align-items-center'>
        {novo.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center ps-3'>
        <img src={LineaBrioso} alt="Linea Brioso" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap justify-content-between align-items-center'>
        {brioso.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center ps-3'>
        <img src={LineaVial} alt="Linea Vail" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap justify-content-between align-items-center'>
        {vial.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
    </div>
  )
}

export default Tractores