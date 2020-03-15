import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'


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

  toggleCompleted = id => {
    console.log("bk: Apps.js: App: toggleCompleted: taskId: ", id);

    this.setState({
      todoTasks: this.state.todoTasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  addTask = taskName => {

      const newTask = {
        task: taskName,
        id: Date.now(),
        completed: false
      };
      console.log("new task", newTask)
      this.setState({
        todoTasks: [...this.state.todoTasks, newTask]
      });
      console.log(this.state);
    };


  clearCompleted = () => {
    console.log("clear button pushed");
    this.setState({
      todoTasks: this.state.todoTasks.filter(task => !task.completed)
      })
    }
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoTasks={this.state.todoTasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
        <TodoForm addTask={this.addTask}/>
       
      </div>
    );
  }
}

export default App;

