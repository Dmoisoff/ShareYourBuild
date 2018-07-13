import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Link } from 'react-router-dom';

import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import NewProjectContainer from './projects/NewProjectContainer';
import EditProjectContainer from './projects/EditProjectContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header className='navbar'>
      <Link to='/'>Share Your Build</Link>
      <GreetingContainer />
    </header>
    <div>
      <Switch>
        <ProtectedRoute path="/projects/new" component={NewProjectContainer} />
        // <ProtectedRoute exact path="/projects/:projectsId/edit" component={EditProjectContainer} />
        // <Route exact path="/projects/:projectsId" component={EditProjectContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
