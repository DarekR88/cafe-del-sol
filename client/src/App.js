import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FrontPage from './pages/Front';
import AdminPage from './pages/Admin'
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return <Router forceRefresh={!'pushState' in window.history}>
      <div>
        <Switch>
          <Route exact path='/' component={FrontPage} />
          <Route exact path='/AdminPage' component={AdminPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  }
};

export default App;
