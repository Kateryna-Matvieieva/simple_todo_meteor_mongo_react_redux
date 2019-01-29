import React, { Component } from 'react';

// App component - represents the whole app
export default class App extends Component { 
  render() {
    if(this.props.error)
    return <div>Error</div>
    
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>


        </header>
 
        <ul>

        </ul>
       </div>
    );
  }
}


