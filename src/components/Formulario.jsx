import React, { useState } from 'react';
import { db } from '../firebase/firebasedb';


export default function FormularioLocal() {
  const [nombreLocal, setNombreLocal] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await db.collection('Locales').add({
        nombrelocal: nombreLocal,
        direccion: direccion
      });

      alert('El local ha sido agregado exitosamente');
      setNombreLocal('');
      setDireccion('');
    } catch (error) {
      alert('Error al agregar el local');
      console.error(error);
    }
  };

  const handleNombreLocalChange = (event) => {
    setNombreLocal(event.target.value);
  };

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className="formulario-local">
      <h2>Agregar Local</h2>
      <div>
        <label htmlFor="nombrelocal">Nombre del Local:</label>
        <input type="text" id="nombrelocal" name="nombrelocal" value={nombreLocal} onChange={handleNombreLocalChange} />
      </div>
      <div>
        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" value={direccion} onChange={handleDireccionChange} />
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
}