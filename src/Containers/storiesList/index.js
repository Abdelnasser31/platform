import React, {useState, useEffect} from "react"
import StoriesComponent from "../../Components/Stories"
import FilterForm from '../../Components/FilterForm'
import Spinner from '../../Components/Spinner'
import {Button} from 'react-bootstrap'
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({apiKey: 'AIzaSyAPOafqa-pZmAG2sw4swhChVPPknefraPQ ', authDomain: 'https://syrian-success-story-demo.firebaseapp.com', projectId: 'syrian-success-story-demo'})
let db = firebase.firestore();
let isFiltered = false;
let stories = db.collection('stories-demo');
let query = stories
.orderBy('createTime', 'desc').limit(3);
export default class StoriesList extends React.Component {
  state = {
    stories: null,
  }
  componentDidMount() {
    this.fetchStories();
  }
  fetchStories = async(text, exeQuery = null) => {
    let response = []
   
    if (text) {
      query = stories
        .where('tags', "array-contains", text)
        response = await query.get();

    }
    else if (this.props.number) {
      response = await db
        .collection('stories-demo')
        .orderBy('createTime', 'desc')
        .limit(Number(this.props.number))
        .get();

    } else {
      if(exeQuery !== null) { response = await exeQuery.get(); exeQuery = null}
      else         response = await query.get();
    }
    const json = await response['_snapshot'].docChanges;

    console.log(json);
    this.setState({stories: json})
  }

  filter = (e) => {
    isFiltered = true;
    this.setState({stories: null})
    console.log('filtering')
    let text = document
      .getElementById('search')
      .value.toLowerCase();
    this.fetchStories(text);
    e.preventDefault();
  }
  getNextPage = (e) =>{
    query = query.startAfter(this.state.stories[this.state.stories.length - 1].doc.proto.fields.createTime.stringValue);
    this.setState({stories: null});
    this.fetchStories(false);
    
  }
  goToStart = (e) => {
    window.location.href = '/stories';

  }
  render() {
    if (this.state.stories === null) {
      return (
        <Spinner></Spinner>
      )
    }
    if (this.state.stories.length === 0) {
      return(
        <div>
          <p>No More stories left, get back</p> 
          <Button variant='outline-danger' id="prev" disabled={false} onClick={this.goToStart}>Back</Button> 
        </div>
      )
    }
    if (!this.props.number) {
      return (
        <div>
         <FilterForm onSubmit={this.filter} />
          <StoriesComponent
            stories={this.state.stories}
            updateFavoritesCount={this.updateFavoritesCount}></StoriesComponent>
              <div>
              <Button variant='outline-primary' onClick={this.goToStart} hidden={!isFiltered}>Clear Filter</Button>
            <Button variant='outline-primary' onClick={this.getNextPage} hidden={isFiltered}>More Stories >></Button>
          </div>
        </div>
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