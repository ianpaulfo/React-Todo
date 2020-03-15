import React from 'react';


class TodoForm extends React.Component {
  // Constructor with state
  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ task: e.target.value });
  };

  // class property to submit form
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
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="task"
          value={this.state.addTask}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
        {/* <button onClick={props.clearCompleted}>
          Clear Completed
        </button> */}
      </form>
    );
  }
}

export default TodoForm;