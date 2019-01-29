import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Task extends Component {
 
  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = this.props.task.checked ? 'checked' : '';
    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.props.deleteThisTask.bind(null, this.props._id)}>
          &times;
        </button>
 
        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.completed}
          onClick={this.props.toggleChecked.bind(null, { _id: this.props._id, completed: !this.props.task.completed})}
        />
 
        <span className="text">{this.props.task.text} (user: {this.props.task.username})</span>
      </li>
    );
  }
}



