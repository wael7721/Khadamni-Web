import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginData: {},
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
});

export default loginSlice.reducer;