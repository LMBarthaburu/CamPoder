import React from 'react'
import { Link } from 'react-router-dom'
import './marcas.css'

function Marcas() {
  return (
    <section className='text-center marcas'>
      <h1>Productos y Servicios</h1>
      <div className='d-lg-flex'>
        <Link className='contenedor fondo-1 d-flex justify-content-center align-items-center' to='/maquinaria'>
          <div className='color-1'></div>
          <div className='marca-titulo mx-3 maquinaria'>
            <h2 className='fw-bold' >MAQUINARIA AGRICOLA</h2>
            <h3>Somos representante comercial <span className='fw-bold'>PAUNY</span>, una empresa argentina líder en el rubro metalmecánico, con una completa gama de tractores de mediana y alta potencia, y de una sólida maquinaria vial.
            </h3>
            <Link to='/maquinaria' className='d-lg-none marcas-link'>Ver más</Link>
          </div>
        </Link>
        <Link className='contenedor fondo-2 d-flex justify-content-center align-items-center' to='/semillas'>
          <div className='color-2'></div>
          <div className='marca-titulo mx-3 semillas'>
            <h2 className='fw-bold'>PIONEER SEMILLAS</h2>
            <h3>Líder mundial en desarrollo y producción de genética y biotecnología de avanzada para cultivos. <br /> Semillas de Maiz - Semillas de Sorgo.</h3>
            <h5>Somos representantes <span className='fw-bold'>PIONEER</span> en Tucumán y zonas de Catamarca y Santiago del Estero.</h5>
            <Link to='/semillas' className='d-lg-none marcas-link-1'>Ver más</Link>
          </div>
        </Link>
        <Link className='contenedor fondo-3 d-flex justify-content-center align-items-center' to='/jardineria'>
          <div className='color-3'></div>
          <div className='marca-titulo mx-3 maquinaria'>
            <h2 className='fw-bold' >JARDINERIA Y PODA</h2>
            <h3>Elegí la marca N° 1 en el mundo de motoimplementos y herramientas para jardinería!
            <span className='fw-bold'>ELEGI STIHL!</span></h3>
            <h5>Motosierras-Motoguadañas-Pulvaerizadoras-Cortacercos</h5>
            <Link to='/jardineria' className='d-lg-none marcas-link'>Ver más</Link>
          </div>
        </Link>
        <Link className='contenedor fondo-5 d-flex justify-content-center align-items-center' to='/tromen'>
          <div className='color-5'></div>
          <div className='marca-titulo mx-3 semillas'>
            <h2 className='fw-bold' >HORNOS, PARRILLAS Y CALEFACTORES</h2>
            <h3> hay una <span className='fw-bold'>TROMEN</span> para cada momento!</h3>
            <Link to='/tromen' className='d-lg-none marcas-link-1'>Ver más</Link>
          </div>
        </Link>
        <Link className='contenedor fondo-6 d-flex justify-content-center align-items-center' to='/termos'>
          <div className='color-6'></div>
          <div className='marca-titulo mx-3 semillas'>
            <h2 className='fw-bold' >TERMOS STANLEY</h2>
            <h3>Termos, mates, bombillas, vasos y todo lo que busques de la linea <span className='fw-bold'>STANLEY</span> conseguilo aquí. <br /> 100% Originales y al mejor precio! </h3>
            <Link to='/termos' className='d-lg-none marcas-link-1'>Ver más</Link>
          </div>
        </Link>
        <Link className='contenedor fondo-4 d-flex justify-content-center align-items-center' to='/servicio'>
          <div className='color-4'></div>
          <div className='marca-titulo mx-3 semillas'>
            <h2 className='fw-bold' >SERVICIO TECNICO</h2>
            <h3>Ofrecemos servicio post-venta oficial de nuestras marcas, reparación en campo y la mas amplia gama de repuestos. <br /> Servicio tecnico oficial Stihl en Tucumán. </h3>
            <Link to='/servicio' className='d-lg-none marcas-link-1'>Ver más</Link>
          </div>
        </Link>
      </div>
    </section>
  )
} 
export default Marcas