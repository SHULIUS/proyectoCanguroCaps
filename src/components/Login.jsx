import React from "react";
import LogoCangu from './LogoCangu'
import { auth } from '../firebase/firebaseAuth.js'

export default function Login(props) {

  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const iniciarSesion = (correo, password) => {
    auth.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase) => {

      props.setUsuario(usuarioFirebase);
    })
  }

  const crearUsuario = (correo, password) => {
    auth.
      auth().
      createUserWithEmailAndPassword(correo, password).
      then((usuarioFirebase) => {

        props.setUsuario(usuarioFirebase)
      });

  }

  const SubmitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }
    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  }
  return (
    <div>


      <div className="main-container">
        <div className="divLogo">
          <LogoCangu className="logo"></LogoCangu>
        </div>
        <div className="login-container">
          <form onSubmit={SubmitHandler}>
            <h1 className="login-title">{isRegistrando ? "Registrate" : "Iniciar sesión"}</h1>
            <div className="input-container">

              <input className="input-field" type="email" placeholder="Email" id="emailField" />
              <input className="input-field" type="password" placeholder="Password" id="passwordField" />
            </div>
            <button type="submit" className="login-button">{isRegistrando ? "register" : "log in"}</button>

          </form>
          <button onClick={() => setIsRegistrando(!isRegistrando)} className="register-button">{isRegistrando ? "do you have an account? log in" : "don't have an account? create one for free "}</button>
        </div>
      </div>
    </div>

  );
}