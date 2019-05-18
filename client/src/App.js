import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FrontPage from './pages/Front';
import AdminPage from './pages/Admin'
import XCollection from './pages/XCollection'
import NoMatch from './pages/NoMatch';
import { Nav } from './components/Nav';
import { Logo } from './components/Jumbotron';

// **FOR THE FRONT, WE JUST NEED THE JUMBOTRON WITH THE LOGO WITHOUT THE NAVBAR**

class App extends Component {
  render() {
    return <Router forceRefresh={!'pushState' in window.history}>
      <div>
        <Switch>
          <Route exact path='/' component={FrontPage} />
          <Route exact path='/AdminPage' component={AdminPage} />
          <Route exact path='/XCollection/:id' component={XCollection} />
          <Route component={NoMatch} />
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Router>
  }
};

export default App;
