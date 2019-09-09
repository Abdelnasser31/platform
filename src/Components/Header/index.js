import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'
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


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className = {classes.tabs}>
          <div className = {classes.img}>
          
         </div>
          <div>
       
              
         <Link to="/" className={styles.link} > <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Recent Stories
      </Button></Link>
      
          <Link to="/stories" className={styles.link} >
          <Button variant="contained" href="#contained-buttons" className={classes.button}>
        All Stories
      </Button>
           </Link>

          <Link to="/share-story" className={styles.link} >
          <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Share Story
      </Button>
            </Link>
          <Link to="/about" className={styles.link} >
          <Button variant="contained" href="#contained-buttons" className={classes.button}>
       About
      </Button>
            
            </Link>
          <Link to="/add-story" className={styles.link} >
          <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Add Story
      </Button>
            </Link>
       
    
      
        </div>
      </AppBar>
   
    </div>
  );
}
