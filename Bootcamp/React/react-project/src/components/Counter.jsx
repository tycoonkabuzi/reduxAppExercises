import { useState, useEffect } from "react";
import "../Counter.css";
import Step from "./Step";
const Counter = () => {
  const [stepValue, setStepValue] = useState(0);
  const [count, setCount] = useState(0);

  const updateCounter = (action, stepValue) => {
    if (action == "add") {
      setCount(count + stepValue);
    } else if (action == "reInit") {
      setCount(Math.floor(Math.random() * 100));
    } else {
      setCount(0);
      setStepValue(0);
    }
  };
  return (
    <div className="counter">
      <p>
        Counter:<span className="counter-value">{count}</span>
      </p>
      <button onClick={() => updateCounter("add", stepValue)}>
        add {stepValue <= 0 ? "" : stepValue}
      </button>
      <button onClick={() => updateCounter("reInit", stepValue)}>ReInit</button>
      <button onClick={() => updateCounter("reset", stepValue)}>Reset</button>
      <Step stepValue={stepValue} setStepValue={setStepValue} />
    </div>
  );
};
export default Counter;
