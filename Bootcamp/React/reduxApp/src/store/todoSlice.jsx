import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo", // the name of the slice.
  initialState: [{ id: 1, text: "Aller au boulot" }],
  reducers: {
    addToTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    removeToTodo: (state, action) => {
      return state.filter((toBeRemoved) => action.payload !== toBeRemoved.id);
    },

    modifyTodo: (state, action) => {
      //console.log(state.find((id) => id.id == action.payload).text);
      const index = state.findIndex(
        (task) => task.id === action.payload.todoId
      );
      state[index].text = action.payload.newContent;
      console.log(action.payload.newContent);
    },
  },
});
export const { addToTodo, removeToTodo, modifyTodo } = todoSlice.actions;
export default todoSlice.reducer;
