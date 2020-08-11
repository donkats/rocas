import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Gastenboek = props => {
  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>

          <div className="banner-text">
            <h1>Gastenboek</h1>

            <hr/>
            
            <p>Gastenboek</p>

          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Gastenboek;
