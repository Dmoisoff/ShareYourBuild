import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchProjects, fetchProject, createProject, updateProject, deleteProject, fetchProjectsByUser} from './actions/projects_actions';
import { fetchInstruction, createInstruction, updateInstruction, deleteInstruction } from './actions/instructions_actions';



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
  window.fetchProject = fetchProject;
  window.fetchInstruction = fetchInstruction;
  window.createInstruction = createInstruction;
  window.updateInstruction = updateInstruction;
  window.deleteInstruction = deleteInstruction;
  window.fetchProjectsByUser = fetchProjectsByUser;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
