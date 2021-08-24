import { combineReducers } from "@reduxjs/toolkit";
import user from "./authSlice";
import theme from "./themeSlice";
import menu from "./menuSlice";

export default combineReducers({
  user,
  theme,
  menu,
});
