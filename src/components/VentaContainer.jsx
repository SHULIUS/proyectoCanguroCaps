import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase/firebasedb';
import NavBar from './navBar';
import Venta from './Venta';


export default function VentaContainer() {

  const onDeleteVenta = async id => {
    if (window.confirm("¿Seguro que quieres eliminar esta venta?")) {
      await db.collection('Ventas').doc(id).delete();
      toast('Venta eliminada', {
        type: 'error',
        autoClose: 2000
      });
    }
  };

  const [ventas, setVentas] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const addOrEditVenta = async (ventaObject) => {
    try {
      if (currentId === '') {
        await db.collection('Ventas').doc().set(ventaObject);
        toast('Nueva venta agregada', {
          type: 'success',
          autoClose: 2000
        });
      } else {
        await db.collection('Ventas').doc(currentId).update(ventaObject);
        toast('Venta actualizada', {
          type: 'info',
          autoClose: 2000
        });
        setCurrentId('');
      }

    } catch (error) {
      console.error(error);
    }
  };

  const getVentas = async () => {
    db.collection('Ventas').onSnapshot((querySnapshot) => {
      const ventas = [];
      querySnapshot.forEach((doc) => {
        ventas.push({ ...doc.data(), id: doc.id });
      });
      setVentas(ventas);
    });
  };

  useEffect(() => {
    getVentas();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Venta {...{ addOrEditVenta, currentId }} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            {ventas.map((venta) => (
              <div className="card mb-3" key={venta.id}>
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <h4 className="mb-0">Fecha: {venta.fecha}</h4>
                    <div>
                      <i className='material-icons text-danger mr-3' onClick={() => onDeleteVenta(venta.id)}>close</i>
                      <i className='material-icons' onClick={() => setCurrentId(venta.id)}>edit</i>
                    </div>
                  </div>
                  <p>Inventario: {venta.inventario.marca} - {venta.inventario.descripcion} - Cantidad: {venta.inventario.cantidad} - Precio: {venta.inventario.precio}</p>
                  <p>Local: {venta.local.nombre} - {venta.local.direccion}</p>

                  <p>Cliente: {venta.cliente}</p>
                  <p>Cantidad de venta: {venta.cantidadVenta}</p>
                  <p>Total: {venta.total} COP</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
