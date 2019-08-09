import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));
const types = ['Education','Society','Economy','Art & Culture'];
const locations = ['Syria','Turkey','Arab Countries','Europe','US & Canada'];
const owners = ['Individual', 'Group'];

export async function postData() {
  
const titleInput = document.getElementById('title').value;
const locationInput = document.getElementById('location').value;
const typeInput = document.getElementById('type').value;
const ownerInput = document.getElementById('owner').value;
const storyType = types[typeInput-1];
const storyOwner = owners[ownerInput-1];
const storyLocation = locations[locationInput-1];
const imageInput = document.getElementById('imageURL').value;
const defaultImage = 'https://static.wixstatic.com/media/600c78_f8fe5295769848c3aae681bbfcc21d8b~mv2.jpg/v1/fill/w_740,h_346,al_c,q_90,usm_0.66_1.00_0.01/600c78_f8fe5295769848c3aae681bbfcc21d8b~mv2.jpg';
const imageURL = (imageInput == undefined || imageInput ==="") ? defaultImage : imageInput;
const storyText = document.querySelector('#cke_1_contents textarea').value;
if (titleInput === undefined || storyType === undefined || storyOwner === undefined || storyLocation === undefined){
 console.log(storyText)
  return (alert('bad input'));
}

  const url = `https://firestore.googleapis.com/v1/projects/syrian-success-story/databases/(default)/documents/stories`
  await fetch(url, {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        type : {
          stringValue: `${storyType}`,
        },
        title: {
         
            stringValue: `${titleInput}`
          
        },
        imageURL: {
          stringValue: `${imageURL}`
        },
        favouriteCount: {
          integerValue: 0,
        },
        viewCount: {
          integerValue: 0,
        },
        location: {
          stringValue: `${storyLocation}`
        },
          owner: {
            stringValue: `${storyOwner}`
          }
      }
    })
  })
  alert("successfully added to db")
}

function Buttons(props) {
  const classes = useStyles();

  return (

    <Button onClick={props.onClick} variant="contained" color="#333" className={classes.button}>
    Add Story
  </Button>

  );
}

export default Buttons;