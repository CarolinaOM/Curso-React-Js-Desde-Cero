import logo from './logo.svg';
import './App.css';
import Welcomen from './components/Welcomen';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcomen message="Hola welcome props" name="Caro" />
        
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                {/* Aquí es donde estaba el error: cambia <link> por <Link> */}
                <Link to="/about-me">About Me</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </nav>

          {/* Define las rutas dentro de <Routes> */}
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/contact" element={<div>Contacto</div>} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
