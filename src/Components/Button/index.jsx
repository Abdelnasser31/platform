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

export async function postData() {
  const storyTitle = document.getElementById('outlined-name').value;
  const storyLocation = document.getElementById('outlined-location-native-simple').value;
  const storyType = document.getElementById('outlined-type-native-simple').value;
  const url = `https://firestore.googleapis.com/v1/projects/syrian-success-story/databases/(default)/documents/stories`
  await fetch(url, {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        type : {
          stringValue: 'Syria',
        },
        title: {
         
            stringValue: 'story three'
          
        },
        imageURL: {
          stringValue: 'https://static.wixstatic.com/media/600c78_f8fe5295769848c3aae681bbfcc21d8b~mv2.jpg/v1/fill/w_740,h_346,al_c,q_90,usm_0.66_1.00_0.01/600c78_f8fe5295769848c3aae681bbfcc21d8b~mv2.jpg'
        },
        favouriteCount: {
          integerValue: 0,
        },
        viewCount: {
          integerValue: 0,
        }
      }
    })
  })
  alert("done")
}

function Buttons() {
  const classes = useStyles();

  return (

    <Button variant="contained" color="#333" className={classes.button}>
    Add Story
  </Button>

  );
}

export default Buttons;