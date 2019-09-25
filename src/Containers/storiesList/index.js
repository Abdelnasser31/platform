import React, {useState, useEffect} from "react"
import StoriesComponent from "../../Components/Stories"
import Spinner from '../../Components/Spinner'
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({apiKey: 'AIzaSyAPOafqa-pZmAG2sw4swhChVPPknefraPQ ', authDomain: 'https://syrian-success-story-demo.firebaseapp.com', projectId: 'syrian-success-story-demo'})
let db = firebase.firestore();
export default class StoriesList extends React.Component {
  state = {
    stories: null
  }
  componentDidMount() {
    this.fetchStories();
  }
  fetchStories = async() => {
    let response = []

    if (this.props.number) {
      response = await db
        .collection('stories-demo')
        .orderBy('createTime', 'desc')
        .limit(Number(this.props.number))
        .get();
    } else {
      response = await db
        .collection('stories-demo')
        .orderBy('createTime', 'desc')
        .get();
    }
    const json = await response['_snapshot'].docChanges;
    console.log(json)
    this.setState({stories: json})
  }
  render() {
    if (this.state.stories === null) {
      return (
        <Spinner></Spinner>
      )
    }
    return (
      <div>
        <StoriesComponent
          stories={this.state.stories}
          updateFavoritesCount={this.updateFavoritesCount}></StoriesComponent>
      </div>
    )
  }
}