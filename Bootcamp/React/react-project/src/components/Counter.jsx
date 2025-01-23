import "../Counter.css";
const Counter = () => {
  const counter = Math.floor(Math.random() * 100);
  return (
    <div className="counter">
      <p>Counter:{counter}</p>
      <button>Add</button>
    </div>
  );
};
export default Counter;
