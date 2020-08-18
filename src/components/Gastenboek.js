import React, { useEffect, useState } from 'react';
import { getAllNotes } from '../api'
import { Grid, Cell } from 'react-mdl';
import { NoteForm, NoteList } from '../components'

const Gastenboek = props => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAllNotes.then(res => setNotes(res))
  }, [])

  return (
    <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>

          <div className="banner-text">
            <h1>Gastenboek</h1>

            <hr/>
            
            <p>Gastenboek</p>

            <div className="notes-container">
              <NoteForm notes={notes} setNotes={setNotes} />
              <NoteList 
            data={notes}
          />
            </div>

          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Gastenboek;
