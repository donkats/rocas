import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import photoFull from '../assets/caro-xander-full.png';

const Welkom = props => {
  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <div className="photo-top"><img
          src={photoFull}
          alt="avatar"
          className="avatar-img"
          />
          </div>

          <div className="banner-text">
            <h1>Welkom op onze website</h1>

            <hr/>

            <p>Wij beschikken over een prachtig appartement op Tenerife. Wij willen dit graag met u delen!{"\n"}{"\n"}

            Het appartement ligt in het viersterrencomplex Rocas del Mar, in het zuidelijkste puntje van Tenerife in
            de plaats Costa del Silencio. Rocas del Mar ligt op twintig minuten van de luchthaven Tenerife-Sur
            (TFS). Vanuit Costa del Silencio kunt u gemakkelijk naar bekende badplaatsen zoals Adeje, Las
            Americas en Los Christianos. Ook de vissersdorpjes Los Abrigos en El Medano, met hun typische
            restaurantjes zijn een bezoekje waard. Toegang tot het openbaar vervoer op loopafstand, evenals tal
            van restaurantjes en bars. De supermarkt Hermusa bevindt zich naast het complex.{"\n"}{"\n"}

            Vanaf het balkon van het appartement kijkt u direct uit over de Atlantische Oceaan, waar u met wat
            geluk de dolfijnen langs kunt zien zwemmen.{"\n"}{"\n"}

            Het complex beschikt over o.a. de volgende faciliteiten: twee eigen zwembaden, een kinderbadje,
            een poolbar waar u terecht kunt voor een hapje en een drankje. Onze gasten kunnen gratis gebruik
            maken van de zwembaden, ligbedden en parasols die bij het complex aanwezig zijn.{"\n"}{"\n"}
            
            Kijkt u rustig rond op onze website en mocht u vragen hebben, neem dan gerust contact met ons op.
            Uiteraard vinden wij het leuk als u onze website deelt of een reactie achter laat in ons gastenboek.
            Wij hopen u te mogen verwelkomen in ons paradijsje op het eiland van de eeuwige lente!{"\n"}{"\n"}

            Met vriendelijke groet,{"\n"}
            Xander de Graaf en Caro Landwaart</p>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Welkom;