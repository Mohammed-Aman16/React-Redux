import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Redux/Slice.js"

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})