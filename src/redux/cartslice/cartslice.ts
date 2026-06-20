import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from  "../../redux"
import { productshared } from "@schemas/product";
import actGetProductsByItems from "./actions/getproductbyitem";

interface CartState {
    items: { [key: string]: number }; 
    productsinfo: productshared[];
    totalAmount: number;
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
}


const initialState: CartState = {
    items: {},
    productsinfo: [],
    totalAmount: 0,
    loading: "idle",
    error: null,
}; 


const cartSlice = createSlice({ 
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    cartItemChangeQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    cartItemRemove: (state, action: PayloadAction<number>) => {
      delete state.items[action.payload];
      state.productsinfo = state.productsinfo.filter(
        (el: productshared) => el.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(actGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    .addCase(actGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.error = null;
      state.productsinfo = action.payload;
    })
    .addCase(actGetProductsByItems.rejected, (state, action: PayloadAction<any>) => {
      state.loading = "failed";
      state.error = action.payload || "Failed to fetch products";
    });
  },
});

const getCartTotalQuantity = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    return totalQuantity;
  }
);

export const { addToCart, cartItemChangeQuantity, cartItemRemove } = cartSlice.actions;
export { getCartTotalQuantity };
export default cartSlice.reducer;