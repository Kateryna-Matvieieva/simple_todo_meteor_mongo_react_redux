import React, { Component } from 'react';
import AddForm from './AddForm';
import VisibleTodos from './getVisibleTodos';
import Footer from './Footer';
import AccountsUIWrapper from './AccountsUIWrapper.js';
// import {connect} from 'react-redux';
// import { fetchAll } from '../../client/actions';
 
// App component - represents the whole app

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

// class App extends Component { 
//   componentDidMount() {
//     this.props.init
//   }
//   render() {
//     if(this.props.error)
//     return <div>Error</div>
    
//     return (
//       <div className="container">
//         <header>
//           <h1>Todo List</h1>


//         </header>
 
//         <ul>
//           {this.props.todos.map((task) => (
//           <li key={task._id}>{task.text}</li>
//         ))}
//         </ul>
//        </div>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   todos: state.todos
// })
// const mapDispatchToProps = (dispatch) => ({
//   init: dispatch(fetchAll())
// })
// export default connect(mapStateToProps, mapDispatchToProps)(App)
