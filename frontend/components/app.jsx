import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Link } from 'react-router-dom';

import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import NewProjectContainer from './projects/NewProjectContainer';
import EditProjectContainer from './projects/EditProjectContainer';
import ShowProjectContainer from './projects/ShowProjectContainer';
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
        // <ProtectedRoute exact path="/projects/:projectId/edit" component={EditProjectContainer} />
        <Route path="/project/:projectId" component={ShowProjectContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
