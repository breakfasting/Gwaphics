import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
// import * as designActions from './actions/design_actions';
// import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
      ui: { mode: 'browse' },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.requestOwnedDesigns = designActions.requestOwnedDesigns;
  // window.requestTemplates = designActions.requestTemplates;
  // window.requestDesign = designActions.requestDesign;
  // window.createDesign = designActions.createDesign;
  // window.updateDesign = designActions.updateDesign;
  // window.deleteDesign = designActions.deleteDesign;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
