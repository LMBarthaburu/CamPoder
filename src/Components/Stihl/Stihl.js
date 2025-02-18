import React, { useEffect } from 'react'
import JardineriaCard from '../JardineriaCard/JardineriaCard'
import {Maquinaria} from '../../assets/dataBase/Maquinaria'
import {Detalle} from '../../assets/dataBase/Detalle'
import { useState } from 'react'
import './stihl.css'
import DescripcionCard from '../DescripcionCard/DescripcionCard'


function Stihl() {
  const [data, setData] = useState([])
  const [descripcion, setDescripcion] = useState([])
  const [value, setValue]= useState('todo')

  const modelos = [
    { value: 'todo', label: 'Todos los Productos' },
    { value: 'motosierra', label: 'Motosierras y Podadoras de Altura' },
    { value: 'motoguadaña', label: 'Motoguadañas' },
    { value: 'sistema combinado', label: 'Sistema Combinado' },
    { value: 'cortacerco', label: 'Cortacercos' },
    { value: 'cortadora de cesped', label: 'Cortadoras de césped' },
    { value: 'sopladora', label: 'Sopladoras' },
    { value: 'pulverizadora', label: 'Pulverizadoras' },
    { value: 'motor', label: 'Motor estacionario' },
    { value: 'motobomba', label: 'Motobombas' },
    { value: 'motocultivador', label: 'Motocultivador' },
    { value: 'hoyadora', label: 'Hoyadora, Tronzadora y Taladro' },
    { value: 'hidrolavadora', label: 'Hidrolavadora y Aspiradoras' },
    { value: 'AP', label: 'Batería AP (profesional)' },
    { value: 'AK', label: 'Batería Ak (semi-profesional)' },
    { value: 'AI', label: 'Batería AI (doméstica)' },
    { value: 'AS', label: 'Batería AS (doméstica)' },
  ]

  const selectData=(valor)=>{
    if(valor==='todo'){
      setData(Maquinaria)
      setDescripcion([]);
    }else{
      const implemento = Maquinaria.filter(item => item.tipo === valor);
      const maquinaDescripcion = Detalle.filter(item => item.tipo === valor);
      setData(implemento);
      setDescripcion(maquinaDescripcion);
    }
  }

  useEffect(() => {
    selectData(value)
  }, [value])
    

  return (
    <div className='container'>
      <h1 className='mt-5'>STIHL - la marca N°1 en el mundo</h1>
      <p>La más amplia gama de maquinária y herramientas de jardineria tanto para uso doméstico como para uso profesional. Motosierras, bordeadoras, motoguadañas, herramientas manuales y mucho más!</p>
      <select onChange={(e)=>setValue(e.target.value)} id='opciones' defaultValue="todo">
        {
          modelos.map(modelo=><option key={modelo.value} value={modelo.value} className='opcion'>{modelo.label}</option>)
        }
      </select>
      <div>
        {
          descripcion.map(items=><DescripcionCard key={items.tipo} texto={items.texto} imagen ={items.imagen}/>)
        }
      </div>
      <div className='d-flex flex-wrap justify-content-lg-around align-items-center mb-5 ' id='caja'>
        {
        data.map(items=>
          <JardineriaCard 
            key={items.id}
            motor={items.motor} 
            imagen={items.img} 
            peso={items.peso} 
            potencia={items.potencia} 
            tipo={items.tipo} 
            modelo={items.modelo} 
            espada={items.espada} 
            cuchilla={items.cuchilla} 
            altura={items.altura} 
            caudal={items.caudal} 
            velocidad={items.velocidad} 
            deposito={items.deposito} 
            presion={items.presion} 
            capacidad={items.capacidad} 
            alcance={items.alcance} 
            diametro={items.diametro} 
            profundidad={items.profundidad} 
            caudalAgua={items.caudalAgua} 
            energia={items.energia} 
            carga={items.carga}
          />)
        }
      </div>

    </div>
  )
}

export default Stihl