import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import RecentStories from './Containers/RecentStories'
import About from './Components/About'
import StoryForm from './Components/StoryForm'
import StoriesList from './Containers/storiesList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={RecentStories}/>
          <Route path="/about" component={About}/>
          <Route path="/stories" component={StoriesList}/>
          <Route path="/add-story" component={StoryForm}/>

        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
