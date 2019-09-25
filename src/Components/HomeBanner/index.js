import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.css'
import Hidden from '@material-ui/core/Hidden';
export default function homeBanner() {

  return (
    <div className={styles.banner}>
      
        <div className={styles.overlay}>
          <Hidden xsDown>        <Grid container direction="row" justify="center" alignItems="center">
      <Typography variant="h2"><strong>WHAT IS STANDING<br/> BETWEEN <br/> YOU AND SUCCESS?</strong></Typography>
          </Grid></Hidden>
          <Hidden smUp>        <Grid container direction="row" justify="center" alignItems="center">
      <Typography variant="h4"><strong>WHAT IS STANDING<br/> BETWEEN <br/> YOU AND SUCCESS?</strong></Typography>
          </Grid></Hidden>
        </div>

      
    </div>
  );
}
