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
            <Cell col={1}>image</Cell>
            <Cell col={1}>Vliegtijd van/naar Nederland</Cell>
            <Cell col={4}>Ongeveer vier uur en een kwartier tot bijna vijf uur</Cell>
            <Cell col={1}>image</Cell>
            <Cell col={1}>Tijdzone</Cell>
            <Cell col={4}>UTC0; op Tenerife is het altijd één uur vroeger dan in Nederland</Cell>
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
            <Cell col={3}>Mobiel netwerk</Cell>
            <Cell col={6}>Goede dekking met uitzondering van sommige plekken in de bergen (o.a. rondom Masca).</Cell>
            </Grid>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>Openbaar vervoer</Cell>
            <Cell col={6}>Uitstekende dekking van bussen en in toeristenplaatsen goede beschikbaarheid taxi's.</Cell>
            </Grid>

            <Grid className="grid-info">
            <Cell col={3}>image</Cell>
            <Cell col={3}>Prijsniveau</Cell>
            <Cell col={6}>Gemiddeld liggen de prijzen iets lager dan in Nederland.</Cell>
            </Grid>

            <Grid className="grid-links">
            <Cell col={12}>

              <p>

              Hieronder vindt u enkele suggesties om uw verblijf op Tenerife onvergetelijk te maken.{"\n"}{"\n"}

              * Vliegtickets o.a. via: 
              <a href="https://www.ryanair.com/nl/nl">Ryanair</a>, 
              <a href="https://www.transavia.com/">Transavia</a>,
              <a href="http://www.vliegensvlug.be/">Vliegensvlug</a>,
              <a href="https://www.thomascook.com/nl-be">Thomas Cook</a>,
              <a href="https://www.easyjet.com/nl">Easyjet</a>,
              <a href="https://www.tui.nl/vliegtickets/">TUI</a>,
              <a href="https://www.brusselsairlines.com/nl-nl/">Brussels Airlines</a>{"\n"}

              * Autoverhuur vanaf vliegveld via <a href="https://www.rentacar-gigi.com/nl">Gigi rent a car</a>. Het is ook mogelijk om een 
              auto te huren bij een bedrijf dicht bij het complex. Wij kunnen ook een huurauto voor u
              reserveren bij boeking, u kunt dan uw auto bij het complex ophalen op de gewenste datum, indien
              beschikbaar.{"\n"}

              * <a href="http://www.tenerife-reisgids.be/tenerife-tips.php">Goed om te weten</a>{"\n"}

              * <a href="http://www.coralsub.com/fr/home">Duikpark</a>{"\n"}

              * <a href="https://www.siampark.net/index.php/en/">Waterpark Siam</a>{"\n"}

              * <a href="https://www.loroparque.com/index.php/en/">Loro park</a>{"\n"}

              * <a href="https://www.junglepark.es/">Junglepark (Recreatiepark Aquilas del Teide)</a>{"\n"}

              * <a href="http://monkeypark.com/">Monkeypark</a>{"\n"}

              * <a href="https://camelpark.es/?lang=en">Camel park</a>{"\n"}

              * <a href="http://www.tenerife-reisgids.be/tenerife-wandelen.php">Wandeltochten</a>{"\n"}

              * <a href="http://www.tenerife-reisgids.be/tenerife-teide-vulkaan.php">De Teide</a>{"\n"}

              * <a href="https://www.droomplekken.nl/spanje/zie-de-walvissen-en-dolfijnen-van-
              tenerife/">Dolfijnen en walvissen excursie</a>{"\n"}

              * <a href="https://www.droomplekken.nl/spanje/tenerife/">Piramides de Guimar</a>{"\n"}

              * <a href="http://www.tenerife-reisgids.be/tenerife-casa-del-vino.php">Wijnmuseum</a>{"\n"}

              * <a href="https://dier-en-natuur.infonu.nl/natuur/20977-las-canadas-tenerife.html">Las Cañadas</a>{"\n"}

              * <a href="https://www.wandelvrouw.nl/de-masca-kloof-op-tenerife/">Masca kloof</a>{"\n"}

              * <a href="http://www.tenerife-reisgids.be/tenerife-costa-del-silencio.php">Costa del Silencio</a>{"\n"}

              * <a href="http://www.allesovertenerife.nl/playa-de-las-americas.htm">Playa de Las Americas</a>{"\n"}

              * <a href="http://www.allesovertenerife.nl/los-cristianos.htm">Los Cristianos</a>{"\n"}


              </p>
            </Cell>
            </Grid>

          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Omgeving;
