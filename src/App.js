import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Welkom';
import OverOns from './pages/OverOns';
import Appartement from './pages/Appartement';
import Omgeving from './pages/Omgeving';
import Fotos from './pages/Fotos';
import Contact from './pages/Contact';
import Gastenboek from './pages/Gastenboek';
import "./App.css";

function App() {
  return (
    <div className="topbar">
      <h1 className="title">Rocas Tenerife</h1>
        <Router>
        <main className="app">
        <nav>
          <ul className="links">
            <li><Link to="/" style={{ textDecoration: 'none' }}><button type="button">Welkom</button></Link></li>
            <li><Link to="/overons" style={{ textDecoration: 'none' }}>Wie zijn wij</Link></li>
            <li><Link to="/appartement" style={{ textDecoration: 'none' }}>Appartement</Link></li>
            <li><Link to="/omgeving" style={{ textDecoration: 'none' }}>Omgeving</Link></li>
            <li><Link to="/fotos" style={{ textDecoration: 'none' }}>Fotos</Link></li>
            <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
            <li><Link to="/gastenboek" style={{ textDecoration: 'none' }}>Gastenboek</Link></li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/overons"  component={OverOns} />
        <Route path="/appartement"  component={Appartement} />
        <Route path="/omgeving"  component={Omgeving} />
        <Route path="/fotos"  component={Fotos} />
        <Route path="/contact"  component={Contact} />
        <Route path="/gastenboek"  component={Gastenboek} />

        </main>
        </Router>
    </div>
  );
}

export default App;