import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, session } from "./actions/";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? (
        <div>
          <h3>User is Logged in</h3>
          <button onClick={() => dispatch(session())}>Logout</button>
        </div>
      ) : (
        <div>
          <h3>User is not Logged in</h3>
          <button onClick={() => dispatch(session())}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
