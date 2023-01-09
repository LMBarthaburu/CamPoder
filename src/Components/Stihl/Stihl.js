import React from 'react'
import JardineriaCard from '../JardineriaCard/JardineriaCard'
import {Maquinaria} from '../../assets/dataBase/Maquinaria.js'
import { useState } from 'react'
import './stihl.css'


function Stihl() {
  const [data, setdata] = useState([])

  const selectData=()=>{
    const valor = document.getElementById('opciones').value
    const implemento = Maquinaria.filter(Maquinaria=>Maquinaria.tipo === `${valor}`)
    setdata(implemento)
  }

  return (
    <div className='container'>
      <h1 className='mt-5'>Elegí la marca N°1 en el mundo</h1>
      <p>La más amplia gama de maquinária y herramientas de jardineria tanto para uso doméstico como para uso profesional. Motosierras, bordeadoras, motoguadañas, herramientas manuales y mucho más!</p>
      <select onClick={selectData} id='opciones'>
        <option className='opcion'>Selecciona una opción</option>
        <option value="motosierra" className='opcion'>Motosierras</option>
        <option value="motoguadaña" className='opcion'>Motoguadañas</option>
        <option value='sistema combinado'className='opcion'>Sistema Combinado</option>
        <option value='podadora de altura'className='opcion'>Podadora de Altura</option>
        <option value='cortacerco'className='opcion'>Cortacercos</option>
        <option value='sopladora'className='opcion'>Sopladoras</option>
        <option value='pulverizadora'className='opcion'>Pulverizadoras</option>
        <option value='hoyadora'className='opcion'>Hoyadora, Tronzadora y Taladro</option>
        <option value='aspiradora'className='opcion'>Aspiradora</option>
        <option value='hidrolavadora'className='opcion'>Hidrolavadora</option>
        <option value='bateria'className='opcion'>Implementos a Batería</option>
      </select>
      <div className='d-flex flex-wrap justify-content-around align-items-center mb-5'>
        {
        data.map(items=><JardineriaCard key={items.id} motor={items.motor} imagen={items.img} peso={items.peso} potencia={items.potencia} tipo={items.tipo} modelo={items.modelo} espada={items.espada} cuchilla={items.cuchilla} altura={items.altura} caudal={items.caudal} velocidad={items.velocidad} deposito={items.deposito} presion={items.presion}/>)
        }
      </div>

    </div>
  )
}

export default Stihl