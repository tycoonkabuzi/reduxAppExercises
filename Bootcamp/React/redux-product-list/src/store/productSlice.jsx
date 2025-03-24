import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Smartwatch", price: 250 },
    { id: 5, name: "Tablet", price: 600 },
    { id: 6, name: "Wireless Mouse", price: 50 },
    { id: 7, name: "Mechanical Keyboard", price: 100 },
    { id: 8, name: "Gaming Monitor", price: 400 },
    { id: 9, name: "External SSD", price: 200 },
    { id: 10, name: "Bluetooth Speaker", price: 120 },
  ],
  reducers: {
    addProduct: (state, action) => {
      return (state = [
        ...state,
        {
          id: Date.now(),
          name: action.payload.name,
          price: action.payload.price,
        },
      ]);
    },
    removeProduct: (state, action) => {
      return state.filter((state) => state.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
