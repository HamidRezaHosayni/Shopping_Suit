import { createSlice } from "@reduxjs/toolkit";

const Introduce_product = createSlice({
    name: "Introduce_product",
    initialState: {
        Introduce_product: [],
    },
    reducers: {
        Introduce_product: (state,action) => {
          state.Introduce_product=action.payload
        }
    }

})


export default Introduce_product;