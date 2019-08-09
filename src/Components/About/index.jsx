import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './styles.module.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'typeface-roboto';

function About() {

  return (
    <div className={styles.banner}>
      
        <div className={styles.overlay}>  
        <Container maxWidth="sm">     
        <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h2">About Us</Typography>

        <Typography variant="h6">
          <br/>Syrian Success Story is a platform that shares the experiences of Syrians who not only survived the ravages of war, but who have gone on to be true success stories, becoming symbols of inspiration and hope, thriving in spite of the many challenges that they faced.
          They are not just victims of war, they are not simply refugees, but their stories prove that they are so much more than that: they are people who worked hard to realize their full potential when given the opportunity.<br/>

          At SSS, we share the real experiences of Syrians, from those still in Syria and from others who are now living in all areas of the world.<br/>

          At Syrian Success Story, we strongly believe that nothing can stop someone with hope and determination from realizing their dreams and achieving their goals. The purpose of this platform is to tell the stories and inspire all who read them. 
          ”If you dream it, you can achieve it.” (Given that you have or can create the opportunity.) 
      </Typography>
          </Grid>
          </Container> 
        </div>

      
    </div>
  );
}

export default About;