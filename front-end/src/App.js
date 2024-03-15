import { useState } from 'react';
import logo from './chimp.jpg';
import './App.css';
import PrimerFormulario from './Componentes/PrimerFormulario';

function App() {
  const [personaNombre, setPersona] = useState ("José Manuel");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <PrimerFormulario
        personaNombre={personaNombre}/>
      </header>
    </div>
  )
}

export default App;
