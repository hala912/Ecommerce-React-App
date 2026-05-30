import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getproducts = createAsyncThunk(
  "products/getProducts",
  async (prefix: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3001/products?cat_prefix=${prefix}`);
      // Map title to name and price to number
      const products = response.data.map((product: any) => ({
        ...product,
        name: product.title,
        price: typeof product.price === "string" ? parseFloat(product.price) : product.price
      }));
      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
    },
);

export { getproducts };
