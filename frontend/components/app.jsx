import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Link } from 'react-router-dom';

import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import NewProjectContainer from './projects/NewProjectContainer';
import EditProjectContainer from './projects/EditProjectContainer';
import ShowProjectContainer from './projects/ShowProjectContainer';
import IndexProjectsContainer from './projects/IndexProjectsContainer';
import MainPage from './main_page/main_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
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
            <button className='search-bar-button' type='submit'><i class="fas fa-search"></i></button>
          </form>
          <Link to="/project/new" className="create-build-button" >Create a Build</Link>
        </div>
      </div>
      <div className='add-space'></div>
      <div></div>
      <GreetingContainer />
    </header>
    <div>
      <Switch>
        <ProtectedRoute path="/project/new" component={NewProjectContainer} />
        <ProtectedRoute exact path="/project/:projectId/edit" component={EditProjectContainer} />
        <Route path="/project/:projectId" component={ShowProjectContainer} />
        <Route path="/projects" component={IndexProjectsContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
    <footer class='footer'>
      <div className='icon-space'>
        <div id='syb-logo'></div>
        <Link className='clickable' to='/'>Share Your Build</Link>
      </div>
    </footer>
  </div>
);

export default App;
