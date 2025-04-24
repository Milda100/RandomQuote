import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./Slices/quoteSlice";

const store = configureStore({
    reducer: {
        quote: quoteReducer
    }
});

export default store;