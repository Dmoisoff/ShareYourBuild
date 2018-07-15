import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchProjects, fetchProject, createProject, updateProject, deleteProject} from './actions/projects_actions';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchProjects = fetchProjects;
  window.fetchProject = fetchProject;
  window.createProject = createProject;
  window.updateProject = updateProject;
  window.deleteProject = deleteProject;
  window.icon = '<%= image_url("shareyourbuildLogo.png")  %>';

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
