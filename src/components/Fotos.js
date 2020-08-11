import React from 'react';
import Album from './Album';
import { Grid, Cell } from 'react-mdl';

const Fotos = props => {
  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>

          <div className="banner-text">
            <h1>Foto's</h1>

            <hr/>
            
            <div className="foto-album-wrapper">
              <Album />
            </div>

          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Fotos;
