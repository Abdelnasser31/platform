import React from 'react';
import Story from '../Story'
import Grid from '@material-ui/core/Grid'

export default function Stories({ stories, updateFavoritesCount}) {
    return (
        <Grid container spacing={3} justify="center">
          {
              stories.map(story => (
                  <Grid item xs={3}>
                      <Story
                      name= {story.name}
                      storyTitle = {story.fields.title.stringValue}
                      storyImage = {story.fields.imageURL.stringValue}
                      storyDate = {story.createTime}
                      favoritesCount = {story.fields.favouriteCount.integerValue}
                      updateFavoritesCount = {updateFavoritesCount}
                      viewsCount = {story.fields.viewCount.integerValue}
                      ></Story>
                     
                      </Grid>
              ))
          }
        </Grid>
    )
}