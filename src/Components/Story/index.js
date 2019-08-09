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
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import styles from './styles.module.css'
const BASE_URL = 'https://firestore.googleapis.com/v1'

export default class Story extends React.Component {
  state = {
    favoritesCount: parseInt(this.props.favoritesCount)
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
  render() {
    return (
      <Card className={styles.card}>

        <CardActionArea>
         

            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="240"
              image={this.props.storyImage}
              title="Contemplative Reptile"/>

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.storyTitle}
              </Typography>

            </CardContent>
          
        </CardActionArea>
        <CardActions disableSpacing >
          <Box marginRight="auto">
            <IconButton aria-label="add to favorites" onClick={this.favoriteStory} className={styles.actions}>

              <FavoriteIcon color="secondary"/> {this.state.favoritesCount < 2 ? (this.state.favoritesCount + " Like"): this.state.favoritesCount + " Likes"} 

            </IconButton>
          </Box>
          <Box marginLeft="auto">
            <IconButton className={styles.actions}>

              <Visibility color="primary"/> {this.props.viewsCount < 2 ? this.props.viewsCount + " View" : this.props.viewsCount + "  Views"}

            </IconButton>
          </Box>
        </CardActions>
      </Card>
    );
  }
}
