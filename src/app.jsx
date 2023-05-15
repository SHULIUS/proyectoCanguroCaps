import { useEffect } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './estilos/Login.css'


import Home from './components/Home'
import Login from './components/Login'
import Inventario from './components/InventarioContainer';
import Venta from './components/VentaContainer';
import Locales from './components/Locales.jsx';
import Turnos from './components/Turnos.jsx';
import Proveedores from './components/Proveedores.jsx';

import { auth } from './firebase/firebaseAuth'

export default function app() {
  
  const [usuario, setUsuario] = React.useState(null);
  
  useEffect(()=>{
    auth.auth().onAuthStateChanged((usuarioFirebase)=>{
      setUsuario(usuarioFirebase);
    })
  }, []);

  return (
    <div>
      {!usuario && <Login setUsuario={setUsuario} />}

      
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/venta" element={<Venta />} />
            <Route path="/locales" element={<Locales />} />
            <Route path="/turnos" element={<Turnos />} />
            <Route path="/proveedores" element={<Proveedores />} />
          </>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
