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
  const selecOption=()=>{
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
        <option value="motosierra" className='opcion' onClick={selecOption}>Motosierras</option>
        <option value="motoguadaña" className='opcion' onClick={selecOption}>Motoguadañas</option>
        <option value='sistema combinado'className='opcion' onClick={selecOption}>Sistema Combinado</option>
        <option value='podadora de altura'className='opcion' onClick={selecOption}>Podadora de Altura</option>
        <option value='cortacerco'className='opcion' onClick={selecOption}>Cortacercos</option>
        <option value='sopladora'className='opcion' onClick={selecOption}>Sopladoras</option>
        <option value='pulverizadora'className='opcion' onClick={selecOption}>Pulverizadoras</option>
        <option value='hoyadora'className='opcion' onClick={selecOption}>Hoyadora, Tronzadora y Taladro</option>
        <option value='aspiradora'className='opcion' onClick={selecOption}>Aspiradora</option>
        <option value='hidrolavadora'className='opcion' onClick={selecOption}>Hidrolavadora</option>
        <option value='AP'className='opcion' onClick={selecOption}>Batería AP (prosesional)</option>
        <option value='AK'className='opcion' onClick={selecOption}>Batería Ak (semi-profesional)</option>
        <option value='AI'className='opcion' onClick={selecOption}>Batería AI (doméstica)</option>
        <option value='AS'className='opcion' onClick={selecOption}>Batería AS (doméstica)</option>
      </select>
      <div className='d-flex flex-wrap justify-content-lg-around align-items-center mb-5 ' id='caja'>
        {
        data.map(items=><JardineriaCard key={items.id} motor={items.motor} imagen={items.img} peso={items.peso} potencia={items.potencia} tipo={items.tipo} modelo={items.modelo} espada={items.espada} cuchilla={items.cuchilla} altura={items.altura} caudal={items.caudal} velocidad={items.velocidad} deposito={items.deposito} presion={items.presion} capacidad={items.capacidad} alcance={items.alcance} diametro={items.diametro} profundidad={items.profundidad} caudalAgua={items.caudalAgua} energia={items.energia} carga={items.carga}/>)
        }
      </div>

    </div>
  )
}

export default Stihl