// import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // Access State
  const count = useSelector((state) => state.count);

  // Dispatch Actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default App;
