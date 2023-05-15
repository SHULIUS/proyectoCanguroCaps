import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebasedb';

export default function ProveedoresTable() {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const getProveedores = async () => {
      const snapshot = await db.collection('Proveedores').get();
      const proveedoresArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProveedores(proveedoresArray);
    };
    getProveedores();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar este proveedor?')) {
      await db.collection('Proveedores').doc(id).delete();
      const updatedProveedores = proveedores.filter((proveedor) => proveedor.id !== id);
      setProveedores(updatedProveedores);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Proveedor</th>
          <th>Dirección</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {proveedores.map((proveedor) => (
          <tr key={proveedor.id}>
            <td>{proveedor.nombre}</td>
            <td>{proveedor.direccion}</td>
            <td>{proveedor.correo}</td>
            <td>{proveedor.telefono}</td>
            <td>
              <button onClick={() => handleDelete(proveedor.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
