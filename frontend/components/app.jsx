import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Link } from 'react-router-dom';

import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import NewProjectContainer from './projects/NewProjectContainer';
import EditProjectContainer from './projects/EditProjectContainer';
import ShowProjectContainer from './projects/ShowProjectContainer';
import IndexProjectsContainer from './projects/IndexProjectsContainer';
import NewInstructionContainer from './instruction/NewInstructionContainer';
import UserProjectsIndexContainer from './projects/UserProjectsIndexContainer';
import MainPage from './main_page/main_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <div>
      <header className='navbar'>
        <div>
          <Link className='clickable icon-space' to='/'>
            <div id='syb-logo'></div>
            <p>Share Your Build</p>
          </Link>
        </div>
        <div className='nav_spacing'>
          <div className='search-bar-formating'>
            <form className='search-bar-form' >
              <input type="text" placeholder="Let's Build ..." name="search2" className='search-bar-input' />
              <button className='search-bar-button' type='submit'><i className="fas fa-search"></i></button>
            </form>
            <Link to="/project/new" className="create-build-button" >Create a Build</Link>
          </div>
        </div>
        <GreetingContainer />
      </header>
      <div class='window-size'>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <ProtectedRoute path="/project/new" component={NewProjectContainer} />
          <ProtectedRoute exact path="/project/:projectId/edit" component={EditProjectContainer} />
          <Route path="/project/:projectId" component={ShowProjectContainer} />
          <Route path="/projects" component={IndexProjectsContainer} />
          <Route path="/test" component={NewInstructionContainer} />
          <Route path="/:username/:id/projects" component={UserProjectsIndexContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
      </div>
    </div>
    <footer className='footer'>
      <div className='icon-space'>
        <div id='syb-logo'></div>
        <Link className='clickable' to='/'>Share Your Build</Link>
      </div>
      <div className='icon-space'>
        <a href="https://github.com/Dmoisoff">
          <div id='github-logo'></div>
        </a>
      </div>
    </footer>
  </div>
);

export default App;
