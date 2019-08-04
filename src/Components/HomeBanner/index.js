import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './styles.module.css'

export default function homeBanner() {

  return (
    <div className={styles.banner}>
      
        <div className={styles.overlay}>
        <Grid container direction="row" justify="center" alignItems="center">
          <p>What is standing<br/> between <br/> you and success?</p>
          </Grid>
        </div>

      
    </div>
  );
}
