import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebasedb'

export default function Inventario(props) {
  const initialStateValues = {
    marca: "",
    descripcion: '',
    cantidad: '',
    precio: 0
  }

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  };

  const handleSelectChange = e => {
    const { value } = e.target;
    let precio = 0;

    switch (value) {
      case "New Era":
        precio = 100000;
        break;
      case "Nike":
        precio = 150000;
        break;
      case "Adidas":
        precio = 120000;
        break;
      case "Puma":
        precio = 140000;
        break;
      case "Under Armour":
        precio = 130000;
        break;
      case "Volcom":
        precio = 150000;
        break;
      default:
        break;
    }

    setValues({ ...values, marca: value, precio });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Enviar objeto a la base de datos
    props.addOrEditProduct({ ...values });
    setValues({ ...initialStateValues });
  };

  const getInventarioById = async id => {
    const doc = await db.collection('Inventario').doc(id).get();
    setValues({ ...doc.data() });
  }

  useEffect(() => {
    if (props.currentid === "") {
      setValues({ ...initialStateValues });
    } else {
      getInventarioById(props.currentid);
    }
  }, [props.currentid]);

  return (
    <form className='card card-body' onSubmit={handleSubmit}>
        <h1>Inventario</h1>
        <select name="marca" value={values.marca} onChange={handleSelectChange}>
        <option value="">Seleccionar marca de Proveedor</option>
        <option value="New Era">New Era</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Puma">Puma</option>
        <option value="Under Armour">Under Armour</option>
        <option value="Volcom">Volcom</option>
      </select>
      <br />
      <input type="number" placeholder='Cantidad..' value={values.cantidad} name='cantidad' onChange={handleInputChange} />
      <br />
      <input type="number" placeholder='Precio..' value={values.precio} name='precio' onChange={handleInputChange} />
      <br />
      <input type="text" placeholder='Descripción..' value={values.descripcion} name='descripcion' onChange={handleInputChange} />
      <br />
      <button className='btn btn-primary btn-block'>
        {props.currentid === '' ? 'Guardar Registro' : 'Actualizar Registro'}
      </button>
    </form>
  )
}
