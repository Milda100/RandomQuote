import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: "quote",
    initialState: { quote: "This is a movie quote!", author: "Unknown" },
    reducers: {
        setQuote(state, action) {
            state.quote = action.payload.quote;
            state.author = action.payload.author;
        }
    }
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;