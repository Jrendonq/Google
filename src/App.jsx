import React from 'react';
import Navegacion from './components/Navegacion';
import Contenido from './components/Contenido';
import PiePag from './components/PiePag';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Navegacion />
      <Contenido />
      <PiePag />
    </div>
  );
}

export default App;
