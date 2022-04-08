import { createSlice } from "@reduxjs/toolkit"
import { createFeed, getFeeds, createComment, getComments } from "./feed-comp";

const initialState = {
    feeds: [],
    commentsdata: [],
    isLoading: false,
    isSuccess: false,
    isSuccessCreate: false,
    isLoadingC: false,
    isLoadingGC: false,
    isSuccessCreateComment: false,
    comment: null,
    isError: false,
    isErrorCG: false,
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
      
      [createComment.pending]: (state, { payload }) => {
        state.isLoadingC = true;
      },
      [createComment.fulfilled]: (state, { payload }) => {
        console.log("comment")
        state.isError = false
        state.isLoadingC = false;
        state.isSuccessCreateComment = true;
      },
      [createComment.rejected]: (state, { payload }) => {
        console.log('payload', payload);
        state.isLoadingC = false;
        state.isSuccessCreateComment = false;
        state.isError = true;
        state.errorMessage = payload;
      },
      
      
      [getComments.pending]: (state, { payload }) => {
        state.isLoadingGC = true;
      },
      [getComments.fulfilled]: (state, { payload }) => {
        console.log(payload)
        state.comments = payload;
        state.isErrorCG = false
        state.isLoadingGC = false;
        state.isSuccess = true;
        return state;
      },
      [getComments.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.isErrorGC = true;
        state.errorMessage = payload;
      },
      
       
    }
    
  
  })
  
  
  export const userSelector = state => state.user
  export default authSlice;
  