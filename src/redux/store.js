// import { configureStore } from '@reduxjs/toolkit';

import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./reducers/authReducer";

const store = configureStore({
    reducer: {
        authenticationReducer
    }
})

export default store;