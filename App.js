import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

function App() { //componente de react
  return (
    <div className="App">
      <TodoCounter completed={2} total={5}/>
      <TodoSearch/>

      <TodoList>
      <TodoItem/> 
      <TodoItem/>
      <TodoItem/>
      </TodoList>

      <CreateTodoButton/>
      
    </div>
  );
}



export default App;
