import { configureStore } from "@reduxjs/toolkit";
import dashboardApiSlice from "./features/api/dashboardApiSlice";


const store = configureStore({
    reducer: {
        [dashboardApiSlice.reducerPath]: dashboardApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dashboardApiSlice.middleware)
})

export default store;