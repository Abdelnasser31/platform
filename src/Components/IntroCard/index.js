import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    position: "relative"
  
  },
  cardContent: {
   
    position: "absolute",
    top: "10%",
    bottom: 0,
    color: "#d9d9d9",
    textAlign: "center",
    lineHeight: "2.5em"
   

  },  overlay: {
    background: "rgba(0,0,0,0.6)",
    position: "absolute",
    top: 0,
    left: 0,
    minHeight: "100%",
    minWidth: "100%"
  },
  cardHeader: {
    marginBottom: "50px",
    fontSize: "26px",
    fontWeight: "bold"
  },
  cardText: {
    lineHeight: "1.8",
    color: "#c5c5c5"
  }

});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="580"
          width= "300"
          image={props.introImage}
          title="Contemplative Reptile"
        />
        <Box className={classes.overlay} lineHeight={2} letterSpacing={10}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h4" component="h2" className={classes.cardHeader}>
          {props.title}
          </Typography>
          <Typography variant="h5" component="h3" lineHeight={2} className={classes.cardText}>
         {props.textBody}
          </Typography>
        </CardContent>
        </Box>
      
    </Card>
  );
}