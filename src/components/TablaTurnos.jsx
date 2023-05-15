import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebasedb';

export default function TablaTurnos() {
  const [turnos, setTurnos] = useState([]);
  const [locales, setLocales] = useState([]);

  const getTurnos = async () => {
    const snapshot = await db.collection('Turnos').get();
    const turnosArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setTurnos(turnosArray);
  };

  const getLocales = async () => {
    const snapshot = await db.collection('Locales').get();
    const localesArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setLocales(localesArray);
  };

  useEffect(() => {
    getTurnos();
    getLocales();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro que deseas eliminar el turno?')) {
      await db.collection('Turnos').doc(id).delete();
      setTurnos(turnos.filter((turno) => turno.id !== id));
    }
  };

  return (
    <div>
      <h2>Lista de Turnos</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Turno</th>
            <th>Nombre Empleado</th>
            <th>Local</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno) => (
            <tr key={turno.id}>
              <td>{turno.fecha}</td>
              <td>{turno.turno}</td>
              <td>{turno.nombreEmpleado}</td>
              <td>{turno.local}</td>
              <td>
                {/* Busca el local correspondiente y muestra su dirección */}
                {locales.find((local) => local.nombrelocal === turno.local)?.direccion || ''}
              </td>
              <td>
                <button onClick={() => handleDelete(turno.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
