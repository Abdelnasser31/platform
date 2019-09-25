const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({apiKey: ' AIzaSyAPOafqa-pZmAG2sw4swhChVPPknefraPQ ', authDomain: 'https://syrian-success-story-demo.firebaseapp.com', projectId: 'syrian-success-story-demo'})
let db = firebase.firestore();

export async function fetchStories(number) {
    let response = []

    
      response = await db
        .collection('stories-demo')
        .orderBy('createTime', 'desc')
        .limit(Number(number))
        .get();
    const json = await response['_snapshot'].docChanges;
    console.log(json)
    return json;
  }