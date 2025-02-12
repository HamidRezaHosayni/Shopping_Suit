import { configureStore } from "@reduxjs/toolkit";
import Login_slice from "./Login_Slice_redux";

const Counter_Slice1=configureStore({
    reducer:{
        is_Login:Login_slice.reducer
    }
})

export default Counter_Slice1;