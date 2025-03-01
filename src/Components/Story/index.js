import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Visibility from '@material-ui/icons/Visibility';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import styles from './styles.module.css'
const BASE_URL = 'https://firestore.googleapis.com/v1'
function fetchID (URL){
  const parts = URL.split('/');
  return (parts.pop());
}

 

export default class Story extends React.Component {
  state = {
    favoritesCount: parseInt(this.props.favoritesCount),
    viewsCount: parseInt(this.props.viewsCount)
  }
  render() {
    return (
      <Card className={styles.card}>
        
        <CardActionArea onClick={this.viewStory}>
        <Link to={`/story/${fetchID(this.props.name)}`} style={{textDecoration: 'none'}}>
            <CardMedia
              component="img"
              alt="Success Story"
              height="240"
              image={this.props.storyImage}
              title="Contemplative Reptile"/>

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className={styles.title}>
                {this.props.storyTitle} - {this.props.storyTime}
              </Typography>

            </CardContent>
            </Link>
        </CardActionArea>
        <CardActions disableSpacing >
          <Box marginRight="auto">
            <IconButton aria-label="add to favorites" onClick={this.favoriteStory} className={styles.actions}>

              <FavoriteIcon color="secondary"/> <Typography variant="subtitle1">{this.state.favoritesCount < 2 ? (this.state.favoritesCount + " Like"): this.state.favoritesCount + " Likes"} </Typography>

            </IconButton>
          </Box>
          <Box marginLeft="auto">
            <IconButton className={styles.actions}>

              <Visibility color={"#333"} /> <Typography variant="subtitle1"> {this.state.viewsCount < 2 ? this.state.viewsCount + " View" : this.state.viewsCount + "  Views"}</Typography>

            </IconButton>
          </Box>
        </CardActions>
      </Card>
    );
  }
}
