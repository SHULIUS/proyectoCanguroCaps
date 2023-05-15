import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/iconcangu.png';
import { auth } from '../firebase/firebaseAuth';

export default function NavBar() {
  const cerrarSesion = () => {
    auth.auth().signOut();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-orange">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img id="iconoNavbar" src={img} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/venta">
                  Venta
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/inventario">
                  Inventario
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/locales">
                  Locales
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/turnos">
                  Turnos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/proveedores">
                  Proveedores
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="LogOutButton"
                  onClick={cerrarSesion}
                  href="#"
                >
                  Cerrar Sesion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
