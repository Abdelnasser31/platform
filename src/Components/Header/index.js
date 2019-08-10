import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import gray from '@material-ui/core/colors/grey';
import styles from './styles.module.css'
import {Link} from 'react-router-dom'



const BASE_URL = 'https://firestore.googleapis.com/v1'



function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      marginBottom: 24,
      
      backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    img: {
        width: '80px',
        height: '60px',
        background: 'url("https://static.wixstatic.com/media/600c78_618e8fc2e4334570aa49d2825fd9de13~mv2_d_2700_1762_s_2.png/v1/fill/w_106,h_70,al_c,q_80,usm_0.66_1.00_0.01/SSS_En-02.webp")',
        backgroundSize: '80px',
        backgroundRepeat: 'no-repeat'
    },
    button: {
        minHeight: '62px', 
    },

  }),
);

  

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className = {classes.tabs}>
          <div className = {classes.img}>
          
         </div>
          <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor= "gray[500]"
          textColor="gray[900]"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          flexContainer = "true"
          
        >
         <Link to="/" className={styles.link} > <Tab label="Recent Stories" {...a11yProps(0)} className={classes.button}/></Link>
      
          <Link to="/stories" className={styles.link} ><Tab label="All Stories" {...a11yProps(1)} className={classes.button}/></Link>
          <Link to="/share-story" className={styles.link} ><Tab label="Share Story" {...a11yProps(2)} className={classes.button}/></Link>
          <Link to="/about" className={styles.link} ><Tab label="About" {...a11yProps(3)} className={classes.button}/></Link>
          <Link to="/add-story" className={styles.link} ><Tab label="add Story" {...a11yProps(4)} className={classes.button}/></Link>
       
        </Tabs>
      
        </div>
      </AppBar>
   
    </div>
  );
}
