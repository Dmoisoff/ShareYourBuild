import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Link } from 'react-router-dom';

import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header className='navbar'>
      <h1>Share Your Build</h1>
      <GreetingContainer />
    </header>
    <div>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
