import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebasedb';

export default function Venta(props) {
  const initialStateValues = {
    fecha: '',
    inventario: '',
    local: '',
    cliente: '',
    cantidadVenta: '',
    total: ''
    
  };

  const [valores, setValores] = useState(initialStateValues);
  const [inventarios, setInventarios] = useState([]);
  const [locales, setLocales] = useState([]); // agregar estado para locales

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let precio = valores.precio; // obtener el precio actual
    if (name === 'inventario') {
      // si se ha seleccionado un nuevo inventario, actualizar el precio
      const inventarioSeleccionado = inventarios.find(i => i.id === value);
      if (inventarioSeleccionado) {
        precio = inventarioSeleccionado.precio;
      }
    }
    setValores({ ...valores, [name]: value, precio });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = valores.cantidadVenta * valores.precio;
    props.addOrEditVenta({ ...valores, total, inventario: inventarios.find(i => i.id === valores.inventario), local: locales.find(l => l.id === valores.local) });
    setValores({ ...initialStateValues });
  };
  

  const getInventarios = async () => {
    db.collection('Inventario').onSnapshot((querySnapshot) => {
      const inventarios = [];
      querySnapshot.forEach((doc) => {
        inventarios.push({ ...doc.data(), id: doc.id });
      });
      setInventarios(inventarios);
    });
  };

  useEffect(() => {
    getInventarios();
  }, []);

  const getLocales = async () => {
    db.collection('Locales').onSnapshot((querySnapshot) => {
      const locales = [];
      querySnapshot.forEach((doc) => {
        locales.push({ ...doc.data(), id: doc.id });
      });
      setLocales(locales);
    });
  };

  useEffect(() => {
    getLocales();
  }, []);

  return (
    <div>
      <form className='card card-body' onSubmit={handleSubmit}>
        <h1>Ventas</h1>
        <input
          type='date'
          placeholder='Fecha..'
          value={valores.fecha}
          name='fecha'
          onChange={handleInputChange}
        />
        <br />
        <select
          name='inventario'
          value={valores.inventario}
          onChange={handleInputChange}
        >
          <option value=''>Seleccione inventario...</option>
          {inventarios.map((inventario) => (
            <option key={inventario.id} value={inventario.id}>
              {inventario.marca} - {inventario.descripcion} - Cantidad: {inventario.cantidad} - Precio: {inventario.precio}
            </option>
          ))}
        </select>
        <br />
        <select
          name='local'
          value={valores.local}
          onChange={handleInputChange}
        >
          <option value=''>Seleccione local...</option>
          {locales.map((local) => (
            <option key={local.id} value={local.id}>
              {local.nombrelocal} - {local.direccion}
            </option>
          ))}
        </select>
        <br />
        <input
          type='text'
          placeholder='Cliente..'
          value={valores.cliente}
          name='cliente'
          onChange={handleInputChange}
        />
        <br />
        <input
          type='number'
          placeholder='Cantidad de venta..'
          value={valores.cantidadVenta}
          name='cantidadVenta'
          onChange={handleInputChange}
        />
        <br />
        <button className='btn btn-primary btn-block'>
          {props.currentId === '' ? 'Guardar Registro' : 'Actualizar Venta'}
        </button>
      </form>
    </div>
  );
}
