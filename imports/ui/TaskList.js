import React from 'react';
import Task from './Task';

export default TaskList = ({todos, error, showPrivateButton, toggleChecked, deleteThisTask}) => {
    if (error)
    return <div>Error</div>
    if (todos && todos.length>0)
    return todos.map((task) => (
      <Task key={task._id} task={task} _id={task._id} showPrivateButton={showPrivateButton} toggleChecked={toggleChecked} deleteThisTask={deleteThisTask}/>
    ));
    return <div>No todos</div>
    
    
  }




 