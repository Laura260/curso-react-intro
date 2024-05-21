import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

const defaultTodos=[
  {text: 'banar a abrry', completed:true},
  {text: 'dar de comer a barry', completed:false},
  {text: 'pasear a perrito', completed:false},
];

function App() { //componente de react
  return (
    <React.Fragment>
      <TodoCounter completed={2} total={5}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo=>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}/>
        ))}
   
      </TodoList>

      <CreateTodoButton/>
      
      </React.Fragment>
  );
}



export default App;
