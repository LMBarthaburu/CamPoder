import React, { useEffect, useState } from 'react'
import {Maquinaria} from '../../assets/dataBase/Maquinaria'
import {Pauny} from '../../assets/dataBase/Pauny.js'
import {Tromen} from '../../assets/dataBase/Tromen'
import {StanleyDB} from '../../assets/dataBase/Stanley.js'
import './productosDetalles.css'
import BotonWtsp from '../BotonWtsp/BotonWtsp'
import { FaArrowLeft } from "react-icons/fa";



function ProductosDetalles({ id, tipo }) {
  const [data, setData] = useState(null)

  const setinfo = () => {
    switch (tipo) {
      case 'jardineria':
        const jardineria = Maquinaria.find(item => item.modelo === id)
        if(!jardineria){
          return window.location.href = '/404'
        }
        return setData(jardineria)
      case 'maquinaria':
        const maquinaria = Pauny.find(item => item.modelo === id)
        if(!maquinaria){
          return window.location.href = '/404'
        }
        return setData(maquinaria)
      case 'tromen':
        const tromenInfo = Tromen.find(item => item.modelo === id)
        if(!tromenInfo){
          return window.location.href = '/404'
        }
        return setData(tromenInfo)
        case 'termos':
          const termos = StanleyDB.find(item => item.modelo === id)
          if(!termos){
            return window.location.href = '/404'
          }
          return setData(termos)
      default:
        return window.location.href = '/404'
    }
  };

  useEffect(() => {
    setinfo();
  }, [id, tipo]) // eslint-disable-line
  return (
    <>
      {
        !data ?
          <h1>Cargando valores...</h1>
          :
          <section className='container mb-5'>
            <div className='d-flex align-items-center'>
              <a className='detalles-flecha' href={`/${tipo}`}><FaArrowLeft /></a>           
              <h3 className='detalles-titulo ms-2 ms-md-3'>{data.modelo}</h3>
            </div>
            <div className='detalles-contenedor'>
              <img src={data.img} alt={`${data.modelo}`} />
              <div>
                {
                  data.categoria?
                  <h6 className=''><strong>Cateogía:</strong> {data.categoria}</h6> : null
                }
                {
                  data.serie?
                  <h6 className=''><strong>Serie:</strong> {data.serie}</h6> : null
                }
                {
                  data.tipo?
                  <h6><strong>Tipo:</strong>{data.tipo}</h6> : null
                }
                {
                  data.motor?
                  <h6 className=''><strong>Motor:</strong> {data.motor}</h6> : null
                }
                {
                  data.potencia?
                  <h6 className=''><strong>Potencia:</strong> {data.potencia}</h6> : null
                }
                {
                  data.espada?
                  <h6 className=''><strong>Espada:</strong> {data.espada}</h6>:null
                }
                {
                  data.cuchilla?
                  <h6 className=''><strong>Cuchilla:</strong> {data.cuchilla}</h6>:null
                }
                {
                  data.altura?
                  <h6 className=''><strong>Altura:</strong> {data.altura}</h6>:null
                }
                {
                  data.caudal?
                  <h6 className=''><strong>Caudal de aire:</strong> {data.caudal}</h6>:null
                }
                {
                  data.velocidad?
                  <h6 className=''><strong>Velocidad de aire:</strong> {data.velocidad}</h6>:null
                }
                {
                  data.deposito?
                  <h6 className=''><strong>Capacidad del depósito:</strong> {data.deposito}</h6>:null
                }
                {
                  data.presion?
                  <h6 className=''><strong>Presíon de trabajo:</strong> {data.presion}</h6>:null
                }
                {
                  data.alcance?
                  <h6 className=''><strong>Alcance:</strong> {data.alcance}</h6>:null
                }
                {
                  data.capacidad?
                  <h6 className=''><strong>Capacidad de deposito:</strong> {data.capacidad}</h6>:null
                }
                {
                  data.diametro?
                  <h6 className=''><strong>Diametro de corte:</strong> {data.diametro}</h6>:null
                }
                {
                  data.profundidad?
                  <h6 className=''><strong>Profundidad de corte:</strong> {data.profundidad}</h6>:null
                }
                {
                  data.caudalAgua?
                  <h6 className=''><strong>Caudal de agua:</strong> {data.caudalAgua}</h6>:null
                }
                {
                  data.energia?
                  <h6 className=''><strong>Energía:</strong> {data.energia}</h6>: null
                }
                {
                  data.carga?
                  <h6 className=''><strong>Tipo de carga:</strong> {data.carga}</h6>:null
                }
                {
                  data.traccion?
                  <h6 className=''><strong>Tracción:</strong> {data.traccion}</h6> : null
                }
                {
                  data.transmicion?
                  <h6 className=''><strong>Transmición:</strong> {data.transmicion}</h6> : null
                }
                {
                  data.sistemaHidraulico?
                  <h6 className=''><strong>Sistema Hidráulico:</strong> {data.sistemaHidraulico}</h6> : null
                }
                {
                  data.diametroTotal?
                  <h6 className=''><strong>Diametro Total:</strong> {data.diametroTotal}</h6> : null
                }
                {
                  data.diametroCoccion?
                  <h6 className=''><strong>Diametro Cocción:</strong> {data.diametroCoccion}</h6> : null
                }
                {
                  data.peso?
                  <h6 className=''><strong>Peso:</strong> {data.peso}</h6> : null
                }
                {
                  data.alto?
                  <h6 className=''><strong>Alto:</strong> {data.alto}</h6> : null
                }
                {
                  data.ancho?
                  <h6 className=''><strong>Ancho:</strong> {data.ancho}</h6> : null
                }
                {
                  data.profundidad?
                  <h6 className=''><strong>Profundidad:</strong> data.{data.profundidad}</h6> : null
                }
                {
                  data.ambiente?
                  <h6 className=''><strong>Ambiente a calefaccionar:</strong> {data.ambiente}</h6> : null
                }
                {
                  data.medidas?
                  <h6 className=''><strong>Medidas (an/al/prof):</strong> {data.medidas}</h6> : null
                }
                {
                  data.salida?
                  <h6 className=''><strong>Salida:</strong> {data.salida}</h6> : null
                }
                <BotonWtsp modelo={data.modelo} className='boton-detalle'/>
              </div>
            </div>
            { data.descripcion?
              <div>
                <h6><strong>Caracteristicas:</strong></h6>
                {
                  data.descripcion.map(item=><p key={item.id}>{item.texto}</p>)
                }
              </div>
              :
              null
            }
          </section>
      }
    </>
  )
}

export default ProductosDetalles