import { useState } from 'react';
import logo from './chimp.jpg';
import './App.css';
import PrimerFormulario from './Componentes/PrimerFormulario';

function App() {
  const [personaregistro] = useState ();

  return (
    <div className="contenedor">
    <div className="App">
      <div className="titulo">
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <div className="App-header">
      <div className="formulario">
        </div>
        <PrimerFormulario personaregistro={personaregistro}/>
          
        </div>
        <div className="logo">
        </div>
        </div>
    </div>
  )
}

export default App;