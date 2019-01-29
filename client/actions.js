import {Tracker} from 'meteor/tracker';
import {Meteor} from 'meteor/meteor';

export const SET_TODOS  = 'SET_TODOS';
export const SET_ERROR = 'SET_ERROR';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

export function setTodos(todos) {
    return {
        type: SET_TODOS,
        payload: todos
    }
}
export function getError (error) {
    return {
        type: SET_ERROR,
        error
    }
}

export function addTodo(text) {
    return (dispatch) => {
        Tracker.autorun(() => {
           Meteor.call('tasks.insert', text, (error) => {
               if (!error) return;
               dispatch(getError(true))
           })
         })
       }
}

export function removeTodo(_id) {

}

export function toggleTodo(_id, completed) {
   
}
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
  