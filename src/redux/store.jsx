import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import productslice from './productSlice'
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice,
        cart: cartSlice,
        product: productslice,
        auth: authSlice
    }
})

export default store;