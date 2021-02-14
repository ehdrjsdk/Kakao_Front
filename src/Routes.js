import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import RegisterForm from './FormComponents/RegisterForm';
import LoginForm from './FormComponents/LoginForm';
import ListupForm from './FormComponents/ListupForm';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm} />
	        <Route exact path="/Register" component={RegisterForm} />
          <Route exact path="/Listup" component={ListupForm} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;