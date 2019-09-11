import React from 'react';
import Button from '@material-ui/core/Button'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import {tabs} from './../../constants'

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
