import React, {useState, useEffect} from "react"
import StoriesComponent from "../../Components/Stories"
import Spinner from '../../Components/Spinner'
const BASE_URL = 'https://firestore.googleapis.com/v1'
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: ' AIzaSyBOrbITN0d8aCYV0hSZTnuilXRfDx2f9_Q ',
  authDomain: 'https://syrian-success-story.firebaseapp.com/',
  projectId: 'syrian-success-story'
})
let db = firebase.firestore();
export default class StoriesList extends React.Component {
state = {
    stories: null,
}
componentDidMount() {
    this.fetchStories();
}
fetchStories = async () => {
   console.log(await db.collection('stories').orderBy('title').limit(3).get());
    const response = await db.collection('stories').get();
    const json = await response['_snapshot'].docChanges;
    console.log(json)
            if(this.props.number){
            this.setState({stories: db.collection('stories').orderBy('createTime').limit(this.props.number)})
        }else{
    
    this.setState({stories: json});}
}
render () {
    if (this.state.stories === null){
        return (<Spinner></Spinner>)
    }
    return (
        <div>
            <StoriesComponent
            stories = {this.state.stories}
            updateFavoritesCount={this.updateFavoritesCount}
            ></StoriesComponent>
        </div>
    )
}
}