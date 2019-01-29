import {Meteor} from 'meteor/meteor';
//import {Tasks} from '../imports/api/tasks'

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
// export function fetchAll() {
//     return function (dispatch) {
//         Meteor.subscribe('tasks', function () {
//             dispatch(setTodos(Tasks.find({}, {sort: {createdAt: 1}}).fetch()
//             ));
//         });
//     };
// }

export function getError (error) {
    return {
        type: SET_ERROR,
        error
    }
}

export function addTodo(text) {
    return (dispatch) => {
           Meteor.call('tasks.insert', text, (error) => {
               if (!error) return;
               dispatch(getError(true))
           })
       }
}

export function removeTodo(_id) {
    return (dispatch) => {
        Meteor.call('tasks.remove', _id, (error) => {
            if (!error) {
                return 
            };
            dispatch(getError(true))
        })
    }
}

export function toggleTodo(_id, completed) {
    return (dispatch) => {
        Meteor.call('tasks.setChecked', _id, completed, (error) => {
            if (!error) {
                return
            };
            dispatch(getError(true))
        })
    }
}

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
  