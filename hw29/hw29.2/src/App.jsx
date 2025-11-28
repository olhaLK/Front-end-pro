import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { addTodo } from './store/store';


function App() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const count = todos.length;

  const handleAdd = () => {
    const todoText = value.trim();
    if (!todoText) return;
    dispatch(addTodo(todoText));
    setValue('');
  }


  return (
    <>
      <h2>To do list</h2>
      <div className='todo-input'>
        <input type='text' value={value} onChange={(event) => setValue(event.target.value)}/>
        <button type='button' onClick={handleAdd}>Add</button>
      </div>

      <div>
        <h3>Todos</h3>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>

      <div className='counter-wrapper'>Count: {count}</div>
    </>
  )
}

export default App;
