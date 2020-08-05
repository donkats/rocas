import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import photoCloseup from '../assets/caro-xander-closeup.png';

const Omgeving = props => {
  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>

          <div className="banner-text">
            <h1>Informatie complex & omgeving</h1>

            <hr/>
            <Grid className="grid-google-maps">
            <Cell col={6}><p>Adres:
            Complex Rocas de Mar ****{"\n"}
            Calle de Zeus 6, appartement 102{"\n"}
            38630 Costa del Silencio{"\n"}
            Tenerife{"\n"}</p></Cell>
            <Cell col={6}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.647608889461!2d-16.647958384866556!3d28.00467581896912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6aa211f1c1c197%3A0x3fc7306ee8f87c2a!2sRocas%20del%20Mar!5e0!3m2!1sen!2snl!4v1596660545853!5m2!1sen!2snl"
            style={{width: '300', height: '200', frameborder: '0', borderRadius: '20px' }} allowfullscreen></iframe></Cell>
            </Grid>
            <p>
            Het rustige 4-sterrencomplex beschikt over 2 grote buitenzwembaden met gefilterd zeewater,
            waarvan 1 ‘s winters verwarmd is. Een kinderbadje met zoet water en een groot zonneterras. Al
            onze gasten kunnen hier gebruik van maken met een zwembadkaart, waarvan er 2 in het
            appartement aanwezig zijn, en zo ook van de beschikbare ligbedden en parasols. Direct naast het
            zwembad bevindt zich een klein café voor hapjes en drankjes, genaamd “De Puntmuts”.</p>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>Vliegtijd van/naar Nederland</Cell>
            <Cell col={6}>Ongeveer vier uur en een kwartier tot bijna vijf uur</Cell>
            </Grid>
            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>Tijdzone</Cell>
            <Cell col={6}>UTC0; op Tenerife is het altijd één uur vroeger dan in Nederland</Cell>
            </Grid>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>Taal</Cell>
            <Cell col={6}>Spaans; op toeristische plekken wordt redelijk Engels gesproken.</Cell>
            </Grid>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>Geld</Cell>
            <Cell col={6}>Op Tenerife betaal je net als in Nederland met de euro.</Cell>
            </Grid>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>Religie</Cell>
            <Cell col={6}>Overwegend rooms-katholiek (ongeveer 90% van de bevolking).</Cell>
            </Grid>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>Drinkwater</Cell>
            <Cell col={6}>Het leidingwater is niet geschikt om te drinken (wel om tanden mee te poetsen).</Cell>
            </Grid>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>uitleg</Cell>
            <Cell col={6}>text</Cell>
            </Grid>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>uitleg</Cell>
            <Cell col={6}>text</Cell>
            </Grid>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>uitleg</Cell>
            <Cell col={6}>text</Cell>
            </Grid>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>uitleg</Cell>
            <Cell col={6}>text</Cell>
            </Grid>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Omgeving;
