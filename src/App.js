import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// import todoTasks from './components/TasksArray'

const todoTasks = [
  {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoTasks
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleCompleted = taskId => {
    console.log("bk: Apps.js: App: toggleCompleted: taskId: ", taskId);

    // this.setState({
    //   todoTasks: this.state.todoTasks.map(task => {
    //     if (task.id === taskId) {
    //       return {
    //         ...task,
    //         completed: !task.completed
    //       };
    //     }
    //     return task;
    //   })
    // });
  };

  addTask = taskName => {
    this.setState({
      todoTasks: [
        ...this.state.todoTasks,
        {
          task: taskName,
          completed: false,
          id: Date.now(),
        }
      ]
    });
  };

  clearCompleted = () => {
    console.log("bk: index.js: App: clearCompleted");
    this.setState({
      todoTasks: this.state.todoTasks.filter(task => {
        return !task.completed;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoTasks={this.state.todoTasks}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm />
      </div>
    );
  }
}

export default App;

