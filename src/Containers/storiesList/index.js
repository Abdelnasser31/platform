import React, {useState, useEffect} from "react"
import StoriesComponent from "../../Components/Stories"
import Spinner from '../../Components/Spinner'
import {Button, Form, FormControl} from 'react-bootstrap'
import Selectors from '../../Components/Selectors'
import {types, locations, owners} from '../../constants'
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({apiKey: ' AIzaSyBOrbITN0d8aCYV0hSZTnuilXRfDx2f9_Q ', authDomain: 'https://syrian-success-story.firebaseapp.com/', projectId: 'syrian-success-story'})
let db = firebase.firestore();
let stories = db.collection('stories');

export default class StoriesList extends React.Component {
  state = {
    stories: null
  }
  componentDidMount() {
    this.fetchStories();
  }
  fetchStories = async(text) => {
    let response = []
    let query;
    if (text) {
        query = stories
          .where('title', '==', text)
          .get();
          console.log(query);
    } else {
      query = stories
        .orderBy('createTime', 'desc')
        .get();
    }
    if (this.props.number) {
      response = await db
        .collection('stories')
        .orderBy('createTime', 'desc')
        .limit(Number(this.props.number))
        .get();

    } else {
      response = await query;
      console.log('Iam here ', response);
    }
    const json = await response['_snapshot'].docChanges;
    console.log(json)
    this.setState({stories: json})
  }

  filter = (e) => {

    let text = document
      .getElementById('search')
      .value;
    this.fetchStories(text);
    e.preventDefault();
  }
  render() {
    if (this.state.stories === null) {
      return (
        <Spinner></Spinner>
      )
    }
    return (
      <div>

        <Form inline className='text-center' onSubmit={this.filter}>
          <div className='mx-auto'>
            <FormControl type="text" id='search' placeholder="Search By Title" className=" mr-sm-2"/>
            <Button type="submit">Search</Button>
          </div>
        </Form>
        <StoriesComponent
          stories={this.state.stories}
          updateFavoritesCount={this.updateFavoritesCount}></StoriesComponent>
      </div>
    )
  }
}