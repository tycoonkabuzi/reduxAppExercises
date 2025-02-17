import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    rows: [
      { id: Date.now() + 1, name: "John", lastName: "Does" },
      { id: Date.now() + 2, name: "Jane", lastName: "Smith" },
      { id: Date.now() + 3, name: "Alice", lastName: "Brown" },
      { id: Date.now() + 4, name: "Bob", lastName: "Wilson" },
      { id: Date.now() + 5, name: "Charlie", lastName: "Taylor" },
    ],
    selectedRowIds: [],
  },
  reducers: {
    addRow: (state, action) => {
      const newRow = {
        id: Date.now(),
        name: action.payload.name,
        lastName: action.payload.lastName,
      };
      state.rows.push(newRow);
    },
    selectRow: (state, action) => {
      const id = action.payload;
      if (state.selectedRowIds.includes(id)) {
        state.selectedRowIds = state.selectedRowIds.filter(
          (rowId) => rowId !== id
        );
      } else {
        state.selectedRowIds.push(id);
      }
    },

    selectAllRows: (state, action) => {
      if (action.payload) {
        state.selectedRowIds = state.rows.map((row) => row.id);
      } else {
        state.selectedRowIds = [];
      }
    },
  },
});

export const { addRow, selectRow, selectAllRows } = tableSlice.actions;
export default tableSlice.reducer;
