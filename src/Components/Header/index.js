import React from 'react';
import Button from '@material-ui/core/Button'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'

let tabs = [
  {
    to: '',
    name: 'Recent Stories'
  }, {
    to: 'stories',
    name: 'All Stories'
  }, {
    to: 'share-story',
    name: 'Share Stories'
  }, {
    to: 'about',
    name: 'About'
  }, {
    to: 'add-story',
    name: 'Add a Story'
  }
];

export default function ScrollableTabsButtonAuto() {
  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <div className={styles.brand}></div>
        <div>
          {tabs.map(link => <Link to={`/${link.to}`} className={styles.link}>
            <Button className={styles.button}>
              {link.name}
            </Button>
          </Link>)}
        </div>
      </div>
    </div>
  );
}
