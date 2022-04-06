import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "./auth-comp";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    isAuth:false,
    isAdmin: false,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  }
  
  const authSlice = createSlice({
    name: "user",
   initialState,
   reducers:{
     clearState:(state, { payload}) => {
      state.isError = false;
      state.errorMessage = "";
     }
   },
    extraReducers: {
      [loginUser.pending]: (state, { payload }) => {
        state.isLoading = true;
      },
      [loginUser.fulfilled]: (state, { payload }) => {
        state.email = payload.email;
        state.firstName = payload.first_name;
        state.isAdmin = payload.isAdmin;
        state.isAuth = true;
        state.isError = false
        state.lastName = payload.last_name;
        state.isLoading = false;
        state.isSuccess = true;
        return state;
      },
      [loginUser.rejected]: (state, { payload }) => {
        console.log('payload', payload);
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = payload;
      },
      
       [registerUser.pending]: (state, { payload }) => {
        state.isLoading = true;
      },
      [registerUser.fulfilled]: (state, { payload }) => {
        state.email = payload.email;
        state.firstName = payload.first_name;
        state.isAdmin = payload.isAdmin;
        state.isAuth = true;
        state.isError = false
        state.lastName = payload.last_name;
        state.isLoading = false;
        state.isSuccess = true;
        return state;
      },
      [registerUser.rejected]: (state, { payload }) => {
        console.log('payload', payload);
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = payload;
      }
    }
    
  
  })
  
  export default authSlice;
  
  export const userSelector = state => state.user
  