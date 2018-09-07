import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
library.add(faEye);

import Header from './Header/Header.jsx';
import Users from './User/Users.jsx';
import User from './User/User.jsx';
class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Header
          />
          <div role="main" className="container container__main">
            <Switch>
              <Route exact path="/" component={Users}
              />
              <Route path="/users" component={Users}
              />
              <Route path="/user/:id" component={User}
              />
              <Route render={function () {
                return <p>Not Found</p>
              }} />
            </Switch>

          </div>
        </div>

      </Router>
      
    );
  }

}

export default App;
