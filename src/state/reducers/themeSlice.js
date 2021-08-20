import { createSlice } from "@reduxjs/toolkit";
const theme = localStorage.getItem("theme");

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: theme ? theme : ".light",
  },
  reducers: {
    setDark: (state) => {
      state.theme = ".dark";
    },
    setLight: (state) => {
      state.theme = ".light";
    },
  },
});

export const { setDark, setLight } = themeSlice.actions;
export default themeSlice.reducer;
