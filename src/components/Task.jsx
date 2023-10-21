import React from 'react';

function Task({ task, removeTask }) {
  return (
    <li>
      {task.description}
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;
