import { createSlice } from "@reduxjs/toolkit"
import { createFeed, getFeeds } from "./feed-comp";

const initialState = {
    feeds: [],
    isLoading: false,
    isSuccess: false,
    isSuccessCreate: false,
    isError: false,
    errorMessage: "",

  }
  
  const authSlice = createSlice({
    name: "feed",
   initialState,
   reducers:{
     clearState:(state, { payload}) => {
      state.isError = false;
      state.errorMessage = "";
     }
   },
    extraReducers: {
      [createFeed.pending]: (state, { payload }) => {
        state.isLoading = true;
      },
      [createFeed.fulfilled]: (state, { payload }) => {
        console.log("hey law")
        state.isError = false
        state.isLoading = false;
        state.isSuccessCreate = true;
      },
      [createFeed.rejected]: (state, { payload }) => {
        console.log('payload', payload);
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = payload;
      },
      
      
      [getFeeds.pending]: (state, { payload }) => {
        state.isLoading = true;
      },
      [getFeeds.fulfilled]: (state, { payload }) => {
        state.feeds = payload;
        state.isError = false
        state.isLoading = false;
        state.isSuccess = true;
        return state;
      },
      [getFeeds.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = payload;
      },
      
       
    }
    
  
  })
  
  
  export const userSelector = state => state.user
  export default authSlice;
  