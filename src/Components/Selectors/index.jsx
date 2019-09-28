import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Input, Grid,OutlinedInput} from '@material-ui/core';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'warp',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));

function Selectors() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        location: '',
        type: '',
        owner: '',
    })

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  
    const handleChange = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };

    return (
        <div className={classes.root}>
           <Grid  xs={12} lg={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="location">
              Location
            </InputLabel>
            <Select
              native
              value={state.location}
              onChange={handleChange('location')}
              input={
                <OutlinedInput name="location" labelWidth={labelWidth} id="location" />
              }
            >
              <option value="" />
              <option value={1}>Syria</option>
              <option value={2}>Turkey</option>
              <option value={3}>Arab Countries</option>
              <option value={4}>Europe</option>
              <option value={5}>US & Canada</option>
            </Select>
          </FormControl></Grid>
          <Grid  xs={12} lg={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="type">
              Type
            </InputLabel>
            <Select
              native
              value={state.type}
              onChange={handleChange('type')}
              input={
                <OutlinedInput name="type" labelWidth={labelWidth} id="type" />
              }
            >
              <option value="" />
              <option value={1}>Education</option>
              <option value={2}>Society</option>
              <option value={3}>Economy</option>
              <option value={4}>Art & Culture</option>
            </Select>
          </FormControl></Grid>
          <Grid xs={12} lg={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="owner">
              Owner
            </InputLabel>
            <Select
              native
              value={state.owner}
              onChange={handleChange('owner')}
              input={
                <OutlinedInput name="owner" labelWidth={labelWidth} id="owner" />
              }
            >
              <option value="" />
              <option value={1}>Individual</option>
              <option value={2}>Group</option>
            </Select>
          </FormControl></Grid>
     
        </div>
      );
    
}

export default Selectors;