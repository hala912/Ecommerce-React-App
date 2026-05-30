import { createSlice } from "@reduxjs/toolkit";
import { getproducts } from "./actions/getproducts";


interface ProductState {
    products: { id: number; name: string; price: number; img: string }[];
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
}


const initialState: ProductState = {
    products: [],
    loading: "idle",
    error: null,
};


const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
        extraReducers: (builder) => {
        builder.addCase(getproducts.pending, (state) => {
             state.loading = "pending";
             state.error = null;
        });
        builder.addCase(getproducts.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.products = action.payload;
         });
         builder.addCase(getproducts.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.error.message || "Failed to fetch products";
         });
        }
});

export default productSlice.reducer;
export { getproducts };