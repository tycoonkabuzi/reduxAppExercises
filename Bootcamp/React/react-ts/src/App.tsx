import "./App.css";
import Hello from "./components/Hello";

function App() {
  const age: number = 18;
  console.log(age);

  return (
    <>
      <Hello age={12} name="Tycoon" />
    </>
  );
}

export default App;
