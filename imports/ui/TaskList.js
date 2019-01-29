import React from 'react';
import Task from './Task';

export default TaskList = ({todos, toggleChecked, deleteThisTask}) => {
    if (todos && todos.length>0)
    return todos.map((task) => (
      <Task key={task._id} task={task} _id={task._id} toggleChecked={toggleChecked} deleteThisTask={deleteThisTask}/>
    ));
    return <div>No todos</div>
    
    
  }




 