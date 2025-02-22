import { createSlice } from "@reduxjs/toolkit";

// مقدار اولیه را از localStorage بگیر
const initialState = {
  Introduce_product: typeof window !== "undefined" 
    ? JSON.parse(localStorage.getItem("introduse_product") || "[]") 
    : [],
};

const Introduce_product = createSlice({
    name: "Introduce_product",
    initialState,
    reducers: {
        Introduce_product: (state, action) => {
            state.Introduce_product = action.payload;
        }
    }
});

export default Introduce_product;
