import { useEffect } from 'react'
import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import { auth } from './firebaseAuth'



export default function app() {
  
  const [usuario, setUsuario] = React.useState(null);
  useEffect(()=>{
    auth.auth().onAuthStateChanged((usuarioFirebase)=>{
      console.log("Ya tienes sesion inciada con:",usuarioFirebase);
      setUsuario(usuarioFirebase);
    })
  }, []);
  return (
    <div>
      {usuario ? <Home /> : <Login setUsuario = {setUsuario}/>}
    </div>
  )
}
 