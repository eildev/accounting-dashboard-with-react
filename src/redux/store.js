import { configureStore } from "@reduxjs/toolkit";
import dashboardApiSlice from "./features/api/dashboardApiSlice";
import simpleApiSlice from "./features/api/simpleApiSlice";


const store = configureStore({
    reducer: {
        [dashboardApiSlice.reducerPath]: dashboardApiSlice.reducer,
        [simpleApiSlice.reducerPath]: simpleApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dashboardApiSlice.middleware).concat(simpleApiSlice.middleware)
})

export default store;