import { configureStore } from "@reduxjs/toolkit";
import usersInfoReducer from "./usersInfo";

const store = configureStore({
    reducer: {
        usersInfo: usersInfoReducer,
    },
});

export default store;