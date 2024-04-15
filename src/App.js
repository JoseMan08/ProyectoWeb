import { useState } from 'react';
import logo from './chimp.jpg';
import './App.css';
import Cambiar from './Componentes/Cambiar';


function App() {
  const [personaregistro] = useState();

  return (

    <div className="App">
      <div className="titulo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App-header">
      </div>
      <div className="logo">
      </div>
      <Cambiar/>
    </div>

  )
}

export default App;