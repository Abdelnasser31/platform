import React from 'react';
import Selectors from './Components/Selectors';
import RadioSelectors from './Components/RadioSelectors';
import TitleInput from './Components/TitleInput';
import RichText from './Components/RichText';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TitleInput></TitleInput>
          </Grid>
          <Grid item xs={4}>
          <Selectors></Selectors>
          </Grid>
          <Grid item xs={4}>
          <RadioSelectors></RadioSelectors>
        </Grid>
     </Grid>
     <RichText></RichText>
    </div>
  );
}

export default App;
