import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocationCards = createAsyncThunk(
  "pizzas/fetchLocationCards",
  async () => {
    const res = await axios.get(
      `https://629703cc14e756fe3b26fb80.mockapi.io/Location`
    );
    return res.data;
  }
);

export const deleteLocationCard = createAsyncThunk(
  "pizzas/deleteLocationCard",
  async (cardName) => {
    console.log(cardName);
    const res = await axios.delete(
      `https://629703cc14e756fe3b26fb80.mockapi.io/Location/${cardName}`
    );
    return res.data;
  }
);

export const postLocationCard = createAsyncThunk(
  "pizzas/postLocationCard",
  async (values) => {
    console.log(values);
    const res = await axios.post(
      `https://629703cc14e756fe3b26fb80.mockapi.io/Location/`, values
    );
    return res.data;
  }
);

const initialState = {
  LocationCards: [],
  status: "update", 
};

export const locationsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: {
    [fetchLocationCards.pending]: (state) => {
      state.status = "loading";
      state.LocationCards = [];
    },
    [fetchLocationCards.fulfilled]: (state, action) => {
      if (action.payload.length) {
        state.LocationCards = action.payload;
        state.status = "success";
      } else {
        state.status = "error";
      }
    },
    [fetchLocationCards.rejected]: (state) => {
      state.status = "error";
      state.LocationCards = [];
    },

    [deleteLocationCard.pending]: (state) => {
      state.status = "removing";
    },
    [deleteLocationCard.fulfilled]: (state, action) => {
      state.status = "update";
    },
    [deleteLocationCard.rejected]: (state) => {
      state.status = "error";
    },

    [postLocationCard.pending]: (state) => {
      state.status = "posting";
    },
    [postLocationCard.fulfilled]: (state, action) => {
      state.status = "update";
    },
    [postLocationCard.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { increment } = locationsSlice.actions;

export default locationsSlice.reducer;
