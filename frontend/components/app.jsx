import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Link } from 'react-router-dom';

import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import NewProjectContainer from './projects/NewProjectContainer';
import EditProjectContainer from './projects/EditProjectContainer';
import ShowProjectContainer from './projects/ShowProjectContainer';
import Slides from './slides/Slides';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header className='navbar'>
      <Link className='clickable' to='/'>Share Your Build</Link>
      <GreetingContainer />
    </header>
    <div>
      <Switch>
        <ProtectedRoute path="/project/new" component={NewProjectContainer} />
        // <ProtectedRoute exact path="/projects/:projectId/edit" component={EditProjectContainer} />
        <Route path="/project/:projectId" component={ShowProjectContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path="/" component={Slides} />
      </Switch>
    </div>
    <main className='main'>
      main content
    </main>
    <footer class='footer'>
      <Link className='clickable' to='/'>Share Your Build</Link>
    </footer>
  </div>
);

export default App;
