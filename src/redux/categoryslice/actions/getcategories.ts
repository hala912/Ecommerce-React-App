import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3001/categories");
      // Transform img field to image
      const categories = response.data.map((category: any) => ({
        ...category,
        image: category.img,
      }));
      return categories;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export { getCategories };