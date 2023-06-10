import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchs",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { changeSearchTerm } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
