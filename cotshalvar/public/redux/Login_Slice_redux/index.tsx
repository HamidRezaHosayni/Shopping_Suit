import { createSlice } from "@reduxjs/toolkit";

const Login_slice = createSlice({
    name: "Loging_Slice",
    initialState: {
        is_Login: false,
        Token_Login: null,
    },
    reducers: {
        is_Login: (state, action) => {
            if (action.payload === null) {
                state.is_Login = false,
                    state.Token_Login = null
            } else {
                state.Token_Login = action.payload;
                state.is_Login = true;
            }
        }
    }

})


export default Login_slice;