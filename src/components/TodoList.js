// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import todoTasks from './TasksArray'

const TodoList = props => {

        return (
    
           <div>
      
            {props.todoTasks.map(task => (
              <Todo
              key={task.id}
              name={task}
              toggleCompleted={props.toggleCompleted}
            /> 
            ))}


          </div>
        );
      };

export default TodoList;