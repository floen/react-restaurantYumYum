import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";
import { apiSlice } from "../api/apiSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        api: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;