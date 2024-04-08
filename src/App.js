import { useState } from 'react';
import logo from './chimp.jpg';
import './App.css';
import SegundoFormulario from './Componentes/SegundoFormulario';


function App() {
  const [personaregistro] = useState ();

  return (
   
   <div className="App">
      <div className="titulo">
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        </div>
        <div className="logo">
        </div>
        <SegundoFormulario personaregistro={personaregistro}/>
        </div>
        
  )
}

export default App;