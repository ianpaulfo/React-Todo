import React from 'react';
import styled from 'styled-components';

const TodoButton = styled.button`
background-color: black;
color: white;
border: 2px solid grey;
text-align: center;
`

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
    };
  }

  handleChanges = e => {
 
    this.setState({ task: e.target.value });
  };

  handleAddTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.task)
    this.setState({
      task: ''
  }
  )
  };



  render(props) {
    console.log("rendering form");
    return (
      <form noValidate autoComplete="off" onSubmit={this.handleAddTask}>
        <input
          type="text"
          name="task"
          value={this.state.addTask}
          onChange={this.handleChanges}
        />
        <TodoButton>Add Todo</TodoButton>
       
      </form>
    );
  }
}

export default TodoForm;