import React from 'react'
import './tractores.css'
import LineaConvencional from '../../assets/linea-convencional.png'
import LineaEvo from '../../assets/linea-evo.png'
import LineaBravo from '../../assets/linea-bravo.png'
import LineaNovo from '../../assets/linea-novo.png'
import LineaBrioso from '../../assets/linea-brioso.png'
import LineaVial from '../../assets/linea-vial.png'
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
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center ps-3'>
        <img src={LineaConvencional} alt="Linea convencional" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap'>
        {convencional.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center ps-3'>
        <img src={LineaEvo} alt="Linea Evo" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap'>
        {evo.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center'>
        <img src={LineaBravo} alt="Linea Bravo" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap'>
        {bravo.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center'>
        <img src={LineaNovo} alt="Linea Novo" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap'>
        {novo.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center ps-3'>
        <img src={LineaBrioso} alt="Linea Brioso" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap'>
        {brioso.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
      <div className='tractor-linea-box mb-1 mt-3 d-flex justify-content-start align-items-center ps-3'>
        <img src={LineaVial} alt="Linea Vail" className='logo-linea-tractores'/>
      </div>
      <div className='d-flex flex-wrap'>
        {vial.map(items=><TractoresCard key={items.id} img={items.img} modelo={items.modelo} motor={items.motor} potencia={items.potencia} traccion={items.traccion} transmicion={items.transmicion} sistemaHidraulico={items.sistemaHidraulico}/>)}
      </div>
    </div>
  )
}

export default Tractores