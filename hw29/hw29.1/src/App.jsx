import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/store';


function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        Value: {count}
      </div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default App
