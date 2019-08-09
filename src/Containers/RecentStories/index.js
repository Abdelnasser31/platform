import React from 'react';
import HomeBanner from '../../Components/HomeBanner';
import styles from './styles.module.css'
import CardComponentList from '../../Containers/introCardList';
import StoriesList from '../../Containers/storiesList';
export default class RecentStories extends React.Component {
  render() {
    return (
      <div>
        <HomeBanner></HomeBanner>
        <CardComponentList className={styles.introCardList}></CardComponentList>
        <StoriesList number="3"></StoriesList>
      </div>
    )
  }
}
