import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welkom from './Welkom';
import OverOns from './OverOns';
import Appartement from './Appartement';
import Omgeving from './Omgeving';
import Fotos from './Fotos';
import Contact from './Contact';
import Gastenboek from './Gastenboek';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Welkom} />
        <Route path="/overons" component={OverOns} />
        <Route path="/appartement" component={Appartement} />
        <Route path="/omgeving" component={Omgeving} />
        <Route path="/fotos" component={Fotos} />
        <Route path="/contact" component={Contact} />
        <Route path="/gastenboek" component={Gastenboek} />
    </Switch>
)

export default Main;
