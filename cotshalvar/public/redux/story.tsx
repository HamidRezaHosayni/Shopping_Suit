import { configureStore } from "@reduxjs/toolkit";
import Login_slice from "./Login_Slice_redux";
import Introduce_product from "./introduse_product_heart";

const Counter_Slice=configureStore({
    reducer:{
        is_Login:Login_slice.reducer,
        Introduce_product:Introduce_product.reducer
    }
})

export default Counter_Slice;