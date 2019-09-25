import {time, types, locations, owners} from '../constants'

export async function postData(dataFromRichText) {
 
  const data = dataFromRichText;
  const titleInput = document
    .getElementById('title')
    .value;
  const locationInput = document
    .getElementById('location')
    .value;
  const typeInput = document
    .getElementById('type')
    .value;
  const ownerInput = document
    .getElementById('owner')
    .value;
  const storyType = types[typeInput - 1];
  const storyOwner = owners[ownerInput - 1];
  const storyLocation = locations[locationInput - 1];
  const imageInput = document
    .getElementById('imageURL')
    .value;
  const defaultImage = 'https://static.wixstatic.com/media/600c78_f8fe5295769848c3aae681bbfcc21d8b~mv2.j' +
      'pg/v1/fill/w_740,h_346,al_c,q_90,usm_0.66_1.00_0.01/600c78_f8fe5295769848c3aae68' +
      '1bbfcc21d8b~mv2.jpg';
  const imageURL = (imageInput == undefined || imageInput === "")
    ? defaultImage
    : imageInput;

  if (data === "" || titleInput === undefined || storyType === undefined || storyOwner === undefined || storyLocation === undefined) {
    console.log(imageURL)
    return (alert('bad input'));
  }

  // const url = `https://firestore.googleapis.com/v1/projects/syrian-success-story-demo/databases/(default)/documents/stories-demo`
  // await fetch(url, {
  //   method: 'POST',
  //   header: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     fields: {
  //       type: {
  //         stringValue: `${storyType}`
  //       },
  //       storyRichText: {
  //         stringValue: `${dataFromRichText}`
  //       },
  //       title: {

  //         stringValue: `${titleInput}`

  //       },
  //       imageURL: {
  //         stringValue: `${imageURL}`
  //       },
  //       favouriteCount: {
  //         integerValue: 0
  //       },
  //       viewCount: {
  //         integerValue: 0
  //       },
  //       location: {
  //         stringValue: `${storyLocation}`
  //       },
  //       owner: {
  //         stringValue: `${storyOwner}`
  //       },
  //       createTime: {
  //         stringValue: `${time}`
  //       }
  //     }
  //   })
  // })
  // console.log(time);
  alert(`the input was valid but we can't give you permession to add your story, instead you can contact us : )`)
}