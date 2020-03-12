import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const todoData = [
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



ReactDOM.render(<App />, document.getElementById('root'));
