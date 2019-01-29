import { createStore, applyMiddleware } from "redux";
import  rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {
    todos: [
        { _id: 1, text: 'This is task 1' },
        { _id: 2, text: 'This is task 2' },
        { _id: 3, text: 'This is task 3' },
      ]
} 

export const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk));
