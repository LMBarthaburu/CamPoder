import React, { useEffect, useState } from 'react'
import './hero.css'
import Campoder from '../../assets/portada-campoder.jpg'
import CampoderMovil from '../../assets/portada-hero-movil.png'


function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1022);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1022);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className='hero '>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src={isMobile ? CampoderMovil : Campoder} 
                className="carousel-img d-block w-100 " 
                alt="Campoder Logo"
              />  
            </div>
            <div className="carousel-item">
              <img 
                src="https://www.pauny.com.ar/asset/img/uploads/1545248637564_PAU-SLIDEWEB-REPUESTOS-HOME-.png" 
                className="carousel-img d-block w-100 " 
                alt="Pauny"
              />  
            </div>
            <div className="carousel-item">
              <img 
                src="https://www.kingmods.net/uploads/fs22/mods/pioneer-seeds-fs22-3-2.jpg" 
                className="carousel-img d-block w-100 " 
                alt="Pioneer"
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://extranetstihl.b2bemaresa.cl/assets/covers/login.jpg" 
                className="carousel-img d-block w-100 " 
                alt="Stihl"
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2024/03/termo-stanley-3291202.jpg?tf=3840x" 
                className="carousel-img d-block w-100 " 
                alt="Stanley"/>
            </div>
            <div className="carousel-item">
              <img 
                src="https://i.ytimg.com/vi/YGYVoykkKCA/maxresdefault.jpg" 
                className="carousel-img d-block w-100 " 
                alt="Tromen"
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero