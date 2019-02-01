import { createStore, applyMiddleware } from "redux";
import  rootReducer from './reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {Meteor} from 'meteor/meteor';

import { Tracker } from 'meteor/tracker';
import { Tasks } from '../imports/api/tasks';
import { setTodos } from './actions';

const initialState = {
    todos: [],
    error: false,
    visibilityFilter: 'SHOW_ALL'
} 

export const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunkMiddleware));

Meteor.subscribe('tasks', function () {
            store.dispatch(setTodos(Tasks.find({}, {sort: {createdAt: 1}}).fetch()
            ));
        });
