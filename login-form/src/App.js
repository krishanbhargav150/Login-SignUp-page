import './App.css';
import AuthForm from './AuthForm';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice.ts'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Login Form</h1>
      <h2>Counter: {count}</h2>
      <button onClick = {() => dispatch(increment())}>Increase</button>
      <button onClick = {() => dispatch(decrement())}>Decrease</button>
      <AuthForm />

    </div>
  );
}

export default App;
