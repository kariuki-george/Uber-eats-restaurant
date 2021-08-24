import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
const url = process.env.REACT_APP_API_URL;

const getFood = createAsyncThunk("getFood", async (id, ThunkAPI) => {
  try {
    const response = await Axios.post(url + "restaurant/getFood", id);
    return response.data;
  } catch (e) {
    return ThunkAPI.rejectWithValue("Check your connection and try again");
  }
});

const updateFood = createAsyncThunk("updateFood", async (food, ThunkAPI) => {
  try {
    const response = await Axios.post(url + "restaurant/updateFood", food);
    return response.json;
  } catch (error) {
    return ThunkAPI.rejectWithValue("Check your connection and try again");
  }
});

const deleteFood = createAsyncThunk("deleteFood", async (id, ThunkAPI) => {
  try {
    const response = await Axios.post(url + "restaurant/deleteFood", { id });
    if (response.data) {
      return id;
    } else {
      return ThunkAPI.rejectWithValue("try again or refresh");
    }
    return id;
  } catch (error) {
    console.log(error);
    return ThunkAPI.rejectWithValue("Check your connection and try again");
  }
});

const addFood = createAsyncThunk("addFood", async (food, ThunkAPI) => {
  try {
    const response = await Axios.post(url + "restaurant/addFood", food);

    if (response.data === "error") {
      return ThunkAPI.rejectWithValue("Food already present");
    }
    const { price, name, _id } = response.data;
    return { price, name, _id };
  } catch (error) {
    return ThunkAPI.rejectWithValue("Check your connection and try again");
  }
});

export { getFood, updateFood, deleteFood, addFood };
