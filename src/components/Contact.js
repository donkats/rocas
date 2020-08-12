import React from 'react';
import { Grid, Cell } from 'react-mdl';
import ContactForm from './ContactForm';

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

            <ContactForm></ContactForm>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
