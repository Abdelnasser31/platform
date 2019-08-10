import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  styles from './styles.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Spinner from '../Spinner'
const BASE_URL = 'https://firestore.googleapis.com/v1'

const storyId = window.location.href.split('/').pop();
export default class StoryPage extends React.Component{
  state = {
    story: null,
    viewsCount: 0,
  }
  componentDidMount() {
    
    this.fetchStory();
    
  }
  updateViewsCount = async() => {
    console.log(this.state.viewsCount, "here");
    this.setState({viewsCount: parseInt(this.state.story.fields.viewCount.integerValue) + 1})
    const url = `${BASE_URL}/projects/syrian-success-story/databases/(default)/documents/stories/${storyId}?currentDocument.exists=true&updateMask.fieldPaths=viewCount`
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

  fetchStory = async () =>{
    const url = `${BASE_URL}/projects/syrian-success-story/databases/(default)/documents/stories/${storyId}`
    const response = await fetch(url);
    const json = await response.json();
     this.setState({story: json})
     this.updateViewsCount();
  }
  render(){
    if (this.state.story === null){
      return (<Spinner></Spinner>)
  }else{
  return (
    
    <Card className={styles.card}>
      <CardHeader
      
        title={this.state.story.fields.title.stringValue}
        subheader={this.state.story.createTime.split("T")[0]}
      />
      <CardMedia
        className={styles.media}
        image="https://static.wixstatic.com/media/600c78_f8fe5295769848c3aae681bbfcc21d8b~mv2.jpg/v1/fill/w_740,h_346,al_c,q_90,usm_0.66_1.00_0.01/600c78_f8fe5295769848c3aae681bbfcc21d8b~mv2.jpg"
        title="Success Story"
      />
        <CardContent className={styles.storyText}>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
        <CardActions disableSpacing >
          <Box marginRight="auto">
            <IconButton aria-label="add to favorites" onClick={this.favoriteStory} className={styles.actions}>

              <FavoriteIcon color="secondary"/> {this.state.story.fields.favouriteCount.integerValue < 2 ? (this.state.story.fields.favouriteCount.integerValue + " Like"): this.state.story.fields.favouriteCount.integerValue + " Likes"} 

            </IconButton>
          
          
            <IconButton className={styles.actions}>

              <Visibility color={"#333"} /> {this.state.viewsCount < 2 ? this.state.viewsCount + " View" : this.state.viewsCount + "  Views"}

            </IconButton>
            </Box>
            <Box marginLeft="auto">
                <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}}}
