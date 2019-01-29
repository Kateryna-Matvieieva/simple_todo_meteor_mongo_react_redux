import React, { Component } from 'react';
import VisibleTodos from './getVisibleTodos';
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
          <VisibleTodos />
        </ul>
       </div>
    );
  }
}

export default App
