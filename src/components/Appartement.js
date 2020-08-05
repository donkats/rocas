import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import photoCloseup from '../assets/caro-xander-closeup.png';

const Appartement = props => {
  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>

          <div className="banner-text">
            <h1>Ons appartement</h1>

            <hr/>
            
          <p>Ons appartement is gelegen aan de oceaanzijde van het complex op de 1e verdieping en is
          bereikbaar via een trap aan de voorzijde.</p>

          <p>Ons appartement is modern ingericht, met voldoende opbergmogelijkheden.
          In de woonkamer staat een lederen bank die tevens dienst doet als ruime 2 persoons slaapbank. Ook
          staat er een comfortabele losse stoel.</p>

          <p>De keuken is voorzien van alle apparatuur zoals een koelkast, keramische kookplaat, oven,
          magnetron, koffiezetapparaat en senseo, broodrooster en alle kookbenodigdheden. Er staat een
          ruime tafel met 4 stoelen waaraan u ontspannen kunt eten.</p>

          <p>Het terras, met zonneluifel, is voorzien van een tafel met 4 stoelen, bijbehorende kussens zijn
          beschikbaar. Een heerlijke terrasverhoging, waarop u heerlijk van de zon kunt genieten. Om
          comfortabel te kunnen liggen is er ook een ligbedkussen aanwezig.
          De slaapkamer is voorzien van een 2-persoonbed van 1,80m en een ruime kledingkast. Verder
          beschikt u over een wasmachine, wasrek en strijkplank.</p>

          <p>In het appartement is een kluisje aanwezig. U kunt tevens gebruik maken van de gratis WIFI en u
          kunt uw favoriete televisiezender volgen via canal-digitaal (NL) of TV Vlaanderen (BE).
          Er zijn 2 zwembadkaarten voor de ligbedden en parasols aan het zwembad.</p>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Appartement;
