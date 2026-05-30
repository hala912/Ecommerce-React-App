import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions/getcategories";
import type { loadingState } from "@schemas/shared.ts";
import type { Categoryshared } from "@schemas/category.ts";
interface CategoryState {
   categories: Categoryshared[];
   loading: loadingState;
   error: string | null;
};

const initialState: CategoryState = {
    categories: [],
    loading: "idle",
    error: null,
}; 


const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.categories = action.payload;
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.error.message || "Failed to fetch categories";
        });
    }
     
});


export {getCategories};
export default categoriesSlice.reducer;