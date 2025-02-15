import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";
const Counter = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment())}>Incremeant</button>{" "}
      <button onClick={() => dispatch(decrement())}>Decrement</button>{" "}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
export default Counter;
