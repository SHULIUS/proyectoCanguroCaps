import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase/firebasedb'
import NavBar from './navBar'
import Inventario from './Inventario';
import '../estilos/Inventario.css';


export default function InventarioContainer() {

  const onDeleteProduct = async id => {
    if (window.confirm("¿Seguro que quieres eliminar este producto?")) {
      await db.collection('Inventario').doc(id).delete();
      toast('Producto eliminado', {
        type: 'error',
        autoClose: 2000
      });
    }
  }

  const [Products, setProducts] = useState([]);
  const [currentid, setcurrentid] = useState('');

  const addOrEditProduct = async (ProductObject) => {
    try {
      if (currentid === '') {
        await db.collection('Inventario').doc().set(ProductObject);
        toast('Nuevo producto agregado', {
          type: 'success',
          autoClose: 2000
        });
      } else {
        await db.collection('Inventario').doc(currentid).update(ProductObject);
        toast('Producto actualizado', {
          type: 'info',
          autoClose: 2000
        });
        setcurrentid('');
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getProducts = async () => {
    db.collection('Inventario').onSnapshot((querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      setProducts(products);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (

    <div>
      <NavBar/>
      
      <div className="container">
    
    <div className="row justify-content-center">
      <div className="col-md-6">
        <Inventario {...{ addOrEditProduct, currentid, Products }} />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-10">
        {Products.map(product => (
          <div className="card mb-3" key={product.id}>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h4 className="mb-0">Marca Gorra: {product.marca}</h4>
                <div>
                  <i className='material-icons text-danger mr-3' onClick={() => onDeleteProduct(product.id)}>close</i>
                  <i className='material-icons' onClick={() => setcurrentid(product.id)}>edit</i>
                </div>
              </div>
              <p>Cantidad: {product.cantidad}</p>
              <p>Descripción: {product.descripcion}</p>
              <p>Precio: {product.precio} COP</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
    
    </div>
    
  );
}
