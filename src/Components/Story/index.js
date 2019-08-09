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
  favoriteStory = () => {
    this.setState({
      favoritesCount: this.state.favoritesCount + 1
    }, () => this.updateFavoritesCount());
  }
  updateFavoritesCount = async() => {
    const url = `${BASE_URL}/${this.props.name}?currentDocument.exists=true&updateMask.fieldPaths=favouriteCount`
    await fetch(url, {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          favouriteCount: {
            integerValue: this.state.favoritesCount
          }
        }
      })
    })
  }
  viewStory = () => {
    this.setState({
      viewsCount: this.state.viewsCount + 1
    }, () => this.updateViewsCount());
  }
  updateViewsCount = async() => {
    console.log(this.state.viewsCount, "here");
    const url = `${BASE_URL}/${this.props.name}?currentDocument.exists=true&updateMask.fieldPaths=viewCount`
    await fetch(url, {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          viewCount: {
            integerValue: this.state.viewsCount
          }
        }
      })
    })
  }
  render() {
    return (
      <Card className={styles.card}>
        
        <CardActionArea onClick={this.viewStory}>
        <Link to={`/story/${fetchID(this.props.name)}`} >
            <CardMedia
              component="img"
              alt="Success Story"
              height="240"
              image={this.props.storyImage}
              title="Contemplative Reptile"/>

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className={styles.title}>
                {this.props.storyTitle}
              </Typography>

            </CardContent>
            </Link>
        </CardActionArea>
        <CardActions disableSpacing >
          <Box marginRight="auto">
            <IconButton aria-label="add to favorites" onClick={this.favoriteStory} className={styles.actions}>

              <FavoriteIcon color="secondary"/> {this.state.favoritesCount < 2 ? (this.state.favoritesCount + " Like"): this.state.favoritesCount + " Likes"} 

            </IconButton>
          </Box>
          <Box marginLeft="auto">
            <IconButton className={styles.actions}>

              <Visibility color="primary"/> {this.state.viewsCount < 2 ? this.state.viewsCount + " View" : this.state.viewsCount + "  Views"}

            </IconButton>
          </Box>
        </CardActions>
      </Card>
    );
  }
}
