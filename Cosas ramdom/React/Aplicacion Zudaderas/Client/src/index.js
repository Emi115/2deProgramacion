// Importaciones de React y otros módulos necesarios
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente App
import reportWebVitals from './reportWebVitals'; // Importa la función para reportar métricas vitales de la web

// Crea una raíz para la aplicación React usando ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App dentro del elemento 'root' del DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Ejecuta la función reportWebVitals, que se utiliza para medir y reportar métricas de rendimiento
// Si quieres empezar a medir el rendimiento de tu aplicación, puedes pasar una función
// para registrar los resultados (por ejemplo, reportWebVitals(console.log))
// o enviarlos a un punto final de análisis. Más información: https://bit.ly/CRA-vitals
reportWebVitals();
