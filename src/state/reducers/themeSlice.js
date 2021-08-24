import { createSlice } from "@reduxjs/toolkit";
const theme = localStorage.getItem("theme");

const initialState = {
  theme: theme ? theme : ".light",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
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
