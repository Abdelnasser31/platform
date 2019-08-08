import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

function RadioSelectors() {
  const classes = useStyles();
  const [value, setValue] = React.useState('individual');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"></FormLabel>
        <RadioGroup
          aria-label="owner"
          name="owner"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="individual" control={<Radio color="#333"/>} label="Individual" />
          <FormControlLabel value="group" control={<Radio color="#333"/>} label="Group" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioSelectors;