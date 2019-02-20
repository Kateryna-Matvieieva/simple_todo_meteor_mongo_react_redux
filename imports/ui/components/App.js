import React, { Component } from 'react';
import AddForm from '../containers/AddForm';
import VisibleTodos from '../containers/getVisibleTodos';
import Footer from '../containers/Footer';
import AccountsUIWrapper from '../AccountsUIWrapper.js/index.js.js.js';


class App extends Component { 
  render() {
    if(this.props.error)
    return <div>Error</div>
    
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <AccountsUIWrapper />
          <AddForm />  

        </header>
 
        <ul>
          <VisibleTodos />
        </ul>
        <Footer />
       </div>
    );
  }
}

export default App