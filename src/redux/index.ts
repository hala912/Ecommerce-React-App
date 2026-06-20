import {configureStore, combineReducers} from "@reduxjs/toolkit";
import categoriesReducer from "./categoryslice/categoriesslice";
import productsReducer from "./productslice/productslice";
import cartSlice from "./cartslice/cartslice";
import {persistStore, persistReducer} from "redux-persist";
// ✅ Add this instead of the import
const storage = {
    getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key: string, value: string) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key: string) => Promise.resolve(localStorage.removeItem(key)),
};
const persistConfig = {
    key: "root",
    storage, 
    whitelist: ["cart"]
};

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
export {store, persistor};