import React from 'react'
import JardineriaCard from '../JardineriaCard/JardineriaCard'
import {Maquinaria} from '../../assets/dataBase/Maquinaria.js'
import { useState } from 'react'


function Stihl() {
  const [data, setdata] = useState([])

  const selectData=()=>{
    const valor = document.getElementById('opciones').value
    console.log(valor)
    const implemento = Maquinaria.filter(Maquinaria=>Maquinaria.tipo === `${valor}`)
    setdata(implemento)
  }
  console.log(data)

  return (
    <div className='container'>
      <select onClick={selectData} defaultChecked='motosierra' id='opciones' className='w-100 mt-3'>
        <option value="motosierra">Motosierras</option>
        <option value="motoguadaña">Motoguadañas</option>
      </select>
      <div className='d-flex flex-wrap'>
        {
        data.map(items=><JardineriaCard key={items.id} motor={items.motor} imagen={items.img} peso={items.peso} potencia={items.potencia} tipo={items.tipo} modelo={items.modelo} espada={items.espada}/>)
        }
      </div>

    </div>
  )
}

export default Stihl