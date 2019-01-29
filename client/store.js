import { createStore, applyMiddleware } from "redux";
import  rootReducer from './reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { Tracker } from 'meteor/tracker';
import { Tasks } from '../imports/api/tasks';
import { setTodos } from './actions';

const initialState = {
    todos: [
        { _id: 1, text: 'This is task 1' },
        { _id: 2, text: 'This is task 2' },
        { _id: 3, text: 'This is task 3' },
      ]
} 

export const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunkMiddleware));

Tracker.autorun(() => {
    store.dispatch(
        setTodos(Tasks.find().fetch())
    )
})
