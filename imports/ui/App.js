import React, { Component } from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import AddForm from './AddForm';

// App component - represents the whole app
class App extends Component { 
  render() {
    if(this.props.error)
    return <div>Error</div>
    
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <AddForm />  

        </header>
 
        <ul>
          {this.props.todos.map((task) => (
          <Task key={task._id} task={task} />
        ))}
        </ul>
       </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos
})
export default connect(mapStateToProps)(App)
