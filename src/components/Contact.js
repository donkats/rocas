import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import photoCloseup from '../assets/caro-xander-closeup.png';

const Contact = props => {
  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
          src={photoCloseup}
          alt="avatar"
          className="avatar-img"
          />

          <div className="banner-text">
            <h1>Contact</h1>

            <hr/>
            
            <p>form</p>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
