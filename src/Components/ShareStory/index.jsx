import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './styles.module.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'typeface-roboto';

function ShareStory() {

  return (
    <div className={styles.banner}>
      
        <div className={styles.overlay}>  
        <Container maxWidth="sm">     
        <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h2"><strong>Share Your Story!</strong></Typography>
        <Typography variant="h4"><br/>You might be the motivation that someone is waiting for!</Typography>
        <Typography variant="h6">
          <br/>submit your story to<br/>info@syriansuccessstory.net
      </Typography>
          </Grid>
          </Container> 
        </div>

      
    </div>
  );
}

export default ShareStory;