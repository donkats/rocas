import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import photoCloseup from '../assets/caro-xander-closeup.png';

const Omgeving = props => {
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
            <h1>Informatie complex & omgeving</h1>

            <hr/>
            
            <p>Adres:
            Complex Rocas de Mar ****
            Calle de Zeus 6, appartement 102
            38630 Costa del Silencio
            Tenerife
            Het rustige 4-sterrencomplex beschikt over 2 grote buitenzwembaden met gefilterd zeewater,
            waarvan 1 ‘s winters verwarmd is. Een kinderbadje met zoet water en een groot zonneterras. Al
            onze gasten kunnen hier gebruik van maken met een zwembadkaart, waarvan er 2 in het
            appartement aanwezig zijn, en zo ook van de beschikbare ligbedden en parasols. Direct naast het
            zwembad bevindt zich een klein café voor hapjes en drankjes, genaamd “De Puntmuts”.</p>

          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Omgeving;
