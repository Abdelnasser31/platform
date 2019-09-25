import React from 'react';
import Grid from '@material-ui/core/Grid';
import IntroCardComponent from '../../Components/IntroCard'

export default class CardComponents extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}
        direction="row"
        justify="center"
        alignItems="center">
          <Grid item xs={8} sm={8} md={8} lg={3}>
            <IntroCardComponent
            title = "Having nowhere to go?"
            textBody = "Over 12 million Syrian forced to flee their homes, under heavy shelling and chemical attacks, leaving behind them nothing but rubble and tons of memories."
            introImage = "https://static.wixstatic.com/media/600c78_98ead5efb09345f48518d7ece5ef27c2~mv2_d_1920_1280_s_2.jpg/v1/fill/w_309,h_581,al_c,q_80,usm_0.66_1.00_0.01/600c78_98ead5efb09345f48518d7ece5ef27c2~mv2_d_1920_1280_s_2.webp"
            ></IntroCardComponent>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={3}>
          <IntroCardComponent
          title = "Losing everything?"
          textBody = "Millions of Syrian people have lost their families, and their beloved ones. They have lost years of their life, their education and their work, besides everything they have built."
          introImage =  "https://static.wixstatic.com/media/600c78_8ed7c47f0c1a42628cf558e056f5b911~mv2_d_1822_1366_s_2.jpg/v1/fill/w_300,h_581,al_c,q_80,usm_0.66_1.00_0.01/600c78_8ed7c47f0c1a42628cf558e056f5b911~mv2_d_1822_1366_s_2.webp"
          ></IntroCardComponent>
          </Grid>
        </Grid>
      </div>
    )
  }
}