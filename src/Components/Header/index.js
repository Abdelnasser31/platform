import React from 'react';
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

  

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);


  return (
    <div className={styles.header}>
      <div position="static" color="default" className = {styles.bar}>
          <div className = {styles.brand}>
          
         </div>


          <div>
       
              
         <Link to="/" className={styles.link} > <Button className={styles.button}>
        Recent Stories
      </Button></Link>
      
          <Link to="/stories" className={styles.link} >
          <Button className={styles.button}>
        All Stories
      </Button>
           </Link>

          <Link to="/share-story" className={styles.link} >
          <Button className={styles.button}>
        Share Story
      </Button>
            </Link>
          <Link to="/about" className={styles.link} >
          <Button className={styles.button}>
       About
      </Button>
            
            </Link>
          <Link to="/add-story" className={styles.link} >
          <Button className={styles.button}>
        Add Story
      </Button>
            </Link>
       
    
      
        </div>
      </div>
   
    </div>
  );
}
