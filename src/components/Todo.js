import React from "react";

const Todo = props => {
  return (
    <div
      className={`task${props.name.completed ? " completed" : ""}`}
      onClick={e => props.toggleCompleted(props.task.id)}
    >
      <p>{props.name.task}</p>
    </div>
  );
};

export default Todo;