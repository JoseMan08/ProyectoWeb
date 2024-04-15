import { useState } from 'react';
import logo from './chimp.jpg';
import './App.css';
<<<<<<< HEAD
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

=======
import SegundoFormulario from './Componentes/SegundoFormulario';


function App() {
  const [personaregistro] = useState ();

  return (
   
   <div className="App">
      <div className="titulo">
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App-header">
        </div>
        <div className="logo">
        </div>
        <SegundoFormulario/>
        </div>
        
>>>>>>> 88ab96754a6d81a03a420ab11c99b6b764e4077a
  )
}

export default App;