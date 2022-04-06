import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseurl = "https://opengovapi.herokuapp.com/api/v1";
const token = localStorage.token;
const config = {
  headers: {
    Accept: "application/json",
    "content-type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
};

export const createFeed = createAsyncThunk(
  "users/createfeed",
  async ({ feed_title, feed_description, tag, feed_media }, thunkAPI) => {
    try {
      console.log("sjjksjks");
      const response = await fetch(baseurl + "/feed", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",

          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          feed_title,
          feed_description,
          feed_media,
          tag,
        }),
      });
      let data = await response.json();
      console.log("response", data.newFeed);
      if (data.success) {
        return data.newFeed;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);




export const getFeeds = createAsyncThunk(
  "users/getfeeds",
  async ( thunkAPI) => {
    try {
      const response = await fetch(baseurl + "/feed", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
  
      });
      let data = await response.json();
      console.log("response", data);
      if (response.status === 200) {
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

