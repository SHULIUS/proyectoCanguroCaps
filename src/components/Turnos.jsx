import React, { useState, useEffect } from 'react';
import NavBar from './navBar'
import { db } from '../firebase/firebasedb';
import TablaTurnos from './TablaTurnos.jsx'
import '../estilos/Turnos.css'

export default function Turnos() {

  const initialStateValues = {
    fecha: '',
    turno: '',
    nombreEmpleado: '',
    local: ''
  };

  const [values, setValues] = useState(initialStateValues);
  const [locales, setLocales] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Enviar objeto a la base de datos
    await db.collection('Turnos').add({ ...values });
    setValues({ ...initialStateValues });
    window.location.reload(); // Actualizar la página después de guardar
  };
  

  const getLocales = async () => {
    const snapshot = await db.collection('Locales').get();
    const localesArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setLocales(localesArray);
  };

  useEffect(() => {
    getLocales();
  }, []);

  return (
    <div>
<NavBar />  
<div className='turnos-container'>
    
    <form onSubmit={handleSubmit}>
      <div className='turnos-form'>
        <label htmlFor='fecha'>Fecha</label>
        <input
          type='date'
          id='fecha'
          name='fecha'
          value={values.fecha}
          onChange={handleInputChange}
        />
        <label htmlFor='turno'>Turno</label>
        <select id='turno' name='turno' value={values.turno} onChange={handleInputChange}>
          <option value=''>Seleccione turno...</option>
          <option value='mañana'>Mañana</option>
          <option value='tarde'>Tarde</option>
          <option value='noche'>Noche</option>
        </select>
        <label htmlFor='nombreEmpleado'>Nombre Empleado</label>
        <input
          type='text'
          id='nombreEmpleado'
          name='nombreEmpleado'
          value={values.nombreEmpleado}
          onChange={handleInputChange}
        />
        <label htmlFor='local'>Local</label>
        <select id='local' name='local' value={values.local} onChange={handleInputChange}>
          <option value=''>Seleccione local...</option>
          {locales.map((local) => (
            <option key={local.id} value={local.nombrelocal}>
              {local.nombrelocal} {local.direccion}
            </option>
          ))}
        </select>
      </div>
      <button type='submit' className='turnos-btn-guardar'>Guardar</button>
    </form>
    <TablaTurnos className='turnos-tabla' />
  </div>
    
    </div>
    
    
  );
}  
