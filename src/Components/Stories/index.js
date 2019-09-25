import React from 'react';
import Story from '../Story'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core';

export default function Stories({ stories, updateFavoritesCount}) {
    return (
        <Container>
                    <Grid container spacing={3} justify="center">
          {
              stories.map(story => (
                  
                  <Grid item xs={8} sm={6} md={4} lg={3}>
                      <Story
                      name= {story.doc.proto.name}
                      storyTitle = {story.doc.proto.fields.title.stringValue}
                      storyImage = {story.doc.proto.fields.imageURL.stringValue}
                      storyDate = {story.doc.proto.createTime}
                      favoritesCount = {story.doc.proto.fields.favouriteCount.integerValue}
                      updateFavoritesCount = {updateFavoritesCount}
                      viewsCount = {story.doc.proto.fields.viewCount.integerValue}
                      storyTime = {story.doc.proto.fields.createTime.stringValue}
                      ></Story>
                     
                      </Grid>
              ))
          }
        </Grid>
        </Container>

    )
}