import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {postData} from '../../Actions/Postdata'
import Selectors from '../Selectors';
import TitleInput from '../TitleInput';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Container from '@material-ui/core/Container';
import {inputs} from '../../constants'
import styles from './styles.module.css'

let dataFromRichText = "";
function StoryForm() {
  return (
    <Container>
      <div>
        <Grid container spacing={3}>
          {inputs.map(input => <Grid xs={6} lg={4}>
            <TitleInput id={input.id} label={input.label}></TitleInput>
          </Grid>)}
          <Grid item xs={6} lg={4}>
            <Selectors></Selectors>
          </Grid>
        </Grid>
        <CKEditor
          editor={ClassicEditor}
          onChange={(event, editor) => {
          dataFromRichText = editor.getData();
        }}/>
        <Button onClick={() => postData(dataFromRichText)} className={styles.but}>Add a Story</Button>
      </div>
    </Container>
  );
}

export default StoryForm;
