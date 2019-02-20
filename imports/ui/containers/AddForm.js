import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../../client/actions'

const AddForm = ({dispatch}) => {
  let input;

  return (
    <div>
      <form
        onSubmit
        ={e => {
        e.preventDefault()
        let text = input
          .value
          .trim();
        if (!text) {
          return
        }
        dispatch(addTodo(text));
        input.value = '';
      }}>
        <input
          placeholder="Type todo"
          ref={node => {
          input = node
        }}/>
        <button className="submit-button" type="submit">Add todo</button>
      </form>
    </div>
  )
}

export default connect(null)(AddForm);
