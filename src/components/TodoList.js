
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const TodoToday = styled.div`
display: flex; 
flex-direction: row;
justify-content: space-between;
`
const TodoButton = styled.button`
background-color: black;
color: white;
border: 2px solid grey;
text-align: center;
`

const TodoList = props => {

        return (
    
           <TodoToday>
      
            {props.todoTasks.map(task => (
              <Todo
              key={task.id}
              task={task}
              toggleCompleted={props.toggleCompleted}
            /> 
            ))}
          <br>
          </br>
            <TodoButton className="clear-btn" onClick={props.clearCompleted}>
              Clear Completed
            </TodoButton>

          </TodoToday>
        );
      };

export default TodoList;