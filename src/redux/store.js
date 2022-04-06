import { configureStore } from "@reduxjs/toolkit"

import authSlice from './auth/authSlice'

import feedSlice from './feed/feedSlice'




export default configureStore({
  reducer: {
    user: authSlice.reducer,
    feed: feedSlice.reducer

  },
})