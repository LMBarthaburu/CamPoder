import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { useParams } from 'react-router-dom'
import ProductosHero from '../../Components/ProductosHero/ProductosHero'
import ProductosDetalles from '../../Components/ProductosDetalles/ProductosDetalles'
import { useSEO } from '../../hooks/useSEO'
import Footer from '../../Components/Footer/Footer'

function ProductPage() {
  const {id,tipo} = useParams()
  const [data, setData] = useState('')
  
  const setinfo = () => {
    switch (tipo) {
      case 'jardineria':
        return setData('Stihl')
      case 'maquinaria':
        return setData('Pauny')
      case 'tromen':
        return setData('Tromen')
      case 'termos':
        return setData('Stanley')
      default:
        return setData('')
        }
  };
  

  useSEO({
    title:`${id} | CamPoder SRL`,
    description:`Consegui tu ${data} ${id} en cualquiera de nuestras sucursales de San Miguel de Tucumán y Yerba Buena.`
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    setinfo()
  }, [])// eslint-disable-line
  
  return (
    <>
      <NavBar/>
      <ProductosHero tipo={tipo}/>
      <ProductosDetalles tipo={tipo} id={id}/>
      <Footer/>
    </>
  )
}

export default ProductPage