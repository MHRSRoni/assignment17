import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todoSlice";

export default configureStore({
    reducer : {
        todo : todoReducer
    }
})