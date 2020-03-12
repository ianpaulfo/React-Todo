import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
    };
  }


  render(props) {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleAddTask}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="task"
          value={this.state.taskName}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;