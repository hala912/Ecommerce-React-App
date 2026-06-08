import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from  "../../redux"
import { productshared } from "@schemas/product";

interface CartState {
    items: { [key: number]: number };
    productsinfo: productshared[];
    totalAmount: number;
}


const initialState: CartState = {
    items: {},
    productsinfo: [],
    totalAmount: 0

}; 


const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  }
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

export const { addToCart } = cartSlice.actions;
export { getCartTotalQuantity };
export default cartSlice.reducer;