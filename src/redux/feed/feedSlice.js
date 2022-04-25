import { createSlice } from "@reduxjs/toolkit"
import { createFeed, getFeeds, createComment, getComments, likePost, getLikeCount, deletecomment } from "./feed-comp";

const initialState = {
    feeds: [],
    commentsdata:null,
    isLoading: false,
    isSuccess: false,
    likeCount: null,
    unLikeCount: null,
    isikedByUser: false,
    isSuccessCreate: false,
    isLoadingC: false,
    isLoadingGC: false,
    isSuccessCreateComment: false,
    comment: null,
    isError: false,
    isErrorCG: false,
    errorMessage: "",
    isDeleted: true,
    successMessage: "",


  }
  
  const authSlice = createSlice({
    name: "feed",
   initialState,
   reducers:{
     clearState:(state, { payload}) => {
      state.isError = false;
      state.errorMessage = "";
     },
     
     clearDeletedState:(state, { payload}) => {
      state.isDeleted = false;
      state.errorMessage = "";
      state.successMessage = "";

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
        console.log(payload)
        state.feeds = payload;
        state.isError = false;
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
        console.log(payload)
        state.isError = false;
        state.commentsdata = payload;
        state.isLoadingC = false;
        state.isSuccessCreateComment = false;
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
        state.commentsdata = payload;
        state.isLoadingGC = false;
        return state;
      },
      
      [getComments.rejected]: (state, { payload }) => {
        console.log('payload', payload);
        state.commentsdata = null;
        state.isLoadingGC = false;    
      },
      
      [deletecomment.fulfilled]: (state, { payload }) => {
        state.isDeleted = true;
        state.commentsdata = payload.feed;
        state.successMessage = payload.msg
        return state;
      },
      
      [deletecomment.rejected]: (state, { payload }) => {
        state.isError = true;
        state.errorMessage = payload;
        return state;
      },
      
      [likePost.fulfilled]: (state, { payload }) => {
        console.log(payload)
        state.likeCount = payload.feed;
        state.unLikeCount = payload.feed;
        return state
      },
      [likePost.rejected]: (state, { payload }) => {
        // state.isError = true;
        // state.errorMessage = payload;
      },
      
      
      [getLikeCount.fulfilled]: (state, { payload }) => {
        console.log(payload)
        state.likeCount = payload.likeCount;
        state.isLikedByUser = payload.isLikedByUser;
        return state;
      },
      [getLikeCount.rejected]: (state, { payload }) => {
        return state;

      },
       
    } 
  
  })
  
  export const userSelector = state => state.user
  export default authSlice;
  