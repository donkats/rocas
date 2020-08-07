import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import photoCloseup from '../assets/caro-xander-closeup.png';

const Omgeving = props => {
  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>

          <div className="banner-text">
            <h1>Informatie complex & omgeving</h1>

            <hr/>


            <Grid className="google-maps-grid">
            <Cell col={6}><p><strong>Adres</strong>{"\n"}
            Complex Rocas de Mar ****{"\n"}
            Calle de Zeus 6, appartement 102{"\n"}
            38630 Costa del Silencio{"\n"}
            Tenerife{"\n"}</p></Cell>
            <Cell col={6}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.647608889461!2d-16.647958384866556!3d28.00467581896912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6aa211f1c1c197%3A0x3fc7306ee8f87c2a!2sRocas%20del%20Mar!5e0!3m2!1sen!2snl!4v1596660545853!5m2!1sen!2snl"
            style={{width: '300', height: '200', frameborder: '0', borderRadius: '20px' }} allowfullscreen></iframe></Cell>
            </Grid>

            <Grid className="complex-grid">
            <Cell col={12}>
            <p>
            Het rustige 4-sterrencomplex beschikt over 2 grote buitenzwembaden met gefilterd zeewater,
            waarvan 1 ‘s winters verwarmd is. Een kinderbadje met zoet water en een groot zonneterras. Al
            onze gasten kunnen hier gebruik van maken met een zwembadkaart, waarvan er 2 in het
            appartement aanwezig zijn, en zo ook van de beschikbare ligbedden en parasols. Direct naast het
            zwembad bevindt zich een klein café voor hapjes en drankjes, genaamd “De Puntmuts”.
            </p>
            </Cell>
            </Grid>
            
            <hr/><br/>

            <List className="info-list" style={{width: "94%"}}>
            <ListItem threeLine>
            <ListItemContent avatar="flight" subtitle="Ongeveer vier uur en een kwartier tot bijna vijf uur.">Vliegtijd van/naar Nederland</ListItemContent>
            </ListItem>

            <ListItem threeLine>
            <ListItemContent avatar="query_builder" subtitle="UTC0; op Tenerife is het altijd één uur vroeger dan in Nederland.">Tijdzone</ListItemContent>
            </ListItem>

            <ListItem threeLine>
            <ListItemContent avatar="language" subtitle="Spaans; op toeristische plekken wordt redelijk Engels gesproken.">Taal</ListItemContent>
            </ListItem>

            <ListItem threeLine>
            <ListItemContent avatar="euro_symbol" subtitle="Op Tenerife betaal je net als in Nederland met de euro.">Geld</ListItemContent>
            </ListItem>

            <ListItem threeLine>
            <ListItemContent avatar="euro_symbol" subtitle="Gemiddeld liggen de prijzen iets lager dan in Nederland.">Prijsniveau</ListItemContent>
            </ListItem>

            <ListItem threeLine>
            <ListItemContent avatar="history_edu" subtitle="Overwegend rooms-katholiek (ongeveer 90% van de bevolking).">Religie</ListItemContent>
            </ListItem>

            <ListItem threeLine>
            <ListItemContent avatar="local_drink" subtitle="Het leidingwater is niet geschikt om te drinken (wel om tanden mee te poetsen).">Drinkwater</ListItemContent>
            </ListItem>

            <ListItem threeLine>
            <ListItemContent avatar="network_check" subtitle="Goede dekking met uitzondering van sommige plekken in de bergen (o.a. rondom Masca).">Mobiel netwerk</ListItemContent>
            </ListItem>

            <ListItem threeLine>
            <ListItemContent avatar="directions_bus" subtitle="Uitstekende dekking van bussen en in toeristenplaatsen goede beschikbaarheid taxi's.">Openbaar vervoer</ListItemContent>
            </ListItem>
            </List>

            <hr/><br/>

            <Grid className="links-grid">
            <Cell col={12}>

            <p>

            Hieronder vindt u enkele suggesties om uw verblijf op Tenerife onvergetelijk te maken.{"\n"}{"\n"}

            <strong>Vliegtickets o.a. via:</strong>{"\n"}
            <a href="https://www.ryanair.com/nl/nl">Ryanair</a>,{" "}
            <a href="https://www.transavia.com/">Transavia</a>,{" "}
            <a href="http://www.vliegensvlug.be/">Vliegensvlug</a>,{" "}
            <a href="https://www.thomascook.com/nl-be">Thomas Cook</a>,{" "}
            <a href="https://www.easyjet.com/nl">Easyjet</a>,{" "}
            <a href="https://www.tui.nl/vliegtickets/">TUI</a>{" "}en{" "}
            <a href="https://www.brusselsairlines.com/nl-nl/">Brussels Airlines</a>{"\n"}{"\n"}

            <strong>Autoverhuur </strong>{"\n"}
            * Vanaf het vliegveld via <a href="https://www.rentacar-gigi.com/nl">Gigi rent a car</a>.{"\n"}
            * Het is ook mogelijk om een auto te huren bij een bedrijf dicht bij het complex. Wij kunnen eventueel een huurauto voor u
            reserveren bij boeking, u kunt dan uw auto bij het complex ophalen op de gewenste datum indien
            beschikbaar.{"\n"}{"\n"}

            <strong>Waterparken</strong>{"\n"}
            * <a href="http://www.coralsub.com/fr/home">Duikpark</a>{"\n"}
            * <a href="https://www.siampark.net/index.php/en/">Waterpark Siam</a>{"\n"}{"\n"}

            <strong>Dieren</strong>{"\n"}
            * <a href="https://www.loroparque.com/index.php/en/">Loro park</a>{"\n"}
            * <a href="https://www.junglepark.es/">Junglepark (Recreatiepark Aquilas del Teide)</a>{"\n"}
            * <a href="http://monkeypark.com/">Monkeypark</a>{"\n"}
            * <a href="https://camelpark.es/?lang=en">Camel park</a>{"\n"}
            * <a href="https://www.droomplekken.nl/spanje/zie-de-walvissen-en-dolfijnen-van-
            tenerife/">Dolfijnen en walvissen excursie</a>{"\n"}{"\n"}

            <strong>Bezienswaardigheden</strong>{"\n"}
            * <a href="https://www.droomplekken.nl/spanje/tenerife/">Piramides de Guimar</a>{"\n"}
            * <a href="https://dier-en-natuur.infonu.nl/natuur/20977-las-canadas-tenerife.html">Las Cañadas</a>{"\n"}
            * <a href="https://www.wandelvrouw.nl/de-masca-kloof-op-tenerife/">Masca kloof</a>{"\n"}
            * <a href="http://www.tenerife-reisgids.be/tenerife-teide-vulkaan.php">De Teide</a>{"\n"}
            * <a href="http://www.tenerife-reisgids.be/tenerife-wandelen.php">Wandeltochten</a>{"\n"}
            * <a href="http://www.tenerife-reisgids.be/tenerife-casa-del-vino.php">Wijnmuseum</a>{"\n"}{"\n"}

            <strong>Stranden</strong>{"\n"}
            * <a href="http://www.tenerife-reisgids.be/tenerife-costa-del-silencio.php">Costa del Silencio</a>{"\n"}
            * <a href="http://www.allesovertenerife.nl/playa-de-las-americas.htm">Playa de Las Americas</a>{"\n"}
            * <a href="http://www.allesovertenerife.nl/los-cristianos.htm">Los Cristianos</a>{"\n"}{"\n"}

            <strong>Meer informatie</strong>{"\n"}
            * <a href="http://www.tenerife-reisgids.be/tenerife-tips.php">Goed om te weten</a>{"\n"}


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
