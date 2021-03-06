import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import LoginFormContainer from "./session/LoginFormContainer";
import SignupFormContainer from "./session/SignupFormContainer";
import NewProjectContainer from "./projects/NewProjectContainer";
import EditProjectContainer from "./projects/EditProjectContainer";
import ShowProjectContainer from "./projects/ShowProjectContainer";
import IndexProjectsContainer from "./projects/IndexProjectsContainer";
import NewInstructionContainer from "./instruction/NewInstructionContainer";
import UserProjectsIndexContainer from "./projects/UserProjectsIndexContainer";
import SearchIndexProjectsContainer from "./projects/SearchIndexProjectsContainer";
import SearchBar from "./search/searchbar.jsx";
// import WysiwygContainer from "./rich_text_editor/WysiwygContainer";
import MainPage from "./main_page/main_page";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => {
  return (
    <div>
      <div>
        <header className="navbar">
          <div>
            <Link className="clickable icon-space" to="/">
              <div id="syb-logo" />
              <p>Share Your Build</p>
            </Link>
          </div>
          <div className="nav_spacing">
            <div className="search-bar-formating">
              <Switch>
                <SearchBar />
              </Switch>
              <Link to="/project/new" className="create-build-button">
                Create a Build
              </Link>
            </div>
          </div>
          <GreetingContainer />
        </header>
        <div className="window-size">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <ProtectedRoute
              path="/project/new"
              component={NewProjectContainer}
            />
            <ProtectedRoute
              exact
              path="/project/:projectId/edit"
              component={EditProjectContainer}
            />
            <Route
              path="/project/:projectId"
              component={ShowProjectContainer}
            />
            <Route exact path="/projects" component={IndexProjectsContainer} />
            <Route
              exact
              path="/:username/:id/projects"
              component={UserProjectsIndexContainer}
            />
            <Route
              path="/projects/search/:query"
              component={SearchIndexProjectsContainer}
            />
            <Route exact path="/projects/search/" component={MainPage} />
            <Route
              exact
              path="/test"
              component={SearchIndexProjectsContainer}
            />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
          </Switch>
        </div>
      </div>
      <footer className="footer">
        <div className="icon-space">
          <div id="syb-logo" />
          <Link className="clickable" to="/">
            Share Your Build
          </Link>
        </div>
        <div className="icon-space">
          <a href="https://dmoisoff.com/">Coded by Daniel Moisoff</a>
        </div>
        <div className="icon-space">
          <a href="https://www.linkedin.com/in/dmoisoff/">
            <div id="linkedin-logo" />
          </a>
          <a href="https://github.com/Dmoisoff/ShareYourBuild">
            <div id="github-logo" />
          </a>
          <a href="https://angel.co/daniel-moisoff">
            <div id="angellist-logo" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
