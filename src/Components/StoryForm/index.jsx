import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button, {postData} from '../Button';
import Selectors from '../Selectors';
import TitleInput from '../TitleInput';
import RichText from '../RichText';
import Container from '@material-ui/core/Container';
import styles from './styles.module.css' 

function StoryForm() {

    return (
        <Container>
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TitleInput id="title" label="Title"></TitleInput>
                </Grid>
                <Grid item xs={4}>
                    <TitleInput id="imageURL" label="Image url"></TitleInput>
                </Grid>
                <Grid item xs={4}>
                    <Selectors></Selectors>
                </Grid>
            </Grid>
            <RichText></RichText>
            <Button onClick={postData} className={styles.but}></Button>
        </div>
        </Container>
    );
}

export default StoryForm;
