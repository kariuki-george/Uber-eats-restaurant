import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const register = createAsyncThunk(
  "restaurant/register",
  async (user, thunkAPI) => {
    try {
      const response = await Axios.post(
        process.env.REACT_APP_API_URL + "restaurant/register",
        user
      );

      if (response.data === "hello") {
        return "Account created Successfully";
      } else {
        const { email, username } = response.data;

        return (thunkAPI.rejectWithValue = `${
          email ? email : username
        } is already taken`);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Check your internet connection and try again"
      );
    }
  }
);

const login = createAsyncThunk("restaurant/login", async (user, thunkAPI) => {
  try {
    const response = await Axios.post(
      process.env.REACT_APP_API_URL + "restaurant/login",
      user
    );

    if (response.data === "Wrong email or password") {
      return thunkAPI.rejectWithValue("Wrong email or password");
    }
    if (response.data === "error") {
      return thunkAPI.rejectWithValue("Server error, try again");
    }
    if (response.data === "User not found") {
      return thunkAPI.rejectWithValue("User not found");
    } else {
      const { _id, email, username } = response.data;

      localStorage.setItem("user", { _id, email, username });

      return { _id, email, username };
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(
      "Check your internet connection and try again"
    );
  }
});

const logout = createAsyncThunk(
  "logout",
  async () => await localStorage.removeItem("user")
);

export { register, login, logout };
