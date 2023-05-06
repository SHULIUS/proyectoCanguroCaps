import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";


import './estilos/main.css'
import LogoCangu from "./components/LogoCangu";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     
    
    <LogoCangu/>
    <Login/>
  </React.StrictMode>
);
