import {configureStore} from "@reduxjs/toolkit";
import categoriesReducer from "./categoryslice/categoriesslice";
import productsReducer from "./productslice/productslice";
import cartSlice from "./cartslice/cartslice";

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
       cart: cartSlice
    },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;