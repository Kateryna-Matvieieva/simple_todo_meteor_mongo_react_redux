import {
    SET_TODOS,
    SET_ERROR,
    SET_USER
} from './actions';
import { VisibilityFilters } from './actions';
import { combineReducers } from 'redux'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos (state=[], action) {
        switch(action.type) {
          case SET_TODOS:
          return  action.payload
  
          default:
            return state;
        }
      }
function error (state=false, action) {
        switch(action.type) {
          case SET_ERROR:
          return action.error
          default:
            return state;
        }
  }
function user (state='none', action) {
  switch(action.type){
    case SET_USER:
    return  action.payload
    default:
      return state;
  }
}
export default combineReducers({
        todos,
        error,
        user,
        visibilityFilter
      })