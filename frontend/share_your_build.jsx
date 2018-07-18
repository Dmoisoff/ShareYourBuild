import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchProjects, fetchProject, createProject, updateProject, deleteProject} from './actions/projects_actions';
import { fetchInstructions, createInstruction, updateInstruction, deleteInstruction } from './util/instruction_api_util';



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
  window.fetchInstructions = fetchInstructions;
  window.createInstruction = createInstruction;
  window.updateInstruction = updateInstruction;
  window.deleteInstruction = deleteInstruction;
  window.icon = '<%= image_url("shareyourbuildLogo.png")  %>';

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
