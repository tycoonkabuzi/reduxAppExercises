import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/todo";
import Table from "./components/Table";

function App() {
  // everything is in the store.

  //action this is an object of what we would like to do with the state : increments
  // reducers are function which define how the store change based on the action
  //dispatcher is a function that calls an action and passes it to the Redux.
  // selectors are functions that retrieve a specific part of the state from the store.
  return (
    <>
      <h1>Redux</h1>

      <Counter />

      <Todo />
      <Table />
    </>
  );
}

export default App;
