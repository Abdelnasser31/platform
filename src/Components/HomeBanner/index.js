import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.css'

export default function homeBanner() {

  return (
    <div className={styles.banner}>
      
        <div className={styles.overlay}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="h2"><strong>WHAT IS STANDING<br/> BETWEEN <br/> YOU AND SUCCESS?</strong></Typography>
          </Grid>
        </div>

      
    </div>
  );
}
