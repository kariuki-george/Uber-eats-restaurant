import { createSlice } from "@reduxjs/toolkit";
import { getFood, updateFood, deleteFood, addFood } from "../../services/menu";

const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  menu: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.errorMessage = "";

      return state;
    },
  },
  extraReducers: {
    [getFood.fulfilled]: (state, action) => {
      state.menu = action.payload;
      state.isFetching = false;
    },
    [getFood.pending]: (state) => {
      state.isFetching = true;
    },
    [getFood.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [updateFood.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.menu.filter((food) => food._id === action.payload._id);
      state.menu.push(action.payload);
    },
    [updateFood.pending]: (state) => {
      state.isFetching = true;
    },
    [updateFood.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [deleteFood.fulfilled]: (state, action) => {
      state.isFetching = false;

      state.menu.filter((food) => food._id !== action.payload);
    },
    [deleteFood.pending]: (state) => {
      state.isFetching = true;
    },
    [deleteFood.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [addFood.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.menu.push(action.payload);
    },
    [addFood.pending]: (state) => {
      state.isFetching = true;
    },
    [addFood.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { clearState } = menuSlice.actions;

export default menuSlice.reducer;
