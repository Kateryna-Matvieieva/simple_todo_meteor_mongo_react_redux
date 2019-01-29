import {connect} from 'react-redux';
import {removeTodo, toggleTodo} from '../../client/actions'
import TaskList from './TaskList';

import { VisibilityFilters } from '../../client/actions'

const getVisibleTodos = (todos, filter=VisibilityFilters.SHOW_ALL) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => {
    return {
      toggleChecked: ({_id, completed}) => {
          
          dispatch(toggleTodo(_id, completed ));
        },
      deleteThisTask: ( _id )=> {
          dispatch(removeTodo(_id));
        }
      }
    }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)