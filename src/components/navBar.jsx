import React from 'react'
import img from '../img/iconcangu.png'
import { auth } from '../firebaseAuth'

export default function navBar() {
  const cerrarSesion = ()=>{
    auth.auth().signOut();

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-orange">
        <div className="container-fluid">
          <img className="navbar-brand" id='iconoNavbar' src={img} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Inventario</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Venta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Locales</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Turnos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Proveedores</a>
              </li>
              
                
              <li className="nav-item">
                <a className="nav-link" id="LogOutButton" onClick={cerrarSesion} href="#">Cerrar Sesion</a>
              </li>
            </ul>
            

          </div>
        </div>
      </nav>

    </div>
  )
}

