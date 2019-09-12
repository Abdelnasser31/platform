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
import parse from 'html-react-parser'
const BASE_URL = 'https://firestore.googleapis.com/v1'

export default class StoryPage extends React.Component{
  state = {
    story: null,
    viewsCount: 0,
  }
  componentDidMount() {
    this.storyId =  this.props.match.params;
    this.fetchStory();
    
  }
  updateViewsCount = async() => {
    console.log(this.state.viewsCount, "here");
    this.setState({viewsCount: parseInt(this.state.story.fields.viewCount.integerValue) + 1},
    async () => {
      console.log('before the fetch',this.state.viewsCount);
    const url = `${BASE_URL}/projects/syrian-success-story/databases/(default)/documents/stories/${this.storyId.id}?currentDocument.exists=true&updateMask.fieldPaths=viewCount`
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
    console.log('after the fetch',this.state.viewsCount);
  })
    
   
   
  }

  fetchStory = async () =>{
    const url = `${BASE_URL}/projects/syrian-success-story/databases/(default)/documents/stories/${window.location.href.split('/').pop()}`
    const response = await fetch(url);
    const json = await response.json();
     this.setState({story: json},() => this.setState({viewCount: this.state.story.fields.viewCount.integerValue},() => this.updateViewsCount()))
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
        image = {this.state.story.fields.imageURL.stringValue}
        title="Success Story"
      />
        <CardContent className={styles.storyText}>
        {parse(this.state.story.fields.storyRichText.stringValue)}
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
