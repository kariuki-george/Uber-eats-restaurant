import { combineReducers } from "@reduxjs/toolkit";
import user from "./authSlice";
import theme from "./themeSlice";

export default combineReducers({
  user,
  theme,
});
