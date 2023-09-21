import React from "react";
import ReactDOM from "react-dom/client";
// anyadimos bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// los estilos propios van debajo de bootstrap para que no se pisen los estilos
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import AppRouterFinal from "./AppRouterFinal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouterFinal></AppRouterFinal>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();