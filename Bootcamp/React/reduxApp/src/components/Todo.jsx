import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToTodo, modifyTodo, removeToTodo } from "../store/todoSlice";
import { useState } from "react";

const Todo = () => {
  const todoState = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const refInput = useRef();
  const [clicked, setClicked] = useState(false);
  const [tobeModified, setTobeModified] = useState();

  return (
    <div>
      <h1>Todo</h1>
      <input
        ref={refInput}
        value={tobeModified && tobeModified.newContent}
        type="text"
        onChange={(e) =>
          clicked === true
            ? setTobeModified((prev) => ({
                ...prev,
                newContent: e.target.value,
              }))
            : setTobeModified()
        }
      />
      <button
        onClick={() =>
          clicked === false
            ? (dispatch(addToTodo(refInput.current.value)),
              setTobeModified((prev) => ({ ...prev, newContent: "" })))
            : (dispatch(modifyTodo(tobeModified)),
              setClicked(!clicked),
              setTobeModified((prev) => ({ ...prev, newContent: "" })))
        }
      >
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
                setClicked(!clicked);
                refInput.current?.focus();

                setTobeModified({
                  todoId: theTodo.id,
                  newContent: theTodo.text,
                });
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
