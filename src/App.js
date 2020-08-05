import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main'
import "./App.css";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white' }} 
        to="/" >Home</Link> } scroll>
          <Navigation>
            <Link to="/overons">Over Ons</Link>
            <Link to="/appartement">Appartement</Link>
            <Link to="/omgeving">Omgeving</Link>
            <Link to="/fotos">Foto's</Link>
            <Link to="/gastenboek">Gastenboek</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'blue' }} 
        to="/" >Home</Link> }>
          <Navigation>
            <Link to="/overons">Over Ons</Link>
            <Link to="/appartement">Appartement</Link>
            <Link to="/omgeving">Omgeving</Link>
            <Link to="/fotos">Foto's</Link>
            <Link to="/gastenboek">Gastenboek</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main></Main>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
