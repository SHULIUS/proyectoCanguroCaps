import React, { useState, useEffect } from 'react';
import NavBar from './navBar';
import { db } from '../firebase/firebasedb';
import '../estilos/Locales.css';
import Formulario from './Formulario';

export default function Locales() {
  const [locales, setLocales] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLocales = async () => {
      const snapshot = await db.collection('Locales').get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLocales(data);
    };
    getLocales();
  }, []);

  const [showTable, setShowTable] = useState(false);

  const handleShowTable = () => {
    setShowTable(!showTable);
  };

  const handleUpdateLocales = async () => {
    setLoading(true);
    const snapshot = await db.collection('Locales').get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setLocales(data);
    setLoading(false);
  };

  return (
    <div className="locales-container">
      <NavBar />
      <div className="locales-content">
        <h1>Locales</h1>
        <button onClick={handleShowTable}>{showTable ? 'Ocultar tabla' : 'Mostrar tabla'}</button>
        <button className="update-button" disabled={loading} onClick={handleUpdateLocales}>Actualizar</button>
        {showTable && (
          <table>
            <thead>
              <tr>
                <th>Nombre del local</th>
                <th>Dirección</th>
              </tr>
            </thead>
            <tbody>
              {locales.map(local => (
                <tr key={local.id}>
                  <td>{local.nombrelocal}</td>
                  <td>{local.direccion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        <Formulario/>
      </div>
     
    </div>
  )
}
