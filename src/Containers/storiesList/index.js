import React, {useState, useEffect} from "react"
import StoriesComponent from "../../Components/Stories"
import Spinner from '../../Components/Spinner'
import {Button, Form, FormControl} from 'react-bootstrap'
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({apiKey: ' AIzaSyBOrbITN0d8aCYV0hSZTnuilXRfDx2f9_Q ', authDomain: 'https://syrian-success-story.firebaseapp.com/', projectId: 'syrian-success-story'})
let db = firebase.firestore();
let stories = db.collection('stories');
let firstStory  = 1;
let lastStory = 0;
let prevButtonHidden = true;
let query = stories
.orderBy('createTime', 'desc').limit(3);
export default class StoriesList extends React.Component {
  state = {
    stories: null,
    pages: `display stoires from ${firstStory} to ${lastStory}`,
  }
  componentDidMount() {
    this.fetchStories();
  }
  fetchStories = async(text, exeQuery) => {
    let response = []
   
    if (text) {
      query = stories
        .where('title', '==', text)
        .get();

    }
    if (this.props.number) {
      response = await db
        .collection('stories')
        .orderBy('createTime', 'desc')
        .limit(Number(this.props.number))
        .get();

    } else {
      if(exeQuery) {console.log('exe'); response = await exeQuery.get();}
      else         response = await query.get();
    }
    const json = await response['_snapshot'].docChanges;

    
    this.setState({stories: json},() => {
      lastStory += this.state.stories.length;
      this.setState({pages: `Display stories from ${firstStory} to ${lastStory}`})}
      )
  }

  filter = (e) => {

    let text = document
      .getElementById('search')
      .value;
    this.fetchStories(text);
    e.preventDefault();
  }
  getNextPage = (e) =>{
    prevButtonHidden = false;
    query = query.startAfter(this.state.stories[this.state.stories.length - 1].doc.proto.fields.createTime.stringValue);
    firstStory += 3;
    this.setState({stories: null});
    this.fetchStories(false,query);
    
  }
  getPrevPage = (e) => {
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
          <p>no stories left get back</p> 
          <Button variant='outline-danger' id="prev" disabled={false} onClick={this.getPrevPage}>Back</Button>
            
        </div>
      )
    }
    if (!this.props.number) {
      return (
        <div>
          <Form inline className='text-center' onSubmit={this.filter}>
            <div className='mx-auto'>
              <FormControl
                type="text"
                id='search'
                placeholder="Search By Title"
                className=" mr-sm-2"/>
              <Button type="submit">Search</Button>
            </div>
          </Form>
          <StoriesComponent
            stories={this.state.stories}
            updateFavoritesCount={this.updateFavoritesCount}></StoriesComponent>
              <div>
            <Button variant='outline-danger' id="prev" onClick={this.getPrevPage} hidden={prevButtonHidden}>Back</Button>
             <span className='px-2'>{this.state.pages}</span>
            <Button variant='outline-primary' onClick={this.getNextPage}>Next</Button>
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