import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import photoCloseup from '../assets/caro-xander-closeup.png';

const Fotos = props => {
  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>

          <div className="banner-text">
            <h1>Foto's</h1>

            <hr/>
            
            <p>fotoslider</p>

          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Fotos;
