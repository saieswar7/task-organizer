import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
const store = configureStore({
    reducer:{
        tasks:taskSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store