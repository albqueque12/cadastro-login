import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const container = document.getElementById("root");
if (!container) throw new Error('Elemento #root não encontrado no index.html');

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);