import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import NavbarImg from '../../assets/navbar-img.jpg'
import './navbar.css'

function NavBar() {
  return (
    <div className='position-sticky top-0 bg-white navBar'>
      <nav className="navbar navbar-expand-lg  navbar-light mx-lg-5">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand" to="/">
              <img src={NavbarImg} alt="Logo CamPoder SRL" className='navbar-img'/>
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav pt-3 pt-lg-0">
                <NavLink className="navbar-link" to="/maquinaria">Maquinaria Agrícola</NavLink>
                <NavLink className="navbar-link" to="/semillas">Semillas</NavLink>
                <NavLink className="navbar-link" to="/jardineria">Jardineria</NavLink>
                <NavLink className="navbar-link" to="/tromen">Tromen</NavLink>
                <NavLink className="navbar-link" to="/servicio">Servicio Tecnico</NavLink>
                <NavLink className="navbar-link" to="/contacto">Contacto</NavLink>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar