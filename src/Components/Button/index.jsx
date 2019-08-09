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

function Buttons() {
  const classes = useStyles();

  return (

    <Button variant="contained" color="#333" className={classes.button}>
    Add Story
  </Button>

  );
}

export default Buttons;