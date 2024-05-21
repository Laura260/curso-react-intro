import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

function App() { //componente de react
  return (
    <React.Fragment>
      <TodoCounter completed={2} total={5}/>
      <TodoSearch/>

      <TodoList>
      <TodoItem/> 
      <TodoItem/>
      <TodoItem/>
      </TodoList>

      <CreateTodoButton/>
      
      </React.Fragment>
  );
}



export default App;
