import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import RecentStories from './Containers/RecentStories'
import About from './Components/About'
import StoryForm from './Components/StoryForm'
import SignIn from './Components/SignIn'
import Auth from './Components/Authentication'
import StoriesList from './Containers/storiesList'
import StoryPage from './Components/StoryPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import ShareStory from './Components/ShareStory';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={RecentStories}/>
          <Route path="/about" component={About}/>
          <Route path="/share-story" component={ShareStory}/>
          <Route path="/stories" component={StoriesList}/>
          <Route path="/story/:id" component={StoryPage} />
          <Route path="/admin-panel" component={Auth} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
