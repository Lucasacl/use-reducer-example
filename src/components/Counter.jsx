import { useReducer } from "react";
import { reducer } from "../reducers/reducer";

const Counter = () => {
    const initialValue = 0;
    const [state, dispatch] = useReducer (reducer, initialValue)
  const handleIncrement = () => {
    dispatch("INCREMENT");
  };
  const handleDecrement = () => {
    dispatch("DECREMENT");
  };
  return (
    <div>
        <h2>{state}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
