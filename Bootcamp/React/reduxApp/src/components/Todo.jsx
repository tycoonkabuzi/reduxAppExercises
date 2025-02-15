import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToTodo, modifyTodo, removeToTodo } from "../store/todoSlice";
import { useState } from "react";

const Todo = () => {
  const todoState = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const refInput = useRef();
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <h1>Todo</h1>
      <input ref={refInput} type="text" />
      <button onClick={() => dispatch(addToTodo(refInput.current.value))}>
        {clicked ? "Save" : "Add"}
      </button>
      <div>
        <h3> List of todos</h3>
        {todoState.map((theTodo) => (
          <div>
            <p>{theTodo.text}</p>{" "}
            <button onClick={() => dispatch(removeToTodo(theTodo.id))}>
              Remove
            </button>
            <button
              onClick={() => {
                setClicked(true);
                refInput.current?.focus();
                dispatch(modifyTodo(theTodo.id));
              }}
            >
              {clicked ? "Cancel" : "Edit"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
