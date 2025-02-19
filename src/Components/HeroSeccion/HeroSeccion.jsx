import React, { useEffect, useState } from 'react'
import './heroSeccion.css'
import jardineriaLogo from '../../assets/Logos/stihl-logo.png'
import maquianriaLogo from '../../assets/tractores/pauny-logo-hero.png'
import tromenLogo from '../../assets/Logos/tromen-logo.png'
import termosLogo from '../../assets/Logos/logo-stanley-blanco.png'
import semillasLogo from '../../assets/Logos/pioneer-logo.png'
import jardineriaImg from '../../assets/MaquinaStihl/hero.jpg'
import maquianriaImg from '../../assets/tractores/pauny-hero.jpg'
import tromenImg from '../../assets/Tromen/tromen.jpg'
import termosImg from '../../assets/Stanley/hero.jpg'
import semillasImg from '../../assets/Semillas/pioneer-fondo.jpg'
import servicioImg from '../../assets/Taller/servicio-fondo.jpg'



function HeroSeccion({tipo}) {
    const [Logo, setLogo] = useState('')
    const [Imagen, setImagen] = useState('')
    const [Text, setText] = useState('')

  
  const setImg=()=>{
    switch (tipo) {
      case 'jardineria':
        setLogo(jardineriaLogo)
        setImagen(jardineriaImg)
        return
      case 'maquinaria':
        setLogo(maquianriaLogo)
        setImagen(maquianriaImg)
        return
      case 'tromen':
        setLogo(tromenLogo)
        setImagen(tromenImg)
        return
      case 'termos':
        setLogo(termosLogo)
        setImagen(termosImg)
        return
      case 'semillas':
        setLogo(semillasLogo)
          setImagen(semillasImg)
          return
      case 'servicio':
        setLogo('')
        setText('Servico Técnico')
        setImagen(servicioImg)
        return
      default:
        return null
    }
  }

  useEffect(() => {
    setImg()
  }, [])// eslint-disable-line

  return (
    <div className='hero-seccion d-flex justify-content-center align-items-center'>
      <img src={Imagen} alt={`Imagen ${tipo}`} className='img-hero-seccion' />
      {
        Text.length>0?
        <h3 className='text-hero-seccion'>{Text}</h3>
        :
        null
      }
      {
        Logo.length>0?
        <img src={Logo} alt={`Logo ${tipo}`} className='logo-seccion' />
        :
        null
      }
    </div>    
  )
}

export default HeroSeccion