import logo from './logo.svg';
import './App.css';
import Welcomen from './components/Welcomen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Welcomen message = "Hola welcome props" name= "Caro"/>
      </header>
    </div>
  );
}

export default App;
