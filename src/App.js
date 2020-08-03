import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
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
            <li><NavLink to="/" activeClassName="selected" style={{ textDecoration: 'none' }}>Welkom</NavLink></li>
            <li><NavLink to="/overons" activeClassName="selected" style={{ textDecoration: 'none' }}>Wie zijn wij</NavLink></li>
            <li><NavLink to="/appartement" activeClassName="selected" style={{ textDecoration: 'none' }}>Appartement</NavLink></li>
            <li><NavLink to="/omgeving" activeClassName="selected" style={{ textDecoration: 'none' }}>Omgeving</NavLink></li>
            <li><NavLink to="/fotos" activeClassName="selected" style={{ textDecoration: 'none' }}>Fotos</NavLink></li>
            <li><NavLink to="/contact" activeClassName="selected" style={{ textDecoration: 'none' }}>Contact</NavLink></li>
            <li><NavLink to="/gastenboek" activeClassName="selected" style={{ textDecoration: 'none' }}>Gastenboek</NavLink></li>
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