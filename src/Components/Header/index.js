import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Selectors from '../Selectors';
import TitleInput from '../TitleInput';
import RadioSelectors from '../RadioSelectors';
import RichText from '../RichText';
import HomeBanner from '../HomeBanner'
import CardComponentList from '../../Containers/introCardList'
import StoriesList from '../../Containers/storiesList'
import Button from '@material-ui/core/Button'
const BASE_URL = 'https://firestore.googleapis.com/v1'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

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
    introCardList: {
      paddingTop: "100px"
    }
  }),
);
async function postData() {
  const storyTitle = document.getElementById('outlined-name').value;
  const storyLocation = document.getElementById('outlined-location-native-simple').value;
  const storyType = document.getElementById('outlined-type-native-simple').value;
  const url = `https://firestore.googleapis.com/v1/projects/syrian-success-story/databases/(default)/documents/stories`
  await fetch(url, {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        type : {
          stringValue: 'Syria',
        },
        title: {
         
            stringValue: 'story three'
          
        },
        imageURL: {
          stringValue: 'https://static.wixstatic.com/media/600c78_f8fe5295769848c3aae681bbfcc21d8b~mv2.jpg/v1/fill/w_740,h_346,al_c,q_90,usm_0.66_1.00_0.01/600c78_f8fe5295769848c3aae681bbfcc21d8b~mv2.jpg'
        },
        favouriteCount: {
          integerValue: 0,
        },
        viewCount: {
          integerValue: 0,
        }
      }
    })
  })
  alert("done")
}
  

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
          <Tab label="All Stories" {...a11yProps(0)} className={classes.button}/>
          <Tab label="Recent Stories" {...a11yProps(1)} />
          <Tab label="Share Story" {...a11yProps(2)} />
          <Tab label="About" {...a11yProps(3)} />
          <Tab label="add Story" {...a11yProps(4)} />
       
        </Tabs>
      
        </div>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomeBanner></HomeBanner>
        <CardComponentList className={classes.introCardList}></CardComponentList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StoriesList></StoriesList>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
       <TabPanel value={value} index={4}>
      <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TitleInput></TitleInput>
          </Grid>
          <Grid item xs={4}>
          <Selectors></Selectors>
          </Grid>
          <Grid item xs={4}>
          <RadioSelectors></RadioSelectors>
        </Grid>
     </Grid>
     <RichText></RichText>
     <Button onClick={postData}>Submit</Button>
    </div>
      </TabPanel>
     
   
    </div>
  );
}
