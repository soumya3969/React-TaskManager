import React from 'react';
import Task from './Task';
import './TaskList.css'

function TaskList({ tasks, removeTask }) {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
