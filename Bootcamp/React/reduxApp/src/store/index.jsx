import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";
import rowsReducer from "./tableSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    table: rowsReducer,
  },
});
//
