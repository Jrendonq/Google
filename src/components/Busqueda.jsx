import React from 'react';
import '../App.css';

function Busqueda() {
  return (
    <div className="busqueda-container">
      <input type="text" placeholder="Buscar" className="busqueda-input" />

      <div className="button-container">
        <button className="button">
          Buscar con Google
        </button>

        <button className="button">
          Voy a tener suerte
        </button>
      </div>
    </div>
  );
}

export default Busqueda;

