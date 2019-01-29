import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
// import { store } from './store'
// import { Provider } from 'react-redux';
// import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(  <App />, document.getElementById('root'));
});
