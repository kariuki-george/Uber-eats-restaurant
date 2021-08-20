import { login, logout, register } from "../../services/auth";
import { createSlice } from "@reduxjs/toolkit";

const userData = localStorage.getItem("user");

const initialState = userData
  ? { isLoggedIn: true, userData }
  : {
      isLoggedIn: false,
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: "",
      userData: {
        username: "",
        email: "",
      },
    };

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [login.rejected]: (state, { payload }) => {
      state.isError = true;
      state.errorMessage = payload;
      state.isFetching = false;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isSuccess = true;
      state.isFetching = false;
    },
    [login.pending]: (state, action) => {
      state.isFetching = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;

      state.errorMessage = payload;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.errorMessage = payload;
    },
    [register.pending]: (state) => {
      state.isFetching = true;
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { clearState } = userSlice.actions;
const user = userSlice.reducer;
export default user;
