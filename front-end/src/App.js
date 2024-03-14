import logo from './chimp.jpg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form.Label>Nombre : </Form.Label>
        <Form.Control type="text"></Form.Control>
        <br />
        <Button className="App-Button">Guardar</Button>
      </header>
    </div>
  );
}

export default App;
