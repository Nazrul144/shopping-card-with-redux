import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../redux/features/cartSlice"

const store = configureStore({
    reducer: {
        // Add your reducers here
        cart: sliceReducer
    }
})

export default store;