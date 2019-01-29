import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import { store } from './store'
import { Provider } from 'react-redux';
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
});
