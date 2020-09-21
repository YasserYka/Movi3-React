import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import AdvancedSearch from './components/search/AdvancedSearch';
import Index from './components/layout/Index';
import Watch from './components/watch/Watch';
import Login from './components/account/Login';
import Signup from './components/account/Signup';
import Profile from './components/account/Profile';
import BrowseMore from './components/browse/BrowseMore';
import UserList from './components/CRUD/UserList';

import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/browsemore" component={BrowseMore} />
                <Route exact path="/advancedsearch" component={AdvancedSearch} />
                <Route exact path="/movie/:movieId" component={Watch} />
                <Route exact path="/userslist" component={UserList} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
