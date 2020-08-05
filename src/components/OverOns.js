import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import photoCloseup from '../assets/caro-xander-closeup.png';

const OverOns = props => {
  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <div className="photo-top">
          <img
          src={photoCloseup}
          alt="avatar"
          className="avatar-img"
          />
          </div>

          <div className="banner-text">
            <h1>Wie zijn wij?</h1>

            <hr/>
            
            <p>Wij, Xander en Caro, hebben elkaar ontmoet in 2005. Al snel konden wij onze grootste passie delen,
            door samen een groot deel van de wereld te bereizen. Op al onze mooie reizen hebben we
            fantastische landschappen, culturen, steden en mensen mogen zien. Om vervolgens ook nog even te
            kunnen ontspannen en uit te rusten gingen wij regelmatig naar Tenerife. Een eiland met een
            natuurlijke ontspannenheid en vrijwel altijd lekker, zonnig weer. Al snel werden wij “verliefd” op het
            eiland, de mensen en het heerlijke eten en drinken. {"\n"}{"\n"}
            
            In 2020 hebben wij een appartement gekocht in het rustige Costa del Silencio, in het zuidelijkste
            puntje van Tenerife.
            Het adembenemende uitzicht vanaf ons eigen balkon, de heerlijke temperaturen, de rust, het
            heerlijke eten en drinken, de relatief lage prijzen en de gemoedelijke sfeer maken het voor ons een
            echt thuis van huis.{"\n"}{"\n"}
            
            Aangezien wij beiden een fulltime baan hebben en dus niet zo vaak zelf van ons appartement
            kunnen genieten, verhuren wij het appartement ten tijden dat wij er zelf niet zijn. Mocht u net zo
            enthousiast zijn geworden als wij, neem dan gerust contact met ons op voor een reservering, vragen
            over beschikbaarheid of overige vragen.{"\n"}{"\n"}

            Zonnige groeten,{"\n"}
            Xander de Graaf en Caro Landwaart</p>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default OverOns;
