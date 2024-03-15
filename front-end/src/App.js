import { useState } from 'react';
import logo from './chimp.jpg';
import './App.css';
<<<<<<< HEAD
import PrimerFormulario from './Componentes/PrimerFormulario';
=======
import { Button, Form } from 'react-bootstrap';
>>>>>>> 7d17ee20734711d892a20da5cf858515f42ab145

function App() {
  const [personaNombre, setPersona] = useState ("José Manuel");
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
        <img src={logo} className="App-logo" alt="logo"/>
        <PrimerFormulario
        personaNombre={personaNombre}/>
=======
        <img src={logo} className="App-logo" alt="logo" />
        <Form.Label>Nombre : </Form.Label>
        <Form.Control type="text"></Form.Control>
        <br />
        <Button className="App-Button">Guardar</Button>
>>>>>>> 7d17ee20734711d892a20da5cf858515f42ab145
      </header>
    </div>
  )
}

export default App;
