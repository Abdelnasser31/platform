import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StoryPage from '../StoryPage'
import StoryForm from '../StoryForm';
import HomeBanner from '../HomeBanner';
import CardComponentList from '../../Containers/introCardList';
import StoriesList from '../../Containers/storiesList';
import TabPanel from '../TabPanel';
import styles from './styels.module.css';
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
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          flexContainer = "true"
          
        >
          <Tab label="Recent Stories" {...a11yProps(0)} className={classes.button}/>
          <Tab label="All Stories" {...a11yProps(1)} />
          <Tab label="Share Story" {...a11yProps(2)} />
          <Tab label="About" {...a11yProps(3)} />
          <Tab label="add Story" {...a11yProps(4)} />
       
        </Tabs>
      
        </div>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomeBanner></HomeBanner>
        <CardComponentList className={styles.introCardList}></CardComponentList>
        <StoriesList number="3"></StoriesList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StoriesList number="all"></StoriesList>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StoryPage></StoryPage>
      </TabPanel>
       <TabPanel value={value} index={4}>
         <StoryForm></StoryForm>
      </TabPanel>
     
   
    </div>
  );
}
