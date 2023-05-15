import React, { useState } from 'react';
import NavBar from './navBar';
import { db } from '../firebase/firebasedb';
import ProveedoresTable from './ProveedoresTable'
import '../estilos/Proveedores.css'

export default function Proveedores() {
  const [proveedor, setProveedor] = useState('');
  const proveedores = ['Nike', 'New Era', 'Under Armour', 'Volcom', 'Puma', 'Adidas'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('Proveedores').add({
      nombre: proveedor,
      direccion: e.target.direccion.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
    });
    setProveedor('');
    e.target.reset();
  };

  return (

    <div>
      <NavBar />
      <div className='proveedores-container'>
        <form onSubmit={handleSubmit}>
          <div className='proveedores-form-row'>
            <label htmlFor='proveedor'>Proveedor</label>
            <select id='proveedor' name='proveedor' value={proveedor} onChange={(e) => setProveedor(e.target.value)}>
              <option value=''>Seleccione un proveedor...</option>
              {proveedores.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
          </div>
          <div className='proveedores-form-row'>
            <label htmlFor='direccion'>Dirección</label>
            <input type='text' id='direccion' name='direccion' />
          </div>
          <div className='proveedores-form-row'>
            <label htmlFor='correo'>Correo</label>
            <input type='email' id='correo' name='correo' />
          </div>
          <div className='proveedores-form-row'>
            <label htmlFor='telefono'>Teléfono</label>
            <input type='tel' id='telefono' name='telefono' />
          </div>
          <button type='submit'>Guardar</button>
        </form>
        <ProveedoresTable />
      </div>


    </div>

  );
}
