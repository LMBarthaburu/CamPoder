import React, { useEffect, useState } from 'react'
import jardineria from '../../assets/MaquinaStihl/hero.jpg'
import maquinaria from '../../assets/tractores/pauny-hero.jpg'
import tromen from '../../assets/Tromen/tromen.jpg'
import termos from '../../assets/Stanley/stanley.jpg'
import './productosHero.css'

function ProductosHero({tipo}) {
  const [backImg, setbackImg] = useState('')
  const [title, setTitle] = useState('')

  
  const setImg=()=>{
    setTitle(tipo.toUpperCase())
    switch (tipo) {
      case 'jardineria':
        return setbackImg(jardineria)
      case 'maquinaria':
        return setbackImg(maquinaria)
      case 'tromen':
        return setbackImg(tromen)
      case 'termos':
        return setbackImg(termos)
      default:
        return null
    }
  }

  useEffect(() => {
    setImg()
  }, [ ])// eslint-disable-line


  return (
    <div className='detalles-hero'> 
      <img src={backImg} alt="Hero" className='detalles-hero-img' />
      <h1 className='detalles-hero-title'>{title}</h1>    
    </div>

  )
}

export default ProductosHero