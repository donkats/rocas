import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Contact = props => {
  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>

          <div className="banner-text">
            <h1>Contact</h1>

            <hr/>
            
            <p>U kunt contact met ons opnemen door onderstaande contactformulier in te vullen. Wij zullen dan zo
            snel mogelijk reageren.</p>

            <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Naam: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>E-mailadres: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Bericht: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Verzenden</button>
          </p>
        </form>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
